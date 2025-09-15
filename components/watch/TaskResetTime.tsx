"use client"

import { useEffect, useState } from "react"

export default function TaskResetTime() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      
      // Get London timezone
      const londonTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }))
      
      // Set target to next midnight in London
      const target = new Date(londonTime)
      target.setHours(24, 0, 0, 0) // Next midnight
      
      // Calculate difference
      const difference = target.getTime() - now.getTime()
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0')
  }

  return (
    <div className="pl-4 pr-4 mt-6 mb-5">
      <div className="flex justify-center items-center">
        <div className="flex items-center space-x-2">
          {/* Hours */}
          <div className="bg-[#1c1c1c] border border-[#805c33] rounded-[12px] px-4 py-2 min-w-[50px] text-center"
          style={{
            background: "linear-gradient(rgba(250, 179, 54, 0), rgba(186, 140, 0, 0.1))",
          }}
          >
            <div className="text-white font-sora text-lg font-medium">
              {formatTime(timeLeft.hours)}
            </div>
          </div>
          
          {/* Separator */}
          <div className="text-white font-sora text-lg font-medium">
            :
          </div>
          
          {/* Minutes */}
          <div className="bg-[#1c1c1c] border border-[#805c33] rounded-[12px] px-4 py-2 min-w-[50px] text-center"
          
          style={{
            background: "linear-gradient(rgba(250, 179, 54, 0), rgba(186, 140, 0, 0.1))",
          }}
          >
            <div className="text-white font-sora text-lg font-medium">
              {formatTime(timeLeft.minutes)}
            </div>
          </div>
          
          {/* Separator */}
          <div className="text-white font-sora text-lg font-medium">
            :
          </div>
          
          {/* Seconds */}
            <div className="bg-[#1c1c1c] border border-[#805c33] rounded-[12px] px-4 py-2 min-w-[50px] text-center"
          style={{
            background: "linear-gradient(rgba(250, 179, 54, 0), rgba(186, 140, 0, 0.1))",
          }}
          >
            <div className="text-white font-sora text-lg font-medium">
              {formatTime(timeLeft.seconds)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}