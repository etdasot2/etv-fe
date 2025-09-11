import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { checkNotificationsByType } from '@/lib/api'; // API function to fetch notifications by type
import { formatDateTime } from '@/utils/time-format'; // Utility to format date/time
import DefaultLoading from '@/components/loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import { useSafeTranslation } from '@/hooks/useSafeTranslation';

interface Notification {
  _id: string;
  createdAt: string;
  read: boolean;
  titleKey: string;
  messageKey: string;
  params: any;
}

export default function NotificationTypeList() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type')?.toLowerCase(); // Get notification type from URL and convert to lowercase
    const router = useRouter();
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useSafeTranslation();


    useEffect(() => {
        if (!type) return; // If no type in URL, do nothing

        const fetchNotifications = async () => {
            setIsLoading(true);
            try {
                // Fetch notifications for the selected type
                const { notifications } = await checkNotificationsByType(type);
                setNotifications(notifications);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotifications();
    }, [type]);

    return (
        <>
            <div className="p-5 space-y-3">
                {/* {notifications.length === 0 && !isLoading && (
                    <p>No notifications found for this type.</p>
                )} */}
                {notifications.map((notification: Notification) => (
                    <div
                        key={notification._id}
                        className="bg-[#1c1c1c] p-4 rounded-[13px] flex items-center relative  h-[76px]"
                        onClick={()=>{
                          router.push(`/information/details?id=${notification._id}`)
                        }}
                    >

                      <div className="mr-3 mt-1">
                        <img src="data:image/png;base64,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" className="w-[32px] h-[32px]" />
                      </div>
                        <div>
                            <h2 className="font-sora text-[14px] font-semibold">{t(notification.titleKey, notification.params)}</h2>
                            <p className="text-[12px] text-[#ffffff99] font-sora mt">
                                {formatDateTime(notification.createdAt)}
                            </p>
                        </div>
                        {!notification.read && (
                            <div className="absolute top-[15px] right-[20px] w-[8px] h-[8px] rounded-full bg-red-500"></div>
                        )}
                    </div>
                ))}
            </div>
            {isLoading && <DefaultLoading />}
        </>
    );
}
