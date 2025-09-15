import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { fetchNotices, fetchTutorials } from '@/lib/api'; // Import the function from api.ts
import DefaultLoading from '@/components/loaders/DefaultLoading'; // If you have a loader component
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { formatDateTime } from '@/utils/time-format';
import { useLoading } from '@/context/LoadingContext';

interface Tutorial {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function ListNotices() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { t } = useTranslation();
  const { setGlobalLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setGlobalLoading(true)
      try {
        const fetchedTutorials = await fetchNotices(); // Fetch tutorials from the backend
        setTutorials(fetchedTutorials);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
      } finally {
        setIsLoading(false);
      setGlobalLoading(false)

      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="p-4 pt-3 pl-4 pr-4 mt-0 space-y-2">

        {tutorials.map((tutorial) => (
          <div key={tutorial._id} className="mt-[0px] "
            onClick={() => {
              router.push(`/notices/details?id=${tutorial._id}`);
            }}
          >
            <div className="w-full bg-[#1f1f1f] p-4 flex items-start justify-between rounded-[11px] flex-col">
              <span className="font-sora text-white text-[14px] font-medium">{t(tutorial.title)}</span>
              <span className="font-sora text-white/60 text-[12px]">{formatDateTime(tutorial.createdAt)}</span>
              <div className="flex pt-2">
                <p className="font-sora text-[14px] font-normal text-white line-clamp-2">
                  {t(tutorial.content)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}
