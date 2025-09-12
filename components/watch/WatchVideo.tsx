'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { fetchPackagesAndLikes, fetchRandomReels, likeReel } from '@/lib/api';
import { useSearchParams, useRouter } from 'next/navigation';
import { useInfoModal } from '@/context/InfoModalContext';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import LinkInstagramPopup from '../popups/LinkInstagramPopup';
import VipMissionArea from './VipMissionArea';
import VideoPlayer from './VideoPlayer';
import MoreVideos from './MoreVideos';
import AnimationPage from '../AnimationPage';
import { useLoading } from '@/context/LoadingContext';

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

interface WatchVideoProps {
    isExplore?: boolean; 
}


export default function WatchVideo({
    isExplore
}:WatchVideoProps): JSX.Element {
    const { t } = useTranslation();

    const [videos, setVideos] = useState<Reel[]>([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [reelsMetadata, setReelsMetadata] = useState<ReelsMetadata | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [subscribed, setSubscribed] = useState('');
    const { setGlobalLoading } = useLoading();


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
    const packageId = searchParams.get('p') || '';
    const videoId = searchParams.get('v') || '';
    const source = searchParams.get('source') || '';
    const { setInfoText } = useInfoModal();

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPopup = () => setIsPopupOpen(true)
    const closePopup = () => setIsPopupOpen(false)

    const handleLinkNow = () => {
        // Handle the link now action
        console.log('Linking Instagram account...')
        closePopup()
    }


    const initializePackages = useCallback(async (): Promise<void> => {
        if (initialLoadDoneRef.current) return;
        
        setIsLoading(true);
        try {
            const { allPackages, userPackagesWithLikes, instagramLinked } = await fetchPackagesAndLikes();

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

            initialLoadDoneRef.current = true;
            console.log('hiii')
        } catch (error) {
            console.error('Failed to initialize packages:', error);
        } finally {
            setIsLoading(false);
        }
    }, [packageId]);



    useEffect(() => {
        initializePackages();
    }, [initializePackages]);



    const handleLike = async (video: Reel): Promise<void> => {
        setGlobalLoading(true);
        setIsSubscribing(true);
        const { selectedPackage, likesToday, dailyLimit } = packageDataRef.current

        if (!selectedPackage) {
            setInfoText(t("reels.errors.selectValidPackage"))
            setGlobalLoading(false);
            setIsSubscribing(false);
            return
        }

        if (likesToday >= dailyLimit) {
            setInfoText(t("reels.errors.dailyLimitReached"))
            setGlobalLoading(false);
            setIsSubscribing(false);
            return
        }

        if (!video || video.isLiked) {
            setInfoText(t("reels.errors.alreadyLiked"))
            setGlobalLoading(false);
            setIsSubscribing(false);
            return
        }

        try {
            const response = await likeReel(video._id, selectedPackage.package._id)

            if (response.success) {
                setVideos((prevVideos) =>
                    prevVideos.map((v) => (v._id === video._id ? { ...v, isLiked: true, likes: v.likes + 1 } : v)),
                )

                setSubscribed(video._id);

                const newLikesToday = likesToday + 1
                const newEarnedMoney = packageDataRef.current.earnedMoney + (selectedPackage.package.earningsPerView || 0)

                setPackageData((prev) => ({
                    ...prev,
                    likesToday: newLikesToday,
                    earnedMoney: newEarnedMoney,
                    selectedPackage: {
                        ...prev.selectedPackage!,
                        likesToday: newLikesToday,
                        earningsToday: newEarnedMoney,
                    },
                    userPackagesWithLikes: prev.userPackagesWithLikes.map((pkg) =>
                        pkg.package._id === prev.selectedPackage!.package._id
                            ? { ...pkg, likesToday: newLikesToday, earningsToday: newEarnedMoney }
                            : pkg,
                    ),
                }))

                // Update packageDataRef
                packageDataRef.current = {
                    ...packageDataRef.current,
                    likesToday: newLikesToday,
                    earnedMoney: newEarnedMoney,
                    selectedPackage: {
                        ...packageDataRef.current.selectedPackage!,
                        likesToday: newLikesToday,
                        earningsToday: newEarnedMoney,
                    },
                    userPackagesWithLikes: packageDataRef.current.userPackagesWithLikes.map((pkg) =>
                        pkg.package._id === packageDataRef.current.selectedPackage!.package._id
                            ? { ...pkg, likesToday: newLikesToday, earningsToday: newEarnedMoney }
                            : pkg,
                    ),
                }
                setGlobalLoading(false);
                setIsSubscribing(false);


            } else {
                setInfoText(t("global.error.tryAgain"))
                setGlobalLoading(false);
                setIsSubscribing(false);


            }
        } catch (error: any) {

            if (error === "likedAlreadyM") {
                setInfoText(t("reels.errors.alreadyLiked"))
            } else {
                setInfoText(t("global.error.tryAgain"))
            }
            setGlobalLoading(false);
            setIsSubscribing(false);


        }
    }



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

        router.replace(`/watch?v=${videoId}&p=${selectedUserPackage.package._id}${source && "&source="+source}`);
    }, [router, packageData.userPackagesWithLikes]);

    return (
        <>
            {/* <VipMissionArea
        title={`${packageDataRef.current.selectedPackage?.package?.packageName || 'VIP0'} ${t('reels.missionAreaLabel')} (${packageDataRef.current.likesToday}/${packageDataRef.current.dailyLimit})`}
        earnedMoney={packageDataRef.current.earnedMoney}
        allPackages={packageDataRef.current.allPackages}
        purchasedPackages={packageDataRef.current.userPackagesWithLikes}
        onMissionChange={handleMissionChange}
        selectedMission={`${packageDataRef.current.selectedPackage?.package?.packageName || 'VIP0'} ${t('reels.missionAreaLabel')} (${packageDataRef.current.likesToday}/${packageDataRef.current.dailyLimit})`}
      /> */}
            <VipMissionArea
                title={`${packageData.selectedPackage?.package?.packageName || 'VIP0'} ${t('reels.missionAreaLabel')} (${packageData.likesToday}/${packageData.dailyLimit})`}
                earnedMoney={packageData.earnedMoney}
                allPackages={packageData.allPackages}
                purchasedPackages={packageData.userPackagesWithLikes}
                onMissionChange={handleMissionChange}
                selectedMission={`${packageData.selectedPackage?.package?.packageName || 'VIP0'} ${t('reels.missionAreaLabel')} (${packageData.likesToday}/${packageData.dailyLimit})`}
                source={source}
            />
            {/* <AnimationPage direction='top'> */}

            {!isExplore &&
            <VideoPlayer
                videoId={videoId}
                onSubscribe={(video: any) => { handleLike(video) }}
                isSubscribing={isSubscribing}
                subscribed={subscribed}
            /> }

            <MoreVideos 
                source={source}
                p={packageId}
                showSearch={isExplore}
                videoId={videoId}
            />
            {/* </AnimationPage> */}

            {loading && (
                <div className="text-center py-4 text-white bg-black/50 backdrop-blur-sm">
                    {/* {t('reels.loading')} */}
                </div>
            )}

            {/* {isLoading &&
                <DefaultLoading />} */}


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