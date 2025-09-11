'use client'
import React from 'react' 
import BackTitle from '@/components/RouteBack' 
import TaskTable from '@/components/task/TaskTable'
import { useTranslation } from 'react-i18next'

const TaskPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('task.title')}
        back={true}
      />
      <div className="p-4">
        <TaskTable />
      </div>
    </div>
  )
}

export default TaskPage