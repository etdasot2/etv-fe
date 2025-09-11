'use client'
import React from 'react'
import { useTranslation } from 'react-i18next';

type TableHeaderProps = {
  selectedType: string;
  onTabChange: (type: string) => void;
};

export default function TableHeader({ selectedType, onTabChange }: TableHeaderProps) {
  const { t } = useTranslation();

  const tabs = [
    { type: 'longTermTask', label: t('task.table.tab1') },
    { type: 'fixedTask', label: t('task.table.tab2') },
    { type: 'growthTask', label: t('task.table.tab3') },
  ];

  return (
    <div className="w-full flex border-b border-[#ffffff1a] pb-3 gap-1 justify-between">
      {tabs.map(tab => (
        <div
          key={tab.type}
          onClick={() => onTabChange(tab.type)}
          className={`relative text-center flex items-center justify-center ${selectedType === tab.type ? 'text-white' : 'text-[#ffffff99]'}`}
        >
          <span className="font-sora text-[14px] font-medium">{tab.label}</span>
          {selectedType === tab.type && <div className="w-[24px] h-[3px] rounded-full absolute bottom-[-13px] bg-[#ff4848]"></div>}
        </div>
      ))}
    </div>
  );
}
