'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { Pencil } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { useInfoModal } from '@/context/InfoModalContext';
import { fetchUserProfile, updateUserProfile } from '@/lib/api'; // Import the API request function
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import DefaultLoading from '@/components/loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';

// Define schema validation 

interface ProfileFormInputs {
    nickname: string;
    telegram?: string;
    whatsapp?: string;
}

export default function ProfileDetailsAll() {
    const { t } = useTranslation();

    const schema = yup.object().shape({
        nickname: yup
            .string()
            .required(t('profile.details.validation.nickname.required')),
        telegram: yup
            .string()
            .optional(),
        whatsapp: yup
            .string()
            .optional(),
    });
    // State for loading and profile
    const [isLoading, setIsLoading] = useState(false);
    const [avatar, setAvatar] = useState<string | null>(null);
    const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male');
    const { setInfoText } = useInfoModal();
    const router = useRouter();


    // Using react-hook-form
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProfileFormInputs>({
        resolver: yupResolver(schema),
    });

    // Function to handle form submission
    const onSubmit = async (data: ProfileFormInputs) => {
        setIsLoading(true);
        try {
            await updateUserProfile({
                ...data,
                gender: selectedGender, // Include gender in the payload
            });
            setInfoText(t('profile.details.updatedSuccess'));
            router.back();
        } catch (error) {
            console.error('Error updating profile:', error);
            setInfoText(t('global.error.tryAgain'));
            setIsLoading(false);
        }
    };

    // Fetch user details and set form values
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setIsLoading(true);
                const userDetails = await fetchUserProfile();

                // Populate the form with user details
                setValue('nickname', userDetails.realname || '');
                setValue('telegram', userDetails.telegram || '');
                setValue('whatsapp', userDetails.whatsapp || '');

                // Set the gender
                setSelectedGender(userDetails.gender || 'male');

                // Set the avatar
                setAvatar(userDetails.avatar || null);

            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [setInfoText, setValue]);

    useEffect(() => {
        const errorKeys = Object.keys(errors) as Array<keyof ProfileFormInputs>;
        if (errorKeys.length > 0) {
            const firstErrorKey = errorKeys[0];
            const firstErrorMessage = errors[firstErrorKey]?.message;
            if (firstErrorMessage) {
                setInfoText(firstErrorMessage);
            }
        }
    }, [errors, setInfoText]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4 mt-2">

                    <div className="bg-[#2f2f2fa6] rounded-[12px] p-4 relative">

                        {/* <div className="flex justify-center absolute top-[-40px] left-0 rounded-full w-full  items-center">
                            <div className="relative">
                                {avatar ? (
                                    <Image
                                        src={avatar}
                                        alt="Profile"
                                        width={80}
                                        height={80}
                                        className="rounded-full w-[80px] h-[80px] border border-[#ff4848] bg-black"
                                    />
                                ) : (
                                    <div className="w-[80px] h-[80px] bg-gray-500 rounded-full" />
                                )}
                                <button className="absolute bottom-0 right-0 bg-red-500 rounded-full p-1.5">
                                    <Pencil className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div> */}

                        <div className="flex justify-between items-center">
                            <span className="text-[#9c9895] font-sora text-[14px] font-medium">{t('profile.details.nickname')}</span>
                            <Input
                                type="text"
                                placeholder={t('profile.details.enterNickname')}
                                {...register('nickname')}
                                className="bg-transparent text-right outline-none border-none font-sora text-[16px] text-white p-0 m-0 shadow-none"
                                autoComplete='off'
                            />
                        </div>

                        <div className="flex justify-between items-center mt-0">
                            <span className="text-[#9c9895] font-sora text-[14px] font-medium">{t('profile.details.gender')}</span>
                            <div className="space-x-1">
                                <label className="inline-flex items-center cursor-pointer" onClick={() => setSelectedGender('male')}>
                                    <span className={cn("ml-2 font-sora text-[15px] font-medium", selectedGender === 'male' ? 'text-white' : 'text-[#929292]')}>{t('profile.details.male')}</span>
                                    {/* <img
                                        src={
                                            selectedGender === 'male'
                                                ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOHSURBVHgBxZk/bNNAFMZfQmlLKTTd2HAldtIdqc4EGyBYmJoOTAxpJtjaigWmJjND04kFlCIWmOJI7E13pJqNzRFUFS2Fct+dL1ycxH5nTPKTLrbru9yX9969+9McpcUNXPFZFGUlvBbCArqi+GE5EMUjb9GjFOSsarsBBFREWTfEcPEJQom2hFif24gnUAnbCIVlQYOYQpMFugEstkn2FkvCJyWyEVcpXqAbbFN2VhtFTYisjno5XKByaRN3NB46opSE0G70RX5EgxaNTxxAFmgOezEoULm1SOPHDfvuo9/FblAWnzs0WarC1TX98FegGzikXOvQZEEcLul4NF2MPOdQxjSfX6bzVqGvtLbn45ronCtRFlTWO6T/QPB+gQrzg8kiV+omNV2EFbUFN+gfcK7lqXjjgrxGWX78nepvTygFMv9OhQ8uWQJBq7enqXxnesBCe59+SlFe50y+Q70UyBksF65KWjYtN1ZnabM8m1iv8eGU7t26KEV2j85pVzxXHs7IdwwXgxIs6JIF208u0XrYCUDHsBSuEGK6GtbVdUrVI3l/VwjufP7F7a4IgTe5tWE5U9zW7g+qvTmRAkwgDD9Eux4/QItaevSNLHDh4n1izBywyuHrq73ntZfH0oVx9fdfXemJhAUh1BIfvnA4NctGoENYnDj5zV9/SwtrYP0UFCCQtc5bKU717s2O4zDdj9hMQSHPrak7gGVQuLwTKUf2JFw9LE8mgRas8a5jKTogbEghsMsWqIXZdnLdqG9jed0ErTucmjpNwJKuEY9x6LwI8ANTCPwCgW1OTR1LgDsiKw9meqGxZ7S3oMO2YOPjac/NsGCSSMy/5nTIHfkRvHy440+MQ4hDctag852ncwPpAxbDLNJ4NtcnLk38QZteD24Sc8kFYVHrQTxiFAMoOoh2heXLL47JnnyDvIU1LRDJOuA2xVwLkXEjGqL1XJ0SLPt9c0+CjUqF2xquxFIKsQY36yUVLNk+OBu6iOCjrIc7UyCsiGV/1kcctvikNvG4GpsmtYvaosnTd6jUH0RqP1qnyVGPHiaNOpsZ99EH6Ahxy9E/jhqG94mZwDPCI8TdEJKO36xGdkrg1pFHfPFLE9UQw92n7MGgrMaJA9wjYIfUKesqZUNdft+Q88AotofoDimhONl3yI5uKKzGEaaxE2iiNvwo2LY6YTH/DYGCgdYmNUI9SsEfWIRQgC0fuhQAAAAASUVORK5CYII='
                                                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBxVkxTNtQEL1AhTowpBujK7GTbgxITVjICIKFiXSAhaFkaydSscBUWGEJO4h2SyZSiaGjsyPViAUWlEoMLVPvOf+bH2M7938NedLJxj7LL+/uvu8fBXJEmcGHEtt7dSwqA3psgbIuWwcgBxRsnJkTCHxk2zLISBGwddi+MNdA+pCIoCK2rYjlgSYJiY4Pc2ByUOwbTik/ICUWPc/7HQSBn+WYSZDJfeVDg+015Q9EBSSLTLKd5lRIIYaHzyhf1bIAFSsc8l78xljKA+f0cuQAhPws6caTEKuwLtLLw0sK9wBBJlfjwy6NDrOqcH7qC1EOMjmP+qH1aLRAHr7V+fjKuIF1zqOcsbOzQ3NzcwPXfN+ner2e9ohec0OHsEiUejV6BpRKJdG1GLbUShJV8Tb9B6ampmh6ejo8xrG+vk6np6fkgPCrpUNcJkuA0MLCAlWrVZqcnBy4d3FxEZJCKHEPfg7AF6xRUF3Juc2Ta2trVKvVhvq1Wq0w/0Dy/v4+/HtlZSW8V6lUSIAKFCyTBTY3N6OXAHgxlMIRRMxQQ13to4sChC8vL6WvK4HgjNQbypnkjo+P6eTkJCRgAsTwQ3To8QM0qdXVVbJAGUXiSTyhihnWvb09ajabT8gBCCWKQ9+DaoLKTcKMmKCZ6CAAy8LNzU2osAbUd0ARBEWdsamA+eIsmOFHbjqgOCb11C+AMjApsOQAyMekdXIYQLAncdQJn5RzUjgQ7IkJamK2LzH9bZRXCEDQl3jqZQJKSitSr4sAfqADwSsQ/CHx1LkESCtyeXk5Sg3zeQv4YgXb7XYUZig4jCSWJXPdlFZ+DJ1x7l4D7mLROWTu3B4eHuj6+prm5+cjksiv29tburu7i/ygGBbpjY2NAXIOCgbctNbDjpr7hQYJWy6oElcPyiJHQTheRFB+d9dpF9Fkgh/CPQkriDB/kjyF7ypUQ/Lr/JqYmAiJmW0XSB8dHdHh4SE5YomD2zP3JPvU78FEABl8Y5FrmqxWstvtJjYRFgjVw4lJEJ+8X2Q/FMobAfU38Tg+bjtZzj8c6r98WqXRom6O6gb2xdiPMsk3fDpLo8EBcxuoqLTZzEuPPgCfyb2LX0zrZpZIuIDnhA5b4iYlc4BpW9mOQFhTB6OZ80HOyRbn5BU9zqDzBLqoz0yukeU0dMKKCSiT/M6nKB6njUUCDtiWJIN12yG6R/2JKyb7Htmhp4jtJw0q02BF0ITa8MOwbfWUmf+GgKHQ0M75rv+G+AfWTHsMAPg92QAAAABJRU5ErkJggg=='
                                        }
                                        className="w-[21px] h-[21px] ml-1"
                                    /> */}
                                </label>
                                <label className="inline-flex items-center cursor-pointer" onClick={() => setSelectedGender('female')}>
                                    <span className={cn("ml-2 font-sora text-[15px] font-medium", selectedGender === 'female' ? 'text-white' : 'text-[#929292]')}>{t('profile.details.female')}</span>
                                    {/* <img
                                        src={
                                            selectedGender === 'female'
                                                ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASvSURBVHgBzVhBbBtFFP0zduPYLq2DsEUPRTait1YNolIrioTT3JASzC29FdEDNyeHUkIPtQ9VaXqIc6aI9JTcMMm5rZEAUQkkI+UGIgYOSHaruFVsJ7Z3pv+Pve4mtb2zK9fpk6y1Z2c8b//8//7fz8AlSonbcTBgHLj4kEm8AgtJkCG6x4CV8XsBvxRAwh/AeS6cvZIDF2BOJm8lUqGmCCYZyFmTjIONkDDLeZiRHsvOFxys0yXmv45fZ2EAYIwt6xK1Jfg4sZCUAlJOLaaxcUFIlo6sf7FsM683StO3FmFAVusNngmvXZnrdbcrQXWkMvA9SBmH4SDv5bWJsWyqvP8G7zYb/e3BEMkRxpVBuuAFgu1jHYdhAw1Smr69uH94zxEXpxYuMSa/gwOEIWHuzfWrGfN3h+BW4mbUEPyBBIjCwaKM/hgz/dFrjhrScx2lJAoucejkWzBy9h3wnTsBPHJUjTU3i+pTXfkJRPGp7l9RMiDNVZGtLEjWawq+CS7Agj4IXDwP/qkzfefV1n+H2srPICo7oAO04hhZUVmQrIdeCk5B5I7euAjeWET9lrj5zr2NjrU8OD5y6riyqH/qPbTycXh6bVWLZF34SX9TrSN2KSlkOZPcztpvUFn9RZG0wiTnnz6j5vpxTeXOPdv/RnlJEkFWStyMAwYHOASPHIHXv/m8Q2772/t95wc/u6BIEp5cW4HGxn9gvwmf4EguDi4QmPlAXUXxCVTRv+xQXX3uf76zJ0ALhhjnGCanwQW8b7eOto6WIJJ2kJVd2EX/JIyc0yMomIxzkCwKLmD6nvF3UXuN0Q4eU4bs4AF2miwYhVcUqCshtKC7Os88Vg8Giy46Vt/UtnqIg0vs/vqnuvomTwEPjtrOp6gnTSQ09Ami3DBWBheoP2wRJLEmbbMDSYzpe1XMKJoocyalFsFR3OBw8qOOtUjHaqh/anMU4uDlSWWl/aAHCF6+0EmFpJk6Ud9azApeySCP3hjtN4+e/DAKLYH8iNIVBEdUYWCCSPqwWCDZMSObCI9OnkSSrYeiwoGyjS6EFP9gJrk1CwIW7SYHZs6r1GZuxNEy5pE1Nv5V1Uw/9EqFNkhjLhb5HpX/HlAmUEQt+VeNoz/RPSJLD0ECbt6no6Rgqj/8Sz2EY+ALvyq3Sh8vbOnIDR1ZKHOp44dEoDx7V7uEcgJ0vULkh6uxlumksWS3QJHD0soqKWS1IzdmtGTGKVBecq0rUHE4mrFb8BpFsEUmTKmg4wzMvA+DRgM7Dx2CY9m5MvZb+lqx3hbmyp37yufUp02y6UB4dUCtkWPttojlpWkRX9Ybm25T36BAvmcwMWES7IQvWRFYMw0HDSbSxyxNpT36Es5+lbE76pcJfKtcimTnl61jXXszKDvDbn3Q0eZRVt7dP95Vob3s0CfoqXkYFrCxWWG1ia63+q17NP11RgJLwkuEOta1L3u2+PrmuDdwoeTiU4osGDSozMM+TD9yBNskTE5LYY/l910YEMhq26waC1uaRL3gqIn+P7ZIPIKncBV19qNO1rYsZixt891MrEujciAErWi/8MdxY3ptjaqPKfJIhgphSYHG5I9UMYWz8zlwgWf20Om6UZi2awAAAABJRU5ErkJggg=='
                                                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPoSURBVHgBxVkxSCNBFP2rV1goRCvLFaxszDUiKFzsUomivWmEKwQvlVzjaXdWUdDKJjZWinfaJI2JoHBgk3RXCLdiY5XLQYozlf9NZuLGZHdnh03y4DuT2b+Zl////PkzWmSIBIObOMsn2cakAFUWR0qZpQiQAawwyswJBDZZvrjI6MJhKbLsMldH9yUtgpLYN0ksCmRJk+hgkAKTg8V+oEvRASGxZNv2P8dxSn6KvgSZXIabHZYhih7wCkjGmGTeS8nyIIaXLyhaq/kBVlxgl1ffPxjweKFAvSMHwOUXnR60uVi6dYl6D7uTu1sIMrkUN9+pf5iVC+eXGmjGIJOzqeFam/oLxOGEiscPrgfIczYZIh6P09zcHM3Pz9P4+LgYe3h4EHJyckLPz8+6X6VybhofhAWl9f6QAYaHh2ltbY1WV1d99c7OzgTRWq1GmhiFFUUMst+xMOIUEiCXyWSE1QBMfnl5SYVCge7v76lSqQgdyNTUFM3MzIhn9Xpd5+tfOBaLysUJMgAsNzk5Kfrn5+eUzWbbLAR3r6ysCAtDF+8cHR3pfD12sJ1BWZWE3mMx8fb2dpPc4eFhR8uAMKyprAgpl8s6MTnEnr1Bok6QAWAJABMhvoLgjj8sJk3EQXCaDKBcWyqVtFYoyOVyOdFXMauBBAjaZABFEGlEF+qHqDSkgWljgj1CDATDVsYCBtYwsXpsgAxxe3sr2mQyKVZoEPBDsNtQOIKi3KqSAe7u7kSrdpIgIBcqa2NFa6I6yLnmM2m4GRMsLi6KHIZ8Bxe7cxv6T09PbYka4+vr682tEDnz+vqaNPEbOwmqWdtPC798Y2ND9BFH6XRaTOxOFyCAz0g7yoV4zx0CGMduEwKPFm8k2EUyQZqpVKrpSkyESZXLQErFlxe8tsIA7MLFOBClgjRBwrIsQWRsbKxpFcTT3t4e5fP55hieAwgDJOfj42NRRGgWCS0EVbn1lzTiEBbDZIoICCC+QlpFFw6XWxMqzRwEaYMcSit3Suk0FiGK+KMI7gdpb21ttaQJlSpUCdUF7OKPKFi5MPzPsTjK3Vkv7ZGREVFwopY7PT1ticmrq6tQyVcDWXavsID70IQYRNlvtPVFCIcah3i0b8dOacUX7iapv0i7r+pazsU4jwa5uss4YG4t53Kvu5leX30AJSb38f2gVzWzTI0tsFcosix0euB7gcmWRPrZpO4CbvU8tPneD3JM5jgmH+ntDjpKoMz7yuR2/JQCb1hxA8okf3IXiyf04d4D2LmWdS7Ww16i29S4ccXNvk3hUJXE9jtdVHohFEE35IEfgmOrLcX9bwgIFtoNNVZokQzwCl9yk5jgbrZWAAAAAElFTkSuQmCC'
                                        }
                                        className="w-[21px] h-[21px] ml-1"
                                    /> */}
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-0">
                            <span className="text-[#9c9895] font-sora text-[14px] font-medium">Telegram</span>
                            <Input
                                type="text"
                                placeholder={t('global.pleaseEnter')}
                                {...register('telegram')}
                                className="bg-transparent text-right outline-none border-none font-sora text-[16px] text-white p-0 m-0 shadow-none"
                                autoComplete='off'
                            />
                        </div>

                        <div className="flex justify-between items-center mt-0">
                            <span className="text-[#9c9895] font-sora text-[14px] font-medium">WhatsApp</span>
                            <Input
                                type="text"
                                placeholder={t('global.pleaseEnter')}
                                {...register('whatsapp')}
                                className="bg-transparent text-right outline-none border-none font-sora text-[16px] text-white p-0 m-0 shadow-none"
                                autoComplete='off'
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-[100%] mt-5 bg-primary  text-white py-2 rounded-md font-sora text-[14px] font-semibold  transition-colors h-[44px] "
                        
                    >
                        {t('global.save')}
                    </button>
                </div>
            </form>

            {isLoading && <DefaultLoading />}
        </>
    );
}
