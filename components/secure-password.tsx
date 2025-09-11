"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SecurePasswordProps {
  onComplete?: (value: string) => void
  onClose?: () => void
}

export function SecurePassword({ onComplete, onClose }: SecurePasswordProps) {
  const [password, setPassword] = useState<string[]>(Array(6).fill(""))
  const [showKeyboard, setShowKeyboard] = useState(true)

  // Prevent keyboard input
  useEffect(() => {
    const preventKeyboard = (e: KeyboardEvent) => {
      if (e.key !== "Tab") {
        e.preventDefault()
      }
    }
    window.addEventListener("keydown", preventKeyboard)
    return () => window.removeEventListener("keydown", preventKeyboard)
  }, [])

  const handleNumberClick = (num: string) => {
    const currentIndex = password.findIndex((digit) => digit === "")
    if (currentIndex !== -1) {
      const newPassword = [...password]
      newPassword[currentIndex] = num
      setPassword(newPassword)

      if (currentIndex === 5) {
        onComplete?.(newPassword.join(""))
      }
    }
  }

  const handleDelete = () => {
    const lastFilledIndex = password.map((digit) => digit !== "").lastIndexOf(true)
    if (lastFilledIndex !== -1) {
      const newPassword = [...password]
      newPassword[lastFilledIndex] = ""
      setPassword(newPassword)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="absolute bottom-0 w-full">
        <div className="bg-[#1e293a] px-4 py-6 rounded-t-[1rem]">
          <div className="relative text-center mb-6">
            <h2 className="text-xl font-medium text-white">Please enter the fund password</h2>
            <button onClick={onClose} className="absolute right-0 top-1/2 -translate-y-1/2">
              <X className="h-6 w-6 text-white/70" />
            </button>
          </div>

          {/* Password Input */}
          <div className="flex gap-3 mb-6">
            {password.map((digit, index) => (
              <div
                key={index}
                className={cn(
                  "h-16 w-16 rounded-lg flex items-center justify-center",
                  "bg-[#273347] border-2 border-white/[0.08]",
                  password[index] ? "text-white" : "",
                  index === password.findIndex((d) => d === "") && "border-[#1fbcff]",
                )}
              >
                {digit && "•"}
              </div>
            ))}
          </div>

          {/* Confirm Button */}
          <button
            className="w-full h-12 rounded-full text-white text-lg font-medium mb-6"
            style={{
              background: "linear-gradient(319deg, #7fceeb -1.9%, rgba(174,193,245,0) 17.34%, #dbe0ff 87.36%), #3478ff",
              backgroundBlendMode: "soft-light, normal",
            }}
          >
            Confirm
          </button>

          {/* Number Pad */}
          {showKeyboard && (
            <div className="bg-[#021324] pt-3">
              <p className="text-center text-white/70 mb-3">Security protection</p>
              <div className="grid grid-cols-3 gap-3 p-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleNumberClick(num.toString())}
                    className="h-12 bg-[#273347] rounded text-white text-xl"
                  >
                    {num}
                  </button>
                ))}
                <button className="h-12 bg-[#273347] rounded text-white">
                  <span className="sr-only">Hide keyboard</span>
                  ⌨️
                </button>
                <button onClick={() => handleNumberClick("0")} className="h-12 bg-[#273347] rounded text-white text-xl">
                  0
                </button>
                <button onClick={handleDelete} className="h-12 bg-[#273347] rounded text-white">
                  <span className="sr-only">Delete</span>✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

