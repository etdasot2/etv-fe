'use client'

import React, { Suspense } from 'react'
import RegistrationForm from '@/components/register/RegisterForm'
import Link from 'next/link'
import { SUPPORT_CHAT_URL } from '@/config'
import { APP_DOWNLOAD_ICON, HOME_ICON_MAIN, SUPPORT_ICON, WORLD_ICON } from '@/components/custom-icons'
import { ChevronLeft } from 'lucide-react'
import AnimationPage from '@/components/AnimationPage'


const RegistrationPage: React.FC = () => {

  return (
    <div className="w-full min-h-screen bg-black text-white bg-full  relative" style={{
      backgroundSize: '100% 100% !important',
      background: '#151515 url(/assets/vbg-11-17.png) no-repeat top'

    }}>

      {/* <img src="/assets/some-bg.png" className="absolute bottom-0 w-full h-[300px] opacity-[.3] "/>
      <img src="/assets/some-bg.png" className="absolute top-0 w-full h-[300px] opacity-[.3] rotate-180"/> */}

      <header className="flex justify-between items-center p-4 pt-3 relative z-10">
        <div>
          <ChevronLeft size={30} opacity={.9}/>
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

      {/* <AnimationPage direction='bottom'> */}

        <div className="flex flex-col items-start justify-center px-5 py-8 mt-0 relative z-10 ">
        <AnimationPage direction='bottom'>
          <div className="flex text-left flex-col w-full mb-6">
          <img src="/assets/New Project (7).png" className="w-[200px]  " />

            {/* <span className="text-[24px] font-sora font-semibold">Hello</span>
            <span className="text-base font-sora text-white/60 font-semibold">Welcome to Eternova Films</span> */}
          </div>
          </AnimationPage>
          <Suspense>
            <RegistrationForm />
          </Suspense>

        </div>
      {/* </AnimationPage> */}

    </div>
  )
}

export default RegistrationPage