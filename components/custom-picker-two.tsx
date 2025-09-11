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

export function CustomerPickerTwo({
  isOpen,
  onClose,
  title = "Select Category",
  options,
  onSelect,
  defaultValue,
}: CustomerPickerProps) {
  const { t } = useTranslation()
  const containerRef1 = React.useRef<HTMLDivElement>(null)
  const containerRef2 = React.useRef<HTMLDivElement>(null)

  // Check if options has the two-column structure
  const hasTwoColumnStructure = React.useMemo(() => {
    return options && options.length > 0 && options[0].option1 && options[0].option2
  }, [options])

  // Get the actual options arrays
  const option1Array = React.useMemo(() => {
    return hasTwoColumnStructure ? options[0].option1 : []
  }, [hasTwoColumnStructure, options])

  const option2Array = React.useMemo(() => {
    return hasTwoColumnStructure ? options[0].option2 : []
  }, [hasTwoColumnStructure, options])

  // Parse default value for two-column structure (format: "option1Key_option2Key")
  const [defaultOption1, defaultOption2] = React.useMemo(() => {
    if (!defaultValue || !hasTwoColumnStructure) return [null, null]
    const parts = defaultValue.split("_")
    return [parts[0] || null, parts[1] || null]
  }, [defaultValue, hasTwoColumnStructure])

  // Initialize selected indices
  const initialOption1Index = React.useMemo(() => {
    if (hasTwoColumnStructure && defaultOption1) {
      const index = option1Array.findIndex((opt: any) => opt.key === defaultOption1)
      return index >= 0 ? index : 0
    }
    return 0
  }, [hasTwoColumnStructure, defaultOption1, option1Array])

  const initialOption2Index = React.useMemo(() => {
    if (hasTwoColumnStructure && defaultOption2) {
      const index = option2Array.findIndex((opt: any) => opt.key === defaultOption2)
      return index >= 0 ? index : 0
    }
    return 0
  }, [hasTwoColumnStructure, defaultOption2, option2Array])

  // For single-column layout
  const initialSingleIndex = React.useMemo(() => {
    if (!hasTwoColumnStructure && defaultValue) {
      const index = options.findIndex((opt: any) => opt.key === defaultValue)
      return index >= 0 ? index : 0
    }
    return 0
  }, [hasTwoColumnStructure, defaultValue, options])

  // State for selected indices
  const [selectedOption1Index, setSelectedOption1Index] = React.useState(initialOption1Index)
  const [selectedOption2Index, setSelectedOption2Index] = React.useState(initialOption2Index)
  const [selectedSingleIndex, setSelectedSingleIndex] = React.useState(initialSingleIndex)

  // Scroll to index functions
  const scrollToIndex1 = React.useCallback((index: number) => {
    if (!containerRef1.current) return
    const itemHeight = 40
    containerRef1.current.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    })
    setSelectedOption1Index(index)
  }, [])

  const scrollToIndex2 = React.useCallback((index: number) => {
    if (!containerRef2.current) return
    const itemHeight = 40
    containerRef2.current.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    })
    setSelectedOption2Index(index)
  }, [])

  const scrollToSingleIndex = React.useCallback((index: number) => {
    if (!containerRef1.current) return
    const itemHeight = 40
    containerRef1.current.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    })
    setSelectedSingleIndex(index)
  }, [])

  // Initialize scroll positions when component opens
  React.useEffect(() => {
    if (!isOpen) return

    if (hasTwoColumnStructure) {
      scrollToIndex1(initialOption1Index)
      scrollToIndex2(initialOption2Index)
    } else {
      scrollToSingleIndex(initialSingleIndex)
    }
  }, [
    isOpen,
    hasTwoColumnStructure,
    initialOption1Index,
    initialOption2Index,
    initialSingleIndex,
    scrollToIndex1,
    scrollToIndex2,
    scrollToSingleIndex,
  ])

  // Handle scroll events
  const handleScroll1 = React.useCallback(() => {
    if (!containerRef1.current) return
    const container = containerRef1.current
    const itemHeight = 40
    const scrollTop = container.scrollTop
    const index = Math.round(scrollTop / itemHeight)
    setSelectedOption1Index(index)
  }, [])

  const handleScroll2 = React.useCallback(() => {
    if (!containerRef2.current) return
    const container = containerRef2.current
    const itemHeight = 40
    const scrollTop = container.scrollTop
    const index = Math.round(scrollTop / itemHeight)
    setSelectedOption2Index(index)
  }, [])

  const handleSingleScroll = React.useCallback(() => {
    if (!containerRef1.current) return
    const container = containerRef1.current
    const itemHeight = 40
    const scrollTop = container.scrollTop
    const index = Math.round(scrollTop / itemHeight)
    setSelectedSingleIndex(index)
  }, [])

  // Handle option clicks
  const handleOption1Click = (index: number) => {
    scrollToIndex1(index)
  }

  const handleOption2Click = (index: number) => {
    scrollToIndex2(index)
  }

  const handleSingleOptionClick = (index: number) => {
    scrollToSingleIndex(index)
  }

  // Handle outside click
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.()
    }
  }

  // Handle confirm button click
  const handleConfirm = () => {
    if (hasTwoColumnStructure) {
      // Combine the selected options from both columns
      const selectedOption1 = option1Array[selectedOption1Index]
      const selectedOption2 = option2Array[selectedOption2Index]
      // You might want to customize how you combine these values
      const combinedValue = `${selectedOption1.key}_${selectedOption2.key}`
      onSelect?.(combinedValue)
    } else {
      // Single column behavior
      onSelect?.(options[selectedSingleIndex].key)
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
            <div className="relative px-4 py-2.5">
              <button
                onClick={onClose}
                className="absolute font-sora text-[12px] left-4 top-1/2 -translate-y-1/2 text-[#969799]"
              >
                Cancel
              </button>
              <h2 className="text-center text-white text-[14px] font-sora font-medium">{title}</h2>
              <button
                onClick={handleConfirm}
                className="absolute font-sora text-[12px] font-medium right-4 top-1/2 -translate-y-1/2 text-[#eebc7a]"
              >
                Confirm
              </button>
            </div>

            {hasTwoColumnStructure ? (
              // Two-column layout
              <div className="relative h-[250px] overflow-hidden flex">
                {/* Left column */}
                <div className="flex-1 relative">
                  {/* Selection window borders */}
                  <div className="absolute left-0 right-0 top-[105px] h-[1px] bg-[#323232] z-10" />
                  <div className="absolute left-0 right-0 top-[145px] h-[1px] bg-[#323232] z-10" />

                  {/* Scrollable container for option1 */}
                  <div
                    ref={containerRef1}
                    className="absolute inset-0 overflow-auto scroll-smooth scrollbar-hide"
                    onScroll={handleScroll1}
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
                    {option1Array.map((option: any, index: number) => (
                      <div
                        key={option.key}
                        className="h-[40px] flex items-center justify-center scroll-snap-align-start cursor-pointer"
                        onClick={() => handleOption1Click(index)}
                        style={{
                          scrollSnapAlign: "center",
                        }}
                      >
                        <div className="transition-all duration-200 px-4 py-2 rounded-lg">
                          <span
                            className={`text-[14px] font-sora font-medium ${
                              selectedOption1Index === index ? "text-white" : "text-[#ffffff66]"
                            }`}
                          >
                            {option.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column */}
                <div className="flex-1 relative">
                  {/* Selection window borders */}
                  <div className="absolute left-0 right-0 top-[105px] h-[1px] bg-[#323232] z-10" />
                  <div className="absolute left-0 right-0 top-[145px] h-[1px] bg-[#323232] z-10" />

                  {/* Scrollable container for option2 */}
                  <div
                    ref={containerRef2}
                    className="absolute inset-0 overflow-auto scroll-smooth scrollbar-hide"
                    onScroll={handleScroll2}
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
                    {option2Array.map((option: any, index: number) => (
                      <div
                        key={option.key}
                        className="h-[40px] flex items-center justify-center scroll-snap-align-start cursor-pointer"
                        onClick={() => handleOption2Click(index)}
                        style={{
                          scrollSnapAlign: "center",
                        }}
                      >
                        <div className="transition-all duration-200 px-4 py-2 rounded-lg">
                          <span
                            className={`text-[14px] font-sora font-medium ${
                              selectedOption2Index === index ? "text-white" : "text-[#ffffff66]"
                            }`}
                          >
                            {option.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Original single-column layout
              <div className="relative h-[250px] overflow-hidden">
                {/* Selection window borders */}
                <div className="absolute left-0 right-0 top-[105px] h-[1px] bg-[#323232] z-10" />
                <div className="absolute left-0 right-0 top-[145px] h-[1px] bg-[#323232] z-10" />

                {/* Scrollable container */}
                <div
                  ref={containerRef1}
                  className="absolute inset-0 overflow-auto scroll-smooth scrollbar-hide"
                  onScroll={handleSingleScroll}
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
                      onClick={() => handleSingleOptionClick(index)}
                      style={{
                        scrollSnapAlign: "center",
                      }}
                    >
                      <div className="transition-all duration-200 px-4 py-2 rounded-lg">
                        <span
                          className={`text-[14px] font-sora font-medium ${
                            selectedSingleIndex === index ? "text-white" : "text-[#ffffff66]"
                          }`}
                        >
                          {option.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

