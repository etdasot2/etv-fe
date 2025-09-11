'use client';

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendVerificationCode, getUserDetails, changeFundsPassword, bindAddress } from '@/lib/api';
import DefaultLoading from '../loaders/DefaultLoading';
import { useInfoModal } from '@/context/InfoModalContext';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface BindingAddressFormData {
    address: string;
}

const BindingAddressForm: React.FC = () => {
    const { t } = useTranslation();

    const schema = yup.object().shape({
        address: yup
            .string()
            .required(t('addressList.bidingAddress.inputs.address.validation.required')),

    });

    const [isLoading, setIsLoading] = useState(false);
    const { setInfoText } = useInfoModal();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BindingAddressFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: BindingAddressFormData) => {
        setIsLoading(true)
        try {
            await bindAddress({
                rechargeChannel: 'USDT',
                mainnet: "TRC20",
                address: data.address,
            });
            setInfoText(t('addressList.bidingAddress.successBound'));
            setIsLoading(false)
            router.back();
        } catch (error: any) {
            console.log(error)
            const errorMessage = error.message || error;
            if (errorMessage === 'invalidUSDTTRC20Address') {
                setInfoText(t('addressList.bidingAddress.errors.invalidAddress'));
            } else if (errorMessage === 'addressAlreadyBind') {
                setInfoText(t('addressList.bidingAddress.errors.addressAlreadyExists'));
            } else if (errorMessage === 'onlyOneAddressAllowed') {
                setInfoText(t('addressList.bidingAddress.errors.singleAddressLimit'));
            } else {
                setInfoText(t('global.error.tryAgain'));
            }
            setIsLoading(false)
        }
    };

    const displayFirstError = () => {
        const errorKeys = Object.keys(errors) as Array<keyof BindingAddressFormData>;
        if (errorKeys.length > 0) {
            const firstErrorKey = errorKeys[0];
            const firstErrorMessage = errors[firstErrorKey]?.message;
            if (firstErrorMessage) {
                setInfoText(firstErrorMessage);
            }
        }
    };

    useEffect(() => {
        displayFirstError();
    }, [errors]);

    return (
        <>

            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </head>
            <form onSubmit={handleSubmit(onSubmit)} className=" mt-3 space-y-2 relative">
                <div>
                    <span className="font-sora text-[14px] font-medium">
                        {t('addressList.bidingAddress.inputs.rechrageChannel.label')}
                    </span>
                    <div className="relative mt-2">
                        <Input
                            type="text"
                            value={"USDT"}
                            placeholder={t('profile.fundsPassword.inputs.email.placeholder')}
                            className="w-full bg-[#20201f] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[45px] disabled:opacity-1 disabled:cursor-default"
                            disabled={true}
                        />
                    </div>
                </div>

                <div>
                    <span className="font-sora text-[14px] font-medium">
                        {t('addressList.bidingAddress.inputs.mainnet.label')}
                    </span>
                    <div className="relative mt-2">
                        <Input
                            type="text"
                            value={"TRC20"}
                            placeholder={t('profile.fundsPassword.inputs.verifyCode.placeholder')}
                            className="w-full bg-[#20201f] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[45px]"
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div>
                    <span className="font-sora text-[14px] font-medium">
                        {t('addressList.bidingAddress.inputs.address.label')}
                    </span>
                    <div className="relative mt-2">
                        <Input
                            type="text"
                            {...register('address')}
                            placeholder={t('addressList.bidingAddress.inputs.address.placeholder')}
                            className="w-full bg-[#20201f] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[45px]"
                            autoComplete="off"
                        />
                    </div>
                </div>



                <div className="w-full fixed bottom-0 left-0 right-0 pb-10 flex justify-center">
                    <div className="w-full max-w-[435px] px-5">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] text-white rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors h-[44px] px-5"
                            style={{
                                // background: 'linear-gradient(-40deg, #f40208, #ff464b)',
                            }}

                            disabled={isLoading}
                        >
                            {t('global.ok')}
                        </button>
                    </div>
                </div>

            </form>

            {isLoading && <DefaultLoading />}
        </>
    );
};

export default BindingAddressForm;