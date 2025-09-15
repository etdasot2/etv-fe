'use client'

import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AlertCircle, ChevronRight } from 'lucide-react'
import { fetchUserBalance, initiateWithdrawal, selectAddress } from '@/lib/api'
import { USDTIconDefault } from '../icons/global'
import { Input } from '../ui/input'
import DefaultLoading from '../loaders/DefaultLoading'
import CryptoAndNetworkPopup from '../popups/CryptoAndNetwork'
import { useInfoModal } from '@/context/InfoModalContext'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { CHOOSE_ADDRESS_ICON, USDC_ICON } from '../custom-icons'
import { useSecurityVerification } from '@/context/FundsPasswordContext'
import { formatWithDecimalsNumber } from '@/utils/formatDecmials'
import { NetworkPicker } from '../network-picker'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */



const calculateFees = (amount: number) => {
  const handlingFee = 1; // 1 USDT handling fee
  let taxRate = 0;

  if (amount >= 15 && amount <= 99) {
    taxRate = 0.08; // 8%
  } else if (amount >= 100 && amount <= 499) {
    taxRate = 0.05; // 5%
  } else if (amount >= 500 && amount <= 999) {
    taxRate = 0.01; // 1%
  }
  // Above 1000 USDT is tax free (taxRate remains 0)

  const taxFee = amount * taxRate;
  const actualAmount = amount - handlingFee - taxFee;

  return {
    handlingFee,
    taxFee,
    actualAmount
  };
};

type WithdrawFormInputs = {
  address: string
  amount: number
}

export default function WithdrawForm() {
  const { t } = useTranslation();
 

  const { openVerification } = useSecurityVerification()


  const searchParams = useSearchParams();

  const addressId = searchParams.get('hash') || '';
  
  const schema = yup.object().shape({
    address: yup
      .string()
      .required(t('withdraw.validation.address.required')),
    amount: yup
      .number()
      .required(t('withdraw.validation.amount.required'))
      .typeError(t('withdraw.validation.amount.invalid'))
      .min(15, t('withdraw.validation.amount.min'))
      .max(50000, t('withdraw.validation.amount.max'))
  });

  const [availableBalance, setAvailableBalance] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isNetworkPopupOpen, setIsNetworkPopupOpen] = useState(false)
  const [fees, setFees] = useState({ handlingFee: 0, taxFee: 0, actualAmount: 0 })
  const { setInfoText } = useInfoModal()
  const router = useRouter();
  const [isCurrencyPickerOpen, setIsCurrencyPickerOpen] = useState(false);
  const [isNetworkPickerOpen, setIsNetworkPickerOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('usdt');
  const [selectedNetwork, setSelectedNetwork] = useState('trc20');
  const [rememberedAddresses, setRememberedAddresses] = useState<{[key: string]: string}>({});
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<WithdrawFormInputs>({
    resolver: yupResolver(schema)
  })

  const amount = watch('amount')

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

  // Simple function to handle currency/network changes
  const handleCurrencyNetworkChange = (newCurrency: string, newNetwork: string) => {
    const currentAddress = watch('address');
    const currentKey = `${selectedCurrency}-${selectedNetwork}`;
    
    // Store current address if it exists
    if (currentAddress) {
      setRememberedAddresses(prev => ({
        ...prev,
        [currentKey]: currentAddress
      }));
    }
    
    // Clear address field
    setValue('address', '');
    
    // Update currency and network
    setSelectedCurrency(newCurrency);
    setSelectedNetwork(newNetwork);
    
    // Restore remembered address for new combination
    const newKey = `${newCurrency}-${newNetwork}`;
    const rememberedAddress = rememberedAddresses[newKey];
    if (rememberedAddress) {
      setTimeout(() => {
        setValue('address', rememberedAddress);
      }, 100);
    }
  };

  useEffect(() => {
    const fetchBalance = async () => {
      setIsLoading(true)
      try {
        const data = await fetchUserBalance()
        setAvailableBalance(parseFloat(data.withdrawal))
      } catch (error) {
        console.error('Error fetching balance:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBalance()
  }, [])

  useEffect(() => {
    if (addressId) {
      const fetchAddressDetails = async () => {
        try {
          const addressDetails = await selectAddress(addressId);
          
          // Set currency and network based on address details
          const coin = addressDetails.coin?.toLowerCase() || 'usdt';
          const chainName = addressDetails.chainName?.toLowerCase() || 'trc20';
          
          // Set the address value
          setValue('address', addressDetails.address.address);
          
          // Update currency and network
          setSelectedCurrency(coin);
          setSelectedNetwork(chainName);
          
          // Store the address for this currency/network combination
          const currentKey = `${coin}-${chainName}`;
          setRememberedAddresses(prev => ({
            ...prev,
            [currentKey]: addressDetails.address.address
          }));
        } catch (error: any) {
          if (error === 'unathoruziedAddress') {
            setInfoText(t('addressList.errors.unAuthroziedAddress'));
          } else {
            setInfoText(t('global.error.tryAgain'));
          }
        }
      }
      fetchAddressDetails();
    }
  }, [addressId, setValue, setInfoText, t]);


  useEffect(() => {
    if (amount && amount >= 10) {
      const calculatedFees = calculateFees(amount)
      setFees(calculatedFees)
    } else {
      setFees({ handlingFee: 0, taxFee: 0, actualAmount: 0 })
    }
  }, [amount])

  const onSubmit: SubmitHandler<WithdrawFormInputs> = async (data) => {
    if (data.amount > availableBalance) {
      setInfoText(t('global.insufficientBalance'))
      return
    }
    if(!addressId){
      setInfoText(t('withdraw.validation.address.required'))
      return
    }
    openVerification({
      onSuccess: async (hash) => {
        setIsLoading(true)
        try {
          const response = await initiateWithdrawal(data.amount, addressId, fees.actualAmount, hash)
          if(response.success){
            setInfoText(t('verifyFundsPassword.alerts.withdrawalSuccess'));
            router.back();
          }
        } catch (error: any) {
          const errorMessage = error.message || error
          if (error.message === 'new_funds_pw_wait_48hrs') {
                setInfoText(t('global.wait48hrs'))
              } else if (error.message === 'insufficient_balance') {
                setInfoText(t('global.insufficientbalance'))
              } else if (error.message === 'requestInProgress') {
                setInfoText(t('global.ongoingWithdrawal'))
              } else if (error.message === 'wait_24hrs_between_withdrawals') {
                setInfoText(t('global.waitAfterSuccessWithdraw'))
              }else if (error.message === 'wait_24hrs_after_cancel_withdrawal') {
                setInfoText(t('global.waitAfterCanceledWithdraw'))
              } else {
                setInfoText('An error occurred, please try again later')
              }
          
        } finally {
          setIsLoading(false)
        }
      },
      onFailure: () => {

      },
    })

    // setIsLoading(true);
    // try {
    //   // Initiate withdrawal
    //   const response = await initiateWithdrawal(fees.actualAmount, data.address, data.amount)

    //   // Redirect to verify-funds-password page with isn and type
    //   router.push(`/verify-funds-password?isn=${response.initiateId}&type=withdrawal`)
    //   setIsLoading(false);

    // } catch (error: any) {
    //   setIsLoading(false);
    //   if (error.message === 'new_funds_pw_wait_48hrs') {
    //     setInfoText(t('global.wait48hrs'))
    //   } else if (error.message === 'insufficient_balance') {
    //     setInfoText(t('global.insufficientbalance'))
    //   } else if (error.message === 'requestInProgress') {
    //     setInfoText(t('global.ongoingWithdrawal'))
    //   } else if (error.message === 'wait_24hrs_between_withdrawals') {
    //     setInfoText(t('global.waitAfterSuccessWithdraw'))
    //   } else {
    //     setInfoText('An error occurred, please try again later')
    //   }
    // }
  }

  const handleWithdrawAll = () => {
    const wholeBal = Math.floor(availableBalance) // Ensure whole number
    setValue('amount', wholeBal)
  }

  useEffect(() => {
    const errorKeys = Object.keys(errors) as Array<keyof WithdrawFormInputs>
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0]
      const firstErrorMessage = errors[firstErrorKey]?.message
      if (firstErrorMessage) {
        setInfoText(firstErrorMessage)
      }
    }
  }, [errors, setInfoText])

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" p-4 pt-4">

          {/* <div className="rounded-lg p-4 mb-4 w-full relative h-auto min-h-[75px]">
            <div className="flex justify-between w-full relative z-10">
              <div className="flex flex-col  ">
                <p className="text-[14px] font-sora mt-1">{t('withdraw.currentlyAvailableAssets')}(USDT)</p>
                <p className="text-[28px] font-medium text-white font-sora">{formatWithDecimalsNumber(Number(availableBalance))}
                </p>
              </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0"
              style={{
                background: 'url(/assets/bg1.71fc6383.png) no-repeat',
                backgroundSize: '100% 100%',
              }}
            ></div>
          </div> */}

          <div className=" rounded-lg p-4 mb-4 w-full relative h-auto min-h-[80px]"
        >
        
          <div className="flex justify-between w-full relative z-10">
            <div className="flex flex-col items-center justify-center w-full">
                <p className="text-[12px] font-sora mt-1 text-[#936616]">{t('withdraw.currentlyAvailableAssets')}(USDT)</p>
                <p className="text-[28px] font-normal text-[#936616] font-sora">{formatWithDecimalsNumber(Number(availableBalance))}
                </p>
            </div>
  
          </div>
          <div className="w-full h-full absolute top-0 left-0"
          
          
          style={{
            background:'url(/assets/bg-assets.png) no-repeat',
            backgroundSize:'100% 100%',
            // filter:'invert(75%) sepia(100%) saturate(500%) hue-rotate(-50deg)'
          }}
          ></div>
        </div>


          <div className="mt-4">
            <h2 className="text-[14px] font-sora font-medium mb-2 uppercase">{t('withdraw.selectCurrency')}</h2>
            <div className="pt-1 flex items-center gap-2">

              <div 
                className={`flex items-center p-2 rounded-lg pl-[11px] pr-[11px] cursor-pointer transition-all duration-200 ${
                  selectedCurrency === 'usdt' 
                    ? 'bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804]' 
                    : ''
                }`}
                onClick={() => handleCurrencyNetworkChange('usdt', 'trc20')}
              >
                <USDTIconDefault className="w-[24px] h-[24px]" />
                <span className={`uppercase text-[16px] font-sora ml-1 font-medium ${
                  selectedCurrency === 'usdt' ? 'text-white' : 'text-[#fff9]'
                }`}>
                  USDT
                </span>
              </div>

              <div 
                className={`flex items-center p-2 rounded-lg pl-[11px] pr-[11px] cursor-pointer transition-all duration-200 ${
                  selectedCurrency === 'usdc' 
                    ? 'bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804]' 
                    : ''
                }`}
                onClick={() => handleCurrencyNetworkChange('usdc', 'bep20')}
              >
                <img src={USDC_ICON} className="w-[24px] h-[24px]" />
                <span className={`uppercase text-[16px] font-sora ml-1 font-medium ${
                  selectedCurrency === 'usdc' ? 'text-white' : 'text-[#fff9]'
                }`}>
                  USDC
                </span>
              </div>

            </div>

          </div>

          <div className="mt-6">
            <h2 className="text-[14px] font-sora font-medium mb-2 uppercase">{t('withdraw.mainnet')}</h2>
            <button
              type="button"
              className="w-full bg-[#1c1c1c] p-4 pt-3 pb-3 rounded-lg flex items-center justify-between"
              onClick={() => setIsNetworkPickerOpen(true)}
            >
              <div className="flex items-center">
                <span className="font-sora text-[13px] font-medium">{getSelectedNetworkLabel()}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>



          <div className="mt-3">
            <span className="font-sora text-[14px] font-medium uppercase"  >{t('withdraw.withdrawalAddress')}</span>
            <div className="relative mt-2"
            
            onClick={()=>{


              router.replace(`/user/wallet/addressList/?coinId=${selectedCurrency}&chainName=${selectedNetwork}&isSelectAddress=true`)
            }}
            >
              {/* <div className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 text-[#737373] pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[45px] disabled:cursor-default disabled:opacity-1">
              {t('withdraw.withdrawalAddressPL')}
              </div> */}
              <div
                className={`w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-[50px] pt-3 pb-3 font-sora text-[14px] min-h-[45px] break-all whitespace-pre-wrap ${
                  watch('address') ? 'text-white' : 'text-[#737373]'
                }`}
                style={{ wordBreak: 'break-all' }}
              >
                {watch('address') || t('withdraw.withdrawalAddressPL')}
              </div>

              <div className="absolute right-4 top-3.5">
                <img src={CHOOSE_ADDRESS_ICON} className="w-[22px] h-[18px]" />

              </div>
            </div>
          </div>

          <div className="mt-3">
            <span className="font-sora text-[14px] font-medium uppercase">{t('withdraw.withdrawalAmount')}</span>
            <div className="relative mt-2 bg-[#1c1c1c] border-l border-r border-t border-[#242424]  rounded-t-[10px] pb-1">
              <div className="p-2 pb-0"> 
              <Input
                type="number"
                {...register('amount')}
                placeholder={t('withdraw.withdrawalAmount')}
                className="w-full bg-[#1f1f1f] rounded-[10px] border border-[#242424]  font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none  h-[45px]"
                autoComplete="off"
              />
              </div>
              
              <button
                type="button"
                onClick={handleWithdrawAll}
                className="absolute right-6 top-[32px] transform -translate-y-1/2 text-[#eebc7a] font-sora text-[14px] font-medium"
              >
                {t('withdraw.all')}
              </button>
            </div>
            <div className="bg-[#1c1c1c] border-l border-r border-b border-[#242424] rounded-b-[10px] pl-3 pt-2 pb-3 pr-3">
              <div className="text-[12px] font-sora text-white flex font-medium items-center">{t('withdraw.withdrawalAmount')}: <div className="text-[#eebc7a] ml-1">15 USDT - 50000 USDT</div></div>
            </div>
          </div>

          <div className="mt-3 flex flex-col">
            <div className="w-full justify-between flex">
              <div className="font-sora text-[#ffffff99] text-[13px] font-medium">{t('withdraw.fees')}:</div>
              <div className="font-sora text-[#eebc7a] text-[13px] font-medium">{formatWithDecimalsNumber(fees.handlingFee)} USDT</div>
            </div>
            <div className="w-full justify-between flex mt-1">
              <div className="font-sora text-[#ffffff99] text-[13px] font-medium">{t('withdraw.incomeTax')}:</div>
              <div className="font-sora text-white text-[13px] font-medium">{formatWithDecimalsNumber(fees.taxFee)} USDT</div>
            </div>
            <div className="w-full justify-between flex mt-1">
              <div className="font-sora text-[#ffffff99] text-[13px] font-medium">{t('withdraw.actualArrival')}:</div>
              <div className="font-sora text-white text-[13px] font-medium">{formatWithDecimalsNumber(fees.actualAmount)} USDT</div>
            </div>
          </div>
        </div>


        <div className="w-full fixed bottom-0 left-0 right-0  flex justify-center">
          <div className="w-full max-w-[435px]  ">
            <div className="   pl-4 pr-4 pb-7 pt-3 bg-[#1c1c1c]">
              {/* <div className="w-full h-full bg-[#000000c7] blur-md absolute left-0 top-[2px]">

          </div> */}
              <button
                type="submit"
                className="w-[100%] z-10 relative bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804]  text-white py-2 rounded-full font-sora text-[14px] font-medium transition-colors h-[44px] "
                style={{
                  // background: 'linear-gradient(-40deg, #f40208, #ff464b)',

                }}
              >
                {t('withdraw.confirmWithdrawal')}
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 pt-0">
          <div className="flex items-center mb-2">
            <AlertCircle className="w-5 h-5 text-[#eebc7a] mr-1" />
            <h3 className="text-[15px] font-sora font-medium">{t('withdraw.withdrawalInstructions')}:</h3>
          </div>
          <ol className=" font-sora list-inside text-[#928d86] font-medium text-[13px] leading-[1.2]">
            <li>{t('withdraw.withdrawalInstruction1')}</li>
            <li>{t('withdraw.withdrawalInstruction7')}</li>
            <li>{t('withdraw.withdrawalInstruction2')}</li>
            <li>{t('withdraw.withdrawalInstruction3')}</li>
            <li>{t('withdraw.withdrawalInstruction4')}:<br />15-99 USDT: 8% tax<br />100-499 USDT: 5% tax<br />500-999 USDT: 1% tax<br />{t('withdraw.withdrawalInstruction5')}<br />{t('withdraw.withdrawalInstruction6')}</li>
          </ol>
        </div>

        <div className="h-[50px]"></div>

        {isLoading && <DefaultLoading />}

        <CryptoAndNetworkPopup open={isNetworkPopupOpen} onClose={() => setIsNetworkPopupOpen(false)} />


      </form>
        <NetworkPicker
          isOpen={isNetworkPickerOpen}
          onClose={() => setIsNetworkPickerOpen(false)}
          title={t('withdraw.mainnet')}
          options={networkOptions}
          onSelect={(option) => {
            handleCurrencyNetworkChange(selectedCurrency, option);
            setIsNetworkPickerOpen(false);
          }}
          defaultValue={selectedNetwork}
        />
    </>
  )
}