'use client';

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, AlertTriangle, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendVerificationCode, getUserDetails, changeFundsPassword, bindAddress } from '@/lib/api';
import DefaultLoading from '../loaders/DefaultLoading';
import { useInfoModal } from '@/context/InfoModalContext';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { NetworkPicker } from '../network-picker';
import { USDTIconDefault } from '../icons/global';
import { USDC_ICON } from '../custom-icons';

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
    const [isCurrencyPickerOpen, setIsCurrencyPickerOpen] = useState(false);
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('usdt');
    const [selectedNetwork, setSelectedNetwork] = useState('trc20');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BindingAddressFormData>({
        resolver: yupResolver(schema),
    });

    // Network options based on selected currency
    const getNetworkOptions = () => {
        if (selectedCurrency === 'usdt') {
            return [
                {
                    key: 'trc20',
                    icon: '/assets/tron-logo.png',
                    label: 'TRC20',
                    description: 'Tron Network'
                }
            ];
        } else if (selectedCurrency === 'usdc') {
            return [
                {
                    key: 'bep20',
                    icon: '/assets/bnb-logo.png',
                    label: 'BEP20',
                    description: 'Binance Smart Chain'
                }
            ];
        }
        return [];
    };

    const networkOptions = getNetworkOptions();

    const getSelectedCurrencyLabel = () => {
        return selectedCurrency === 'usdt' ? 'USDT' : 'USDC';
    };

    const getSelectedNetworkLabel = () => {
        const network = networkOptions.find(opt => opt.key === selectedNetwork);
        return network ? network.label : (selectedCurrency === 'usdt' ? 'TRC20' : 'BEP20');
    };

    // Currency options for the picker
    const currencyOptions = [
        {
            key: 'usdt',
            icon: <USDTIconDefault className="w-8 h-8" />,
            label: 'USDT',
            description: 'Tether USD'
        },
        {
            key: 'usdc',
            icon: <img src={USDC_ICON} className="w-8 h-8" alt="USDC" />,
            label: 'USDC',
            description: 'USD Coin'
        }
    ];

    // Reset network when currency changes
    React.useEffect(() => {
        if (selectedCurrency === 'usdt') {
            setSelectedNetwork('trc20');
        } else if (selectedCurrency === 'usdc') {
            setSelectedNetwork('bep20');
        }
    }, [selectedCurrency]);

    const onSubmit = async (data: BindingAddressFormData) => {
        setIsLoading(true)
        try {
            await bindAddress({
                rechargeChannel: getSelectedCurrencyLabel(),
                mainnet: getSelectedNetworkLabel(),
                address: data.address,
            });
            setInfoText(t('addressList.bidingAddress.successBound'));
            setIsLoading(false)
            router.back();
        } catch (error: any) {
            console.log(error)
            const errorMessage = error.message || error;
            if (errorMessage === 'invalidAddress') {
                setInfoText(t('addressList.bidingAddress.errors.invalidAddress', { currency: getSelectedCurrencyLabel(), network: getSelectedNetworkLabel() }));
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
                        <button
                            type="button"
                            className="w-full bg-[#20201f] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[45px] flex items-center justify-between text-left"
                            onClick={() => setIsCurrencyPickerOpen(true)}
                        >
                            <span className="text-white">{getSelectedCurrencyLabel()}</span>
                            <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>

                <div>
                    <span className="font-sora text-[14px] font-medium">
                        {t('addressList.bidingAddress.inputs.mainnet.label')}
                    </span>
                    <div className="relative mt-2">
                        <button
                            type="button"
                            className="w-full bg-[#20201f] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[45px] flex items-center justify-between text-left"
                            onClick={() => setIsNetworkPickerOpen(true)}
                        >
                            <span className="text-white">{getSelectedNetworkLabel()}</span>
                            <ChevronRight className="w-4 h-4 text-white" />
                        </button>
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

            <NetworkPicker
                isOpen={isCurrencyPickerOpen}
                onClose={() => setIsCurrencyPickerOpen(false)}
                title={t('addressList.bidingAddress.inputs.rechrageChannel.label')}
                options={currencyOptions}
                onSelect={(option) => {
                    setSelectedCurrency(option);
                    setIsCurrencyPickerOpen(false);
                }}
                defaultValue={selectedCurrency}
            />

            <NetworkPicker
                isOpen={isNetworkPickerOpen}
                onClose={() => setIsNetworkPickerOpen(false)}
                title={t('addressList.bidingAddress.inputs.mainnet.label')}
                options={networkOptions}
                onSelect={(option) => {
                    setSelectedNetwork(option);
                    setIsNetworkPickerOpen(false);
                }}
                defaultValue={selectedNetwork}
            />
        </>
    );
};

export default BindingAddressForm;