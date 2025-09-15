'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useInfoModal } from '@/context/InfoModalContext';
import { setFundsPassword } from '@/lib/api';
import { useTranslation } from 'react-i18next';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface SetFundsPassFormData {
  fundsPassword: string;
  confirmFundsPassword: string;
}

export default function SetFundsPassForm() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const { setInfoText } = useInfoModal();
  const router = useRouter();

  const schema = yup.object().shape({
    fundsPassword: yup
      .string()
      .matches(/^\d{6}$/, t('setFundsPassword.inputs.fundsPassword.validation.matches'))
      .required(t('setFundsPassword.inputs.fundsPassword.validation.required')),
    confirmFundsPassword: yup
      .string()
      .oneOf([yup.ref('fundsPassword'), undefined], t('setFundsPassword.inputs.confirmPassword.validation.matches'))
      .required(t('setFundsPassword.inputs.confirmPassword.validation.required')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetFundsPassFormData>({
    resolver: yupResolver(schema),
  });

  const handleSaveSetFundsPassword = async (data: SetFundsPassFormData) => {
    try {
      const response = await setFundsPassword(data.fundsPassword);
      if (response.success) {
        setInfoText(t('setFundsPassword.alerts.success'));
        router.back();
      }
    } catch (error: any) {
      setInfoText(t('setFundsPassword.alerts.error'));
      console.log(error)
    }
  };

  useEffect(() => {
    const errorKeys = Object.keys(errors) as Array<keyof SetFundsPassFormData>;
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0];
      const firstErrorMessage = errors[firstErrorKey]?.message;
      if (firstErrorMessage) {
        setInfoText(firstErrorMessage);
      }
    }
  }, [errors, setInfoText]);

  return (
    <form onSubmit={handleSubmit(handleSaveSetFundsPassword)} className="p-4 space-y-6 mt-2">
      <div>
        <label htmlFor="fundsPassword" className="block text-[14px] font-medium mb-1 font-sora">
          {t('setFundsPassword.inputs.fundsPassword.label')}
        </label>
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            id="fundsPassword"
            placeholder={t('setFundsPassword.inputs.fundsPassword.placeholder')}
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

      <div>
        <label htmlFor="confirmFundsPassword" className="block text-[14px] font-medium mb-1 font-sora">
          {t('setFundsPassword.inputs.confirmPassword.label')}
        </label>
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            id="confirmFundsPassword"
            placeholder={t('setFundsPassword.inputs.confirmPassword.placeholder')}
            {...register('confirmFundsPassword')}
            className="w-full bg-transparent rounded-none font-medium px-0 py-3 font-sora text-[16px] outline-none border-b border-b-white/10 border-x-0 border-t-0 h-[45px] disabled:opacity-100 disabled:cursor-default"
          />
        </div>
      </div>

      <div className="w-full fixed bottom-0 left-0 right-0  flex justify-center">
          <div className="w-full max-w-[435px]  ">
            <div className="   pl-4 pr-4 pb-7 pt-3 bg-[#1c1c1c]">
              {/* <div className="w-full h-full bg-[#000000c7] blur-md absolute left-0 top-[2px]">

          </div> */}
              <button
                type="submit"
                className="w-[100%] z-10 relative  text-white py-2 rounded-full font-sora text-[14px] font-medium transition-colors h-[44px] "
                style={{
                  background: 'linear-gradient(-40deg, #f40208, #ff464b)',

                }}
              >
                {t('global.ok')}
              </button>
            </div>
          </div>
        </div>
    </form>
  );
}