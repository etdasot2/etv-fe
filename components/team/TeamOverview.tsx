'use client'
import React, { useEffect, useState } from 'react';
import { fetchTeamStats } from '@/lib/api';
import DefaultLoading from '@/components/loaders/DefaultLoading';
import DoughnutChart from './DoughnutChart';
import { useTranslation } from 'react-i18next';

interface TeamStats {
  totalUserIncome: number;
  todayIncome: number;
  totalSubscriptionAmount: number;
  ratingIncome: number;
  teamIncome: number;
  investmentIncome: number;
}

interface StatCardProps {
  icon: string;
  iconAlt: string;
  label: string;
  value: number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, iconAlt, label, value, className = "text-white" }) => (
  <div>
    <div className="flex items-center mb-1">
      <img 
        src={icon} 
        alt={iconAlt}
        className="w-[25px] h-[25px] mr-2" 
      />
      <span className="text-[12px] font-sora text-[#bdbdbd]">{label}</span>
    </div>
    <p className={`text-base font-semibold font-sora ${className}`}>
      {Number(value).toFixed(1)} <small className="text-[12px]">USDT</small>
    </p>
  </div>
);

interface IncomeIndicatorProps {
  color: string;
  label: string;
  value: number;
}

const IncomeIndicator: React.FC<IncomeIndicatorProps> = ({ color, label, value }) => (
  <div className="flex items-center">
    <span className={`w-3.5 h-3.5 ${color} rounded-[3px] mr-2 flex-shrink-0`}></span>
    <span className="text-[14px] font-sora text-white font-semibold">
      {label} {Number(value).toFixed(2)}
    </span>
  </div>
);

const initialTeamStats: TeamStats = {
  totalUserIncome: 0,
  todayIncome: 0,
  totalSubscriptionAmount: 0,
  ratingIncome: 0,
  teamIncome: 0,
  investmentIncome: 0,
};

export default function TeamOverview(): JSX.Element {
    const [teamStats, setTeamStats] = useState<TeamStats>(initialTeamStats);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { t } = useTranslation();


    useEffect(() => {
        const fetchStats = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const stats = await fetchTeamStats();
                setTeamStats(stats);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching team stats';
                console.error('Error fetching team stats:', err);
                setError(errorMessage);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    const chartData = [
        teamStats.ratingIncome,
        teamStats.teamIncome,
        teamStats.investmentIncome
    ];

    const totalReturn = chartData.reduce((acc, curr) => acc + curr, 0);

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Something went wrong.</strong> 
            </div>
        );
    }

    return (
        <>
            <div className="bg-[#1b1b19] rounded-lg p-4 mb-4 border border-[#805c33]">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <StatCard 
                        icon="/assets/mmo-vap1.png"
                        iconAlt="Total user income icon"
                        label={t('team.totalIncome')}
                        value={teamStats.totalUserIncome}
                        className="text-[#eebc7a]"
                    />
                    <StatCard 
                        icon="/assets/Group15.2d27da16.png"
                        iconAlt="Today income icon"
                        label={t('team.todayIncome')}
                        value={teamStats.todayIncome}
                    />
                </div>
                <StatCard 
                    icon="/assets/Group47.889e4c58.png"
                    iconAlt="Subscription amount icon"
                    label={t('team.teamTotal')}
                    value={teamStats.totalSubscriptionAmount}
                />
            </div>

            <div className="bg-[#1b1b19] rounded-lg p-4 mb-4">
                <h2 className="text-[14px] font-sora font-semibold mb-2 text-white">{t('team.benefitAnalysis')}</h2>
                <div className="flex justify-between">
                    <DoughnutChart 
                        chartData={chartData}
                        totalReturn={totalReturn}
                    />
                    <div className="space-y-2 pl-3 pr-2">
                        <IncomeIndicator 
                            color="bg-[#FE9642]"
                            label={t('team.likesIncome')}
                            value={teamStats.ratingIncome}
                        />
                        <IncomeIndicator 
                            color="bg-[#8F74FF]"
                            label={t('team.teamIncome')}
                            value={teamStats.teamIncome}
                        />
                        <IncomeIndicator 
                            color="bg-[#FFE17B]"
                            label={t('team.investmentIncome')}
                            value={teamStats.investmentIncome}
                        />
                    </div>
                </div>
            </div>
            {isLoading && <DefaultLoading />}
        </>
    );
}