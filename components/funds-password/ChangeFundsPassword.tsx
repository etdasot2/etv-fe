'use client';

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendVerificationCode, getUserDetails, changeFundsPassword } from '@/lib/api';
import DefaultLoading from '../loaders/DefaultLoading';
import { useInfoModal } from '@/context/InfoModalContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { IMPORTANT_ICON, PASSWORD_OFF_ICON, PASSWORD_ON_ICON } from '../custom-icons';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface ChangeFundsPasswordFormData {
  verificationCode: string;
  newFundsPassword: string;
  confirmFundsPassword: string;
}

const ChangeFundsPassword: React.FC = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    verificationCode: yup
      .string()
      .required(t('profile.fundsPassword.inputs.verifyCode.validation.required')),
    newFundsPassword: yup
      .string()
      .matches(/^\d{6}$/, t('profile.fundsPassword.inputs.newPassword.validation.matches'))
      .required(t('profile.fundsPassword.inputs.newPassword.validation.required')),
    confirmFundsPassword: yup
      .string()
      .oneOf([yup.ref('newFundsPassword'), undefined], t('profile.fundsPassword.inputs.confirmPassword.validation.oneOf'))
      .required(t('profile.fundsPassword.inputs.confirmPassword.validation.required')),
  });


  const searchParams = useSearchParams();
  const isBind = searchParams.get('bind');

  const [showNewFundsPassword, setShowNewFundsPassword] = useState(false);
  const [showConfirmFundsPassword, setShowConfirmFundsPassword] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState<number>(0);
  const { setInfoText } = useInfoModal();
  const router = useRouter();

  const countdownDuration = 60;

  useEffect(() => {
    const fetchUserDetails = async () => {
      setIsLoading(true);
      try {
        const userDetails = await getUserDetails();
        setEmail(userDetails.email);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();

    const savedTimestamp = localStorage.getItem('fundsVerificationCodeSentAt');
    if (savedTimestamp) {
      const timeSinceSent = Math.floor((Date.now() - parseInt(savedTimestamp)) / 1000);
      const remainingTime = countdownDuration - timeSinceSent;
      if (remainingTime > 0) {
        setCountdown(remainingTime);
      }
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [countdown]);
  
  const [isSending, setIsSending] = useState(false);  
  const handleSendVerificationCode = async () => {
    if(isSending){
      setInfoText(t('global.dontRepeat'));
      return;
    }

    setIsSending(true)
    try {
      await sendVerificationCode();
      setInfoText(t('profile.fundsPassword.codeSent'));
      const timestamp = Date.now();
      localStorage.setItem('fundsVerificationCodeSentAt', timestamp.toString());
      setCountdown(countdownDuration);
    setIsSending(false)

    } catch (error) {
      setInfoText(t('global.error.tryAgain'));
      console.log(error)
    setIsSending(false)

    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeFundsPasswordFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ChangeFundsPasswordFormData) => {
    try {
      await changeFundsPassword({
        verificationCode: data.verificationCode,
        newFundsPassword: data.newFundsPassword,
        isBind: isBind ? true : false
      });
      setInfoText(t('profile.fundsPassword.changedSuccess'));
      router.back();
    } catch (error: any) {
      if (error === 'code_invalid_or_expired') {
        setInfoText(t('global.error.invalidCode'));
      } else {
        setInfoText(t('global.error.tryAgain'));
      }

    }
  };

  const displayFirstError = () => {
    const errorKeys = Object.keys(errors) as Array<keyof ChangeFundsPasswordFormData>;
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
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 pt-4 space-y-3">
        <div>
          <span className="font-sora text-[13px] font-medium">
            {t('profile.fundsPassword.inputs.email.label')}
          </span>
          <div className="relative mt-1">
            <Input
              type="text"
              value={email}
              placeholder={t('profile.fundsPassword.inputs.email.placeholder')}
              className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[48px] disabled:opacity-1 disabled:cursor-default"
              disabled={true}
            />
          </div>
        </div>

        <div>
          <span className="font-sora text-[13px] font-medium">
            {t('profile.fundsPassword.inputs.verifyCode.label')}
          </span>
          <div className="relative mt-1">
            <Input
              type="text"
              {...register('verificationCode')}
              placeholder={t('profile.fundsPassword.inputs.verifyCode.placeholder')}
              className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={handleSendVerificationCode}
              className={`font-sora text-[13px] absolute right-4 top-1/2 transform -translate-y-1/2 text-[#eebc7a] font-medium ${countdown > 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={countdown > 0 || isSending}
            >
              {isSending ? 
                <>{t('global.sending')}...</>
              : <>
              {countdown > 0
                ? `${t('profile.fundsPassword.inputs.verifyCode.sendBtn')} (${countdown}s)`
                : t('profile.fundsPassword.inputs.verifyCode.sendBtn')}
              </>}
            </button>
          </div>
        </div>

        <div>
          <span className="font-sora text-[13px] font-medium">
            {t('profile.fundsPassword.inputs.newPassword.label')}
          </span>
          <div className="relative mt-1">
            <Input
              type={showNewFundsPassword ? 'text' : 'password'}
              {...register('newFundsPassword')}
              placeholder={t('profile.fundsPassword.inputs.newPassword.placeholder')}
              className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowNewFundsPassword(!showNewFundsPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showNewFundsPassword ? <img src={PASSWORD_OFF_ICON} className="w-[20px]" /> : <img src={PASSWORD_ON_ICON} className="w-[20px]" />}

            </button>
          </div>
        </div>

        <div>
          <div className="relative mt-2">
            <Input
              type={showConfirmFundsPassword ? 'text' : 'password'}
              {...register('confirmFundsPassword')}
              placeholder={t('profile.fundsPassword.inputs.confirmPassword.placeholder')}
              className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowConfirmFundsPassword(!showConfirmFundsPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showConfirmFundsPassword ? <img src={PASSWORD_OFF_ICON} className="w-[20px]" /> : <img src={PASSWORD_ON_ICON} className="w-[20px]" />}

            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <img src={IMPORTANT_ICON} className="w-[16px] h-[16px] mr-1" />
            <h3 className="text-[15px] font-sora font-medium">
              {t('profile.fundsPassword.reminder.title')}
            </h3>
          </div>
          <ol className="list-decimal list-inside text-[13px] text-[#ffffff99] font-medium leading-4 font-sora ">
            <li>{t('profile.fundsPassword.reminder.points.point1')}</li>
            <li>{t('profile.fundsPassword.reminder.points.point2')}</li>
          </ol>
        </div>
        <div className="pt-2">
          <button
            type="submit"
            className="w-[100%] bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804]  text-white py-2 rounded-[20px] font-sora text-[14px] font-medium hover:bg-transparent transition-colors h-[44px]"
            style={{
              // background: 'linear-gradient(-40deg, #f40208, #ff464b)',
            }}
          >
            {t('global.ok')}
          </button>
        </div>

      </form>

      {isLoading && <DefaultLoading />}
    </>
  );
};

export default ChangeFundsPassword;