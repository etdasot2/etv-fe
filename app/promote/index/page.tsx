'use client'
import React from 'react'
import BottomBar from '@/components/bottomBar'
import BackTitle from '@/components/RouteBack'
import Link from 'next/link'
import TeamGenerations from '@/components/team/Generations'
import TeamOverview from '@/components/team/TeamOverview'
import { useTranslation } from 'react-i18next'
import AnimationPage from '@/components/AnimationPage'

const TeamDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] text-gray-200 min-h-screen relative"
     
    >
    <img src="/assets/Group32.981d41c4-2-a (1).png" className=" max-w-[435px] fixed top-0 left-1/1 w-full h-[300px] " />

      <BackTitle
        title={t('team.title')}
      />
      <AnimationPage direction='top'>

      <div className="p-5 pt-4 relative z-10">
        <TeamOverview />


        


        <Link href="/invite">
          <div className=" rounded-lg mb-4 mt-4 flex items-center justify-between relative"


          >
            <img src="/assets/invite-bg.212cb0af.png" className='w-full h-auto' />
            <div className="absolute w-full pl-4 mt-2">
              <h2 className="text-base font-bold font-sora leading-4 text-[#eebc7a]">{t('team.inviteFriend')}</h2>
              <p className="font-sora text-white text-[12px] font-medium mt-2">{t('team.inviteFriendInfo')}</p>
            </div>

          </div>
        </Link>


        {/* <div className="bg-black/50 rounded-lg p-4 mb-4 flex items-center">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-white">Invite Friend</h3>
          <p className="text-sm text-gray-400">Watching movie to start earning income</p>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="w-6 h-6 text-red-500" />
          <Film className="w-6 h-6 text-gray-400" />
        </div>
      </div> */}

        <TeamGenerations />

        {/* <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-black/50 rounded-lg p-3 flex items-center">
          <Users className="w-5 h-5 mr-2 text-red-500" />
          <div>
            <p className="text-sm text-gray-400">Total Team Members</p>
            <p className="text-lg font-bold text-white">0</p>
          </div>
        </div>
        <div className="bg-black/50 rounded-lg p-3 flex items-center">
          <UserPlus className="w-5 h-5 mr-2 text-red-500" />
          <div>
            <p className="text-sm text-gray-400">Added today</p>
            <p className="text-lg font-bold text-green-500">0</p>
          </div>
        </div>
      </div>

      {['First', 'Second', 'Third'].map((generation, index) => (
        <div key={index} className="bg-black/50 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white">{generation} Generation</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-400">Total Members</p>
              <p className="text-lg font-bold text-red-500">0</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Income</p>
              <p className="text-lg font-bold text-red-500">0</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Today Income</p>
              <p className="text-lg font-bold text-red-500">0</p>
            </div>
          </div>
        </div>
      ))} */}
      </div>
      </AnimationPage>

      <BottomBar />
    </div>
  )
}

export default TeamDashboard