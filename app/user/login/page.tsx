'use client'
import React from 'react'
import Link from 'next/link'
import LoginForm from '@/components/login/LoginForm'
import { SUPPORT_CHAT_URL } from '@/config'
import { APP_DOWNLOAD_ICON, HOME_ICON_MAIN, SUPPORT_ICON, WORLD_ICON } from '@/components/custom-icons'
import AnimationPage from '@/components/AnimationPage'

const LoginPage: React.FC = () => {

  return (
    <div className="w-full min-h-screen bg-black text-white bg-full  relative" style={{
      backgroundSize: '100% 100% !important',
      background: '#151515 url(/assets/b01-1dv.png) no-repeat top'
    }}>

      <header className="flex justify-between items-center p-4 pt-3 relative z-10">
        <div>
        </div> 
        <div className="flex space-x-3">
          <Link href="/" className="cursor-default bg-[#ffffff24] p-[5px] rounded-full">
            <img src={HOME_ICON_MAIN} className="w-[18px] h-[18px] " />
          </Link>

          <Link href="/my/download" className="cursor-default bg-[#ffffff24] p-[5px] rounded-full">
            <img src={APP_DOWNLOAD_ICON} className="w-[18px] h-[18px] " />
          </Link>
          <Link href={SUPPORT_CHAT_URL} className="cursor-default bg-[#ffffff24] p-[5px] rounded-full">
            <img src={SUPPORT_ICON} className="w-[18px] h-[18px] " />
          </Link>

          <Link href="/my/lang" className="cursor-default bg-[#ffffff24] p-[5px] rounded-full">
            <img src={WORLD_ICON} className="w-[18px] h-[18px] " />
          </Link>
          {/* <Link href="/lang" className="cursor-default">
                            <img src="/assets/lang-icons.png" className="w-[20px] h-[20px]" />
                        </Link> */}
        </div>
      </header>

      <AnimationPage direction='bottom'>

        <div className="flex flex-col items-center justify-center px-5 py-8  relative z-10">
          <div className="flex text-left flex-col w-full mb-6">
            <img src="/assets/New Project (7).png" className="w-[200px]  " />
            {/* <span className="text-[24px] font-sora font-semibold">Hello</span>
            <span className="text-base font-sora text-white/60 font-semibold">Welcome to Eternova Films</span> */}
          </div>
          <LoginForm />

        </div>
      </AnimationPage>

    </div>
  )
}

export default LoginPage