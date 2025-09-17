'use client'
import React from 'react'
import BottomBar from '@/components/bottomBar'
import BackTitle from '@/components/RouteBack'
import RecordsList from '@/components/record/Records'
import { useTranslation } from 'react-i18next'
import AnimationPage from '@/components/AnimationPage'

const RecordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >
      <BackTitle
        title={t('record.title')}
        back={true}
      />
      <div className="p-4">

        <AnimationPage
          direction='top'
        >
          <RecordsList />
        </AnimationPage>
      </div>
    </div>
  )
}

export default RecordPage