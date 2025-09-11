'use client';
import { getReferralChain } from '@/lib/api'; // Ensure this fetches total and today income
import React, { useEffect, useState } from 'react';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { formatWithDecimalsNumber } from '@/utils/formatDecmials';

export default function TeamGenerations() {
    const { t } = useTranslation();

    const [data, setData] = useState({
        totalMembers: 0,
        addedToday: 0,
        firstGeneration: { totalMembers: 0, totalIncome: 0, todayIncome: 0 },
        secondGeneration: { totalMembers: 0, totalIncome: 0, todayIncome: 0 },
        thirdGeneration: { totalMembers: 0, totalIncome: 0, todayIncome: 0 },
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReferralChain = async () => {
            setIsLoading(true);
            try {
                const referralData = await getReferralChain();
                setData(referralData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching referral chain:", error);
                setIsLoading(false);
            }
        };

        fetchReferralChain();
    }, []);


    return (
        <>

            <div className="p-3.5 bg-[#1c1c1c] rounded-[10px] mt-5">
                <div className="text-white pb-[0.32rem] text-[0.28rem] flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/assets/icon1.d860b553.png" className="w-[32px] h-[32px] mr-3" />
                        <div className="text-[#ffffff99] text-[12px] font-medium leading-[0.44rem] pt-1.5 font-sora">
                            {t('team.totalTeamMembers')}
                            <div className="text-base text-white mt-[3px]">{data.totalMembers}</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="/assets/icon2.f4ab18a8.png" className="w-[32px] h-[32px] mr-3" />
                        <div className="text-[#ffffff99] text-[12px] font-normal leading-[0.44rem] pt-1.5 font-sora">
                            {t('team.addedToday')}
                            <div className="text-base text-white mt-[3px">{data.addedToday}</div> {/* You can update this with actual data */}
                        </div>
                    </div>
                </div>

                {/* First Generation */}
                <div className="bg-[#282828] rounded-[8px] mb-3 p-2 mt-3 pb-3">
                    <div className="text-white text-[15px] mb-2.5 pl-1.5 font-semibold">
                        {t('team.firstGeneration')}
                    </div>
                    <div className="flex items-center">
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.totalMembers')}</div>
                            <div className="text-[16px] text-[#eebc7a] font-sora font-semibold">
                                {data.firstGeneration.totalMembers}
                            </div>
                        </div> 
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.genTotalIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                {formatWithDecimalsNumber(data.firstGeneration.totalIncome)}
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1 capitalize">{t('team.todayIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                {formatWithDecimalsNumber(data.firstGeneration.todayIncome)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Generation */}
                <div className="bg-[#282828] rounded-[8px] mb-3 p-2 mt-3 pb-3">
                    <div className="text-white text-[15px] mb-2.5 pl-1.5 font-semibold">
                        {t('team.secondGeneration')}
                    </div>
                    <div className="flex items-center">
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.totalMembers')}</div>
                            <div className="text-[16px] text-[#eebc7a] font-sora font-semibold">
                                {data.secondGeneration.totalMembers}
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.genTotalIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                {formatWithDecimalsNumber(data.secondGeneration.totalIncome)}
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1 capitalize">{t('team.todayIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                {formatWithDecimalsNumber(data.secondGeneration.todayIncome)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Generation */}
                <div className="bg-[#282828] rounded-[8px] mb-3 p-2 mt-3 pb-3">
                    <div className="text-white text-[15px] mb-2.5 pl-1.5 font-semibold">
                        {t('team.thirdGeneration')}
                    </div>
                    <div className="flex items-center  ">
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.totalMembers')}</div>
                            <div className="text-[16px] text-[#eebc7a] font-sora font-semibold">
                            {data.thirdGeneration.totalMembers}
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.genTotalIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                0
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1 capitalize">{t('team.todayIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                0
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Generation */}
                <div className="bg-[#282828] rounded-[8px] mb-3 p-2 mt-3 pb-3">
                    <div className="text-white text-[15px] mb-2.5 pl-1.5 font-semibold">
                        {t('team.fourthGeneration')}
                    </div>
                    <div className="flex items-center  ">
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.totalMembers')}</div>
                            <div className="text-[16px] text-[#eebc7a] font-sora font-semibold">
                            0
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.genTotalIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                0
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1 capitalize">{t('team.todayIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                0
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Generation */}
                <div className="bg-[#282828] rounded-[8px] mb-3 p-2 mt-3 pb-3">
                    <div className="text-white text-[15px] mb-2.5 pl-1.5 font-semibold">
                        {t('team.fifthGeneration')}
                    </div>
                    <div className="flex items-center  ">
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.totalMembers')}</div>
                            <div className="text-[16px] text-[#eebc7a] font-sora font-semibold">
                            0
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1">{t('team.genTotalIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                0
                            </div>
                        </div>
                        <div className="w-[33.3333%] text-center flex flex-col">
                            <div className="text-[12px] text-[#bdbdbd] font-sora mb-1 capitalize">{t('team.todayIncome')}</div>
                            <div className="text-[16px] text-white font-sora font-semibold">
                                0
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/promote/team">
        <button
          type="submit"
          className="w-[100%] text-white py-2 bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] rounded-full font-sora text-[16px] font-medium hover:bg-transparent transition-colors h-[44px] mt-1"
          style={{
            // background:'linear-gradient(180deg, #fd717100, rgb(253 113 113 / 10%))',
            // background: 'linear-gradient(-40deg, #f40208, #ff464b)',

          }}
        >
          {t('team.teamMemberListBtn')}
        </button>
        </Link>
            </div>
            {/* {isLoading && <DefaultLoading />} */}
        </>
    );
}
