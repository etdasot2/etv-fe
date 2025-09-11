'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface FundPasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (password: string) => void
}

const FundPasswordModal: React.FC<FundPasswordModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setTimeout(() => setIsVisible(false), 300) // Match this with the CSS transition duration
    }
  }, [isOpen])

  const handleNumberClick = (num: string) => {
    if (password.length < 6) {
      setPassword(prev => prev + num)
    }
  }

  const handleDelete = () => {
    setPassword(prev => prev.slice(0, -1))
  }

  const handleConfirm = () => {
    if (password.length === 6) {
      onConfirm(password)
      setPassword('')
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div 
        className={`bg-[#1c1c1e] rounded-t-2xl w-full max-w-md p-6 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Please enter the fund password</h2>
          <button onClick={onClose} className="text-gray-400">
            <X size={24} />
          </button>
        </div>

        <div className="flex justify-between mb-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-12 h-12 border ${
                password.length > i 
                  ? 'border-[#ff0000]' 
                  : i === password.length 
                    ? 'border-[#ff0000]' 
                    : 'border-none'
              } rounded-lg bg-[#252525] ${i === password.length ? '' : ''}`}
            >
              {password.length >= i && (
                <div className="w-4 h-4 bg-[#ff0000] rounded-full mx-auto mt-3" />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleConfirm}
          className="w-full bg-[#ff0000]/80 text-white py-3 rounded-full font-bold text-base mb-6"
        >
          Confirm
        </button>

        <p className="text-center text-gray-400 mb-4">Security protection</p>

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-[#2c2c2e] text-white text-2xl font-bold py-1 rounded-lg"
            >
              {num}
            </button>
          ))}
          <button className="bg-[#2c2c2e] text-white text-2xl font-bold py-1 rounded-lg">
            <span className="transform rotate-180 inline-block">⌨</span>
          </button>
          <button
            onClick={() => handleNumberClick('0')}
            className="bg-[#2c2c2e] text-white text-2xl font-bold py-1 rounded-lg"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="bg-[#2c2c2e] text-white text-2xl font-bold py-1 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FundPasswordModal