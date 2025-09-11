'use client'

import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'
import { useTranslation } from 'react-i18next'

ChartJS.register(ArcElement, Tooltip)

interface DoughnutChartProps {
  chartData: number[];
  totalReturn: number;
}

export default function DoughnutChart({ chartData, totalReturn }: DoughnutChartProps): JSX.Element {
  const { t } = useTranslation();

  // Define default colors
  const colors = ['#FE9642', '#8F74FF', '#FFE17B'];
  const neutralColor = '#3f3f3f'; // Define a neutral color

  // Adjust data and colors based on values
  const adjustedData = chartData.map(value => value === 0 ? 0.01 : value);
  const adjustedColors = chartData.map((value, index) => (value === 0 ? neutralColor : colors[index]));
  const borderColors = colors; // Use original colors for borders

  const data: ChartData<'doughnut'> = {
    labels: ['Rating Income', 'Team Income', 'Investment Income'],
    datasets: [
      {
        data: adjustedData,
        backgroundColor: adjustedColors,
        borderColor: borderColors,
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative w-[150px] h-[150px]">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[19px] font-bold text-white font-sora">{totalReturn.toFixed(1)}</span>
        <span className="text-[11px] font-sora text-white/80 mt-[-3px]">{t('team.totalReturn')}</span>
      </div>
    </div>
  );
}

