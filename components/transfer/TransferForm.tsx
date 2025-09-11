'use client';

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fetchUserBalance, transferFunds } from '@/lib/api'; 
import { USDTIconDefault } from '../icons/global';
import { Input } from '../ui/input';
import { useInfoModal } from '@/context/InfoModalContext';
import DefaultLoading from '../loaders/DefaultLoading';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { formatWithDecimalsNumber } from '@/utils/formatDecmials';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

// Define the validation schema using Yup
 

type TransferFormInputs = {
  amount: number;
};

export default function TransferForm() {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    amount: yup
      .number()
      .typeError(t('transfer.validation.amount.invalid'))
      .min(1, t('transfer.validation.amount.min'))
      .required(t('transfer.validation.amount.required'))
  });


  const [availableBalance, setAvailableBalance] = useState<number>(0); // State for Withdrawal Balance
  const [memberPoints, setMemberPoints] = useState<number>(0); // State for Withdrawal Balance   
  const [isLoading, setIsLoading] = useState(false);
  const { setInfoText } = useInfoModal();
  const router = useRouter();


  const { register, handleSubmit, setValue, formState: { errors } } = useForm<TransferFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  useEffect(() => {
    const fetchBalance = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUserBalance();
        setAvailableBalance(parseFloat(data.withdrawal)); // Withdrawal Balance
        setMemberPoints(parseFloat(data.task))
        // setMemberPointBalance(parseFloat(data.task)); // Member Points Balance
      } catch (error) {
        console.error('Error fetching balance:', error); 
      } finally {
        setIsLoading(false);
      }
    };
    fetchBalance();
  }, []);

  // Handle form submission
  const onSubmit: SubmitHandler<TransferFormInputs> = async (data) => {

    if (data.amount > availableBalance) {
      setInfoText(t('global.insufficientbalance'))
      return;
    }

    setIsLoading(true);
    try {
      await transferFunds(data.amount);
      setInfoText(t('transfer.transferSuccessfully'))
      setValue('amount', 0);
      router.back();
    } catch (err: any) {
      console.log(err.message)
      setIsLoading(false);
    }
  };
 

  useEffect(() => {
    const errorKeys = Object.keys(errors) as Array<keyof TransferFormInputs>
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0]
      const firstErrorMessage = errors[firstErrorKey]?.message
      if (firstErrorMessage) {
        setInfoText(firstErrorMessage)
      }
    }
  }, [errors, setInfoText])

  const handleWithdrawAll = () => {
    const wholeBal = Math.floor(availableBalance) // Ensure whole number
    setValue('amount', wholeBal)
  }

  return (
    <>

<head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>


      <div className="p-5 pt-3">
        <div>
          <h2 className="text-[14px] font-sora font-medium mb-1 uppercase">{t('transfer.transferCurrency')}</h2>
          <button
            className="w-full bg-[#1c1c1c] cursor-default p-4 pt-3 pb-3 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center">
              <USDTIconDefault className="w-[22px] h-[22px]" />
              <span className="font-sora text-[15px] font-medium ml-2">USDT</span>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-[#1c1c1c] p-4 pl-3 rounded-[10px]">
            <div className="flex items-center ">
              <img src="/assets/Name1.3e9e58cf.png" className="w-[36px] h-[36px]" />
              <div className="flex flex-col ml-1">
                <span className="text-[12px]  text-[#ffffff99] font-sora leading-3">{t('transfer.rechargeAndWithdraw')}</span>
                <p className="text-[12px] font-sora font-bold mt-1">{t('transfer.balance')}: {formatWithDecimalsNumber(availableBalance)}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1c1c1c] p-4 pl-3 rounded-[10px] flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src="/assets/Name2.6b62d8f1.png" className="w-[36px] h-[36px]" />
              <div className="flex flex-col ml-2">
                <span className="text-[12px]  text-[#ffffff99] font-sora leading-3">{t('transfer.memberPoint')}</span>
                <p className="text-[12px] font-sora font-bold mt-1">{t('transfer.balance')}: {formatWithDecimalsNumber(memberPoints)}</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3">
            <span className="font-sora text-[14px] font-medium uppercase">{t('transfer.transferAmount')}</span>

            <div className="relative mt-2  rounded-t-[10px] pb-1">
              <Input
                type="number"
                {...register('amount')}
                placeholder={t('transfer.enterAmount')}
                className={`w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[45px]`}
                autoComplete="off"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#eebc7a] font-sora text-[14px] font-medium"
                onClick={handleWithdrawAll}
              >
                {t('transfer.all')}
              </button>
            </div>
          </div>

          <div className="w-full fixed bottom-0 left-0 right-0  flex justify-center">
          <div className="w-full max-w-[435px]  ">
            <div className="   pl-5 pr-5 pb-7 pt-3 bg-[#1c1c1c]">
              {/* <div className="w-full h-full bg-[#000000c7] blur-md absolute left-0 top-[2px]">

          </div> */}
              <button
                type="submit"
                className="w-[100%] z-10 relative bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804]  text-white py-2 rounded-full font-sora text-[14px] font-medium transition-colors h-[44px] "
                style={{
                  // background: 'linear-gradient(-40deg, #f40208, #ff464b)',

                }}
              >
              {t('transfer.confirmTransfer')}

              </button>
            </div>
          </div>
        </div>
           

        </form>
      </div> 

      {isLoading && <DefaultLoading />}
    </>
  );
}
