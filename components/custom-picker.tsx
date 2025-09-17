"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

interface CustomerPickerProps {
  isOpen: boolean
  onClose?: () => void
  title?: string
  options: any
  onSelect?: (option: string) => void
  defaultValue?: string
}

export function CustomerPicker({
  isOpen,
  onClose,
  title = "Select Category",
  options,
  onSelect,
  defaultValue,
}: CustomerPickerProps) {
  const initialIndex = defaultValue ? options.findIndex((opt: any) => opt.key === defaultValue) : 0
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex >= 0 ? initialIndex : 0)
  const { t } = useTranslation()
  const containerRef = React.useRef<HTMLDivElement>(null)

  const scrollToIndex = React.useCallback((index: number) => {
    if (!containerRef.current) return
    const itemHeight = 40
    containerRef.current.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    })
    setSelectedIndex(index)
  }, [])

  // Scroll to the default value when the component mounts or when defaultValue changes
  React.useEffect(() => {
    if (isOpen) {
      const index = defaultValue ? options.findIndex((opt: any) => opt.key === defaultValue) : 0
      scrollToIndex(index >= 0 ? index : 0)
    }
  }, [isOpen, defaultValue, options, scrollToIndex])

  // Disable/enable background scrolling when picker opens/closes
  React.useEffect(() => {
    if (isOpen) {
      // Disable background scrolling
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable background scrolling
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to ensure scrolling is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleScroll = React.useCallback(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const itemHeight = 40
    const scrollTop = container.scrollTop
    const index = Math.round(scrollTop / itemHeight)
    setSelectedIndex(index)
  }, [])

  const handleOptionClick = (index: number) => {
    scrollToIndex(index)
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.()
    }
  }

  const handleConfirm = () => {
    onSelect?.(options[selectedIndex].key)
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
              <button
                onClick={onClose}
                className="absolute font-sora text-[12px] left-4 top-1/2 -translate-y-1/2 text-[#969799]"
              >
                {t('global.cancel')}
              </button>
              <h2 className="text-center text-white text-[14px] font-sora font-medium">{title}</h2>
              <button
                onClick={handleConfirm}
                className="absolute  font-sora text-[12px]  font-medium right-4 top-1/2 -translate-y-1/2 text-[#eebc7a]"
              >
                {t('global.confirm')}
              </button>
            </div>

            <div className="relative h-[250px] overflow-hidden">
              {/* Selection window borders */}
              <div className="absolute left-0 right-0 top-[105px] h-[1px] bg-[#323232] z-10" />
              <div className="absolute left-0 right-0 top-[145px] h-[1px] bg-[#323232] z-10" />

              {/* Scrollable container */}
              <div
                ref={containerRef}
                className="absolute inset-0 overflow-auto scroll-smooth scrollbar-hide"
                onScroll={handleScroll}
                style={{
                  scrollSnapType: "y mandatory",
                  paddingTop: "112px", // 2 items height
                  paddingBottom: "112px", // 2 items height
                  msOverflowStyle: "none" /* IE and Edge */,
                  scrollbarWidth: "none" /* Firefox */,
                }}
              >
                {/* Add this CSS to hide WebKit scrollbars */}
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {options.map((option: any, index: number) => (
                  <div
                    key={option.key}
                    className="h-[40px] flex items-center justify-center scroll-snap-align-start cursor-pointer"
                    onClick={() => handleOptionClick(index)}
                    style={{
                      scrollSnapAlign: "center",
                    }}
                  >
                    <div className="transition-all duration-200 px-4 py-2 rounded-lg">
                      <span
                        className={`text-[14px] font-sora font-medium ${
                          selectedIndex === index ? "text-white" : "text-[#ffffff66]"
                        }`}
                      >
                        {option.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}