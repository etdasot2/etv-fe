'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'
import { USDTIconBig, USDTIconDefault } from '@/components/icons/global'
import { IMPORTANT_ICON } from '@/components/custom-icons'
import AgentPromotion from '@/components/agentPromotion/AgentPromotion'
import AnimationPage from '@/components/AnimationPage'

const CitPartner = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen w-full bg-full relative"
        >

            <BackTitle
                title={t('agentPromotion.title')}
                back={true}
            />


            <AnimationPage
                direction='top'
            >
                <AgentPromotion />
            </AnimationPage>



        </div>
    )
}

export default CitPartner