'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { fetchPackagesAndLikes, fetchPackagesAndLikesShorts, fetchRandomReels, likeReel } from '@/lib/api';
import VideoPlayer from '@/components/reels/VideoPlayer';
import VipMissionArea from './VipMissionArea';
import { useSearchParams, useRouter } from 'next/navigation';
import { useInfoModal } from '@/context/InfoModalContext';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import LinkInstagramPopup from '../popups/LinkInstagramPopup';
import CommentsPopup from './CommentsPopup';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface Reel {
  _id: string;
  influencer: any;
  likes: number;
  comments: number;
  shares: number;
  headline: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  hashtags: string;
  isLiked: boolean;
  muxPlaybackId: string;
  collect_count: string;
}

interface Package {
  _id: string;
  packageName: string;
  dailyViews: number;
  earningsPerView: number;

}

interface UserPackage {
  package: Package;
  likesToday: number;
  earningsToday: number;
  totalEarnings: number;
  purchaseId: string;
  isExpired: boolean;
}

interface PackageData {
  earnedMoney: number;
  likesToday: number;
  dailyLimit: number;
  selectedPackage: UserPackage | null;
  allPackages: Package[];
  userPackagesWithLikes: UserPackage[];
  instagramLinked: boolean;
}

interface ReelsMetadata {
  totalReels: number;
  returnedReels: number;
  reachedLimit: boolean;
  remainingReels: number;
  timestamp: string;
}

export default function ReelsList(): JSX.Element {
  const { t } = useTranslation();

  const [videos, setVideos] = useState<Reel[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reelsMetadata, setReelsMetadata] = useState<ReelsMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [packageData, setPackageData] = useState<PackageData>({
    earnedMoney: 0,
    likesToday: 0,
    dailyLimit: 0,
    selectedPackage: null,
    allPackages: [],
    userPackagesWithLikes: [],
    instagramLinked: false
  });

  const packageDataRef = useRef<PackageData>({
    earnedMoney: 0,
    likesToday: 0,
    dailyLimit: 0,
    selectedPackage: null,
    allPackages: [],
    userPackagesWithLikes: [],
    instagramLinked: false
  });

  // Sync `packageDataRef` with the latest `packageData`
  useEffect(() => {
    packageDataRef.current = packageData;
  }, [packageData]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);
  const shownVideoIdsRef = useRef<Set<string>>(new Set());
  const initialLoadDoneRef = useRef(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const packageId = searchParams.get('pkg-sn') || '';
  const { setInfoText } = useInfoModal();

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  const handleLinkNow = () => {
    // Handle the link now action
    console.log('Linking Instagram account...')
    closePopup()
  }

  const loadMoreReels = useCallback(async (isInitial: boolean = false): Promise<void> => {
    if (loadingRef.current || (reelsMetadata && reelsMetadata.reachedLimit)) return;

    try {
      loadingRef.current = true;
      setLoading(true);

      const response = await fetchRandomReels(
        4,
        Array.from(shownVideoIdsRef.current)
      );

      if (response.reels?.length > 0) {
        const newReels = response.reels.filter((reel: Reel) => !shownVideoIdsRef.current.has(reel._id));
        newReels.forEach((reel: Reel) => {
          shownVideoIdsRef.current.add(reel._id);
          // Ensure isLiked is set (default to false if not provided)
          reel.isLiked = reel.isLiked ?? false;
        });

        setVideos(prevVideos => isInitial ? newReels : [...prevVideos, ...newReels]);
      }

      setReelsMetadata(response.metadata);

      if (response.metadata?.reachedLimit) {
        console.log('Reached the limit of available reels.');
      }
    } catch (error) {
      console.error('Failed to fetch reels:', error);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [reelsMetadata]);

  const initializePackages = useCallback(async (): Promise<void> => {
    if (initialLoadDoneRef.current) return;
    setIsLoading(true);
    try {
      const { allPackages, userPackagesWithLikes, instagramLinked } = await fetchPackagesAndLikesShorts();

      const selectedUserPackage = packageId ?
        userPackagesWithLikes.find((pkg: UserPackage) => pkg.package._id === packageId) :
        null;

      setPackageData({
        allPackages,
        userPackagesWithLikes,
        selectedPackage: selectedUserPackage,
        earnedMoney: selectedUserPackage?.earningsToday || 0,
        likesToday: selectedUserPackage?.likesToday || 0,
        dailyLimit: selectedUserPackage?.package?.dailyViews || 0,
        instagramLinked
      });

      await loadMoreReels(true);
      initialLoadDoneRef.current = true;
      console.log('hiii')
    } catch (error) {
      console.error('Failed to initialize packages:', error);
    } finally {
      setIsLoading(false);
    }
  }, [packageId, loadMoreReels]);


  const handleScroll = useCallback((): void => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || loading) return;

    const { scrollTop, clientHeight, scrollHeight } = scrollContainer;
    const newIndex = Math.floor(scrollTop / clientHeight);

    setCurrentVideoIndex(newIndex);

    // Load more when user is 2 videos away from the end
    if (scrollHeight - scrollTop - clientHeight < clientHeight * 3 && !reelsMetadata?.reachedLimit) {
      loadMoreReels();
    }
  }, [loading, loadMoreReels, reelsMetadata]);

  useEffect(() => {
    initializePackages();
  }, [initializePackages]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const throttledScroll = throttle(handleScroll, 150);
    scrollContainer.addEventListener('scroll', throttledScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);


  const handleLike = async (video: Reel): Promise<void> => {
    const { selectedPackage, likesToday, dailyLimit } = packageDataRef.current;
    const currentVideoIndex = videos.findIndex(v => v._id === video._id);
    console.log(currentVideoIndex)
    if (!selectedPackage) {
      setInfoText(t('reels.errors.selectValidPackage'));
      return;
    }

    if (likesToday >= dailyLimit) {
      setInfoText(t('reels.errors.dailyLimitReached'));
      return;
    }

    if (!video) return;

    let isAlreadyLiked = false;

    setVideos(prevVideos => {
      const currentVideo = prevVideos.find(v => v._id === video._id);
      if (currentVideo?.isLiked) {
        isAlreadyLiked = true; // Set our flag
        setInfoText(t('reels.errors.alreadyLiked'));
        return prevVideos;
      }

      return prevVideos.map(v =>
        v._id === video._id
          ? { ...v, isLiked: true, likes: v.likes + 1 }
          : v
      );
    });

    console.log(isAlreadyLiked)
    // If it was already liked, stop here
    if (isAlreadyLiked) {
      return;
    }

    const newLikesToday = likesToday + 1;
    const newEarnedMoney = packageDataRef.current.earnedMoney + (selectedPackage.package.earningsPerView || 0);

    // Update packageData state
    setPackageData(prev => {
      if (!prev.selectedPackage) {
        return prev;
      }

      const updatedSelectedPackage: UserPackage = {
        ...prev.selectedPackage!,
        likesToday: newLikesToday,
        earningsToday: newEarnedMoney,
        // Ensure all required properties are included
        package: prev.selectedPackage!.package,
        totalEarnings: prev.selectedPackage!.totalEarnings,
        purchaseId: prev.selectedPackage!.purchaseId,
        isExpired: prev.selectedPackage!.isExpired,
      };

      const updatedUserPackagesWithLikes = prev.userPackagesWithLikes.map(pkg => {
        if (pkg.package._id === prev.selectedPackage!.package._id) {
          return {
            ...pkg,
            likesToday: newLikesToday,
            earningsToday: newEarnedMoney,
            // Ensure all required properties are included
            package: pkg.package,
            totalEarnings: pkg.totalEarnings,
            purchaseId: pkg.purchaseId,
            isExpired: pkg.isExpired,
          } as UserPackage;
        } else {
          return pkg;
        }
      });

      return {
        ...prev,
        likesToday: newLikesToday,
        earnedMoney: newEarnedMoney,
        selectedPackage: updatedSelectedPackage,
        userPackagesWithLikes: updatedUserPackagesWithLikes
      };
    });

    // Update packageDataRef
    packageDataRef.current = {
      ...packageDataRef.current,
      likesToday: newLikesToday,
      earnedMoney: newEarnedMoney,
      selectedPackage: {
        ...packageDataRef.current.selectedPackage!,
        likesToday: newLikesToday,
        earningsToday: newEarnedMoney,
        // Ensure all required properties are included
        package: packageDataRef.current.selectedPackage!.package,
        totalEarnings: packageDataRef.current.selectedPackage!.totalEarnings,
        purchaseId: packageDataRef.current.selectedPackage!.purchaseId,
        isExpired: packageDataRef.current.selectedPackage!.isExpired,
      },
      userPackagesWithLikes: packageDataRef.current.userPackagesWithLikes.map(pkg => {
        if (pkg.package._id === packageDataRef.current.selectedPackage!.package._id) {
          return {
            ...pkg,
            likesToday: newLikesToday,
            earningsToday: newEarnedMoney,
            // Ensure all required properties are included
            package: pkg.package,
            totalEarnings: pkg.totalEarnings,
            purchaseId: pkg.purchaseId,
            isExpired: pkg.isExpired,
          } as UserPackage;
        } else {
          return pkg;
        }
      })
    };

    try {
      await likeReel(video._id, selectedPackage.package._id);
    } catch (error) {
      console.error('Failed to like video:', error);
    }
  };



  const handleMissionChange = useCallback((pkgId: string): void => {
    const selectedUserPackage = packageDataRef.current.userPackagesWithLikes.find(
      (pkg: UserPackage) => pkg.package.packageName === pkgId
    );

    if (!selectedUserPackage) {
      setInfoText(t('reels.errors.notPurchased'));
      return;
    }

    if (selectedUserPackage.isExpired) {
      setInfoText(t('reels.errors.packageExpired'));
      return;
    }

    setPackageData(prev => ({
      ...prev,
      selectedPackage: selectedUserPackage,
      likesToday: selectedUserPackage.likesToday,
      dailyLimit: selectedUserPackage.package.dailyViews,
      earnedMoney: selectedUserPackage.earningsToday || 0
    }));

    packageDataRef.current = {
      ...packageDataRef.current,
      selectedPackage: selectedUserPackage,
      likesToday: selectedUserPackage.likesToday,
      dailyLimit: selectedUserPackage.package.dailyViews,
      earnedMoney: selectedUserPackage.earningsToday || 0
    };

    router.replace(`/sshorts?p=${selectedUserPackage.package._id}`);
  }, [router, packageData.userPackagesWithLikes]);

  return (
    <>
      <VipMissionArea
        title={`${packageDataRef.current.selectedPackage?.package?.packageName || 'VIP1'} ${t('reels.missionAreaLabel')} (${packageDataRef.current.likesToday}/${packageDataRef.current.dailyLimit})`}
        earnedMoney={packageDataRef.current.earnedMoney}
        allPackages={packageDataRef.current.allPackages}
        purchasedPackages={packageDataRef.current.userPackagesWithLikes}
        onMissionChange={handleMissionChange}
        selectedMission={`${packageDataRef.current.selectedPackage?.package?.packageName || 'VIP1'} ${t('reels.missionAreaLabel')} (${packageDataRef.current.likesToday}/${packageDataRef.current.dailyLimit})`}
      />
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory"
        onScroll={handleScroll}
      >
        {videos.map((video, index) => (
          <div
            key={`${video._id}-${index}`}
            className="w-full snap-start h-[calc(100dvh-64px)]"
          >
            <VideoPlayer
              video={video}
              isCurrentVideo={index === currentVideoIndex}
              onLike={() => handleLike(video)}
            />
          </div>
        ))}
        {loading && (
          <div className="text-center py-4 text-white bg-black/50 backdrop-blur-sm">
            {/* {t('reels.loading')} */}
          </div>
        )}
        {reelsMetadata?.reachedLimit && (
          <div className="text-center py-4 text-white bg-black/50 backdrop-blur-sm">
            {t('reels.allSeen')}
          </div>
        )}
      </div>

      {isLoading &&
        <DefaultLoading />}

      
    </>
  );
}

// Utility function for throttling
function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}