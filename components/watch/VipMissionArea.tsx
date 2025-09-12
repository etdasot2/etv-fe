"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

/* eslint-disable @typescript-eslint/no-explicit-any */

interface VipMissionAreaProps {
  title: string
  earnedMoney: number
  purchasedPackages: any[] // Purchased packages
  allPackages: any[] // All packages (including non-purchased)
  onMissionChange: (pkgId: string) => void // Callback to change mission by package ID
  selectedMission: string // Selected mission/package
  source: string
}

const mockT = (key: string) => {
  const translations: Record<string, string> = {
    "reels.missionAreaLabel": "mission area",
    "reels.popup.selectVipMission.title": "Select VIP Mission",
  }
  return translations[key] || key
}

export default function VipMissionArea({
  earnedMoney,
  purchasedPackages,
  allPackages,
  onMissionChange,
  selectedMission,
  source,
}: VipMissionAreaProps) {
  const t = mockT
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  // Check if the package is purchased
  const isPurchased = (pkgId: string) => {
    return purchasedPackages.some((p: any) => p.package._id === pkgId)
  }

  // Get the number of likes today for a purchased package
  const getTodayLikes = (pkgId: string) => {
    const purchased = purchasedPackages.find((p: any) => p.package._id === pkgId)
    return purchased ? purchased.likesToday : 0
  }

  const modifiedSelectedMission = selectedMission.replace("VIP", "VIP")
  const levelNumber = modifiedSelectedMission.match(/\d+/g)?.[0]

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    setIsSticky(scrollPosition > 0)
  }

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".vip-mission-dropdown")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {/* {isOpen && <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsOpen(false)} />} */}

      <div className={`w-full max-w-[435px] px-4 flex items-center pt-1 pb-3  top-0 z-50 transition-all  `}>
        <div className={cn("w-full flex items-center relative mt-2 vip-mission-dropdown")}>
          <div className="w-full relative bg-[#1c1c1c] rounded-[8px]">
            <div
              className="bg-[#1c1c1c] border border-[#393939] rounded-[8px] px-4 py-2.5 font-sans flex items-center justify-between text-[14px] font-medium text-white cursor-pointer w-full"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: "linear-gradient(rgba(250, 179, 54, 0), rgb(186 140 0 / 4%))",
              }}
            >
              <div className="flex items-center">
                <div className="mt-[2px] font-sora text-[14px]">
                  {modifiedSelectedMission}
                  {/* (
                  {getTodayLikes(allPackages.find((pkg) => selectedMission.startsWith(pkg.packageName))?._id || "")}/
                  {allPackages.find((pkg) => selectedMission.startsWith(pkg.packageName))?.dailyViews || 0}) */}
                </div>
              </div>
              <ChevronDown
                size={16}
                className={cn(
                  "ml-2 transition-transform duration-200 transform filter drop-shadow-lg",
                  isOpen && "transform rotate-180",
                )}
              />
            </div>

            {isOpen && (
              <div
                className={cn(
                  "absolute top-full left-0 mt-1 w-full bg-[#1c1c1c] border border-[#393939] rounded-[8px] z-50 max-h-[300px] overflow-y-auto",
                  "shadow-2xl shadow-black/50 ring-1 ring-white/10",
                )}
              >
                {allPackages.map((pkg, index) => {
                  const purchased = isPurchased(pkg._id)
                  const likesToday = purchased ? getTodayLikes(pkg._id) : 0
                  const displayText = `${pkg.packageName} ${t("reels.missionAreaLabel")} (${likesToday}/${pkg.dailyViews})`

                  return (
                    <div
                      key={index}
                      className={cn(
                        "px-4 py-2.5 text-[14px] text-white cursor-pointer font-sans flex items-center hover:bg-[#2a2a2a] transition-colors",
                        selectedMission.startsWith(pkg.packageName) && "bg-[#2a2a2a]",
                      )}
                      onClick={() => {
                        if (selectedMission.startsWith(pkg.packageName)) {
                          setIsOpen(false)
                        } else {
                          onMissionChange(pkg._id)
                          setIsOpen(false)
                        }
                      }}
                    >
                      <div className="ml-0 font-sora">{displayText}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
