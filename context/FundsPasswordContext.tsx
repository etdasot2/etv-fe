"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { SecurityVerification } from "@/components/security-verification"
import { checkFundsPassword, verifyFundsPassword } from "@/lib/api"
import { useInfoModal } from "./InfoModalContext"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"

type SecurityVerificationContent = {
  onSuccess: (hash: string) => void; // Modify onSuccess to accept hash
  onFailure?: () => void
}

type SecurityVerificationContextType = {
  openVerification: (content: SecurityVerificationContent) => void
  closeVerification: () => void
  isOpen: boolean
  content: SecurityVerificationContent | null
}

const SecurityVerificationContext = createContext<SecurityVerificationContextType>(
  {} as SecurityVerificationContextType,
)

export const SecurityVerificationProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter() // Initialize the router
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<SecurityVerificationContent | null>(null)
  const { setInfoText } = useInfoModal();
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      const checkFundsPasswordStatus = async () => {
        try {
          const response = await checkFundsPassword()
          if (response === "no_funds_password") {
            setInfoText(t("verifyFundsPassword.alerts.noFundsPassword"))
            router.push("/user/fundingPassword?bind=true")
            closeVerification() // Close modal if opened
          }
        } catch (error) {
          console.error("Funds password check failed:", error)
          setInfoText(t("global.error.tryAgain"))
          closeVerification()
        }
      }
      checkFundsPasswordStatus()
    }
  }, [isOpen, router, setInfoText, t])

  const openVerification = (content: SecurityVerificationContent) => {
    setContent(content)
    setIsOpen(true)
  }

  const closeVerification = () => {
    setIsOpen(false)
    setContent(null)
  }

  const handleComplete = async (value: string) => {
    try {
      const response = await verifyFundsPassword(value)
      content?.onSuccess(response.hash)
      closeVerification()
    } catch (error) {
      console.error("Verification failed:", error)
      content?.onFailure?.()
      if(error === "incorrectFundsPassword"){
        setInfoText(t('verifyFundsPassword.alerts.incorrectPassword'))
      }else if(error === "tooManyAttempts"){
        setInfoText(t('verifyFundsPassword.alerts.tooManyAttempts'))
      }else{
        setInfoText(t('global.error.tryAgain'))
      }
      // You might want to show an error message here
    }
  }

  return (
    <SecurityVerificationContext.Provider value={{ openVerification, closeVerification, isOpen, content }}>
      {children}
      <SecurityVerification isOpen={isOpen} onComplete={handleComplete} onClose={closeVerification} />
    </SecurityVerificationContext.Provider>
  )
}

export const useSecurityVerification = () => useContext(SecurityVerificationContext)

