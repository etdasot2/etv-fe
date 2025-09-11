"use client"

import { useEffect, useState } from "react"
import { USDTIconDefault } from "../icons/global"
import { IMPORTANT_ICON } from "../custom-icons"
import UserOverview from "./UserOverview"
import { agentCheck, agentClaimSalary, agentPromotionSalary } from "@/lib/api"
import { useLoading } from "@/context/LoadingContext"
import { useTranslation } from "react-i18next"

export default function AgentPromotion() {
  const [data, setData] = useState<any>(null)
  const { setGlobalLoading } = useLoading()
  const [loadingButtons, setLoadingButtons] = useState<Record<string, boolean>>({
    firstGen: false,
    secondGen: false,
    thirdGen: false,
  })
  
  useEffect(() => {
    const fetchAgentPromotionOverview = async () => {
      try {
        await agentCheck()
      } catch (error: any) {
        console.error("Error fetching agent promotion overview:", error)
        // Handle error (e.g., show a notification)
      } 
    }

    fetchAgentPromotionOverview()
  }, [])

  useEffect(() => {
    const fetchAgentPromotionOverview = async () => {
      setGlobalLoading(true)
      try {
        const data = await agentPromotionSalary()
        setData(data) // Assuming the API response has totalActiveMembers
      } catch (error: any) {
        console.error("Error fetching agent promotion overview:", error)
        // Handle error (e.g., show a notification)
      } finally {
        setGlobalLoading(false)
      }
    }

    fetchAgentPromotionOverview()
  }, [setGlobalLoading])

  const claimSalaryButton = async (gen: string) => {
    try {
      // Set the specific button to loading state
      setLoadingButtons(prev => ({ ...prev, [gen]: true }))
      
      // Call the API to claim salary
      await agentClaimSalary(gen)

      // Update local state to reflect the claimed status
      setData((prevData: any) => {
        // Create a deep copy of the data
        const updatedData = { ...prevData }

        // Update the receivable status based on the generation
        if (gen === "firstGen") {
          updatedData.firstGeneration = {
            ...updatedData.firstGeneration,
            receivable: false,
          }
        } else if (gen === "secondGen") {
          updatedData.secondGeneration = {
            ...updatedData.secondGeneration,
            receivable: false,
          }
        } else if (gen === "thirdGen") {
          updatedData.thirdGeneration = {
            ...updatedData.thirdGeneration,
            receivable: false,
          }
        }

        return updatedData
      })
    } catch (error) {
      console.error("Error claiming salary:", error)
      // Handle error (e.g., show a notification)
    } finally {
      // Reset the loading state for this specific button
      setLoadingButtons(prev => ({ ...prev, [gen]: false }))
    }
  }

  const { t } = useTranslation();

  return (
    <>
      <div className="p-5 pt-3">
        <UserOverview />

        <div className="mt-4">
          <span className="text-[16px] font-semibold text-white ">{t("agentPromotion.taskList")}</span>

          <div className="bg-[#1c1c1c] rounded-[8px] p-2 w-full mt-3">
            <div className="flex items-center justify-between w-full pl-4 pr-4 pt-[5px] pb-[5px]">
              <span className="text-[14px] font-semibold    font-sora ">{t("agentPromotion.firstGenInvite")}</span>

              <div className="flex items-center">
                <USDTIconDefault className="w-[22px]" />
                <span className="text-[15px] font-semibold ml-1">+{data?.weeklyRewardLevel1}USDT</span>
              </div>
            </div>
            <div className="flex flex-col w-full bg-[#1f1f1f]  border border-[#242424]  mt-2 p-4 rounded-[8px]">
              <div className="flex items-center justify-between font-sora text-[14px]">
                <span className=" text-[13px] text-white/70 font-semibold">{t("agentPromotion.lastWeekIncrease")}</span>
                <span className="font-semibold text-[13px]">{data?.firstGeneration?.lastWeekIncrease} {t("global.people")}</span>
              </div>
              <div className="flex items-center justify-between font-sora text-[14px] mt-3">
                <span className="text-[13px] text-white/70 font-semibold">{t("agentPromotion.thisWeekIncrease")}:</span>
                <span className="font-semibold text-[13px] text-right">
                  {data?.firstGeneration?.thisWeekIncrease} {t("global.people")}
                </span>
              </div>

              <div className="flex items-center justify-between font-sora text-[14px] mt-3">
                <span className="text-[13px] text-white/70 font-semibold">{t("agentPromotion.available")}</span>
                <span className="font-semibold text-[13px] text-right">{data?.firstGeneration?.available} USDT</span>
              </div>

              {data?.firstGeneration?.receivable ? (
                <div
                  className={`w-[100%] mt-3 border border-[#333333] bg-[#333333] text-white py-2 rounded-full font-sora text-[14px] font-semibold flex items-center justify-center transition-colors ${
                    loadingButtons.firstGen ? "opacity-70 cursor-not-allowed" : "cursor-default"
                  }`}
                  style={{
                    background: "linear-gradient(-40deg, #f40208, #ff464b)",
                  }}
                  onClick={() => {
                    if (!loadingButtons.firstGen) {
                      claimSalaryButton("firstGen")
                    }
                  }}
                >
                  {loadingButtons.firstGen ? "Processing..." : "Receive"}
                </div>
              ) : (
                <div className="w-[100%] mt-3 border border-[#333333] bg-[#333333] text-white py-2 rounded-full font-sora text-[14px] font-semibold flex items-center justify-center transition-colors">
                  {t("agentPromotion.receiveBtn")}
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#1c1c1c] rounded-[8px] p-2 w-full mt-4">
            <div className="flex items-center justify-between w-full pl-4 pr-4 pt-[5px] pb-[5px]">
              <span className="text-[14px] font-semibold    font-sora ">{t("agentPromotion.secondGenInvite")}</span>

              <div className="flex items-center">
                <USDTIconDefault className="w-[22px]" />
                <span className="text-[15px] font-semibold ml-1">+{data?.weeklyRewardLevel2}USDT</span>
              </div>
            </div>
            <div className="flex flex-col w-full bg-[#1f1f1f]  border border-[#242424]  mt-2 p-4 rounded-[8px]">
              <div className="flex items-center justify-between font-sora text-[14px]">
                <span className=" text-[13px] text-white/70 font-semibold">{t("agentPromotion.lastWeekIncrease")}</span>
                <span className="font-semibold text-[13px]">{data?.secondGeneration?.lastWeekIncrease} {t("global.people")}</span>
              </div>
              <div className="flex items-center justify-between font-sora text-[14px] mt-3">
                <span className="text-[13px] text-white/70 font-semibold">{t("agentPromotion.thisWeekIncrease")}:</span>
                <span className="font-semibold text-[13px] text-right">
                  {data?.secondGeneration?.thisWeekIncrease} {t("global.people")}
                </span>
              </div>

              <div className="flex items-center justify-between font-sora text-[14px] mt-3">
                <span className="text-[13px] text-white/70 font-semibold">{t("agentPromotion.available")}</span>
                <span className="font-semibold text-[13px] text-right">{data?.secondGeneration?.available} USDT</span>
              </div>

              {data?.secondGeneration?.receivable ? (
                <div
                  className={`w-[100%] mt-3 border border-[#333333] bg-[#333333] text-white py-2 rounded-full font-sora text-[14px] font-semibold flex items-center justify-center transition-colors ${
                    loadingButtons.secondGen ? "opacity-70 cursor-not-allowed" : "cursor-default"
                  }`}
                  style={{
                    background: "linear-gradient(-40deg, #f40208, #ff464b)",
                  }}
                  onClick={() => {
                    if (!loadingButtons.secondGen) {
                      claimSalaryButton("secondGen")
                    }
                  }}
                >
                  {loadingButtons.secondGen ? "Processing..." : "Receive"}
                </div>
              ) : (
                <div className="w-[100%] mt-3 border border-[#333333] bg-[#333333] text-white py-2 rounded-full font-sora text-[14px] font-semibold flex items-center justify-center transition-colors">
                  {t("agentPromotion.receiveBtn")}
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#1c1c1c] rounded-[8px] p-2 w-full mt-4">
            <div className="flex items-center justify-between w-full pl-4 pr-4 pt-[5px] pb-[5px]">
              <span className="text-[14px] font-semibold    font-sora ">{t("agentPromotion.thirdGenInvite")}</span>

              <div className="flex items-center">
                <USDTIconDefault className="w-[22px]" />
                <span className="text-[15px] font-semibold ml-1">+{data?.weeklyRewardLevel3}USDT</span>
              </div>
            </div>
            <div className="flex flex-col w-full bg-[#1f1f1f]  border border-[#242424]  mt-2 p-4 rounded-[8px]">
              <div className="flex items-center justify-between font-sora text-[14px]">
                <span className=" text-[13px] text-white/70 font-semibold">{t("agentPromotion.lastWeekIncrease")}</span>
                <span className="font-semibold text-[13px]">{data?.thirdGeneration?.lastWeekIncrease} {t("global.people")}</span>
              </div>
              <div className="flex items-center justify-between font-sora text-[14px] mt-3">
                <span className="text-[13px] text-white/70 font-semibold">{t("agentPromotion.thisWeekIncrease")}:</span>
                <span className="font-semibold text-[13px] text-right">
                  {data?.thirdGeneration?.thisWeekIncrease} {t("global.people")}
                </span>
              </div>

              <div className="flex items-center justify-between font-sora text-[14px] mt-3">
                <span className="text-[13px] text-white/70 font-semibold">{t("agentPromotion.available")}</span>
                <span className="font-semibold text-[13px] text-right">{data?.thirdGeneration?.available} USDT</span>
              </div>

              {data?.thirdGeneration?.receivable ? (
                <div
                  className={`w-[100%] mt-3 border border-[#333333] bg-[#333333] text-white py-2 rounded-full font-sora text-[14px] font-semibold flex items-center justify-center transition-colors ${
                    loadingButtons.thirdGen ? "opacity-70 cursor-not-allowed" : "cursor-default"
                  }`}
                  style={{
                    background: "linear-gradient(-40deg, #f40208, #ff464b)",
                  }}
                  onClick={() => {
                    if (!loadingButtons.thirdGen) {
                      claimSalaryButton("thirdGen")
                    }
                  }}
                >
                  {loadingButtons.thirdGen ? "Processing..." : "Receive"}
                </div>
              ) : (
                <div className="w-[100%] mt-3 border border-[#333333] bg-[#333333] text-white py-2 rounded-full font-sora text-[14px] font-semibold flex items-center justify-center transition-colors">
                  {t("agentPromotion.receiveBtn")}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2 mt-4">
            <img src={IMPORTANT_ICON || "/placeholder.svg"} className="w-[16px] h-[16px] mr-1" />
            <h3 className="text-[15px] font-sora font-medium">Notes</h3>
          </div>
          <ol className="list-decimal list-inside text-[13px] text-[#ffffff99]  leading-[1.3] font-sora ">
            <li>
              The team must add at least 6 new VIP1 or higher level members every week to receive that week's salary;
            </li>
            <li>
              Applications for promotion rewards need to be submitted in the official group every Monday in accordance
              with the official designated format, and can only be issued after official review and approval;
            </li>
            <li>After completing the task every Monday, you can click on the platform to claim your salary;</li>
            <li>
              After being promoted to the corresponding leader level, you must perform the officially prescribed leader
              responsibilities. If the requirements are not met, the official has the right to disqualify the leader;
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}
