"use client"

import { useEffect, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface OTPInputProps {
  value: string
  onChange: (value: string) => void
  maxLength?: number
  containerClassName?: string
  inputClassName?: string
  type?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
  readOnly?: boolean
  autoFocus?: boolean
}

export const OTPInput = forwardRef<HTMLInputElement, OTPInputProps>(function OTPInput(
  {
    value,
    onChange,
    maxLength = 6,
    containerClassName,
    inputClassName,
    type = "text",
    inputMode = "numeric",
    readOnly = false,
    autoFocus = true,
  },
  ref,
) {
  useEffect(() => {
    if (value.length > maxLength) {
      onChange(value.slice(0, maxLength))
    }
  }, [value, maxLength, onChange])

  const activeIndex = value.length < maxLength ? value.length : -1

  return (
    <div className={cn("flex", containerClassName)}>
      {Array.from({ length: maxLength }).map((_, index) => (
        <div key={index} className="relative">
          <input
            ref={index === 0 ? ref : null}
            type={type}
            inputMode={inputMode}
            className={cn(
              "w-16 h-16 bg-[#273347] rounded-lg border-2 text-white text-4xl outline-none transition-colors text-center disabled:opacity-1",
              inputClassName,
              index === activeIndex ? "border-[#eebc7a]" : "border-white/[0.08]",
            )}
            value={value[index] || ""}
            readOnly={readOnly}
            autoFocus={autoFocus && index === 0}
            disabled={true}
            tabIndex={-1}

          />
          {index === activeIndex && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-5 bg-[#eebc7a] animate-smooth-blink"></div>
          )}
        </div>
      ))}
    </div>
  )
})

