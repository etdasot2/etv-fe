'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack' 
import SetFundsPassForm from '@/components/set-funds-password/SetFundsPassForm'
import { useTranslation } from 'react-i18next'
import ScoreVideo from '@/components/watch/ScoreVideo'
import RouteBackWatch from '@/components/watch/RouteBackWatch'
import BottomBar from '@/components/bottomBar'
import AnimationPage from '@/components/AnimationPage'

const WatchPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#151515] min-h-screen text-white"
        >
 

            <BackTitle
              title={t('revenue.score.title')}
              isScore={true}
              back={true}
            />
        
            <ScoreVideo />
            
            {/* <BottomBar
                activeRoute='/revenue'
            /> */}

        </div>
    )
}

export default WatchPage