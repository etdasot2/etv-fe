import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ADD_ICON, SELECT_CIRCLE_ICON, SELECT_SELECTED_ICON, TRASH_ICON } from '../custom-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { getUserAddresses, deleteAddress } from '@/lib/api';
import { useModal } from '@/context/modal-context';
import { useInfoModal } from '@/context/InfoModalContext';
import DefaultLoading from '../loaders/DefaultLoading';

interface Address {
    _id: string;
    rechargeChannel: string;
    mainnet: string;
    address: string;
    createdAt: Date;
}

export default function ListAddresses() {
    const { t } = useTranslation();
    const router = useRouter();
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [loading, setLoading] = useState(true);
    const { setInfoText } = useInfoModal();
    const searchParams = useSearchParams();

    const isSelectAddress = searchParams.get('isSelectAddress') || '';
    const coinId = searchParams.get('coinId') || '';
    const chainName = searchParams.get('chainName') || '';

    // State for selected address id in select mode
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);

    useEffect(() => {
        const loadAddresses = async () => {
            try {
                // Convert coinId to uppercase for API (usdt -> USDT, usdc -> USDC)
                const coin = coinId ? coinId.toUpperCase() : undefined;
                // Convert chainName to uppercase for API (trc20 -> TRC20, bep20 -> BEP20)
                const chain = chainName ? chainName.toUpperCase() : undefined;
                
                const data = await getUserAddresses(coin, chain);
                setAddresses(data);
            } catch (error) {
                console.error('Error loading addresses:', error);
            } finally {
                setLoading(false);
            }
        };
        loadAddresses();
    }, [coinId, chainName]);

    const { openModal } = useModal();

    const handleDelete = (addressId: string) => {
        openModal({
            message: t('modal.content.deleteAddress.main'),
            onConfirm: async () => {
                try {
                    await deleteAddress(addressId);
                    setAddresses(prev => prev.filter(addr => addr._id !== addressId));
                    console.log('Address deleted');
                    setInfoText(t('global.success'));
                } catch (error: any) {
                    const errorMessage = error.message || error;
                    if (errorMessage === 'addressUsed') {
                        setInfoText(t('addressList.deleteAddress.errors.usedAddress'));
                    } else {
                        setInfoText(t('global.error.tryAgain'));
                    }
                }
            }
        });
    };

    return (
        <div className="pl-4 pr-4 pt-3">
            {!loading && addresses.length === 0 ? (
                <>
                    {/* You can display a message when there are no addresses */}
                    {/* <div className="text-center text-gray-400 py-4">
                        {t('addressList.noAddresses')}
                    </div> */}
                </>
            ) : (
                <div className="space-y-4">
                    {addresses.map(addr =>
                        isSelectAddress ? (
                            <div
                                key={addr._id}
                                className="flex   items-center cursor-pointer w-full "
                                onClick={() => setSelectedAddressId(addr._id)}
                            >
                                <div className="flex items-center w-full">
                                    <div className="p-3.5 rounded-[10px] bg-[#1c1c1c] relative w-fit flex-1">
                                        <div className="flex justify-between items-center ">
                                            <div>
                                                <p className="text-[14px] font-sora font-semibold text-white break-all ">
                                                    {addr.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="ml-2 flex  flex-shrink-0">
                                        {selectedAddressId !== addr._id ? (
                                            <img src={SELECT_CIRCLE_ICON} className="w-[15.5px] h-[16px]" />
                                        ): (
                                            <img src={SELECT_SELECTED_ICON} className="w-[15.5px] h-[16px]" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={addr._id}
                                className="p-3.5 rounded-[10px] bg-[#1c1c1c] relative"
                            >
                                <div className="flex justify-between items-center pr-[40px]">
                                    <div>
                                        <p className="text-[14px] font-sora font-semibold text-white break-all">
                                            {addr.address}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="absolute right-0 top-0 bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] h-full flex items-center justify-center w-[45px] rounded-r-[10px]"
                                    onClick={() => handleDelete(addr._id)}
                                >
                                    <img src={TRASH_ICON} className="w-[20px] h-[20px]" alt="Delete" />
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}

            {loading && <DefaultLoading />}

            <button
                className="rounded-full w-full flex bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] items-center justify-center h-[46px]  font-sora text-white mt-5"
                onClick={() => router.push("/user/wallet/bindAddress")}
            >
                <img src={ADD_ICON} className="w-[16px] h-[16px] mr-1" alt="Add" />
                {t('addressList.addAddressBtn')}
            </button>

            {isSelectAddress && (
                <div className="w-full fixed bottom-0 left-0 right-0 pb-10 flex justify-center">
                    <div className="w-full max-w-[435px] px-5">
                        <button
                            type="button"
                            onClick={() => {
                                if (selectedAddressId) {
                                    router.replace(`/user/wallet/withdraw?hash=${selectedAddressId}`);
                                } else {
                                    setInfoText(t('addressList.pleaseSelectAddress'));
                                }
                            }}
                            className="w-full  border border-[#ffce4b] text-[#A06500] rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors h-[44px] px-5"
                            style={{
                                // background: 'linear-gradient(-40deg, #f40208, #ff464b)',
                                background: 'linear-gradient(136deg, #FFEA8F, #FFD14D)',

                            }}
                        >
                            {t('global.ok')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
