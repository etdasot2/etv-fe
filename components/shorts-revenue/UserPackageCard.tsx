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
            className="rounded-lg  mb-3 bg-[#1c1c1c]  "
        >
            <div className="p-2">
                    <div className="flex items-center rounded-lg bg-[#1f1f1f]  border border-[#242424]  h-[56px] pl-4 pr-4">
                        <img src={`/vip-icons/${pkg.icon}`} className="w-[31px] h-[31px]" />
                        <span className="text-base font-sora ml-1 font-medium">{pkg.packageName}</span>
                    </div>
                </div>
            {/* <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="flex items-center justify-center flex-col">
                    <p className="text-base text-white font-sora font-medium">{pkg.dailyViews} {t('revenue.package.view')}</p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-0 text-center min-h-[50px]">{t('revenue.package.dailyPerView')}</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <p className="text-base text-white font-sora font-medium">{purchasePackage.daysLeft} {purchasePackage.daysLeft <= 1 ? t('global.day') : t('global.days')}</p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-0 text-center min-h-[50px]">{t('revenue.package.expiresIn')}</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <p className="text-base text-white font-sora font-semibold">
                        {pkg.earningsPerView} <small className="font-sora text-[12px]">USDT</small>
                    </p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-0 text-center min-h-[50px]">{t('revenue.package.perViewIncome')}</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <p className="text-base text-white font-sora font-semibold">
                        {pkg.earningsPerView} <small className="font-sora text-[12px]">USDT</small>
                    </p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-0 text-center min-h-[50px]">{t('revenue.package.totalReturn')}</p>
                </div>
            </div> */}

            <div className="p-4 ">
            <div className="grid grid-cols-3 gap-4 mb-4">

                <div className="flex items-center justify-start flex-col">
                    <p className="text-base text-white font-sora font-medium">{pkg.dailyViews} {t('revenue.package.view')}</p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-1 text-center min-h-[30px] leading-[1]">{t('revenue.package.dailyPerView')}</p>
                </div>
                <div className="flex items-center justify-start flex-col">
                    <p className="text-base text-white font-sora font-medium">{pkg.deadline} {t('global.days')}</p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-1 text-center min-h-[30px] leading-[1]">{t('revenue.package.expiresIn')}</p>
                </div>
                <div className="flex items-center justify-start flex-col">
                    <p className="text-base text-white font-sora font-semibold">
                        {pkg.earningsPerView} <small className="font-sora text-[12px]">USDT</small>
                    </p>
                    <p className="text-[12px] font-sora text-[#bdbdbd] mt-1 text-center min-h-[30px] leading-[1]">{t('revenue.package.perViewIncome')}</p>
                </div>
                </div>

            {/* Show expired message if the package has expired */}
            {purchasePackage.isExpired ? (
                <button
                    className="w-[100%] border border-secondary text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
                // style={{
                //     background: 'linear-gradient(180deg, #fd717100, rgb(253 113 113 / 10%))',
                // }}
                >
                    {t('revenue.package.expired')} ({pkg.dailyViews}/{pkg.dailyViews})
                </button>
            ) : (
                <button
                    onClick={() => {
                        router.push(`/explore?p=${pkg._id}&source=revenue`);
                    }}
                    className="w-[100%] border min-h-[40px] border-[#f40208] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
                    style={{
                        background: 'linear-gradient(180deg, #fd717100, #f4020829)',

                        // background: 'linear-gradient(180deg, #fd717100, rgb(253 113 113 / 10%))',
                    }}
                >
                    {t('revenue.package.scoreBtn')} ({purchasePackage.likesToday}/{pkg.dailyViews})
                </button>
            )}
            </div>

        </div>
    );
};

export default UserPackageCard;
