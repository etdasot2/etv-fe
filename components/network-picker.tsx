"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { X } from "lucide-react"
import { CHECK_ICON_PRO } from './custom-icons';


interface NetworkPickerProps {
  isOpen: boolean
  onClose?: () => void
  title?: string
  options: any
  onSelect?: (option: string) => void
  defaultValue?: string
}

export function NetworkPicker({
  isOpen,
  onClose,
  title = "Select Network",
  options,
  onSelect,
  defaultValue,
}: NetworkPickerProps) {
  const { t } = useTranslation()
  const [selectedOption, setSelectedOption] = React.useState<string | null>(defaultValue || null)

  // Update selected option when defaultValue changes or when picker opens
  React.useEffect(() => {
    if (isOpen && defaultValue) {
      setSelectedOption(defaultValue)
    }
  }, [isOpen, defaultValue])

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.()
    }
  }

  const handleOptionSelect = (optionKey: string) => {
    setSelectedOption(optionKey)
  }

  const handleConfirm = () => {
    if (selectedOption) {
      onSelect?.(selectedOption)
    }
    onClose?.()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={handleOutsideClick}
        >
          <motion.div
            className="w-full bg-[#1c1c1c] rounded-t-[13px] max-w-[435px]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "tween",
              ease: [1, 1, 1, 1],
              duration: 0.21,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative px-4 py-2.5  ">
              {/* <button
                onClick={onClose}
                className="absolute font-sora text-[12px] left-4 top-1/2 -translate-y-1/2 text-[#969799]"
              >
                Cancel
              </button> */}
              <h2 className="text-center text-white text-[14px] font-sora font-medium">{title}</h2>
              <button
                onClick={onClose}
                className="absolute  font-sora text-[12px]  font-medium right-4 top-1/2 -translate-y-1/2 text-[#eebc7a]"
              >
                 <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="relative h-[350px] overflow-y-auto px-4 py-4">
              {/* Options list */}
              <div className="space-y-3">
                {options.map((option: any) => (
                  <div
                    key={option.key}
                    className={`relative rounded-[12px] cursor-pointer ${
                      selectedOption === option.key
                        ? ''
                        : ' bg-[#262626]  p-4'
                    }`}
                    onClick={() => handleOptionSelect(option.key)}
                  >
                    {selectedOption === option.key ? (
                      <div 
                        className="relative rounded-[12px] p-4 h-full"
                        style={{
                          background: "linear-gradient(rgba(250, 179, 54, 0), rgba(186, 140, 0, 0.1))"
                        }}
                      >
                        {/* Gradient border using pseudo-element with mask */}
                        <div 
                          className="absolute inset-0 rounded-[12px] pointer-events-none"
                          style={{
                            background: "linear-gradient(to right, #b37106, #c18610, #7c4804)",
                            padding: "2px",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude"
                          }}
                        />
                        <div className="flex items-center space-x-3">
                          {/* Icon */}
                          {option.icon && (
                            <div className="flex-shrink-0">
                              {typeof option.icon === 'string' ? (
                                <img 
                                  src={option.icon} 
                                  alt={option.label} 
                                  className="w-[40px] h-[40px] rounded-full"
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-[#eebc7a] flex items-center justify-center">
                                  {option.icon}
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="text-white text-[14px] font-sora font-medium">
                              {option.label}
                            </div>
                            {option.description && (
                              <div className="text-white/80 text-[12px] font-sora ">
                                {option.description}
                              </div>
                            )}
                          </div>
                          
                          {/* Selection indicator */}
                          {/* <div className="flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-[#1c1c1c]"></div>
                            </div>
                          </div> */}
                        </div>

                        <img src={CHECK_ICON_PRO} className="absolute top-[2px] right-[2px] w-[27px]" />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        {/* Icon */}
                        {option.icon && (
                          <div className="flex-shrink-0">
                            {typeof option.icon === 'string' ? (
                              <img 
                                src={option.icon} 
                                alt={option.label} 
                                className="w-[40px] h-[40px] rounded-full"
                              />
                            ) : (
                              <div className="w-[40px] h-[40px] rounded-full bg-[#eebc7a] flex items-center justify-center">
                                {option.icon}
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-[14px] font-sora font-medium">
                            {option.label}
                          </div>
                          {option.description && (
                            <div className="text-[#ffffff66] text-[12px] font-sora">
                              {option.description}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* OK Button */}
            <div className="px-4 pb-4">
              <button
                onClick={handleConfirm}
                className="w-full bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] text-white py-3 rounded-full font-sora text-[14px]  transition-all duration-200 hover:opacity-90"
              >
                OK
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}