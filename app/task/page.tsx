'use client'
import React from 'react' 
import BackTitle from '@/components/RouteBack' 
import TaskTable from '@/components/task/TaskTable'
import { useTranslation } from 'react-i18next'
import MissionCenterMain from "@/components/missionsCenter/MissionCenter"
import AnimationPage from '@/components/AnimationPage'

const TaskPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen pb-[50px] text-white"
    >

      <BackTitle
        title={t('missionsCenter.title')}
        back={true}
      />

      <div className="mt-4  ">
        {/* <TaskTable /> */}

      <AnimationPage
        direction='top'
      >
        <MissionCenterMain />
      </AnimationPage>
      </div>
    </div>
  )
}

export default TaskPage