'use client'
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface UserPackageCardProps {
    pkg: any;
    purchasePackage: any;
}

const UserPackageCard: React.FC<UserPackageCardProps> = ({ pkg, purchasePackage }) => {
    const { t } = useTranslation();
    const router = useRouter();



    return (
        <div
            key={pkg._id}
            className="rounded-lg p-4 mb-3"
            style={{
                background: 'url(/assets/bg0card.png) no-repeat',
                backgroundSize: '100% 100%',
            }}
        >
            <div className="flex items-center mb-[13px] pb-[15px] border-b-[.02rem] border-[#ffffff0d]">
                <img src={`/vip-icons/music/${pkg.icon}`} className="w-[31px] h-[31px]" />
                <span className="text-base font-sora ml-2 font-medium">{pkg.packageName}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center flex-col">
                    <p className="text-base text-white font-sora font-medium">{pkg.dailyViews} {t('revenue.package.view')}</p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-2">{t('revenue.package.dailyPerView')}</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <p className="text-base text-white font-sora font-medium">{purchasePackage.daysLeft} {purchasePackage.daysLeft <= 1 ? t('global.day') : t('global.days')}</p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-2">{t('revenue.package.expiresIn')}</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <p className="text-base text-[#eebc7a] font-sora font-semibold">
                        {pkg.earningsPerView} <small className="font-sora text-[12px]">USDT</small>
                    </p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-2">{t('revenue.package.perViewIncome')}</p>
                </div>
            </div>

            {/* Show expired message if the package has expired */}
            {purchasePackage.isExpired ? (
                <button 
                    className="w-[100%] border border-[#805c33] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
                    style={{
                        background: 'linear-gradient(180deg, #fd717100, rgb(253 113 113 / 10%))',
                    }}
                >
                    {t('revenue.package.expired')} ({pkg.dailyViews}/{pkg.dailyViews})
                </button>
            ) : (
                <button
                    onClick={() => {
                        router.push(`/reels?pkg-sn=${pkg._id}`);
                    }}
                    className="w-[100%] border border-[#805c33] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
                    style={{
              background: 'linear-gradient(rgb(250 179 54 / 0%), rgb(186 140 0 / 10%))',


                    }}
                >
                    {t('revenue.package.scoreBtn')} ({purchasePackage.likesToday}/{pkg.dailyViews})
                </button>
            )}
        </div>
    );
};

export default UserPackageCard;
