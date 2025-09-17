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

  // Parse default value for two-column structure (format: "option1Key_option2Key")
  const [defaultOption1, defaultOption2] = React.useMemo(() => {
    if (!defaultValue || !hasTwoColumnStructure) return [null, null]
    const parts = defaultValue.split("_")
    return [parts[0] || null, parts[1] || null]
  }, [defaultValue, hasTwoColumnStructure])

  // Calculate initial indices based on default value
  const initialOption1Index = React.useMemo(() => {
    if (hasTwoColumnStructure && defaultOption1) {
      const index = option1Array.findIndex((opt: any) => opt.key === defaultOption1)
      return index >= 0 ? index : 0
    }
    return 0
  }, [hasTwoColumnStructure, defaultOption1, option1Array])

  // State for selected indices
  const [selectedOption1Index, setSelectedOption1Index] = React.useState(initialOption1Index)
  const [selectedOption2Index, setSelectedOption2Index] = React.useState(0)
  const [selectedSingleIndex, setSelectedSingleIndex] = React.useState(0)
  const [hasUserInteracted, setHasUserInteracted] = React.useState(false)

  // Get the current month options based on selected year
  const option2Array = React.useMemo(() => {
    if (!hasTwoColumnStructure) return []

    const option2 = options[0].option2
    // Check if option2 is an object (year-based) or array (static)
    if (typeof option2 === "object" && !Array.isArray(option2)) {
      // Get the selected year from option1, default to first year if none selected
      const selectedYear = option1Array[selectedOption1Index]?.key || option1Array[0]?.key
      return option2[selectedYear] || []
    }

    // Fallback to array structure for backward compatibility
    return Array.isArray(option2) ? option2 : []
  }, [hasTwoColumnStructure, options, selectedOption1Index, option1Array])

  // Calculate initial option2 index based on default value
  const initialOption2Index = React.useMemo(() => {
    if (hasTwoColumnStructure && defaultOption2) {
      const index = option2Array.findIndex((opt: any) => opt.key === defaultOption2)
      return index >= 0 ? index : 0
    }
    return 0
  }, [hasTwoColumnStructure, defaultOption2, option2Array])

  // Calculate initial single index based on default value
  const initialSingleIndex = React.useMemo(() => {
    if (!hasTwoColumnStructure && defaultValue) {
      const index = options.findIndex((opt: any) => opt.key === defaultValue)
      return index >= 0 ? index : 0
    }
    return 0
  }, [hasTwoColumnStructure, defaultValue, options])

  // Scroll to index functions
  const scrollToIndex1 = React.useCallback((index: number) => {
    if (!containerRef1.current) return
    const itemHeight = 40
    containerRef1.current.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    })
    setSelectedOption1Index(index)
    setHasUserInteracted(true)
  }, [])

  const scrollToIndex2 = React.useCallback((index: number) => {
    if (!containerRef2.current) {
      return
    }
    const itemHeight = 40
    const scrollTop = index * itemHeight
    containerRef2.current.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    })
    setSelectedOption2Index(index)
    setHasUserInteracted(true)
  }, [])

  const scrollToSingleIndex = React.useCallback((index: number) => {
    if (!containerRef1.current) return
    const itemHeight = 40
    containerRef1.current.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    })
    setSelectedSingleIndex(index)
    setHasUserInteracted(true)
  }, [])

  // Track previous year to detect actual changes
  const prevYearIndex = React.useRef(-1) // Initialize to -1 to avoid interference
  const hasInitialized = React.useRef(false)

  // Reset month selection when year changes (but only after user has manually interacted)
  React.useEffect(() => {
    // Only reset if:
    // 1. It's a two-column structure
    // 2. Component is open
    // 3. User has manually interacted (not during initialization)
    // 4. Component has finished initializing
    // 5. Year actually changed
    // 6. It's been at least 100ms since initialization (to avoid initialization conflicts)
    const shouldReset =
      hasTwoColumnStructure &&
      isOpen &&
      hasUserInteracted &&
      hasInitialized.current &&
      prevYearIndex.current !== selectedOption1Index &&
      prevYearIndex.current !== -1 // Don't reset on first run

    if (shouldReset) {
      // Reset month selection to first month when year changes
      setSelectedOption2Index(0)
      // Use setTimeout to ensure the scroll happens after the state update
      setTimeout(() => {
        scrollToIndex2(0)
      }, 0)
    }

    // Always update the previous year index
    prevYearIndex.current = selectedOption1Index
  }, [selectedOption1Index, hasTwoColumnStructure, isOpen, hasUserInteracted, scrollToIndex2])

  // Reset user interaction flag when component closes
  React.useEffect(() => {
    if (!isOpen) {
      setHasUserInteracted(false)
    }
  }, [isOpen])

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

  // Initialize scroll positions when component opens
  React.useEffect(() => {
    if (!isOpen) {
      hasInitialized.current = false
      return
    }

    if (hasInitialized.current) return

    if (hasTwoColumnStructure) {
      // Calculate initial values based on default value internally
      let option1Index = 0
      let option2Index = 0

      if (defaultValue) {
        const [defaultOption1, defaultOption2] = defaultValue.split("_")

        if (defaultOption1) {
          const index = option1Array.findIndex((opt: any) => opt.key === defaultOption1)
          if (index >= 0) option1Index = index
        }

        if (defaultOption2) {
          const option2 = options[0].option2
          let correctOption2Array = []

          if (typeof option2 === "object" && !Array.isArray(option2)) {
            // Get the selected year from the calculated option1Index (not from current state)
            const selectedYear = option1Array[option1Index]?.key || option1Array[0]?.key
            correctOption2Array = option2[selectedYear] || []
          } else {
            // Fallback to array structure for backward compatibility
            correctOption2Array = Array.isArray(option2) ? option2 : []
          }

          const index = correctOption2Array.findIndex((opt: any) => opt.key === defaultOption2)
          if (index >= 0) option2Index = index
        }
      }

      // Set initial values
      setSelectedOption1Index(option1Index)
      setSelectedOption2Index(option2Index)
      prevYearIndex.current = option1Index

      setTimeout(() => {
        scrollToIndex1(option1Index)
        // Add a small delay for the second scroll to ensure the first one completes
        setTimeout(() => {
          scrollToIndex2(option2Index)
        }, 100)
      }, 150)
    } else {
      // Single column logic
      let singleIndex = 0
      if (defaultValue) {
        const index = options.findIndex((opt: any) => opt.key === defaultValue)
        if (index >= 0) singleIndex = index
      }

      setSelectedSingleIndex(singleIndex)
      scrollToSingleIndex(singleIndex)
    }

    hasInitialized.current = true
  }, [
    isOpen,
    hasTwoColumnStructure,
    scrollToIndex1,
    scrollToIndex2,
    scrollToSingleIndex,
    defaultValue,
    option1Array,
    options,
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

                {t('global.cancel')}
              </button>
              <h2 className="text-center text-white text-[14px] font-sora font-medium">{title}</h2>
              <button
                onClick={handleConfirm}
                className="absolute font-sora text-[12px] font-medium right-4 top-1/2 -translate-y-1/2 text-[#eebc7a]"
              >
                {t('global.confirm')}
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
