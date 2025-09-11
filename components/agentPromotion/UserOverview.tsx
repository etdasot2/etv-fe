import React, { useState, useEffect } from 'react';
import { useLoading } from "@/context/LoadingContext";
import { agentPromotionOverview } from '@/lib/api';
import { useTranslation } from 'react-i18next';

export default function UserOverview() {
    const [data, setData] = useState<any>(null);
    const { setGlobalLoading } = useLoading();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchAgentPromotionOverview = async () => {
            setGlobalLoading(true);
            try {
                const data = await agentPromotionOverview();
                setData(data); // Assuming the API response has totalActiveMembers
            } catch (error: any) {
                console.error('Error fetching agent promotion overview:', error);
                // Handle error (e.g., show a notification)
            } finally {
                setGlobalLoading(false);
            }
        };

        fetchAgentPromotionOverview();
    }, [setGlobalLoading]);

    return (
        <>
            <div className="bg-[#1c1c1c] rounded-[8px] p-2 w-full" >
                <div className="flex items-center w-full pl-4 pr-4 pt-[5px] pb-[5px]">
                {data?.currentLevel !==0  ? <img src="/assets/logoinit-mini.png" className="w-[50px] h-[50px]" /> : <></>}
                    <div className="text-[14px]   ml-3 font-sora">
                        {data?.currentLevel.levelNameSlug ? t(`agentPromotion.levels.${data?.currentLevel.levelNameSlug}`) : "--"}
                        <div className="flex items-center font-semibold text-white/70">{t("agentPromotion.teamSize")}: <div className="text-[#fe0133] ml-1 items-center flex">{data?.totalMembers}</div></div>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-[#1f1f1f]  border border-[#242424]  mt-2 p-4 rounded-[8px]">
                    <div className="flex items-center justify-between font-sora text-[14px]">
                        <span className=" text-[13px] text-white/70 font-semibold">{t("agentPromotion.nextStageTeamSize")}</span>
                        <span className="font-semibold text-[13px]">{data?.nextLevel.requiredMembers}</span>
                    </div>
                    <div className="flex items-center justify-between font-sora text-[14px] mt-3">
                        <span className="text-[13px] text-white/70 font-semibold">{t("agentPromotion.nextStageGroupPromotionReward")}</span>
                        <span className="font-semibold text-[13px] text-right">{data?.nextLevel.promotionReward} USDT</span>
                    </div>
                </div>
            </div>
        </>
    )
}