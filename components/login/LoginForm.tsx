'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Eye, EyeOff } from 'lucide-react'
import { loginUser } from '@/lib/api' // Your API function for login
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { saveToken } from '@/lib/auth'
import TermsAccepts from '../TermsAccepts'
import { useInfoModal } from '@/context/InfoModalContext'
import DefaultLoading from '../loaders/DefaultLoading'
import { useTranslation } from 'react-i18next'
import { ARROW_RIGHT_ICON, PASSWORD_OFF_ICON, PASSWORD_ON_ICON } from '../custom-icons'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

// LoginFormData interface
interface LoginFormData {
    identifier: string
    password: string
    loginType: 'username' | 'email'
    termsAccepted: boolean;

}
 

export default function LoginForm() {
    const { t } = useTranslation();
    
    const schema: yup.ObjectSchema<LoginFormData> = yup.object().shape({
        loginType: yup.string().oneOf(['username', 'email']).required(),
        identifier: yup
            .string()
            .when('loginType', {
                is: 'email',
                then: (schema) => schema
                    .required(t('login.inputs.email.validation.required'))
                    .email(t('login.inputs.email.validation.invalid')),
                otherwise: (schema) => schema
                    .required(t('login.inputs.username.validation.required'))
                    .min(3, t('login.inputs.username.validation.min')),
            }) as yup.StringSchema<string>,
        password: yup
            .string()
            .required(t('login.inputs.password.validation.required'))
            .min(6, t('login.inputs.password.validation.min')),
        termsAccepted: yup
            .boolean()
            .oneOf([true], t('login.terms.validation.required'))
            .required(t('login.terms.validation.required')),
    }).required();

    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [loginType, setLoginType] = useState<'username' | 'email'>('username')
    const { setInfoText } = useInfoModal();
    const [isLoading, setIsLoading] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            loginType: 'username',
            identifier: '',
            password: '',
            termsAccepted: true,
        },
    })

    const watchLoginType = watch('loginType');
    const watchTermsAccepted = watch('termsAccepted');

    useEffect(() => {
        if (watchLoginType !== loginType) {
            setLoginType(watchLoginType)
        }
    }, [watchLoginType, loginType])

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        try {
            const response = await loginUser(data)
            saveToken(response.accessToken)
            // saveToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEzYWFjNjMxYTcwY2RkOWNlN2NkN2UiLCJpYXQiOjE3Mjk3NDE2OTIsImV4cCI6MTc2MTI5OTI5Mn0._t_vqFp6_qs-p4TMGzbllEu2XwQBXH0KD7x6v2ExezI')
            router.push('/home')
            setIsLoading(false);
            setInfoText(t('login.success'))
        } catch (error: any) {
            if(error.message==="user_not_found"){
                setInfoText(t('login.errors.userNotFound'));
            }else if(error.message==="incorrect_password"){
                setInfoText(t('login.errors.wrongPassword'));
            }else{
                setInfoText(t('global.error.tryAgain'));
            }
            setIsLoading(false);
            console.error('Login error:', error)
        }
    }

    const handleLoginTypeChange = (type: 'username' | 'email') => {
        setValue('loginType', type)
        setLoginType(type)
    }

    const handleTermsChange = (accepted: boolean) => {
        setValue('termsAccepted', accepted);
    };

    const displayFirstError = () => {
        const errorKeys = Object.keys(errors) as Array<keyof LoginFormData>;
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

            <div className="w-full max-w-md   pb-5 rounded-[15px] ">
                <div className="flex mb-4  rounded-full relative bg-[#ffffff0d] backdrop-blur-[0.5rem] p-[3.5px]">
                    <button
                        type="button"
                        className={`flex-1 py-2 font-sora text-white  text-[14px] rounded-full h-[36px] ${loginType !== 'username' ? 'text-[#ffffff7d]' :'text-white'}`}
                        onClick={() => handleLoginTypeChange('username')}
                        style={{
                            background: loginType === 'username' ? 'linear-gradient(to right, #b37106, #c18610, #7c4804)' :''
                        }}
                    >
                        {t('login.tabs.username')}
                    </button>
                    <button
                        type="button"
                        className={`flex-1 py-2 font-sora text-white  text-[14px] rounded-full h-[36px] ${loginType !== 'email' ? 'text-[#ffffff7d]' :'text-white'}`}
                        onClick={() => handleLoginTypeChange('email')}
                        style={{
                            background: loginType === 'email' ? 'linear-gradient(to right, #b37106, #c18610, #7c4804)' :''
                        }}
                    >
                        {t('login.tabs.email')}
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-3 pt-6 bg-[#ffffff0d] backdrop-blur-[0.5rem] p-3.5 rounded-[20px] relative   mb-[40px]">
                <div className="flex items-start w-full justify-between">
          <span className="font-sora text-base font-semibold w-[30%] leading-[1] text-[#eebc7a]">Account Login</span>
          <p className="w-[55%] leading-[1.2] font-sora text-[#fff9] text-[12px] font-semibold text-right">No account yet?<span className="text-[#eebc7a] ml-[2px]" onClick={()=>{router.push("/reg/user")}}>Register now</span></p>
        </div>

                    <div className="relative">

          <label className="text-[14px] font-sora text-[#fffc] font-semibold">Username</label>
                         
                        <Input
                            type={loginType === 'username' ? 'text' : 'email'}
                            placeholder={t(`login.inputs.${loginType}.placeholder`)}
                            {...register('identifier')}
                            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 rounded-none border-b border-white/20 pt-0  pl-0 text-white  outline-none h-[45px] font-sora text-[14px] font-medium"
                            aria-invalid={errors.identifier ? 'true' : 'false'}
                        />
                    </div>

                    <div className="relative">

          <label className="text-[14px] font-sora text-[#fffc] font-semibold">Password</label>
                        
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder={t('login.inputs.password.placeholder')}
                            {...register('password')}
                            
                            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 rounded-none border-b border-white/20  pl-0 text-white  outline-none h-[45px] font-sora text-[14px] font-medium"

                            aria-invalid={errors.password ? 'true' : 'false'}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0  bottom-0 transform -translate-y-1/2 text-muted-foreground"
                            aria-label={showPassword ? t('login.inputs.password.hide') : t('login.inputs.password.show')}
                        >
        {showPassword ? <img src={PASSWORD_OFF_ICON} className="w-[20px]" /> : <img src={PASSWORD_ON_ICON} className="w-[20px]" />}
                        </button>
                    </div>

                    <div className="text-left">
                        <Link href="/forgetPassword" className="text-white font-sora text-[14px] font-medium">{t('login.links.forgot')}</Link>
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
            <span className="text-[14px] font-sora font-semibold mr-2">Login</span>
          <img src={ARROW_RIGHT_ICON} className="pointer-events-none w-[12px]"/> 
        </div>
        </button>
        </div>
                    {/* <button
                        type="submit"
                        className="w-[100%] bg-primary text-white py-2 rounded-[5px] font-sora text-[14px] font-semibold transition-colors h-[44px] mt-5 disabled:opacity-1 disabled:cursor-default"
                        style={{
                            // background:'linear-gradient(180deg, #fd717100, rgb(253 113 113 / 10%))',

                            // background: 'linear-gradient(136deg, #ff3939, #f75757)',
                        }}
                        disabled={isLoading}
                    >
                        {t('login.buttons.login')}
                    </button> */}


                </form>

                


            </div>

            {/* <div className="text-center font-sora font-medium  ">
                    <span className="text-white text-[14px]">{t('login.links.register.text')}</span>
                    <Link href="/reg" className="text-secondary font-semibold underline text-[14px]">{t('login.links.register.link')}</Link>
                </div> */}
            <TermsAccepts onAcceptChange={handleTermsChange} initialAccepted={watchTermsAccepted} />
            {isLoading &&
            <DefaultLoading /> }
        </>
    )
}