"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { fetchPopularReels } from "@/lib/api"
import DefaultLoading from "../loaders/DefaultLoading"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { useLoading } from "@/context/LoadingContext"

export default function PopularReels() {
  const [popularReels, setPopularReels] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const { t } = useTranslation()
  const { setGlobalLoading } = useLoading();


  useEffect(() => {
    
    const loadPopularReels = async () => {
      setGlobalLoading(true)
      try {
        const reels = await fetchPopularReels()
        setPopularReels(reels)
        setLoading(false)
      } catch (err: any) {
        setLoading(false)
        console.log(err.message)
      } finally {
        setGlobalLoading(false)
      }
    }

    loadPopularReels()
  }, [])

  const handleReelClick = (reelId: string) => {
    router.push(`/shorts?v=${reelId}`)
  }

  return (
    <>
      <div className="  mb-4 mt-2  relative z-5 pl-5">
        <h2 className="text-[16px] text-white font-sora font-bold mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/Group14.fc67fbe2.png" className="w-[20px] h-[20px] mr-2" alt="Popular" />
            {t("home.viral")}
          </div>
        </h2>
        <Swiper slidesPerView={2.2} spaceBetween={10} className="mySwiper">
          {popularReels.map((reel, index) => (
            <SwiperSlide key={reel._id}>
              <div className="relative" onClick={() => handleReelClick(reel._id)}>
                <img
                  src={reel.videoUrl["720p"].thumbnails.small || "/default-thumbnail.jpg"}
                  alt={reel.title}
                  className="w-full h-auto rounded-lg"
                />
                {/* <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/70 rounded-lg top-0 left-0"></div> */}
                
              </div>
              <div className=" mt-3 flex items-center">
                  {/* <img
                    src={reel.influencer.profileImage || "/placeholder.svg"}
                    className="w-[30px] h-[30px] rounded-full"
                    alt={reel.influencer.username}
                  /> */}
                  {/* <div className="flex flex-col  min-w-0 overflow-hidden">
                    <span className="font-sora text-[15px]  font-medium leading-[1.2] text-white">
                    We Saved MrBeast From Going BLIND 😱
                    </span>
                    <span className="font-sora text-[12px] mt-1 line-clamp-1 text-[#AAAAAA] font-semibold">3.5M {t('global.views')}</span>
                  </div> */}
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* {loading && <DefaultLoading />} */}
    </>
  )
}

