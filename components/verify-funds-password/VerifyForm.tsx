'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { checkFundsPassword, placeOrder, requestWithdrawal } from '@/lib/api';
import { useInfoModal } from '@/context/InfoModalContext';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface VerifyFundsPasswordData {
    fundsPassword: string;
}

export default function VerifyFundsPasswordForm() {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const { setInfoText } = useInfoModal();
    const [isFundsPasswordSet, setIsFundsPasswordSet] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const searchParams = useSearchParams();
    const isn = searchParams.get('isn');
    const type = searchParams.get('type');
    const router = useRouter();

    const schema = yup.object().shape({
        fundsPassword: yup
            .string()
            .matches(/^\d{6}$/, t('verifyFundsPassword.inputs.fundsPassword.validation.matches'))
            .required(t('verifyFundsPassword.inputs.fundsPassword.validation.required')),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VerifyFundsPasswordData>({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const checkFundsPasswordStatus = async () => {
            try {
                const response = await checkFundsPassword();
                if (response === 'no_funds_password') {
                    setInfoText(t('verifyFundsPassword.alerts.noFundsPassword'));
                    router.push("/set-funds-password");
                } else {
                    setIsFundsPasswordSet(true);
                }
            } catch (error: any) {
                console.log(error)
                setInfoText(t('verifyFundsPassword.alerts.checkError'));
                router.back();
            }
        };

        checkFundsPasswordStatus();
    }, [router, t, setInfoText]);

    const handleVerifyFundsPassword = async (data: VerifyFundsPasswordData) => {
        setIsLoading(true);
        try {
            if (type === 'order') {
                // const response = await placeOrder(isn, data.fundsPassword);

                // if (response.success) {
                //     setInfoText(t('verifyFundsPassword.alerts.purchaseSuccess'));
                //     setTimeout(() => {
                //         router.back();
                //     }, 300);
                // }
            } else if (type === 'withdrawal') {
                const response = await requestWithdrawal(isn, data.fundsPassword);

                if (response.success) {
                    setInfoText(t('verifyFundsPassword.alerts.withdrawalSuccess'));
                    setTimeout(() => {
                        router.back();
                        router.back();
                    }, 300);
                }
            } else {
                router.back();
            }
        } catch (error: any) {
            if (type === 'order') {
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
            } else if (type === 'withdrawal') {
                if (error === 'insufficient_balance') {
                    setInfoText(t('verifyFundsPassword.alerts.insufficientBalance'));
                } else if (error === 'new_funds_pw_wait_48hrs') {
                    setInfoText(t('verifyFundsPassword.alerts.wait48Hours'));
                } else if (error === 'unauthorized_request') {
                    router.back();
                } else if (error === 'incorrect_funds_password') {
                    setInfoText(t('verifyFundsPassword.alerts.incorrectPassword'));
                } else {
                    setInfoText(t('verifyFundsPassword.alerts.generalError'));
                }
            } else {
                router.back();
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const errorKeys = Object.keys(errors) as Array<keyof VerifyFundsPasswordData>;
        if (errorKeys.length > 0) {
            const firstErrorKey = errorKeys[0];
            const firstErrorMessage = errors[firstErrorKey]?.message;
            if (firstErrorMessage) {
                setInfoText(firstErrorMessage);
            }
        }
    }, [errors, setInfoText]);

    return (
        <>
            <form onSubmit={handleSubmit(handleVerifyFundsPassword)} className="p-4 space-y-6 mt-2" >
                <div>
                    <label htmlFor="fundsPassword" className="block text-[14px] font-medium mb-1 font-sora">
                        {t('verifyFundsPassword.inputs.fundsPassword.label')}
                    </label>
                    <div className="relative">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            id="fundsPassword"
                            placeholder={t('verifyFundsPassword.inputs.fundsPassword.placeholder')}
                            {...register('fundsPassword')}
                            className="w-full bg-transparent rounded-none font-medium px-0 py-3 font-sora text-[16px] outline-none border-b border-b-white/10 border-x-0 border-t-0 h-[45px] disabled:opacity-100 disabled:cursor-default"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                {isFundsPasswordSet && (
                    <div className="fixed bottom-0 left-0 w-full pl-4 pr-4 pb-6 pt-3">
                        <button
                            type="submit"
          className="w-[100%] mt-5 bg-primary  text-white py-2 rounded-md font-sora text-[14px] font-semibold  transition-colors h-[44px] "
                           
                        >
                            {t('verifyFundsPassword.buttons.verify')}
                        </button>
                    </div>
                )}
            </form>
            {isLoading && <DefaultLoading />}
        </>
    );
}