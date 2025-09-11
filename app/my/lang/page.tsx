'use client'
import BackTitle from '@/components/RouteBack'
import SwitchLanguage from '@/components/lang/Langs'
import React from 'react'
import { useTranslation } from 'react-i18next';
import AnimationPage from '@/components/AnimationPage'

export default function LangPage() {
  const { t } = useTranslation();

  return (
    
    <div className="bg-[#151515] min-h-screen text-white"
    >
      <BackTitle
        title={t('lang.title')}
        back={true}
      />

<AnimationPage direction='top'>


      <SwitchLanguage />
      </AnimationPage>
    </div>
  )
}
