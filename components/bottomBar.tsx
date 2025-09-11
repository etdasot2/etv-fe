'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import BannerPopup from './popups/BannerPopup';
import { useTranslation } from 'react-i18next';
import { setUserLocation } from '@/lib/api';

// Define interface for BottomBar props
interface BottomBarProps {
  activeRoute?: string;
  noRoundedTop?: boolean;
  isReels?: boolean;
}

export default function BottomBar({ activeRoute, noRoundedTop, isReels }: BottomBarProps) {
  const pathname = usePathname(); // Get the current active route
  const { t } = useTranslation();

  // Define your bottom bar items with icon paths and routes
  const bottomBarItems = [
    {
      label: t('bottomBar.home'),
      icon: '/assets/home.png',
      iconActive: '/assets/home-active.png',
      path: '/home',
    },
    {
      label: t('bottomBar.team'),
      icon: '/assets/team.png',
      iconActive: '/assets/team-active.png',
      path: '/promote/index',
    },
    {
      label: t('bottomBar.revenue'),
      icon: '/assets/revenue.png',
      iconActive: '/assets/revenue-active.png',
      path: '/revenue',
    },
    {
      label: t('bottomBar.record'),
      icon: '/assets/music1.png',
      iconActive: '/assets/music-active.png',
      path: '/music/revenue',
    },
    {
      label: t('bottomBar.mine'),
      icon: '/assets/mine.png',
      iconActive: '/assets/mine-active.png',
      path: '/my/index',
    },
  ];

  // Determine active route: Use activeRoute prop if provided, otherwise use pathname
  const currentRoute = activeRoute || pathname;

  useEffect(() => {
    const updateUserLocation = async () => {
      try {
        // Get the default language from local storage or cookies
        const defaultLanguage = localStorage.getItem('lang') || 'en'; // Fallback to 'en' if not found

        // Update user location and default language
        await setUserLocation(defaultLanguage);
      } catch (error) {
        console.error("Error updating user location:", error);
      }
    };

    updateUserLocation();
  }, []);

  return (
    <div>
      {/* Add space above the bottom bar */}
      {!isReels && <div className="w-full h-[100px]"></div> }
      
      {/* Bottom bar container */}
      <div className={cn("h-16 bg-[#232323] text-white flex items-center justify-around px-4 z-40 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[435px] rounded-t-[15px]", noRoundedTop && "rounded-t-none")}>
        {bottomBarItems.map((item, index) => {
          // Check if the current item is the active route
          const isActive = currentRoute === item.path;

          return (
            <Link href={item.path} key={index} className="flex cursor-default flex-col items-center w-[50px]" aria-label={item.label}>
              {/* Render active or inactive icon based on whether it's the active route */}
              <img
                src={isActive ? item.iconActive : item.icon}
                className="w-[22px] h-[22px]"
                alt={item.label}
              />
              <span
                className={`text-[10px] mt-1 font-sora ${isActive ? 'text-[#eebc7a]' : 'text-[#fff6]'}`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      {/* <BannerPopup /> */}

    </div>
  );
}
