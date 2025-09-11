'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input } from '../ui/input';
import { PASSWORD_OFF_ICON, PASSWORD_ON_ICON } from '../custom-icons';

interface PasswordInputProps {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  label?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ id, placeholder, register,label }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      {/* Icon */}
      <label className="text-[14px] font-sora text-[#fffc] font-semibold">{label}</label>


      {/* Password Input */}
      <Input
        id={id}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        {...register}
        className="w-full bg-transparent border-t-0 border-l-0 border-r-0 rounded-none border-b border-white/20 pl-0   text-white  outline-none h-[45px] font-sora text-[14px] font-medium"
      />

      {/* Eye Toggle Button */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-0 bottom-0 transform -translate-y-1/2 text-gray-400"
      >
        {showPassword ? <img src={PASSWORD_OFF_ICON} className="w-[20px]" /> : <img src={PASSWORD_ON_ICON} className="w-[20px]" />}
      </button>

      {/* Error Message */}
    </div>
  );
};

export default PasswordInput;
