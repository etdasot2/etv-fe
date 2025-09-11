"use client"

import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 1 },
  { month: "February", desktop: 1 },
  { month: "March", desktop: 1 },
  { month: "April", desktop: 2 },
  { month: "May", desktop: 1 },
  { month: "June", desktop: 5 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartStats() {
  return ( 
    <div className="w-[100px] h-[30px]">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          > 
            {/* <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            /> */}
            <Area
              dataKey="desktop"
              type="natural"
              fill="transparent"
              fillOpacity={0.4}
              stroke="#E6436D"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>  
  )
}

