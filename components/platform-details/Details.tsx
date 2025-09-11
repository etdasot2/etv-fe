"use client"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

// List of languages that have corresponding images
const SUPPORTED_IMAGE_LANGUAGES = ["en", "ru", "it"]

export default function Details() {
  const { i18n } = useTranslation()
  const [imageSrc, setImageSrc] = useState("/assets/platform-details/en.png")

  useEffect(() => {
    // Get current language code
    const currentLang = i18n.language || localStorage.getItem("lang") || "en"

    // Check if we have an image for this language
    const langToUse = SUPPORTED_IMAGE_LANGUAGES.includes(currentLang) ? currentLang : "en"

    // Set the image source
    setImageSrc(`/assets/platform-details/${langToUse}.png`)
  }, [i18n.language])

  return (
    <div className="p-5 mt-0 pt-3">
      <div className="bg-[#1c1c1c] w-full h-full p-1 rounded-[10px]">
        <img src={imageSrc || "/placeholder.svg"} className="w-full h-full rounded-[10px]" alt="Platform details" />
      </div>
    </div>
  )
}

