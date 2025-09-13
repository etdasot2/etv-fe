'use client'
import React from 'react'
import BottomBar from '@/components/bottomBar'
import Packages from '@/components/revenue-music/Packages'
import RevenueStats from '@/components/revenue-music/Stats'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import PackageCategories from '@/components/revenue/PackageCategories'
import AnimationPage from '@/components/AnimationPage'

const MemberCenter = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] text-white min-h-screen relative"
    >
      <img src="/assets/main-bg.png" className=" max-w-[435px] fixed top-0 left-1/1 w-full h-[400px]  opacity-[.7] "/>

      <BackTitle 
        title={t('revenueMusic.title')}

      />
      <AnimationPage direction='top'>
        <div className="p-4 pl-5 pr-5 relative z-10">

          <RevenueStats />
        </div>

        {/* <div className="flex pl-5 pr-5 gap-3 relative z-10 mb-6"> 

          <div className="bg-[#1c1c1c] w-full p-4 rounded-[10px] flex "> 
              <div className="flex  flex-col ">
                <div className="flex items-center">
                  <span className="text-[13px] font-sora font-semibold">{t('global.myLevel')}</span>
                </div>
                <div className="flex items-center mt-2">
                <img src="/vip-icons/vip0.png" className="w-[32px] h-[24px]"/>
                  <span className=" ml-2 text-base font-sora font-semibold">VIP0</span>
                </div>
                <Link href="/revenue" className="mt-[40px] min-h-[24px] text-[12px] font-sora font-semibold border border-[#585858] rounded-full flex items-center justify-center pt-[2px] pb-[2px] text-[#e4e4e4] w-fit pl-2 pr-2">
                  {t('global.upgrade')}
                </Link>
              </div>
              </div>

              <div className="bg-[#1c1c1c] w-full  p-4 rounded-[10px] flex "> 
              <div className="flex  flex-col w-auto">
                <div className="flex items-center">
                  <span className="text-[13px] font-sora font-semibold">{t('home.inviteFriends')}</span>
                </div>

                <span className="mt-2 text-[12px] font-sora leading-[1] w-[70%]">{t('home.inviteFriendsText')}</span>

                <Link href="/revenue" className="mt-[40px] min-h-[24px] text-[12px] font-sora font-semibold border border-[#585858] rounded-full flex items-center justify-center pt-[2px] pb-[2px] text-[#e4e4e4] w-fit pl-2 pr-2">

                  <img
                  
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAYAAADuSnCvAAAAAXNSR0IArs4c6QAAAzpJREFUeF7tmruKFUEQhr/yFRQDQQVBFBUzMfC2XlFQEQx8AWM1MRAUxMu6K+rKKt5vYOILmBkJYii+ggaaCN6vaElDH5gd5pzpntMz23uoSU5yZqbqm/qrqqtbsGsGATEeMwkYkFJEGBADMjhJWIRYhFiERBVSk4xJxiRjkokiMNuSUdV5zgYR+TeM4W3d22lSVdV1wH7gA/BYRNxvVldnQFR1DLgHLAN+A8+AQyLyLScinQBR1fXAfWB1yfmnwGEReZ8LlNaBqOpm4BqwtsLpP8AT4IiIfMwBSqtAVHU78ABYMsBZJ58xEXk50kBUdYPPGStrHP0KbBSR1yMLxCdQJ5M1NU66hHoZmBSR7yMJRFV3AQ+BRQEOTgDnRcRFSRZX0hyiqluAu8DyGu9cNEyLyIksKBSMSAZEVbcC14FVATljCpjIRSZFe5MAUdU9wCNgYcAXHwfGc2vIenYPDcSX1ju+Ax3EwyXQqyJyMgDarP1lKCCqusM3XXWl9TNwxcvk16x5G/DixkBUdZ9vuhYEvOdMTqV1kL3RQFTV3bMTcDJZGtBnTInIqQBoWfylCZDdLhcAK2o8+ARc8pHh1ixz4ooCoqoHfJ8RIhO3RnkL/MiEhALPfSP4rp9NQUD8lMuV1pvA4kwcbGKGm9K5KndRRP5WPSAUyF5fJeo60CZGdn3PLeCYiFRWu1ogqnoQuA3M79rylt7nisFREfnZKEIMSAU2VTXJFLlYUu0j3siy63qPN0CKwU9trgvIN+nKbilaYhqz3jTM9SRz4oom36B1z36FW/xS0UB6N0cu7s75lW5Wm1KNyu6gOI9Y/n8B3JTsQr/6n4ueGkdIIVLc3kvIgCjbOWoSyZQSbcwIcRI4O7IjxEKkxAyZp/2qM0VJTqq2oSVTipSYbYgbInI8qTcJHpYUiLMncqPK9SmnR3ajqiAfdxYkZCvTSaZXfbIoyckjpAAldLPbgdgkIq8SRPzQj2gNiJdP6HGIbSLyYmhvEjygVSAeih2YKX8oO1JVPWSyQ3cVkWLHMiug2MHdBMm/s0e0XmU68yTRiwxICaQBMSCDtWURYhFiERJVf0wyJhmTjEkmikDpz/8BE3MOUpH7xFsAAAAASUVORK5CYII="
              className="w-[15px] h-[15px] rotate-180"
            />
                </Link>
              </div>
              </div>
            
            </div> */}

        {/* <PackageCategories /> */}
        <div className="p-4 pl-5 pr-5 relative z-10">




          <div className="w-full flex  mb-3">
            <div className="flex ">
              <span className="font-sora text-base ml-2 mr-2 text-left font-semibold">
                {t('revenue.specialPackage')}
              </span>
            </div>
          </div>

          <Packages />
        </div>
      </AnimationPage>


      <BottomBar />
    </div>
  )
}

export default MemberCenter