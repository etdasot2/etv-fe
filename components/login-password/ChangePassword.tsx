'use client';

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePassword, sendVerificationCode, getUserDetails } from '@/lib/api';
import { useInfoModal } from '@/context/InfoModalContext';
import { useRouter } from 'next/navigation';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import { PASSWORD_OFF_ICON, PASSWORD_ON_ICON } from '../custom-icons';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface ChangePasswordFormData {
  verificationCode: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePassword: React.FC = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    verificationCode: yup
      .string()
      .required(t('profile.loginPassword.inputs.verifyCode.validation.required', 'Verification code is required')),
    newPassword: yup
      .string()
      .required(t('profile.loginPassword.inputs.newPassword.validation.required', 'New password is required'))
      .min(6, t('profile.loginPassword.inputs.newPassword.validation.min', 'Password must be at least 6 characters'))
      .max(20, t('profile.loginPassword.inputs.newPassword.validation.max', 'Password cannot be longer than 20 characters')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), undefined], t('profile.loginPassword.inputs.confirmPassword.validation.oneOf', 'Passwords must match'))
      .required(t('profile.loginPassword.inputs.confirmPassword.validation.required', 'Please confirm your password')),
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState<string>(''); // State for the user's email
  const [countdown, setCountdown] = useState<number>(0); // Countdown state
  const { setInfoText } = useInfoModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const countdownDuration = 60; // 1 minute in seconds

  // Fetch user details on mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      setIsLoading(true);
      try {
        const userDetails = await getUserDetails(); // Call the API to get user details
        setEmail(userDetails.email); // Set the user's email
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();

    // Check if a countdown exists in local storage
    const savedTimestamp = localStorage.getItem('verificationCodeSentAt');
    if (savedTimestamp) {
      const timeSinceSent = Math.floor((Date.now() - parseInt(savedTimestamp)) / 1000);
      const remainingTime = countdownDuration - timeSinceSent;
      if (remainingTime > 0) {
        setCountdown(remainingTime); // Continue countdown if time is left
      }
    }
  }, []);

  // Countdown effect to update every second
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

  // Handle sending the verification code
  const handleSendVerificationCode = async () => {
    setIsSending(true);

    if(isSending){
      setInfoText(t('global.dontRepeat'));
      return;
    }

    try {
      await sendVerificationCode(); // Call the API function
      setInfoText(t('profile.loginPassword.codeSent'));

      const timestamp = Date.now();
      localStorage.setItem('verificationCodeSentAt', timestamp.toString()); // Save the current time
      setCountdown(countdownDuration); // Start countdown
    setIsSending(false);

    } catch (error) {
      setInfoText('Something went wrong, try again later');
      console.log(error);
    setIsSending(false);

    }
  };

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: yupResolver(schema),
  });

  // Handle form submission for changing password
  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      await changePassword({
        verificationCode: data.verificationCode,
        newPassword: data.newPassword,
      });
      setInfoText(t('profile.loginPassword.changedSuccess'));
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
    const errorKeys = Object.keys(errors) as Array<keyof ChangePasswordFormData>;
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0];
      const firstErrorMessage = errors[firstErrorKey]?.message; // Access the message of that error
      if (firstErrorMessage) {
        setInfoText(firstErrorMessage); // Show the error message in the modal
      }
    }
  };

  // Call this function in the useEffect to trigger when errors change
  useEffect(() => {
    displayFirstError();
  }, [errors]);

  return (
    <>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-3">
        <div>
          <span className="font-sora text-[13px] font-medium">{t('profile.loginPassword.inputs.email.label')}</span>
          <div className="relative mt-1">
            <Input
              type="text"
              value={email} // Display the fetched email
              placeholder={t('profile.loginPassword.inputs.email.placeholder')}
              className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[48px] disabled:opacity-1 disabled:cursor-default"
              disabled={true} // Email is disabled
            />
          </div>
        </div>

        <div>
          <span className="font-sora text-[13px] font-medium">{t('profile.loginPassword.inputs.verifyCode.label')}</span>
          <div className="relative mt-1">
            <Input
              type="text"
              {...register('verificationCode')}
              placeholder={t('profile.loginPassword.inputs.verifyCode.placeholder')}
              className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={handleSendVerificationCode}
              className={`font-sora text-[13px] absolute right-4 top-1/2 transform -translate-y-1/2 text-[#eebc7a] font-medium ${countdown > 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={countdown > 0}
            >
               {isSending ? 
                <>{t('global.sending')}...</>
              : <>
              {countdown > 0 ? `${t('profile.loginPassword.inputs.verifyCode.sendBtn')} (${countdown}s)` : t('profile.loginPassword.inputs.verifyCode.sendBtn')}
              </> }
            
            </button>
          </div>
        </div>

        <div>
          <span className="font-sora text-[13px] font-medium">{t('profile.loginPassword.inputs.newPassword.label')}</span>
          <div className="relative mt-1">
            <Input
              type={showNewPassword ? 'text' : 'password'}
              {...register('newPassword')}
              placeholder={t('profile.loginPassword.inputs.newPassword.placeholder')}
              className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showNewPassword ? <img src={PASSWORD_OFF_ICON} className="w-[20px]" /> : <img src={PASSWORD_ON_ICON} className="w-[20px]" />}

            </button>
          </div>
        </div>

        <div>
          <div className="relative mt-2">
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
              placeholder={t('profile.loginPassword.inputs.confirmPassword.placeholder')}
              className="w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showConfirmPassword ? <img src={PASSWORD_OFF_ICON} className="w-[20px]" /> : <img src={PASSWORD_ON_ICON} className="w-[20px]" />}

            </button>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-[100%]  bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804]  text-white py-2 rounded-[20px] font-sora text-[14px] font-semibold hover:bg-transparent transition-colors h-[44px]"
            style={{
              // background: 'linear-gradient(-40deg, #f40208, #ff464b)',
            }}
          >
            {t('global.ok')}
          </button>
        </div>

      </form>

      {isLoading &&
        <DefaultLoading />}
    </>
  );
};

export default ChangePassword;
