'use client'

import React, { useState, useEffect, useCallback } from 'react'
import TableHeader from './TableHeader'
import { useTranslation } from 'react-i18next';
import { getTasksByType, claimTask } from '@/lib/api';
import DefaultLoading from '@/components/loaders/DefaultLoading';
import { useInfoModal } from '@/context/InfoModalContext';

interface Task {
    _id: string;
    titleCode: string;
    type: string;
    toBeDone: number;
    reward: number;
    levelReward: number;
    toGeneration?: number;
    progress: number;
    canClaim: boolean;
    claimed: boolean;
    currentCount: number;
}

export default function TaskTable() {
    const { t } = useTranslation();
    const [selectedType, setSelectedType] = useState<string>('longTermTask');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isClaimingTask, setIsClaimingTask] = useState<string | null>(null);
    const { setInfoText } = useInfoModal();

    const fetchTasks = useCallback(async () => {
        try {
            const data = await getTasksByType(selectedType);
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
            setInfoText(t('common.errorOccurred'));
        } finally {
            setIsLoading(false);
        }
    }, [selectedType, setInfoText, t]);

    const handleTabChange = useCallback(async (newType: string) => {
        setIsLoading(true);
        setSelectedType(newType);
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [selectedType, fetchTasks]);

    const handleClaimTask = async (taskId: string) => {
        setIsClaimingTask(taskId);
        try {
            await claimTask(taskId);
            setInfoText(t('task.claimSuccess'));
            await fetchTasks();
        } catch (error) {
            console.error("Error claiming task:", error);
            setInfoText(t('task.claimError'));
        } finally {
            setIsClaimingTask(null);
        }
    };

    const renderTaskProgress = (task: Task) => {
        if (task.toBeDone === 0) return null;
        
        return (
            <div className="w-full mt-3 flex items-center">
                <div className="w-full h-[8px] rounded-full bg-[#151515] flex items-center">
                    <div 
                        className="h-[7px] bg-[#ff4848] rounded-full transition-all duration-500"
                        style={{ width: `${task.progress}%` }}
                    />
                </div>
                <div className="text-white font-sora text-[12px] font-medium ml-2 flex items-center">
                    <div className="text-[#ff4848]">{task.currentCount > task.toBeDone ? task.toBeDone : task.currentCount }</div>/{task.toBeDone}
                </div>
            </div>
        );
    };

    const renderTaskStatus = (task: Task) => {
        const buttonClasses = "w-fit min-w-[60px] flex items-center justify-center border border-[#ff4848] py-1 rounded-full font-sora text-[12px] font-medium pl-1 pr-1 text-[#ff4848] hover:bg-transparent transition-colors";
        const buttonStyle = {
            background: 'linear-gradient(180deg, #fd717100, rgb(253 113 113 / 10%))',
        };

        if (task.claimed) {
            return (
                <div className={buttonClasses} style={buttonStyle}>
                    {t('task.claimed')}
                </div>  
            );
        }

        if (task.canClaim) {
            return (
                <button
                    onClick={() => handleClaimTask(task._id)}
                    disabled={isClaimingTask === task._id}
                    className={buttonClasses}
                    style={buttonStyle}
                >
                    {isClaimingTask === task._id ? t('task.claiming') : t('task.claim')}
                </button>
            );
        }

        return (
            <div className={buttonClasses} style={buttonStyle}>
                {t('task.inProgress')}
            </div>
        );
    };

    return (
        <div className="flex flex-col w-full">
            <TableHeader selectedType={selectedType} onTabChange={handleTabChange} />
            <div className="flex w-full flex-col mt-3 min-h-[200px]">
                {isLoading ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <DefaultLoading />
                    </div>
                ) : (
                    tasks.map((task) => (
                        <div key={task._id} className="w-full bg-[#20201f] rounded-[10px] mb-3">
                            <div className="p-4">
                                <div className="font-sora text-[14.5px] text-white font-semibold leading-4">
                                    {t(`task.${selectedType}.${task.titleCode}`)}
                                </div>
                                <div className="font-sora text-[12px] text-[#dddddd] font-medium mt-3 leading-4">
                                    {t(`task.${selectedType}.${task.titleCode}`)}
                                </div>
                                <div className="flex items-center justify-between mt-3"> 
                                    <div className="text-white font-sora text-[12px] font-semibold flex items-center">
                                        {t('task.toCollect')}: 
                                        <div className="text-[#ff4848] ml-1"> 
                                        0
                                        </div>
                                    </div>
                                    {renderTaskStatus(task)}
                                </div>
                                {renderTaskProgress(task)}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}