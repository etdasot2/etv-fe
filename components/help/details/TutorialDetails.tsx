import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchTutorialById } from '@/lib/api'; // Import API function
import DefaultLoading from '@/components/loaders/DefaultLoading'; // Optional: If you have a loading component
import { useTranslation } from 'react-i18next';

interface Tutorial {
  _id: string;
  title: string;
  content: string;
}

export default function TutorialDetails() {
  const { t } = useTranslation();

  const searchParams = useSearchParams();
  const tutorialId = searchParams.get('id'); // Get the tutorial id from the URL query parameters
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!tutorialId) return;

    const fetchTutorialDetails = async () => {
      setIsLoading(true);
      try {
        const fetchedTutorial = await fetchTutorialById(tutorialId); // Fetch tutorial details by ID
        setTutorial(fetchedTutorial);
      } catch (error) {
        console.error('Error fetching tutorial:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTutorialDetails();
  }, [tutorialId]);

  return (
    <div className="p-4  pl-4 pr-4 pb-10">
      {isLoading ? (
        <DefaultLoading /> // Optional: Loading component
      ) : tutorial ? (
        <div className="w-full bg-[#1c1c1c] p-4 flex items-start justify-between rounded-[11px] flex-col">
        <span className="font-sora text-white text-[14px] font-medium">{t(tutorial.title)}</span>
        <div className="flex pt-4">
          <p className="font-sora text-[14px] font-normal text-white/90">
          {t(tutorial.content)}
          </p>
        </div>
      </div>
      ) : (
        <p className="text-white">Tutorial not found</p>
      )}
    </div>
  );
}
