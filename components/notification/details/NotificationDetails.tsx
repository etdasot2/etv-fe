import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchNotificationById } from '@/lib/api'; // API function to fetch notification by ID
import { formatDateTime } from '@/utils/time-format'; // Utility to format date/time
import DefaultLoading from '@/components/loaders/DefaultLoading';
import { useSafeTranslation } from '@/hooks/useSafeTranslation';

interface Notification {
  _id: string;
  createdAt: string;
  read: boolean;
  titleKey: string;
  messageKey: string;
  params: any;
}

export default function NotificationDetails() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Get notification id from URL

    const [notification, setNotification] = useState<Notification | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useSafeTranslation();

    useEffect(() => {
        if (!id) return; // If no id in URL, do nothing

        const fetchNotificationDetails = async () => {
            setIsLoading(true);
            try {
                // Fetch the notification details by ID
                const fetchedNotification = await fetchNotificationById(id);
                setNotification(fetchedNotification);
            } catch (error) {
                console.error('Error fetching notification details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotificationDetails();
    }, [id]);

    if (isLoading) {
        return <DefaultLoading />;
    }

    if (!notification) {
        return <p>No notification found.</p>;
    }

    return (
        <div className="p-5 space-y-4">
            <div className="bg-[#1c1c1c] p-4 rounded-[13px]">
                <h2 className="font-sora text-[14px] font-medium">{t(notification.titleKey, notification.params)}</h2>
                <p className="text-[12px] text-[#ffffff99] font-sora mt">{formatDateTime(notification.createdAt)}</p>
                <p className="text-[14px] text-white font-sora mt-2">{t(notification.messageKey, notification.params)}</p>
            </div>
        </div>
    );
}
