'use client'
import React from 'react'
import { FileText, HelpCircle, Target, Gift, Volume2 } from 'lucide-react'
import Marquee from 'react-fast-marquee'

import BottomBar from '@/components/bottomBar'
import PopularReels from '@/components/home/PopularReels'
import Link from 'next/link'
import BannerSlider from '@/components/home/BannerSlider'
import HomeHeader from '@/components/HomeHeader'
import { useTranslation } from 'react-i18next'
import { ALL_EARNINGS_ICON, COMPANY_EXPLANATION_ICON, COMPANY_ICON, EARNINGS_TODAY_ICON, HELP_CENTER, INCOME_EXPLANATION_ICON, MEGAPHONE_ICON, NOTICES_ICON, PLATFORM_RULES_ICON, TEAM_ICON, TUTORIAL_ICON } from '@/components/custom-icons'
import TrendingNow from '@/components/home/TrendingNow'
import AnimationPage from '@/components/AnimationPage'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */



const images = [
  // '/assets/bs1.png',
  '/assets/bs3.png',
  '/assets/bs449.png',
  
  '/assets/bs5.png',

  '/assets/bs4.png',
  // '/assets/bs2.png',

]



export default function HomePage() {
  const { t } = useTranslation();

  const quickLinks = [
    { id: 1, title: t('home.aboutUs'), icon: FileText, img: "/assets/a43f243ff3fed61d8fc40206da3935c3.png", link: '/about' },
    { id: 2, title: t('home.help'), icon: HelpCircle, img: "/assets/4d2ffce6ecf19355a64ed7bd9353f1f0.png", link: '/help' },
    { id: 3, title: t('home.missionCenter'), icon: Target, img: "/assets/05c17173de34008aca6a270498a2a289.png", link: '/task' },
    { id: 4, title: t('home.bonusDescription'), icon: Gift, img: "/assets/a43f243ff3fed61d8fc40206da3935c3.png", link: '/introduction' },
  ]
  const quickLinks2 = [
    { id: 1, title: t('home.aboutUs'), icon: FileText, img: NOTICES_ICON, link: '/about' },
    { id: 4, title: t('home.bonusDescription'), icon: Gift, img: PLATFORM_RULES_ICON, link: '/introduction' },
    { id: 2, title: t('home.help'), icon: HelpCircle, img: TUTORIAL_ICON, link: '/help' },
    { id: 3, title: t('home.missionCenter'), icon: Target, img: TEAM_ICON, link: '/task' },
  ]

  const announcements = t('home.annoucments', { returnObjects: true }) as any[] || [];

  return (


    <div className="flex flex-col min-h-screen bg-[#151515] text-white w-full relative"
    >
      <img src="/assets/Group32.981d41c4-2-a (1).png" className=" max-w-[435px] fixed top-0 left-1/1 w-full h-[300px] " />
      {/* <img src="/assets/download-14.png" className=" max-w-[435px] absolute top-[200px] left-1/1 w-full h-[400px] opacity-[.5]"/> */}

      <HomeHeader />

      <AnimationPage
        direction='top'
      >
        <main className="flex-grow overflow-y-auto mt-1 relative z-10">



          <div className="relative w-full h-auto overflow-hidden pt-2">
            <BannerSlider
              images={images}
            />
          </div>

        <Link href="/notices">
          <div className="mx-4 mt-4 bg-[#151515] rounded-full">
          <div

            className="w-[100%] p-4 bg-[#151515] flex border border-[#805c33] text-white py-2 rounded-full font-sora text-[14px] font-semibold overflow-hidden"
            style={{
              background: 'linear-gradient(rgb(250 179 54 / 0%), rgb(186 140 0 / 10%))',

            }}
          >

            <Volume2 className="w-5 h-5 text-[#ffc254] mr-2 flex-shrink-0" />
            <div className="text-[13px] text-sora font-medium text-white truncate min-w-0 flex-1">
              {/* {announcements.length > 0 && announcements.join(' • ')} */}
              {t('notices.translation.eternovafilms_open.title')+", "+t('notices.translation.eternovafilms_open.content')}
            </div>
          </div>
        </div></Link>

        <div className="grid grid-cols-4 gap-4 p-4 mt-2">
          {quickLinks.map((link) => (
            <Link href={link?.link || ''} key={link.id} className="flex flex-col items-center cursor-default">
              <img src={link.img} className="w-[45px] h-[45px]" />
              <span className="text-[12px] text-white font-sora text-center mt-2 leading-[1.1]">{link.title}</span>
            </Link>
          ))}
        </div>

        <div className="mt-0 p-4">
          <Link href="/social" className="cursor-default">
            {/* <span className="font-sora text-[15px] font-medium text-white">{t('home.socialMedia')}</span> */}
            <div className="mt-3 bg-[#1d1d1d]  p-4 flex items-center rounded-[15px]">
              <div className="flex   h-[40px]">
                <img src="/assets/fad034213d965b62b7ff7d8b50c40cbc.png" className="w-full h-full object-contain flex-shrink-0 mr-5" />
              </div>
              <div className="flex ml-3">
                <p className="text-[12px] font-medium font-sora ">{t('home.joinUs')}</p>
              </div>
            </div>
          </Link>
        </div>

          

          <TrendingNow 
            pageNumber={1}
          />
          {/* <PopularReels />
          <TrendingNow 
            pageNumber={2}
          /> */}

        </main>
      </AnimationPage>

      <BottomBar />
    </div>

  )
}