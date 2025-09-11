import DefaultLoading from '@/components/loaders/DefaultLoading';
import { useInfoModal } from '@/context/InfoModalContext';
import { getProfileDetails } from '@/lib/api';
import { getToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function InstaListAccs() {
  const { t } = useTranslation();

  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [linked, setLinked] = useState(false);
  const { setInfoText } = useInfoModal();
  const router = useRouter();

  const handleLinkInstagram = () => {
    const authToken = getToken();
    const redirectUrl = `/api/auth/instagram-login${authToken ? `?token=${authToken}` : ''}`;

    // Redirect to the API route with token as a query parameter
    window.location.href = redirectUrl;
  };

  // Fetch profile details on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getProfileDetails(); // Call the API to get profile details
        if(data.user.instagramSynced){
          setInfoText(t('profile.instagram.successLinked'))
          // router.back();
          setLinked(true);
        }

        setProfileData(data);
      } catch (error: any) {
        console.error('Error fetching profile details:', error.message);
      } finally {
        setIsLoading(false); // Stop the loading indicator
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!isLoading && 
      <>
      {linked ? <>
        <div className="p-4 flex flex-col">

      <button
          type="submit"
          className="w-[100%] mt-5 border cursor-default border-[#ff4848] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors h-[44px]"
          style={{
            background: 'linear-gradient(136deg, #ff3939, #f75757)',
          }}
        >
          {t('profile.instagram.successLinked')}
        </button>
        </div>
      </> : <>
      
      
      <div className="p-4 flex flex-col">
        <p className="font-sora mt-10 text-white text-[14px] leading-3 text-center opacity-[.8]">
          {t('profile.instagram.desc')}
        </p>
        <button
          type="submit"
          onClick={handleLinkInstagram}
          className="w-[100%] mt-5 border border-[#ff4848] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors h-[44px]"
          style={{
            background: 'linear-gradient(136deg, #ff3939, #f75757)',
          }}
        >
          {t('profile.instagram.linkBtn')}
        </button>
      </div>
      </>}
      </>}

      {isLoading &&
        <DefaultLoading />}
    </>
  );
}
