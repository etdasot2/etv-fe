'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { sendResetPasswordCode, resetPassword } from '@/lib/api';
import { useTranslation } from 'react-i18next';
import { useInfoModal } from '@/context/InfoModalContext';
import { useRouter } from 'next/navigation';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */


interface ForgetPasswordFormData {
  email: string;
  verificationCode: string;
  newPassword: string;
}

export default function ForgetPasswordForm() {
  const { t } = useTranslation();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { setInfoText } = useInfoModal();
  const [countdown, setCountdown] = useState<number>(0);

  const countdownDuration = 60;

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('forgetPassword.inputs.email.validation.invalid'))
      .required(t('forgetPassword.inputs.email.validation.required')),
    verificationCode: yup
      .string()
      .required(t('forgetPassword.inputs.verificationCode.validation.required')),
    newPassword: yup
      .string()
      .min(6, t('forgetPassword.inputs.newPassword.validation.min'))
      .required(t('forgetPassword.inputs.newPassword.validation.required')),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ForgetPasswordFormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const savedTimestamp = localStorage.getItem('forgetPasswordVerificationCodeSentAt');
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


  const handleGetVerificationCode = async () => {
    

    const email = getValues('email');
    if (!email) {
      setInfoText(t('forgetPassword.alerts.emailRequired'));
      return;
    }

    if(isSending){
      setInfoText(t('global.dontRepeat'));
      return;
    }

    setIsSending(true);


    try {
      await sendResetPasswordCode(email);
      setInfoText(t('forgetPassword.alerts.codeSent'));
      const timestamp = Date.now();
      localStorage.setItem('forgetPasswordVerificationCodeSentAt', timestamp.toString());
      setCountdown(countdownDuration);
    setIsSending(false);

    } catch (error: any) {
      if (error === 'email_not_found') {
        setInfoText(t('forgetPassword.alerts.emailNotFound'));
      }else{
        setInfoText(t('global.error.tryAgain'));
      }
      console.log(error)
    setIsSending(false);

    }
  };

  const handleResetPassword = async (data: ForgetPasswordFormData) => {
    try {
      await resetPassword(data);
      setInfoText(t('forgetPassword.alerts.restSuccess'));
      router.back();
    } catch (error: any) {
      if (error === 'email_not_found') {
        setInfoText(t('forgetPassword.alerts.emailNotFound'));
      } else if(error === 'code_expired' ){
        setInfoText(t('forgetPassword.alerts.codeExpired'));
      }else{
        setInfoText(t('global.error.tryAgain'));
      }
    }
  };


  const displayFirstError = () => {
    const errorKeys = Object.keys(errors) as Array<keyof ForgetPasswordFormData>;
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
    <form onSubmit={handleSubmit(handleResetPassword)} className="p-4 space-y-4">
      <div>
        <label htmlFor="email" className="block text-[14px] font-medium mb-2 font-sora">
          {t('forgetPassword.inputs.email.label')}
        </label>
        <div className="relative">
          <Input
            type="email"
            id="email"
            placeholder={t('forgetPassword.inputs.email.placeholder')}
            {...register('email')}
            className="w-full bg-[#1c1c1c] rounded-lg pl-3 pr-3 py-2 text-white border-none outline-none h-[48px] font-sora text-[14px] font-medium"
          />
        </div>
      </div>

      <div>
        <label htmlFor="verificationCode" className="block text-[14px] font-medium mb-2 font-sora">
          {t('forgetPassword.inputs.verificationCode.label')}
        </label>
        <div className="relative">
          <Input
            type="text"
            id="verificationCode"
            placeholder={t('forgetPassword.inputs.verificationCode.placeholder')}
            {...register('verificationCode')}
            className="w-full bg-[#1c1c1c] rounded-lg pl-3 pr-3 py-2 text-white border-none outline-none h-[48px] font-sora text-[14px] font-medium"
          />
          <button
            type="button"
            onClick={handleGetVerificationCode}
            disabled={countdown > 0 || isSending} 
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-[#eebc7a] font-sora text-[12px] font-semibold ${
              countdown > 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSending ? 
                <>{t('global.sending')}...</>
              : <>
            {countdown > 0
              ? `${t('forgetPassword.inputs.verificationCode.button')} (${countdown}s)`
              : t('forgetPassword.inputs.verificationCode.button')}
              </>}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="newPassword" className="block text-[14px] font-medium mb-2 font-sora">
          {t('forgetPassword.inputs.newPassword.label')}
        </label>
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            id="newPassword"
            placeholder={t('forgetPassword.inputs.newPassword.placeholder')}
            {...register('newPassword')}
            className="w-full bg-[#1c1c1c] rounded-lg pl-3 pr-3 py-2 text-white border-none outline-none h-[48px] font-sora text-[14px] font-medium"
          />
          {/* <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            aria-label={showPassword ? t('forgetPassword.inputs.newPassword.hide') : t('forgetPassword.inputs.newPassword.show')}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button> */}
        </div>
      </div>

      <div className="w-full fixed bottom-0 left-0 right-0  flex justify-center">
          <div className="w-full max-w-[435px]  ">
      <div className=" w-full pl-4 pr-4 pb-6 pt-3">
        <button
          type="submit"
          className="w-[100%]   text-white py-2 rounded-full bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] font-sora text-[14px] font-medium hover:bg-transparent transition-colors h-[44px]"
          style={{
            // background: 'linear-gradient(-40deg, #f40208, #ff464b)',
          }}
        >
          {t('global.ok')}
        </button>
      </div>
      </div>
      </div>
    </form>
    </>

  );
}