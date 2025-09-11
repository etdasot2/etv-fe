import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { fetchTutorials } from '@/lib/api'; // Import the function from api.ts
import DefaultLoading from '@/components/loaders/DefaultLoading'; // If you have a loader component
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface Tutorial {
  _id: string;
  title: string;
  titleCode: string;
  videoUrl: string;
}

export default function ListTutorials() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { t } = useTranslation();


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedTutorials = await fetchTutorials(); // Fetch tutorials from the backend
        setTutorials(fetchedTutorials);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="p-4 pl-5 pr-5 mt-0 space-y-2">
      
          {tutorials.map((tutorial) => (
            <div key={tutorial._id} className="mt-[0px] "
                onClick={()=>{
                    router.push(`/tutorials/details?id=${tutorial._id}`);
                }}
            >
              <div className="w-full bg-[#1f1f1f] p-4 flex items-center justify-between rounded-[11px]">
                <span className="font-sora text-white text-[14px] font-medium">{t(tutorial.title)}</span>
                <div className="flex pl-[20px]">
                <ChevronRight size={20} className="text-white opacity-[.5]" />
                </div>
              </div>
            </div>
          ))}
      </div>

      {isLoading && <DefaultLoading />}
    </>
  );
}
