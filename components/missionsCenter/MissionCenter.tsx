'use client';

import { useEffect, useState } from 'react';
import { Users, Gift, Trophy } from 'lucide-react';
import { fetchMissionCenter, claimMission } from '@/lib/api';
import { useInfoModal } from '@/context/InfoModalContext';
import { useTranslation } from 'react-i18next';
import { useLoading } from '@/context/LoadingContext';

interface BonusItem {
  requirement: number;
  reward: number;
  current: number;
  claimed?: boolean;
}

interface MissionCenterResponse {
  totalDirect: {
    total: number;
    bonuses: BonusItem[];
  };
  totalTeam: {
    total: number;
    bonuses: BonusItem[];
  };
  totalGrowth: {
    total: number;
    bonuses: BonusItem[];
  };
}

const MissionCenterMain = () => {
  const [activeTab, setActiveTab] = useState<'direct' | 'team' | 'growth'>('direct');
  const [directBonuses, setDirectBonuses] = useState<BonusItem[]>([]);
  const [teamBonuses, setTeamBonuses] = useState<BonusItem[]>([]);
  const [growthBonuses, setGrowthBonuses] = useState<BonusItem[]>([]);
  const { setInfoText } = useInfoModal()
  const { t } = useTranslation()
  const { setGlobalLoading } = useLoading()
  const [claimingRewards, setClaimingRewards] = useState<Map<string, boolean>>(new Map());

  const handleTabChange = (tab: 'direct' | 'team' | 'growth') => {
    setActiveTab(tab);
  };

  const fetchData = async () => {
    try {
      setGlobalLoading(true);
      const data: MissionCenterResponse = await fetchMissionCenter();
      setDirectBonuses(data.totalDirect.bonuses);
      setTeamBonuses(data.totalTeam.bonuses);
      setGrowthBonuses(data.totalGrowth.bonuses);
    } catch (error) {
      console.error('Error fetching mission center data:', error);
    } finally {
      setGlobalLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClaim = async (requirement: number, type: 'direct' | 'team' | 'growth') => {
    const rewardId = `${type}-${requirement}`;

    if (claimingRewards.get(rewardId)) {
      setInfoText(t('global.dontRepeat'));
      return;
    }

    setClaimingRewards(prev => new Map(prev).set(rewardId, true));
    setGlobalLoading(true);

    try {
      const missionId = rewardId;
      await claimMission(missionId);
      await fetchData();
      setInfoText(t('missionsCenter.rewardClaimed'));
    } catch (err: any) {
      console.error(err);
      setInfoText(err?.response?.data?.message || t('missionsCenter.claimFailed'));
    } finally {
      setClaimingRewards(prev => new Map(prev).set(rewardId, false));
      setGlobalLoading(false);
    }
  };

  const renderBonuses = (bonuses: BonusItem[], type: 'direct' | 'team' | 'growth') => (
    <>


      {bonuses.map((bonus, index) => {
        const progress = (bonus.current / bonus.requirement) * 100;
        const progressText = t(`missionsCenter.added`, { count: bonus.current, total: bonus.requirement });
        const rewardId = `${type}-${bonus.requirement}`;
        const isClaiming = claimingRewards.get(rewardId) || false;

        return (
          <div
            key={`${type}-${index}`}
            className="bg-[#1c1c1c] rounded-[10px] p-4"
          >
            <div className="flex justify-between items-start mb-0">
              <div className="flex items-start">
                <span className="text-[14px] font-medium font-sora">
                  {type === 'direct'
                    ? t(`missionsCenter.addDirectActiveMembers`, { count: bonus.requirement, reward: bonus.reward })
                    : type === 'team'
                    ? t(`missionsCenter.addTeamMembers`, { count: bonus.requirement, reward: bonus.reward })
                    : t(`missionsCenter.addGrowthMembers`, { count: bonus.requirement })}
                </span>
              </div>

            </div>

            <div className="mb-2">
              <div className="flex justify-between text-[12px] text-white/70 mb-1.5 font-sora">
                {/* <span>{t('missionsCenter.progress')}</span> */}
                <div></div>
                <div className="text-nowrap     rounded-full text-[14px] font-bold font-sora text-[#eebc7a]  ">
                  {bonus.reward} USDT
                </div>
              </div>
              <div>
                
                <div className="w-full h-1.5 bg-[#282828] rounded-full overflow-hidden">
                  
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${progress}%`,
            background: 'linear-gradient(to right, #b37106, #c18610, #7c4804)',
                  
                  }}
                  ></div>
                </div>
              </div>

            </div>
            <div className="flex justify-between items-center">
           <div></div>
            <div className="flex justify-between items-center mt-1 w-full">
              <span dangerouslySetInnerHTML={{ __html: progressText }} className="text-[12px] text-white/70  font-sora"></span> 
              {bonus.claimed ? (
                <div
                className={`px-4 py-1.5 rounded-full border border-[#805c338a]  text-[12px] font-medium font-sora`}
                style={{
                  background: 'linear-gradient(rgb(250 179 54 / 0%), rgb(186 140 0 / 10%))' 
                }}
              >
                {t('missionsCenter.alreadyClaimed')}
               </div>
              ) : (
                <button
                  onClick={() => handleClaim(bonus.requirement, type)}
                  disabled={progress < 100 || isClaiming}
                  className={`px-4 py-1.5 rounded-full border  text-[12px] font-medium font-sora ${
                    progress >= 100 ? 'text-white  border-[#805c338a]' : 'text-white border-[#2a2929]' 
                  }`}
                  style={{
                    background: progress >= 100  
                      ? 'linear-gradient(rgb(250 179 54 / 0%), rgb(186 140 0 / 10%))' 
                      : '#2a2929',
                  }}
                >
                  {isClaiming ? t('missionsCenter.isClaiming')+"..." : progress >= 100 ? t('missionsCenter.claimReward') : t('missionsCenter.inProgress')}
                </button>
              )}
            </div>
          </div>
          </div>
        );
      })}
    </>
  );

  return (
    <>
      <div className="px-4 mb-6 relative z-[10]  ">
        <div className="flex rounded-full overflow-hidden  bg-[#1c1c1c]">
          <button
            type="button"
            className={`flex-1 py-2.5 px-3 text-center font-sora text-[14px] font-medium cursor-pointer  leading-[1] rounded-full break-words  `}
            style={{
              background: activeTab === 'direct' ? 'linear-gradient(to right, #b37106, #c18610, #7c4804)' : '#1c1c1c'
            }}
            onClick={() => handleTabChange('direct')}
          >
            {t('missionsCenter.direct')}
          </button>
          <button
            type="button"
            className={`flex-1 py-2.5 px-3 text-center font-sora text-[14px] font-medium cursor-pointer  leading-[1] rounded-full break-words `}
            style={{
              background: activeTab === 'team' ? 'linear-gradient(to right, #b37106, #c18610, #7c4804)' : '#1c1c1c'
            }}
            onClick={() => handleTabChange('team')}
          >
            {t('missionsCenter.team')}
          </button>
          <button
            type="button"
            className={`flex-1 py-2.5 px-3 text-center font-sora text-[14px] font-medium cursor-pointer  leading-[1] rounded-full break-words  `}
            style={{
              background: activeTab === 'growth' ? 'linear-gradient(to right, #b37106, #c18610, #7c4804)' : '#1c1c1c'
            }}
            onClick={() => handleTabChange('growth')}
          >
            {t('missionsCenter.growth')}
          </button>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {activeTab === 'direct' && renderBonuses(directBonuses, 'direct')}
        {activeTab === 'team' && renderBonuses(teamBonuses, 'team')}
        {/* {activeTab === 'growth' && renderBonuses(growthBonuses, 'growth')} */}
      </div>
    </>
  );
};

export default MissionCenterMain;
