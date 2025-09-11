import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useInfoModal } from '@/context/InfoModalContext';
import { initiateBuyPackage, placeOrder } from '@/lib/api';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/context/modal-context';
import { useSecurityVerification } from '@/context/FundsPasswordContext';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface PackageCardProps {
    pkg: any;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
    const router = useRouter();
    const { setInfoText } = useInfoModal();
    const [isLoading, setIsLoading] = useState(false);
    const { openModal } = useModal();
    const { openVerification } = useSecurityVerification();

    const { t } = useTranslation();


    const handlePackagePurchase = async () => {
        setIsLoading(true);
        openModal({
            message: t('revenue.buy.modal.text'),
            onConfirm: async () => {
                try {
                    // Initiate the package purchase request
                    const response = await initiateBuyPackage(pkg._id);
                    openVerification({
                        onSuccess: async (hash) => {
                            try {

                                setIsLoading(true)
                                const response = await placeOrder(pkg._id, hash);

                                if (response.success) {
                                    setInfoText(t('global.success')); 
                                }
                                console.log(hash)
                            } catch (error: any) {
                                if (error === 'insufficient_balance') {
                                    setInfoText(t('verifyFundsPassword.alerts.insufficientBalance'));
                                } else if (error === 'transfer_to_task') {
                                    setInfoText(t('verifyFundsPassword.alerts.transferToTask'));
                                } else if (error === 'invalid_purchase_initiation') {
                                    router.back();
                                } else if (error === 'incorrect_funds_password') {
                                    setInfoText(t('verifyFundsPassword.alerts.incorrectPassword'));
                                } else {
                                    setInfoText(t('verifyFundsPassword.alerts.purchaseError'));
                                }
                            } finally {
                                setIsLoading(false)
                            }
                        },
                        onFailure: () => {

                        },
                    })
                    setIsLoading(false);

                    // If successful, redirect user to funds verification with initiateId
                    // router.push(`/verify-funds-password?isn=${response.initiateId}&type=order`);
                } catch (error) {
                    setIsLoading(false);
                    if (error === 'insufficient_balance') {
                        setInfoText(t('verifyFundsPassword.alerts.insufficientBalance'));
                        setInfoText('Insufficient balance');
                    } else if (error === 'transfer_to_task') {
                        setInfoText(t('verifyFundsPassword.alerts.transferToTask'));
                    } else {
                        setInfoText(t('global.error.tryAgain'));
                    }

                }
            
            },
        
        });
        // try {
        //     // Initiate the package purchase request
        //     const response = await initiateBuyPackage(pkg._id);

        //     // If successful, redirect user to funds verification with initiateId
        //     router.push(`/verify-funds-password?isn=${response.initiateId}&type=order`);
        // } catch (error) {
        //     setIsLoading(false);
        //     if (error === 'insufficient_balance') {
        //         setInfoText(t('verifyFundsPassword.alerts.insufficientBalance'));
        //         setInfoText('Insufficient balance');
        //     } else if (error === 'transfer_to_task') {
        //         setInfoText(t('verifyFundsPassword.alerts.transferToTask'));
        //     } else {
        //         setInfoText(t('global.error.tryAgain'));
        //     }
        // }  
    };

    return (
        <>
            <div
                key={pkg._id}
                className="rounded-lg  mb-3 bg-[#1c1c1c]  "
            >
                {/* Render package details */}
                <div className="p-2">
                    <div className="flex items-center rounded-lg bg-[#1f1f1f]  border border-[#242424]  h-[56px] pl-4 pr-4">
                        <img src={`/vip-icons-shorts/${pkg.icon}`} className="w-[40px] h-[40px]" />
                        <span className="text-base font-sora ml-1 font-medium">{pkg.packageName}</span>
                    </div>
                </div>

                <div className="p-4">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center justify-start flex-col">
                            <p className="text-base text-white font-sora font-medium">{pkg.dailyViews} {t('revenue.package.view')}</p>
                            <p className="text-[12px] font-sora text-[#bdbdbd] mt-1 text-center min-h-[30px] leading-[1]">{t('revenue.package.dailyPerView')}</p>
                        </div>
                        <div className="flex items-center justify-start flex-col">
                            <p className="text-base text-white font-sora font-medium">{pkg.deadline} {t('global.days')}</p>
                            <p className="text-[12px] font-sora text-[#bdbdbd] mt-1 text-center min-h-[30px] leading-[1]">{t('revenue.package.validTime')}</p>
                        </div>
                        <div className="flex items-center justify-start flex-col">
                            <p className="text-base text-white font-sora font-semibold">
                                {pkg.earningsPerView} <small className="font-sora text-[12px]">USDT</small>
                            </p>
                            <p className="text-[12px] font-sora text-[#bdbdbd] mt-1 text-center min-h-[30px] leading-[1]">{t('revenue.package.perViewIncome')}</p>
                        </div>
                    </div>

                    {/* Button to trigger purchase */}
                    {(pkg.active === true) && (
                        <button
                            onClick={handlePackagePurchase}
                            className="w-[100%] min-h-[40px] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
                            style={{
                                background: 'linear-gradient(-40deg, #f40208, #ff464b)',
                            }}
                        >
                            {pkg.price} USDT {t('revenue.package.unlockNow')}
                        </button>
                    )}

                    {(pkg.active === false) && (
                        <div
                            className="w-[100%] border border-[#333333] bg-[#333333] text-white py-2 rounded-full font-sora text-[14px] font-semibold flex items-center justify-center transition-colors"
                        >
                            {t('revenue.package.stayTuned')}
                        </div>
                    )}
                </div>

            </div>
            {isLoading &&
                <DefaultLoading />}
        </>
    );
};

export default PackageCard;
