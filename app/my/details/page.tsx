'use client'

import React from 'react' 
import BackTitle from '@/components/RouteBack' 
import ProfileDetailsAll from '@/components/profile/details/ProfileDetailsAll'
import { useTranslation } from 'react-i18next'

const PersonalInformationPage: React.FC = () => { 
  const { t } = useTranslation();

  return (
    <div className="bg-[#121212] min-h-screen text-white"
    >

      <BackTitle
        title={t('profile.details.title')}
        back={true}
      />

      <ProfileDetailsAll />
    </div>
  )
}

export default PersonalInformationPage