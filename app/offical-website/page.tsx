'use client'

import React from 'react'
import BackTitle from '@/components/RouteBack'
import ListTutorials from '@/components/help/ListTutorials'
import { useTranslation } from 'react-i18next'

const HelpCenterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#121212] min-h-screen text-white"
    >

      <BackTitle
        title={""}
        back={true}
      />
<div className="p-4 mt-2">
        <div className="w-full flex flex-col">
          <div className="w-full bg-[#2f2f2fa6] rounded-md h-[150px] flex justify-center items-center">
            <span className="text-secondary font-sora text-[14px] font-medium">Website Comming soon</span>
          </div>
          </div>
        </div>

    </div>
  )
}

export default HelpCenterPage