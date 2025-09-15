


import { ChevronRightIcon, DotsHorizontalIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MORE_ICON } from '../custom-icons';
import { useRouter } from 'next/navigation';
import { fetchHomeYT } from '@/lib/api';
import { formatBigNumbers, getTimeAgo } from '@/utils/formatBigNumbers';
import Link from 'next/link';

interface TrendingNowProps {
    pageNumber: number;
}

export default function TrendingNow({ pageNumber }: TrendingNowProps) {
    const { t } = useTranslation();
    const router = useRouter();
    const [trendingVideos, setTrendingVideos] = useState([]);

    useEffect(() => {
        async function loadTrendingVideos() {
            try {
                const videos = await fetchHomeYT(pageNumber); // Pass pageNumber
                setTrendingVideos(videos.data);
            } catch (error) {
                console.error('Failed to load trending videos:', error);
            }
        }

        loadTrendingVideos();
    }, [pageNumber]); // Add pageNumber as a dependency

    return (
        <>
            <div className="p-5">
                <h2 className="text-[16px] text-[#F9DF89] font-sora  font-semibold mb-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/assets/mmic-1.png" className="h-[25px] mr-1" />
                        {t('home.tredningNow')}
                    </div>
                    <Link href="/revenue/score">
                        <div className="text-[12px] text-white/50 font-sora flex items-center">
                            {t('home.seeMore')}  <ChevronRightIcon className="w-4 h-4" />
                        </div>
                    </Link>
                </h2>

                <div className="grid grid-cols-2 gap-x-2 gap-y-6">
                    {trendingVideos.map((video: any) => (
                        <div
                            key={video._id}
                            className="w-full flex flex-col"
                            onClick={() => {
                                router.push(`/revenue/score?v=${video._id}`);
                            }}
                        >
                            <div className="relative">
                                <img
                                    src={video?.youtube?.thumbnail || "/placeholder.svg"}
                                    className="w-full h-[280px] object-cover rounded-[10px]"
                                    alt={video.headline}
                                />
                                {/* <div className="absolute bottom-[10px] right-[10px] rounded-sm bg-[#00000099] text-[13px] font-medium pl-1 pr-1">
                      {video.duration}
                    </div> */}
                            </div>
                            <div className="flex w-full mt-3">
                                <div className="flex flex-col ml-0 flex-1">
                                    <h1 className="font-sora text-[14px] leading-[1.1] font-semibold line-clamp-1">
                                        {video.headline}
                                    </h1>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}