'use client'

import { useEffect, useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { checkBannerStatus } from '@/lib/api';
import { getToken } from '@/lib/auth';
import { languageBanners, defaultBanner } from '@/utils/languageBanners';
import Link from 'next/link';

export default function BannerPopup() {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(true);
  const [canClose, setCanClose] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const initialized = useRef(false);
  const originalStyles = useRef({
    position: '',
    top: '',
    paddingRight: '',
    overflow: '',
    width: ''
  });

  const lockScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;
    
    originalStyles.current = {
      position: document.body.style.position,
      top: document.body.style.top,
      paddingRight: document.body.style.paddingRight,
      overflow: document.body.style.overflow,
      width: document.body.style.width
    };

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.paddingRight = `${paddingRight}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
  }, []);

  const unlockScroll = useCallback(() => {
    const scrollY = document.body.style.top;
    
    document.body.style.position = originalStyles.current.position;
    document.body.style.top = originalStyles.current.top;
    document.body.style.paddingRight = originalStyles.current.paddingRight;
    document.body.style.overflow = originalStyles.current.overflow;
    document.body.style.width = originalStyles.current.width;

    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }, []);

  useEffect(() => {
    const token = getToken();
    
    if (initialized.current || !token) {
      setLoading(false);
      return;
    }

    initialized.current = true;
    let timeoutId: NodeJS.Timeout;

    const checkBanner = async () => {
      try {
        const response = await checkBannerStatus();

        if (response && typeof response.showBanner === 'boolean') {
          setShowBanner(response.showBanner);
          
          if (response.showBanner) {
            lockScroll();
            timeoutId = setTimeout(() => {
              setCanClose(true);
            }, 1000);
          }
        } else {
          console.error('Invalid response format:', response);
          setError('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching banner status:', error);
        setError(error instanceof Error ? error.message : 'Failed to check banner status');
      } finally {
        setLoading(false);
      }
    };

    checkBanner();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      unlockScroll();
    };
  }, [lockScroll, unlockScroll]);

  const handleClose = useCallback(() => {
    unlockScroll();
    setShowBanner(false);
  }, [unlockScroll]);

  if (loading || !showBanner) {
    return null;
  }

  if (error) {
    console.error('Banner error:', error);
    return null;
  }

  const bannerImage = languageBanners[currentLanguage] || defaultBanner;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] "
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-[90%] max-w-[435px] ">
      <div className="relative w-full flex flex-col justify-center items-center">
        
        {/* <img
          src={bannerImage}
          alt={`Popup Banner for ${currentLanguage}`}
          className="w-full h-full object-contain rounded-md"
        /> */}
        
      </div>
      {canClose && (
          <button
            onClick={handleClose}
            className="mt-2 w-[30px] h-[30px] left-1/2 ml-[-15px] flex items-center justify-center border-white border rounded-full text-white hover:bg-white/20 transition-colors absolute bottom-[-40px]"
            aria-label="Close banner"
          >
            ✕
          </button>
        )}

      </div>

    </div>
  );
}

