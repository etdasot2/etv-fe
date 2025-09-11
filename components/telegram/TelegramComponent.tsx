"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../ui/input";
import { AlertCircle } from "lucide-react";
import { useLoading } from "@/context/LoadingContext"; // Ensure this exists
import { checkTelegramRewardStatus, telegramReward } from "@/lib/api";
import { useInfoModal } from "@/context/InfoModalContext";

type TelegramRewardInputs = {
  telegramUsername: string;
};

export default function TelegramComponent() {
  const { t } = useTranslation();
  const router = useRouter();
  const { setGlobalLoading } = useLoading();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const { setInfoText } = useInfoModal()

  const [rewardStatus, setRewardStatus] = useState<any | null>(null);
  const [pendingReview, setPendingReview] = useState<boolean>(false);

  // Validation schema
  const schema = yup.object().shape({
    telegramUsername: yup
      .string()
      .required(t("telegram.inputs.username.validation.required")),
  });

  // Form setup
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TelegramRewardInputs>({
    resolver: yupResolver(schema),
  });

  // Submit handler
  const onSubmit: SubmitHandler<TelegramRewardInputs> = async (data) => {
    if (pendingReview) {
        setInfoText(t("telegram.rewardStatuses.pendingReview"));
        return;
      } 

    setGlobalLoading(true);
    setStatusMessage(null);

     

    try {
      const response = await telegramReward(data.telegramUsername);
      setStatusMessage(response.message);
      if(response.success){
        setInfoText(t('global.success'))
        router.back();
      }
      
    } catch (error: any) {
        if(error.response?.data?.message === "pendingReview"){
            setInfoText(t('telegram.rewardStatuses.pendingReview'))
        }else if(error.response?.data?.message === "alreadyClaimed"){
          setInfoText(t('telegram.rewardStatuses.alreadyClaimed'))
        }else if(error.response?.data?.message === "userNameUsed"){
          setInfoText(t('telegram.rewardStatuses.userNameUsed'))
        }
    } finally {
      setGlobalLoading(false);
    }
  };


  useEffect(() => {
    const errorKeys = Object.keys(errors) as Array<keyof TelegramRewardInputs>
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0]
      const firstErrorMessage = errors[firstErrorKey]?.message
      if (firstErrorMessage) {
        setInfoText(firstErrorMessage)
      }
    }
  }, [errors, setInfoText])


  useEffect(() => {
    const fetchRewardStatus = async () => {
      try {
        const reward = await checkTelegramRewardStatus();
            console.log(reward)
        if (reward.status === "claimed") {
          router.push("https://t.me/Eternova Films2"); // Redirect if claimed
        } else {
          setRewardStatus(reward);
  
          if (reward.status === "pendingReview") {
            setPendingReview(true);
          }
  
          if (reward.telegram) {
            setValue("telegramUsername", reward.telegram); // Prefill username
          }
        }
      } catch (error) {
        console.error("Error fetching reward status:", error);
      }
    };
  
    fetchRewardStatus();
  }, [router, setValue]);

  return (
    <div className="pl-5 pr-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-sora text-[14px]">
            {rewardStatus?.status === "pendingReview" && <div className="mb-3">{t('telegram.rewardStatuses.pendingReviewGr')}</div>}
            {rewardStatus?.status === "notInGroup" && <div className="mb-3">{t('telegram.rewardStatuses.notInGroup')}</div>}
        </div> 
        <div>
          <span className="font-sora text-[14px] font-medium">
            {t("telegram.inputs.username.label")}
          </span>
          <div className="relative mt-2">
            <Input
              {...register("telegramUsername")}
              type="text"
              placeholder={t("telegram.inputs.username.placeholder")}
              className="w-full bg-[#20201f] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[14px] outline-none border-none h-[45px]"
              autoComplete="off"
            /> 
          </div>
        </div>

        <button
          type="submit"
          className="w-[100%] mt-5 min-h-[40px] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
          style={{
            background: "linear-gradient(-40deg, #f40208, #ff464b)",
          }}
        >
          {t("telegram.claimReward")}
        </button>
      </form>

      <button
        onClick={() => router.push("https://t.me/Eternova Films2")}
        className="w-[100%] mt-3 border min-h-[40px] border-[#f40208] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
        style={{
          background: "linear-gradient(180deg, #fd717100, #f4020829)",
        }}
      >
        {t("telegram.joinGroup")}
      </button>

      <div className="mt-4 pt-0">
        <div className="flex items-center mb-2">
          <AlertCircle className="w-5 h-5 text-red-500 mr-1" />
          <h3 className="text-[15px] font-sora font-medium">
            {t("telegram.rewardInstructions")}:
          </h3>
        </div>
        <ol className="font-sora list-inside text-[#928d86] font-medium text-[13px] leading-[1.2]">
          <li>{t("telegram.rewardInstruction1")}</li>
          <li>{t("telegram.rewardInstruction2")}</li>
        </ol>
      </div>
    </div>
  );
}
