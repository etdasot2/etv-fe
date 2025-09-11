'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Play } from 'lucide-react'; 
import DefaultLoading from '@/components/loaders/DefaultLoading';
import { fetchLikedReels } from '@/lib/api';
import { useTranslation } from 'react-i18next';
 
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */


interface FetchError {
  message: string;
}

export default function RecordsList() {
  const [reelRecords, setReelRecords] = useState<any[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const { t } = useTranslation();


  const ITEMS_PER_PAGE = 4;

  const loadReels = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true); 
    
    try {
      const newReels = await fetchLikedReels(skip, ITEMS_PER_PAGE);
      
      if (!Array.isArray(newReels)) {
        throw new Error('Invalid response format');
      }

      if (newReels.length === 0) {
        setHasMore(false);
      } else {
        setReelRecords(prev => {
          const existingIds = new Set(prev.map(r => r._id));
          const filteredNewReels = newReels.filter(reel => !existingIds.has(reel._id));
          return [...prev, ...filteredNewReels];
        });
        
        setSkip(prev => prev + newReels.length);
        
        if (newReels.length < ITEMS_PER_PAGE) {
          setHasMore(false);
        }
      }
    } catch (err) {
      const error = err as FetchError;
      console.log(error.message || 'Failed to fetch records');
      setHasMore(false);
    } finally {
      setIsLoading(false);
      setInitialLoad(false);
    }
  }, [skip]);

  // Initial load
  useEffect(() => {
    loadReels();
  }, []);

  // Scroll handler with debounce
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition >= totalHeight - 100) {
        if (hasMore && !isLoading) {
          loadReels();
        }
      }
    };

    const debounceScroll = debounce(handleScroll, 200);
    window.addEventListener('scroll', debounceScroll);
    
    return () => window.removeEventListener('scroll', debounceScroll);
  }, [hasMore, isLoading, loadReels]);

  // Utility function for debouncing
  function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Utility function to format date
  if (initialLoad) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <DefaultLoading />
      </div>
    );
  }
  return (
    <>


      <div className="min-h-[calc(100vh-4rem)]">
        {reelRecords.map((reel, index) => (
          <div
            key={`${reel._id}-${index}`}
            className="flex p-3 mb-5"
            style={{
              background: "url(data:image/png;base64,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) no-repeat",
              backgroundSize: "100% 100%"
            }}
          > 
            <div className="relative w-[32%]">
              <img
                src={reel.reel.youtube.thumbnail}
                alt={reel.reel.description}
                className="w-[112px] h-[142px] object-cover rounded-[13px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 rounded-full p-3">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 pr-0 flex flex-col justify-between">
              <div className="flex flex-col">
                <h2 className="text-white font-medium text-[14px] font-sora mb-1 flex-1 truncate whitespace-nowrap overflow-hidden text-ellipsis w-[160px]">
                  {reel.reel.description}
                </h2>
                <p className="text-[#ffffff99] text-[12px] font-medium font-sora">{reel.reel.timestamp}</p>
              </div>
              <div className="flex justify-between items-end text-sm flex-col">
                <div className="flex justify-between w-full items-center">
                  <p className="text-[#ffffff99] font-sora text-[12px] font-medium">{t('record.viewRating')}:</p>
                  <p className="text-white font-medium text-base font-sora">{reel.package.packageName}</p>
                </div>
                <div className="flex justify-between w-full mt-2 items-center">
                  <p className="text-[#ffffff99] font-sora text-[12px] font-medium">{t('record.viewEarnings')}:</p>
                  <p className="text-[#ff4848] font-medium font-sora text-[16px]">{reel.earnings.toFixed(1)} USDT</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {!hasMore && <div className="text-center text-white mt-4">{t('record.noMoreRecords')}</div>}
      </div>
      {isLoading &&
        <DefaultLoading />}
    </>
  );
}
