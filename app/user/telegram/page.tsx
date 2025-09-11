'use client'
import React from 'react'
import BottomBar from '@/components/bottomBar'
import BackTitle from '@/components/RouteBack'
import RecordsList from '@/components/record/Records'
import { useTranslation } from 'react-i18next'
import AnimationPage from '@/components/AnimationPage'
import TelegramComponent from '@/components/telegram/TelegramComponent'

const TelegramPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white"
    >
      <BackTitle
        title={t('telegram.title')}
        back={true}
      />
      <div className="p-4 pl-0 pr-0">

        <AnimationPage
          direction='top'
        >
          <TelegramComponent />
        </AnimationPage>
      </div>
    </div>
  )
}

export default TelegramPage