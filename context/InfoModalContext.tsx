"use client"

import type React from "react"
import { createContext, useState, useContext, useCallback, useEffect } from "react"

interface InfoModalContextType {
  modal: boolean
  setInfoText: (text: string) => void
}

const InfoModalContext = createContext<InfoModalContextType | undefined>(undefined)

export const InfoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [infoText, setInfoText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const showModal = useCallback((text: string) => {
    setInfoText(text)
    setModal(true)
    setIsFadingOut(false)
    setTimeout(() => setIsVisible(true), 10)
  }, [])

  useEffect(() => {
    if (modal) {
      // Calculate reading time based on text length
      const words = infoText.split(" ").length
      const readingSpeed = 250 // Average reading speed in words per minute
      const readingTime = (words / readingSpeed) * 60 * 1000 // Convert to milliseconds
      const minDisplayTime = 2000 // Minimum time to show (2 seconds)
      const displayTime = Math.max(minDisplayTime, readingTime) // Ensure at least 2 seconds

      const timer = setTimeout(() => {
        setIsFadingOut(true)
        setIsVisible(false)

        setTimeout(() => {
          setModal(false)
          setIsFadingOut(false)
        }, 300) // Match the transition duration
      }, displayTime)

      return () => clearTimeout(timer)
    }
  }, [modal, infoText])

  return (
    <InfoModalContext.Provider value={{ modal, setInfoText: showModal }}>
      {children}
      {modal && (
        <div className="fixed top-0 h-full flex items-center justify-center pointer-events-none left-0 w-full z-[9999]">
          <p
            className={`
              text-white text-center font-sora text-[12px] font-medium pt-2 pb-2 max-w-[70%] 
              pl-4 pr-4 rounded-md shadow-lg transition-all duration-300 ease-in-out transform
              ${isVisible && !isFadingOut ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}
            `}
            style={{
              backgroundColor: "#000000db",
              maxWidth: "70%",
            }}
          >
            {infoText}
          </p>
        </div>
      )}
    </InfoModalContext.Provider>
  )
}

export const useInfoModal = () => {
  const context = useContext(InfoModalContext)
  if (context === undefined) {
    throw new Error("useInfoModal must be used within an InfoModalProvider")
  }
  return context
}
