'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack' 
import SetFundsPassForm from '@/components/set-funds-password/SetFundsPassForm'
import { useTranslation } from 'react-i18next'
import WatchVideo from '@/components/watch/WatchVideo'
import RouteBackWatch from '@/components/watch/RouteBackWatch'
import BottomBar from '@/components/bottomBar'

const WatchPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#0f0f0f] min-h-screen text-white"
        >

            {/* <RouteBackWatch
                title={t('watch.title')}
                back={true}
            /> */}
            
        
            <WatchVideo />
            
            <BottomBar
                activeRoute='/revenue'
            />

        </div>
    )
}

export default WatchPage