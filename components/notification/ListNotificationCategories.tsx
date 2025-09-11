import React, { useEffect, useState } from 'react';
import { checkUserNotifications } from '@/lib/api';
import DefaultLoading from '../loaders/DefaultLoading';
import { formatDateTime } from '@/utils/time-format';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface Notification {
    createdAt: string;
    read: boolean;
    category: string;
    message: string;
}
 
export default function ListNotificationCategories() {
    const router = useRouter();
    const { t } = useTranslation();


    const [categories, setCategories] = useState<Record<string, Notification[]>>({
        event: [],
        wallet: [],
        system: []
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            setIsLoading(true);
            try {
                const { eventNotifications, walletNotifications, systemNotifications } =
                    await checkUserNotifications();

                setCategories({
                    event: eventNotifications || [],
                    wallet: walletNotifications || [],
                    system: systemNotifications || []
                });
            } catch (error) {
                console.error('Error fetching notifications:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    // Get latest notification from a category
    const getLatestNotification = (notifications: Notification[]) => {
        if (!notifications || notifications.length === 0) return null;
        return notifications.reduce((latest, notification) =>
            new Date(notification.createdAt) > new Date(latest.createdAt) ? notification : latest
            , notifications[0]);
    };

    // Check if category has any unread notifications
    const hasUnreadNotifications = (notifications: Notification[]) => {
        return notifications.some(notification => !notification.read);
    };

    const categoryConfigs: Record<string, { title: string; icon: string, link: string }> = {
        event: {
            title: t('notification.types.eventNotification'),
            icon: "/assets/upcoming (1).png",
            link: "/information/list?type=EVENT"
        },
        wallet: {
            title: t('notification.types.walletMessage'),
            icon: "/assets/e7937862dbff61fad7f863c7c0267b33.png",
            link: "/information/list?type=WALLET"
        },
        system: {
            title: t('notification.types.systemNotification'),
            icon: "/assets/7b91019e35c9c3780f1c12b0a03c0a03.png",
            link: "/information/list?type=SYSTEM"
        }
    };

    const renderNotificationCategory = (type: string, notifications: Notification[]) => {
        if (!notifications || notifications.length === 0) return null;

        const latestNotification = getLatestNotification(notifications);
        if (!latestNotification) return null;

        const config = categoryConfigs[type];

        return (
            <div className="bg-[#1c1c1c] p-4 rounded-[13px] h-[76px] flex  relative"
                onClick={()=>{
                    router.push(config.link);
                }}
            >
                <div className="mr-3 mt-2">
                    <img src={config.icon} className="w-[32px] h-[32px]" alt={config.title} />
                </div>
                <div>
                    <h2 className="font-sora text-[14px] font-semibold">{config.title}</h2>
                    <p className="text-[12px] text-[#ffffff99] font-sora mt">
                        {formatDateTime(latestNotification.createdAt)}
                    </p>
                </div>
                {hasUnreadNotifications(notifications) && (
                    <div className="absolute top-[15px] right-[20px] w-[8px] h-[8px] rounded-full bg-red-500" />
                )}
            </div>
        );
    };

    return (
        <>
            <div className="p-5 space-y-4">
                {Object.entries(categories).map(([type, notifications]) => (
                    renderNotificationCategory(type, notifications)
                ))}
            </div>

            {isLoading && <DefaultLoading />}
        </>
    );
}