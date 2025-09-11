'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerUser } from '@/lib/api'; // Assuming this function exists in api.ts
import { useRouter, useSearchParams } from 'next/navigation';
import { saveToken } from '@/lib/auth';
import PasswordInput from '../inputs/PasswordInput';
import CountrySelectorModal from '../modals/CountrySelection';
import { Input } from '../ui/input';
import Link from 'next/link';
import TermsAccepts from '../TermsAccepts';
import { useInfoModal } from '@/context/InfoModalContext';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import { ARROW_RIGHT_ICON, COUNTRY_CHOOSE_ICON } from '../custom-icons';
import AnimationPage from '../AnimationPage';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

const usernameRegex = /^[a-zA-Z](?!.*[_.]{2})[a-zA-Z0-9._]{0,18}[a-zA-Z0-9]$/;

// Define schema using Yup


// Infer TypeScript type from the `yup` schema

const RegistrationForm: React.FC = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required(t('register.inputs.username.validation.required'))
      .min(5, t('register.inputs.username.validation.min'))
      .matches(usernameRegex, t('register.inputs.username.validation.matches')),
    email: yup
      .string()
      .required(t('register.inputs.email.validation.required'))
      .email(t('register.inputs.email.validation.invalid')),
    phoneNumber: yup
      .string()
      .required(t('register.inputs.phone.validation.required'))
      .matches(/^\d+$/, t('register.inputs.phone.validation.digits')),
    password: yup
      .string()
      .required(t('register.inputs.password.validation.required'))
      .min(6, t('register.inputs.password.validation.min')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], t('register.inputs.confirmPassword.validation.match'))
      .required(t('register.inputs.confirmPassword.validation.required')),
    invitationCode: yup
      .string()
      .required(t('register.inputs.invitationCode.validation.required')),
    termsAccepted: yup
      .boolean()
      .oneOf([true], t('register.terms.validation.required'))
      .required(t('register.terms.validation.required')),
  });

  type RegistrationFormInputs = yup.InferType<typeof schema>;

  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState({ name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧' });
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isInvited, setIsInvited] = useState(false);
  const searchParams = useSearchParams();
  const invitedCode = searchParams.get('inviteCode') || '';
  const { setInfoText } = useInfoModal();
  const [isLoading, setIsLoading] = useState(false);

  // Initialize react-hook-form with `yup` resolver
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<RegistrationFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      termsAccepted: true
    }
  });

  const onSubmit: SubmitHandler<RegistrationFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      const formattedData = {
        ...data,
        phonePrefix: selectedCountry.dialCode,
        phoneNumber: `${selectedCountry.dialCode}${phoneNumber}`,
      }
      const response = await registerUser(formattedData)

      saveToken(response.accessToken)
      setIsLoading(false);
      setInfoText(t('register.success'))
      router.push('/home')
    } catch (error: any) {
      setIsLoading(false);
      if (error.message === "email_taken") {
        setInfoText(t('register.errors.emailTaken'))
      }
      if (error.message === "username_taken") {
        setInfoText(t('register.errors.usernameTaken'))
      }
      if (error.message === "invalid_referral_code") {
        setInfoText(t('register.errors.invalidReferral'))
      }
      console.error('Error during registration:', error)
    }
  }


  const watchTermsAccepted = watch('termsAccepted');

  const handleTermsChange = (accepted: boolean) => {
    setValue('termsAccepted', accepted);
  };

  useEffect(() => {
    if (invitedCode) {
      setValue('invitationCode', invitedCode);
      setIsInvited(true);
    }
  }, [invitedCode])

  const displayFirstError = () => {
    const errorKeys = Object.keys(errors) as Array<keyof RegistrationFormInputs>;
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
      <AnimationPage direction='bottom'>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-3 pt-6 bg-[#ffffff0d] backdrop-blur-[0.5rem] p-3.5 rounded-[20px] relative   mb-[40px]">
        {/* Username Input */}
        <div className="flex items-center w-full justify-between">
          <span className="font-sora text-base font-semibold w-[30%] leading-[1] text-[#eebc7a]">Account Registration</span>
          <p className="w-[55%] leading-[1.2] font-sora text-[#fff9] text-[12px] font-semibold">Already have an account?<span className="text-[#eebc7a] ml-[2px]" onClick={()=>{router.push("/login")}}>Login now</span></p>
        </div>
        <div className="relative">
          <label className="text-[14px] font-sora text-[#fffc] font-semibold">Username</label>
          <Input
            type="text"
            placeholder={t('register.inputs.username.placeholder')}
            {...register('username')}
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 rounded-none border-b border-white/20 pl-0 text-white  outline-none h-[45px] font-sora text-[14px] font-medium"
          />
        </div>



        <div className="relative">
        <label className="text-[14px] font-sora text-[#fffc] font-semibold">E-MAIL</label>
           
          <Input
            type="email"
            placeholder={t('register.inputs.email.placeholder')}
            {...register('email')}
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 rounded-none border-b border-white/20 pl-0 pr-3 py-2 text-white  outline-none h-[45px] font-sora text-[14px] font-medium"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
        <label className="text-[14px] font-sora text-[#fffc] font-semibold">Mobile phone number</label>
          <Input
            type="phoneNumber"
            placeholder={t('register.inputs.phone.placeholder')}
            value={phoneNumber}
            {...register('phoneNumber')}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full bg-transparent pl-[60px] border-t-0 border-l-0 border-r-0 rounded-none border-b border-white/20 pr-3 py-2  text-white  outline-none h-[45px] font-sora text-[14px] font-medium"
          />
          <button
            type="button"
            className="absolute left-0 bottom-0 transform -translate-y-1/2 flex items-center"
            onClick={() => setShowCountrySelector(true)}
          >
            <span className="mr-[2px] font-sora text-[14px]">{selectedCountry.dialCode}</span> 
            <img src={COUNTRY_CHOOSE_ICON} className="pointer-events-none w-[11px]"/>
          </button>
        </div>

        {/* Phone Input */}
       

        {/* Password Input using PasswordInput Component */}
        
        <PasswordInput
          id="password"
          placeholder={t('register.inputs.password.placeholder')}
          register={register('password')}
          error={errors.password?.message}
          label='Login Password'
        />

        {/* Confirm Password Input using PasswordInput Component */}
        <PasswordInput
          id="confirmPassword"
          placeholder={t('register.inputs.confirmPassword.placeholder')}
          register={register('confirmPassword')}
          error={errors.confirmPassword?.message}
          label='Confirm Password'
        />


        <div className="relative">
        <label className="text-[14px] font-sora text-[#fffc] font-semibold">Invitation Code</label>
         
          <Input
            placeholder={t('register.inputs.invitationCode.placeholder')}
            {...register('invitationCode')}
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 rounded-none border-b border-white/20 pl-0 pr-3 py-2 text-white  outline-none h-[45px] font-sora text-[14px] font-medium"
            disabled={isInvited}
          />
        </div>
        <div className="    pt-2 w-full"> 
        <button
          type="submit"
          className="w-[100%] h-[45px] rounded-[50px] flex items-center justify-center bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] text-white    font-sora text-[14px] font-semibold transition-colors   disabled:opacity-1 disabled:cursor-default
      
          "
          style={{
            // background: 'linear-gradient(-40deg, #f40208, #ff464b)',

            // background:'linear-gradient(180deg, #fd717100, rgb(253 113 113 / 10%))',

          }}
        >  
        <div className="flex items-center justify-center">
            <span className="text-[14px] font-sora font-semibold mr-2">Register</span>
          <img src={ARROW_RIGHT_ICON} className="pointer-events-none w-[12px]"/> 
        </div>
        </button>
        </div>

 

        {/* Country Selector Modal */}
        
      </form>
      <TermsAccepts onAcceptChange={handleTermsChange} initialAccepted={watchTermsAccepted} />

      </AnimationPage>
      {/* <div className="mt-3 text-center font-sora font-medium">
                    <span className="text-white text-[14px]">{t('register.links.login.text')}</span>
          <Link href="/login" className="text-secondary font-semibold text-[14px] underline">{t('register.links.login.link')}</Link>

                </div> */}

      {isLoading &&
        <DefaultLoading />}

{showCountrySelector && (
          <CountrySelectorModal
            isOpen={showCountrySelector}
            onClose={() => setShowCountrySelector(false)}
            selectedCountry={selectedCountry}
            onSelectCountry={(country) => {
              setSelectedCountry(country);
              setShowCountrySelector(false);
            }}
          />
        )}
    </>

  );
};

export default RegistrationForm;
