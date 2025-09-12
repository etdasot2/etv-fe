'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack' 
import SetFundsPassForm from '@/components/set-funds-password/SetFundsPassForm'
import { useTranslation } from 'react-i18next'
import WatchVideo from '@/components/watch/WatchVideo'
import RouteBackWatch from '@/components/watch/RouteBackWatch'
import BottomBar from '@/components/bottomBar'
import AnimationPage from '@/components/AnimationPage'

const WatchPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#151515] min-h-screen text-white"
        >
 {/* <img src="/assets/Group32.981d41c4-2-a (1).png" className=" max-w-[435px] fixed top-0 left-1/1 w-full h-[300px] " /> */}
 
            <BackTitle
              title={t('revenue.score.title')}

              back={true}
            />
      <AnimationPage direction='top'>
        
            <WatchVideo />
            </AnimationPage>
            
            {/* <BottomBar
                activeRoute='/revenue'
            /> */}

        </div>
    )
}

export default WatchPage