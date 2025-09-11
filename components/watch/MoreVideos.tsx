"use client"

import type React from "react"

import { useEffect, useState, useRef, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { fetchHomeTrending } from "@/lib/api"
import { formatBigNumbers, getTimeAgo } from "@/utils/formatBigNumbers"
import VideoCategories from "./VideoCategories"
import { useLoading } from "@/context/LoadingContext"
import { MORE_ICON } from "../custom-icons"
import { useDebounce } from "@/hooks/useDebounce"

interface MoreVideosProps {
  source: string
  p: string
  showSearch?: boolean; 
  videoId?: string;
}

const MoreVideos: React.FC<MoreVideosProps> = ({ source, p, showSearch, videoId }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { setGlobalLoading } = useLoading()

  // State management
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [trendingVideos, setTrendingVideos] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [reachedLimit, setReachedLimit] = useState(false)
  const [noResults, setNoResults] = useState(false)
  const [totalVideos, setTotalVideos] = useState(0) // Track total available videos

  const deduplicateVideos = useCallback((videos: any[]) => {
    return Array.from(new Map(videos.map(video => [video._id, video])).values());
  }, []);


  // Refs
  const lastVideoElementRef = useCallback((node: HTMLDivElement | null) => {
    if (isLoading) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore   && !isLoading && !reachedLimit) {
          loadMoreVideos()
        }
      },
      { threshold: 0.8 } // Lower threshold for earlier detection
    )

    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) observer.disconnect()
    }
  }, [isLoading, hasMore, isSearching, reachedLimit])

  // Constants
  const INITIAL_LOAD = 6
  const LOAD_MORE_COUNT = 4

  // Debounce search query to avoid too many API calls
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  // Function to check if we've loaded all available videos
  const checkIfAllVideosLoaded = useCallback((currentVideos: any[], totalCount: number) => {
    return currentVideos.length >= totalCount
  }, [])

  // Separate function for initial load
  const loadInitialVideos = useCallback(async () => {
    setIsLoading(true);
    setGlobalLoading(true);
    
    try {
      const response = await fetchHomeTrending({
        category: selectedCategory,
        page: 1,
        limit: INITIAL_LOAD,
        search: debouncedSearchQuery,
        videoId: videoId
      });

      const newVideos = response.data || [];
      const uniqueVideos = deduplicateVideos(newVideos); // Deduplicate here
      const totalCount = response?.pagination?.total || 0;
      
      setTrendingVideos(uniqueVideos);
      setTotalVideos(totalCount);
      setHasMore(uniqueVideos.length >= INITIAL_LOAD && uniqueVideos.length < totalCount);
      setPage(2);
      
      if (debouncedSearchQuery && uniqueVideos.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      
      setReachedLimit(checkIfAllVideosLoaded(uniqueVideos, totalCount));
    } catch (error) {
      console.error("Failed to load initial trending videos:", error);
    } finally {
      setIsLoading(false);
      setGlobalLoading(false);
    }
  }, [videoId, selectedCategory, debouncedSearchQuery, setGlobalLoading, checkIfAllVideosLoaded, deduplicateVideos]);



  // Separate function for loading more videos
  const loadMoreVideos = useCallback(async () => {
    if (isLoading || !hasMore || reachedLimit) return
    
    setIsLoading(true);
    setGlobalLoading(true);

    try {
      const response = await fetchHomeTrending({
        category: selectedCategory,
        page: page,
        limit: LOAD_MORE_COUNT,
        search: debouncedSearchQuery,
        videoId: videoId
      });

      if (response.data && response.data.length > 0) {
        const combinedVideos = [...trendingVideos, ...response.data];
        const uniqueVideos = deduplicateVideos(combinedVideos); // Deduplicate here
        const totalCount = response?.pagination?.total || 0;
        
        setTrendingVideos(uniqueVideos);
        setTotalVideos(totalCount);
        setHasMore(response.data.length >= LOAD_MORE_COUNT && uniqueVideos.length < totalCount);
        setPage(prevPage => prevPage + 1);
        
        const allLoaded = checkIfAllVideosLoaded(uniqueVideos, totalCount);
        setReachedLimit(allLoaded);
        
        if (allLoaded) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to load more trending videos:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
      setGlobalLoading(false);
    }
  }, [
    page, 
    selectedCategory, 
    debouncedSearchQuery, 
    trendingVideos, 
    isLoading, 
    hasMore, 
    reachedLimit, 
    checkIfAllVideosLoaded,
    deduplicateVideos,
    videoId
  ]);


  // Load initial videos when category or search query changes
  useEffect(() => {
    loadInitialVideos()
  }, [selectedCategory, debouncedSearchQuery, loadInitialVideos])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setIsSearching(true)
  }

  // Debug info - remove in production
  useEffect(() => {
    console.log(`Videos loaded: ${trendingVideos.length}, Total available: ${totalVideos}, Has more: ${hasMore}, Reached limit: ${reachedLimit}`)
  }, [trendingVideos.length, totalVideos, hasMore, reachedLimit])

  return (
    <>
      {showSearch && (
        <div className="pl-5 pr-5">
          <div className="w-full rounded-full mt-5 bg-[#1c1c1c] border-[1.5px] border-[#252525] h-[43px] relative">
            <input
              placeholder="Search"
              className="bg-transparent w-full h-full outline-none border-none pl-5 pr-5 font-sora text-[14px]"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="absolute right-4 top-[10.5px]">
              <SearchIcon size={20} />
            </div>
          </div>
        </div>
      )}

      <div className="mt-5">
        <VideoCategories onCategoryChange={setSelectedCategory} />
      </div>

      <div className="p-5">
        <h2 className="text-[16px] text-white font-sora font-bold mb-3 flex items-center justify-between">
          <div className="flex items-center">{t("watch.explore")}</div>
        </h2>

        {noResults ? (
          <div className="text-center py-10 text-gray-400 font-sora">No results found for "{searchQuery}"</div>
        ) : (
          <div className="grid grid-cols-2 gap-x-2 gap-y-6">
            {trendingVideos.map((video: any, index: number) => {
              return (
                <div
                  key={video._id}
                  className="w-full flex flex-col"
                  ref={index === trendingVideos.length - 1 ? lastVideoElementRef : null}
                  onClick={() => {
                    router.push(`/watch?v=${video._id}${p ? "&p=" + p : ""}&source=${source}`)
                  }}
                >
                  <div className="relative">
                    <img
                      src={video?.youtube?.thumbnail || "/placeholder.svg"}
                      className="w-full h-full object-contain rounded-[10px]"
                      alt={video.headline}
                    />
                    {/* <div className="absolute bottom-[10px] right-[10px] rounded-sm bg-[#00000099] text-[13px] font-medium pl-1 pr-1">
                      {video.duration}
                    </div> */}
                  </div>

                  <div className="flex w-full mt-3">
                    <div className="flex flex-col ml-0 flex-1">
                      <h1 className="font-sora text-[14px] leading-[1.1] font-semibold line-clamp-2">
                        {video.headline}
                      </h1>
                      <span className="text-[11px] font-sora mt-1 text-[#AAAAAA] leading-0 font-medium">
                        {video.channel?.username}
                      </span>
                      <span className="text-[11px] font-sora text-[#AAAAAA] font-medium">
                        {formatBigNumbers(video?.views || 0)} {t('global.views')} 
                        {/* {formatBigNumbers(video?.views || 0)} views • {getTimeAgo(video.published)} */}
                      </span>
                    </div>
                    <div className="flex">
                      <img src={MORE_ICON || "/placeholder.svg"} className="w-auto h-[20px]" alt="More options" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {reachedLimit && (
          <div className="mt-8 mb-4 text-center">
            <div className="bg-[#252525] rounded-lg p-4 text-white font-sora">
              <p className="font-bold">Do tasks to see more videos</p>
              <p className="text-sm text-gray-400 mt-1">Complete tasks to unlock additional content</p>
            </div>
          </div>
        )}

        {!reachedLimit && hasMore && trendingVideos.length > 0 && !noResults && (
          <div className="flex justify-center mt-6">
            {isLoading ? (
              <div className="text-gray-400 text-sm">Loading more videos...</div>
            ) : (
              <div className="animate-pulse text-gray-400 text-sm">Scroll for more videos</div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default MoreVideos