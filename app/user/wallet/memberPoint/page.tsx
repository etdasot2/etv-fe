'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import MemberPointOverview from '@/components/member-point/TotalAssets'
import { useTranslation } from 'react-i18next'
import MemberPointRecords from '@/components/member-point/Records'
import AnimationPage from '@/components/AnimationPage'

const MemberPointPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('memberPoint.title')}
        back={true}
      />

      <div className="p-0">
        <AnimationPage
          direction='top'
        >
          <MemberPointOverview />
        </AnimationPage>
        <MemberPointRecords />
      </div>
    </div>
  )
}

export default MemberPointPage