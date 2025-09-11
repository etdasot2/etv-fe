"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "@/components/ui/input"
import { useInfoModal } from "@/context/InfoModalContext"
import { checkKYCSubmission, submitKYCForReview } from "@/lib/api"
import { useRouter } from "next/navigation"
import DefaultLoading from "@/components/loaders/DefaultLoading"
import { useTranslation } from "react-i18next"
import { CustomerPicker } from "@/components/custom-picker"
import { ChevronDown } from "lucide-react"

interface KYCFormInputs {
  nationality: string
  name: string
  documentType: string
  documentNumber: string
}

export default function KYCForm() {
  const { t } = useTranslation()

  const schema = yup.object().shape({
    nationality: yup
      .string()
      .required(t("profile.kyc.inputs.nationality.validation.required", "Nationality is required")),
    name: yup.string().required(t("profile.kyc.inputs.name.validation.required", "Name is required")),
    documentType: yup
      .string()
      .required(t("profile.kyc.inputs.documentType.validation.required", "Document type is required")),
    documentNumber: yup
      .string()
      .required(t("profile.kyc.inputs.documentNumber.validation.required", "Document number is required")),
  })

  // Using react-hook-form with yup validation schema
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<KYCFormInputs>({
    resolver: yupResolver(schema),
  })
  const { setInfoText } = useInfoModal()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [kycStatus, setKycStatus] = useState('')
  const [isVerified, setIsVerified] = useState(false)

  // State for document type
  const [documentType, setDocumentType] = useState("idCard")

  // State for File objects
  const [frontImage, setFrontImage] = useState<File | null>(null)
  const [backImage, setBackImage] = useState<File | null>(null)
  const [selfieImage, setSelfieImage] = useState<File | null>(null)

  // State for preview URLs
  const [frontImagePreview, setFrontImagePreview] = useState<string | null>(null)
  const [backImagePreview, setBackImagePreview] = useState<string | null>(null)
  const [selfieImagePreview, setSelfieImagePreview] = useState<string | null>(null)

  const [isOpen, setIsOpen] = useState(false)

  // Handle form submission
  const onSubmit = async (data: KYCFormInputs) => {
    if (documentType === "passport") {
      if (frontImage === null) {
        setInfoText(t("profile.kyc.errorPassport1"))
        return
      }
      if (selfieImage === null) {
        setInfoText(t("profile.kyc.errorPassport2"))
        return
      }
    }

    if (documentType === "idCard") {
      if (frontImage === null) {
        setInfoText(t("profile.kyc.errorID1"))
        return
      }
      if (backImage === null) {
        setInfoText(t("profile.kyc.errorID2"))
        return
      }
      if (selfieImage === null) {
        setInfoText(t("profile.kyc.errorID3"))
        return
      }
    }

    if (!frontImage || !selfieImage) {
        setInfoText(t('profile.kyc.errorMsg'));
        return;
    }

    setIsLoading(true)

    console.log(data)

    try {
      // Submit KYC for review with File objects
      await submitKYCForReview(data, frontImage, backImage, selfieImage)
      setInfoText(t("profile.kyc.successMsg"))
      router.back()
    } catch (error) {
      if(error === "kyc_undre_rview"){
        setInfoText(t("profile.kyc.alreadySubmited"))
      }else{
        setInfoText(t("profile.kyc.errorMsg"))
      }
      console.error("KYC submission failed:", error)
      setIsLoading(false)
    }
  }

  // Reset images when the document type changes
  useEffect(() => {
    setFrontImage(null)
    setBackImage(null)
    setSelfieImage(null)
    setFrontImagePreview(null)
    setBackImagePreview(null)
    setSelfieImagePreview(null)
  }, [documentType])

  // Display validation errors in the modal
  useEffect(() => {
    const errorKeys = Object.keys(errors) as Array<keyof KYCFormInputs>
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0]
      const firstErrorMessage = errors[firstErrorKey]?.message
      if (firstErrorMessage) {
        setInfoText(firstErrorMessage)
      }
    }
  }, [errors, setInfoText])

  // Handle file selection and generate preview
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<File | null>>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const previewURL = URL.createObjectURL(file)
      setImage(file) // Store the file object
      setPreview(previewURL) // Store the preview URL
    }
  }

  // Clean up preview URLs when component unmounts
  useEffect(() => {
    return () => {
      if (frontImagePreview) URL.revokeObjectURL(frontImagePreview)
      if (backImagePreview) URL.revokeObjectURL(backImagePreview)
      if (selfieImagePreview) URL.revokeObjectURL(selfieImagePreview)
    }
  }, [frontImagePreview, backImagePreview, selfieImagePreview])

  useEffect(() => {
    const checkKYC = async () => {
      setIsLoading(true)
      try {
        const data = await checkKYCSubmission()
        setIsSubmitted(data.kycSubmitted)
        setIsVerified(data.kycVerified)
        setKycStatus(data.kycStatus)
      } catch (error) {
        console.error("Error checking KYC submission:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkKYC()
  }, [])

  const options = [
    {
      key: "idCard",
      label: t(`profile.kyc.options.documentType.idCard`),
    },
    {
      key: "passport",
      label: t(`profile.kyc.options.documentType.passport`),
    },
  ]

  useEffect(() => {
    // Set initial document type translation
    const initialType = options.find((opt: any) => opt.key === documentType)
    if (initialType) {
      setValue("documentType", t(`profile.kyc.options.documentType.${initialType.key}`))
    }
  }, [documentType, setValue, t])

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      {!isLoading && (
        <> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-4 pt-0 space-y-3">
                {/* Nationality */}
                {/* <div className="mt-4 text-[14px] font-semibold">
                  {kycStatus === "pending" && t('profile.kyc.underReview')}
                  {kycStatus === "verified" && t('profile.kyc.verified')}
                  {kycStatus === "rejected" && t('profile.kyc.rejected')}
                  </div> */}

                <div className="mt-3">
                  <span className="font-sora text-[13px] font-medium">{t("profile.kyc.inputs.nationality.label")}</span>
                  <div className="relative mt-2">
                    <Input
                      type="text"
                      placeholder={t("profile.kyc.inputs.nationality.placeholder")}
                      {...register("nationality")}
                      className={`w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-4 pb-4 font-sora text-[13px] outline-none border-none h-[48px]`}
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="mt-3">
                  <span className="font-sora text-[13px] font-medium">{t("profile.kyc.inputs.name.label")}</span>
                  <div className="relative mt-2">
                    <Input
                      type="text"
                      placeholder={t("profile.kyc.inputs.name.placeholder")}
                      {...register("name")}
                      className={`w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]`}
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* Document Type */}
                <div>
                  <span className="font-sora text-[13px] font-medium">
                    {t("profile.kyc.options.documentType.label")}
                  </span>
                  <div className="relative mt-2">
                    <Input
                      type="text"
                      {...register("documentType")}
                      value={watch("documentType") || ""}
                      className={`w-full bg-[#1c1c1c] cursor-default rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]`}
                      autoComplete="off"
                      readOnly
                      onClick={() => {
                        setIsOpen(true)
                      }}
                    />
                    <div className="absolute top-[15px] right-3">
                      <ChevronDown size={17} />
                    </div>
                  </div>
                </div>

                {/* Document Number */}
                <div className="mt-3">
                  <span className="font-sora text-[13px] font-medium">
                    {t("profile.kyc.inputs.documentNumber.label")}
                  </span>
                  <div className="relative mt-2">
                    <Input
                      type="text"
                      placeholder={t("profile.kyc.inputs.documentNumber.placeholder")}
                      {...register("documentNumber")}
                      className={`w-full bg-[#1c1c1c] rounded-[10px] font-medium pl-4 pr-4 pt-3 pb-3 font-sora text-[13px] outline-none border-none h-[48px]`}
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* Upload Document Section */}
                <div>
                  <span className="font-sora text-[13px] font-medium">{t("profile.kyc.uploadDocument")}</span>
                  <div className="w-full flex flex-wrap mt-2">
                    {documentType !== "passport" && (
                      <>
                        <div
                          style={{
                            background: "url(/assets/real-bg.26fcf5d0.png) no-repeat",
                            backgroundSize: "100% 100%",
                          }}
                          className="relative h-[110px] w-[48.5%] mr-[1.5%]"
                        >
                          <label className="absolute w-full flex flex-col items-center justify-center h-[110px]">
                            <input
                              type="file"
                              className="hidden w-full h-full"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, setFrontImage, setFrontImagePreview)}
                            />
                            {frontImagePreview ? (
                              <img
                                src={frontImagePreview || "/placeholder.svg"}
                                className="w-full h-full object-cover rounded"
                                alt="Front of Document"
                              />
                            ) : (
                              <>
                                <img
                                  src="/assets/real0.446c35e6.png"
                                  className="w-[40px] h-[40px] pointer-events-none"
                                  alt="Front of Document"
                                />
                                <span className="text-[14px] text-white font-sora font-medium mt-1 text-center">
                                  {t("profile.kyc.frontOfDocument")}
                                </span>
                              </>
                            )}
                          </label>
                        </div>

                        <div
                          style={{
                            background: "url(/assets/real-bg.26fcf5d0.png) no-repeat",
                            backgroundSize: "100% 100%",
                          }}
                          className="relative h-[110px] w-[48.5%] ml-[1.5%]"
                        >
                          <label className="absolute w-full flex flex-col items-center justify-center h-[110px]">
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, setBackImage, setBackImagePreview)}
                            />
                            {backImagePreview ? (
                              <img
                                src={backImagePreview || "/placeholder.svg"}
                                className="w-full h-full object-cover rounded"
                                alt="Back of Document"
                              />
                            ) : (
                              <>
                                <img
                                  src="/assets/real0.446c35e6.png"
                                  className="w-[40px] h-[40px]"
                                  alt="Back of Document"
                                />
                                <span className="text-[14px] text-white font-sora font-medium mt-1 text-center">
                                  {t("profile.kyc.backOfDocument")}
                                </span>
                              </>
                            )}
                          </label>
                        </div>

                        <div
                          style={{
                            width: "calc(50% - .11rem)",
                            background: "url(/assets/real-bg.26fcf5d0.png) no-repeat",
                            backgroundSize: "100% 100%",
                          }}
                          className="relative h-[110px] mt-[3%]"
                        >
                          <label className="absolute w-full flex flex-col items-center justify-center h-[110px]">
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, setSelfieImage, setSelfieImagePreview)}
                            />
                            {selfieImagePreview ? (
                              <img
                                src={selfieImagePreview || "/placeholder.svg"}
                                className="w-full h-full object-cover rounded"
                                alt="Selfie Holding Document"
                              />
                            ) : (
                              <>
                                <img
                                  src="/assets/real0.446c35e6.png"
                                  className="w-[40px] h-[40px]"
                                  alt="Selfie Holding Document"
                                />
                                <span className="text-[14px] text-white font-sora font-medium mt-1 text-center">
                                  {t("profile.kyc.selfieHoldingDocument")}
                                </span>
                              </>
                            )}
                          </label>
                        </div>
                      </>
                    )}

                    {documentType === "passport" && (
                      <>
                        <div
                          style={{
                            background: "url(/assets/real-bg.26fcf5d0.png) no-repeat",
                            backgroundSize: "100% 100%",
                          }}
                          className="relative h-[110px] w-[48.5%] mr-[1.5%]"
                        >
                          <label className="absolute w-full flex flex-col items-center justify-center h-[110px]">
                            <input
                              type="file"
                              className="hidden w-full h-full"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, setFrontImage, setFrontImagePreview)}
                            />
                            {frontImagePreview ? (
                              <img
                                src={frontImagePreview || "/placeholder.svg"}
                                className="w-full h-full object-cover rounded"
                                alt="Front of Document"
                              />
                            ) : (
                              <>
                                <img
                                  src="/assets/real0.446c35e6.png"
                                  className="w-[40px] h-[40px] pointer-events-none"
                                  alt="Front of Document"
                                />
                                <span className="text-[14px] text-white font-sora font-medium mt-1 text-center">
                                  {t("profile.kyc.frontOfDocument")}
                                </span>
                              </>
                            )}
                          </label>
                        </div>

                        <div
                          style={{
                            background: "url(/assets/real-bg.26fcf5d0.png) no-repeat",
                            backgroundSize: "100% 100%",
                          }}
                          className="relative h-[110px] w-[48.5%] ml-[1.5%]"
                        >
                          <label className="absolute w-full flex flex-col items-center justify-center h-[110px]">
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, setSelfieImage, setSelfieImagePreview)}
                            />
                            {selfieImagePreview ? (
                              <img
                                src={selfieImagePreview || "/placeholder.svg"}
                                className="w-full h-full object-cover rounded"
                                alt="Selfie Holding Document"
                              />
                            ) : (
                              <>
                                <img
                                  src="/assets/real0.446c35e6.png"
                                  className="w-[40px] h-[40px]"
                                  alt="Selfie Holding Document"
                                />
                                <span className="text-[14px] text-white font-sora font-medium mt-1 text-center">
                                  {t("profile.kyc.selfieHoldingDocument")}
                                </span>
                              </>
                            )}
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                {kycStatus !== "verified" && kycStatus !== "pending"  && 
                <button
                  type="submit"
                  className="w-[100%] text-white bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] py-2 rounded-full font-sora text-[14px] font-medium hover:bg-transparent transition-colors h-[44px]"
                  style={{
                    // background: "linear-gradient(-40deg, #f40208, #ff464b)",
                  }}
                >
                  {t("profile.kyc.actionButton")}
                </button> }
              </div>
            </form> 
          <CustomerPicker
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            options={options}
            onSelect={(option) => {
              setDocumentType(option)
              setValue("documentType", t(`profile.kyc.options.documentType.${option}`))
              setIsOpen(false)
            }}
            defaultValue={documentType}
            title={t(`profile.kyc.options.documentType.label`)}
          />
        </>
      )}

      {isLoading && <DefaultLoading />}
    </>
  )
}

