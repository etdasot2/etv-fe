'use client'
import { removeToken } from '@/lib/auth';
import { ChevronRight, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Logout() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleLogOut = () => {
    removeToken();
    router.push('/user/login')
  }
  return (
   
    <button 
    
    className="w-full mt-4 flex items-center justify-center  bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] h-[43px]  last:border-b-0  rounded-full "
      onClick={handleLogOut}
      style={{
            // background:'linear-gradient(90deg,#f40208,#ff595d)',
      }}
    >
            <div className="flex items-center justify-center">

              <span className="font-sora text-[14px] text-[white] text-center">{t('profile.logOut')}</span>
              </div>

    </button>
  )
}
