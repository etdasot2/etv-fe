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
    onSuccessfulPurchase: () => void
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSuccessfulPurchase }) => {
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
                                    onSuccessfulPurchase()
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
                className="rounded-lg p-4 mb-3"
                style={{
                    background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAACgCAMAAACPD98/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAuJQTFRFAAAAsoY6uYc5uYc5uYc5uIk5uYo5uIY5t4k5uYc5uos5t4k5t4k5kmoyWUQnMC4lICAfODQmWUMniWgwt4k5uIk5tIc6o3s2RTgkpHk2tIc6tIQ6mXMzKCcimHIytoQ5s4Q2onc1ono1s4U1s4Y5RDcksoU5hGUvj2swtYQ3s4Y5VkInVkYns4E2sYQ4NjQmsIM3r4M3sIE4r382roI3rYE2rX42q4E3qoA2qX82qH41p3o1p3s2pX03pHw2o3s1oXk0oHgzn3g0oHg0nXc1nHY0m3Uzm3U0mnQzmXMylnEyl3EylXI0lm4ylGwzk3Aykm8xkW4xkG0wkGwxjWwyjWgyjGsxi2oxi2owimkwiWgviGcvh2cvhWYwhWIwhGEvhGUwg2Qvg2QwgmMugWIugGEtgF8uf14tfV4ufF4ufF0te10telwteVsteFord1krd1ssd1ksdVktdFgsdFcsc1csc1crc1YrcVUrcVUqcFQqbVUsa1MsbFQsa1IsalIralIqaVEqaVAqaFAsZ1ErZlErZVAqZE8qY08qY00qYUwrYU0rYEsqX0wqX0spXkopXkspXUopW0goXEkpWkgoWkUoV0coV0MoVkUoVUQnVEMoVEMnU0InUUAoUD8nUEInT0InTz4mTj8mTkEmTD0lTUAlTD0mSzwlSjwnST0mSjskSTsmSDolRzwlRzkkRjskRzolRTokQjcmRDcjQTonPzomQTomPjomPjolPTcoPTclPDgmOTcmODQlODQnNTQmNTQmMjIlMjInMjEkMTAlMTEmMTAnMC4mMC8mMC4kLy0kMC0lLiwkLSwkLCojLCsjKyojKikiKigjKigiKikjKSgiKSciJyYhJyciISEfIiIgJiYhJiQiIiEgJSQgJiUgIyMgJCMgJSQgICAgJCMhISAfIyMgIyEgIyIgIiMgISIgISIgISEgIiMgISEgISEfICAgICAgICAgICAfICAgICAgLcc+vgAAAPZ0Uk5TABBvr9///////19Q7//////U///fX5D///+AgP///49g//9Q3//v//9vr///r8/X3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////H/5Nnk0tLQ0MvP1NTX3ebm7Pnz+f39////////////////////+///9ub/5q7//5sf/v/7h/+bzr//nPv+h5zm9v+uq+BSKAAABVhJREFUeJzt3WlsVFUAxfF7ZmoqYpVoAKNFkUBEiAgBqaUKFdkqNLSAYIWACEKpLGIBBZRFKGsFUYtoAUEQWUNAAZFdCNhKCKiAS5EYUaONRNEYSZh5vplONzAxht6c5OT+ks60b97c+fd86NfCRCAi9l3YBD0TNpWCHrxw0IRMIHLVf4h8bwIGxr8c8p9DZVcirwWqvDEYinxFrpR/GRMXRvROE/DPLLslEI675J8Wjr0n6MUO8R8D/vmm/Ej/heiHeybghWL3hmIfVfGx0QMjueWvxN4YDYy7FPuYWG4sI3Kx4v6r/P09L/6vsnMiD7Urd3WuSnTIUlO2az3gb3aQDu86/Bjd9TbgD3aMkgTgO3/XhrjkZq1RCdfgDEzjUveXtYbVxTdoGP8zO0PPLUAz/MCu0JMItPD/yDo1zLsTrc6yIxQ1Qusz7AZFjdGmhN2gqAnafs1uUHQXkr5iNyhyu9rhdrWjKZJPsxsU3Y12p9gNipoh5SS7QVFzPPAFu0HRPWj/GbtBUQvUv8huUFQLjc6zGxTd63a14iakHmc3KGrpdrWiFToeYzcoao1OR9kNitq4Xa1og86fshsU3YcuxewGRUluVyvuR+Kf7AZF1yPtCLtBUTJuv8BuUHQDHjnMblCUgh6H2A2K2iH9ILtBUXv0PMBuUNTB7WpFKjL2sxsUpSJzH7tB0UNuVys6ovcedoOih9FnN7tBUWf0/YjdoMjtakdX9NvJblDUDVk72A2K0vD4dnaDojTcHPrvu5z/qzv6b2M3KOqOAR+wGxSlY+BWdoOidAzawm5QlIHBm9kNinphyCZ2g6JMt6sVvTF0I7tBUR88tYHdoKgvhq9jNyjqh+y17AZFj7ldrcjCiPfYDYqykLOG3aCoP0auZjcocrvaMQCjVrEbFA3EmJXsBkVPYOzb7AZFTyJ3GbtB0VCMW8puUDQE4wvZDYqGuV2tGI7nl7AbFGW7Xa0YgUmL2Q2KcjC5gN2g6Gm88Dq7QdEot6sVozF1EbtB0RhMe4XdoGgsXlrAblCU63a1Yhzy5rMbFI3HrHnsBkUT3K5WPIc5c9gNiiZi7mx2g6KJmDeL3aBoEubnsRsUTUb+THaDohfx8gx2g6IpWDid3aBoGhZNZTcomo5Xp7AbFM1wu1oxEwWT2Q2K3K525GHxJHaDorDb1YrZaO7+nbwFc9yuVszFWxPYDYrmY+k4doOifCzLZTcocrvakY/lz7IbFC10u1qxACueYTcoWoR3RrMbFL2G1SPZDYoKsCaH3aDoDazNZjcoWoJ1w9kNit7E+mHsBkWF2DiU3aCoEJuGsBsULcfmwewGRSuwZRC7QdFKNCllNyi6FlsHshsUrXK7WrEa2/qzGxS963a1Yg12ZLEbFK3Fzn7sBkXr3a5WbMCuR9kNijZgdx92gyJgT292gyJgby92g6LN2JfJblB0B/ZnsBsUbcGBnuwGRVtxMJ3doOh9HOrBblC0ze1qxXYcSWM3KPoQn3RjNyjyUNSV3aDIQ3EXdoOiXTjaid2gaLfb1Yo9ONaR3aBoH46nshsU7cWJDuwGRR/j8wfZDYoO4WQKu0HRQZxqx25QdBink9kNihLwJZLYEXqKgRK0ZlfoKY7DWbRkV+g5AXwPNGdnqClKuBXmJzRld4gpiq9VH8b88ltbdomUovjadY2/qym9cGNjdoyQ4jr1THRX8yvCF+PdtDWgKKkkiDomtqsxvwMNjDlnEv2HxCr3RX8ov+I/R++4TNnLkRcTy2+t9nTu8kNjp1Req/5qxTlVD77iLv+Mf4upfkLl8VXvrZZ6RddV/f7fxgXPN4j8+A8vTnMlH7qO4gAAAABJRU5ErkJggg==) no-repeat',
                    backgroundSize: '100% 100%',
                }}
            >
                {/* Render package details */}
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
                        <p className="text-base text-white font-sora font-medium">{pkg.deadline} {t('global.days')}</p>
                        <p className="text-[12px] font-sora text-[#bdbdbd] mt-2">{t('revenue.package.validTime')}</p>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-base text-[#eebc7a] font-sora font-semibold">
                            {pkg.earningsPerView} <small className="font-sora text-[12px]">USDT</small>
                        </p>
                        <p className="text-[12px] font-sora text-[#bdbdbd] mt-2">{t('revenue.package.perViewIncome')}</p>
                    </div>
                </div>

                {/* Button to trigger purchase */}
                {(pkg.active === true) && (
                    <button
                        onClick={handlePackagePurchase}
                        className="w-[100%] border border-[#805c33] bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
                        style={{
                            // background: 'linear-gradient(136deg, #ff3939, #f75757)',
                        }}
                    >
                        {pkg.price} USDT {t('revenue.package.unlockNow')}
                    </button>
                )}

                {(pkg.active === false) && (
                    <div
                        className="w-[100%] border border-[#2d2d2b] bg-[#2d2d2b] text-white py-2 rounded-full font-sora text-[14px] font-semibold flex items-center justify-center transition-colors"
                    >
                        {t('revenue.package.openSoon')}
                    </div>
                )}

            </div> 
            
        </>
    );
};

export default PackageCard;
