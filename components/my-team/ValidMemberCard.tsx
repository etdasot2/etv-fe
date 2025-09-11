import { useInfoModal } from '@/context/InfoModalContext';
import { formatDateTime } from '@/utils/time-format';
import React from 'react'
import { useTranslation } from 'react-i18next';

interface ValidMemberCardProps {
    member: any;
}

export default function ValidMemberCard({ member }: ValidMemberCardProps) {
    const { t } = useTranslation()

    const { setInfoText } = useInfoModal();

    const handleCopyUrl = (id: string) => {
        setInfoText(t('global.copySuccess'));
        navigator.clipboard.writeText(id).then(() => {
        });
        // You could add a toast notification here
    }

    return (
        <>

            <div key={member.id} className="w-full bg-[#1c1c1c] rounded-[10px] flex flex-col mb-3">
                <div className="p-3">
                    {/* Header with Avatar and ID */}
                    <div className="flex justify-between w-full bg-[#1f1f1f] border border-[#242424] items-start pb-4 rounded-[10px] p-3">
                        <div className="flex items-center">
                            <img
                                src={"/assets/Eternova Filmslogobig.png"}
                                className="w-[40px] h-[40px] rounded-full object-cover"
                                alt={member.username}
                                // onError={(e) => {
                                //     ; (e.target as HTMLImageElement).src = "/default-avatar.png"
                                // }}
                            />
                            <div className="flex flex-col ml-2">
                                <span className="font-sora text-[14px] font-semibold">{member.username}</span>
                                <span className="text-[12px] text-[#bdbdbd] font-sora font-medium">
                                    {formatDateTime(member.subscribtionDetails.becomeValidMemberDate)}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center space-x-2">
                                {member.subscribtionDetails.longVideoSectionSubDate.vip0 && 
                                    <div className="flex items-center font-sora text-[12px] font-medium text-white">
                                        <img src="/vip-icons/vip0.png" className="w-[15px]"/>
                                        VIP0
                                    </div>
                                }
                                {member.subscribtionDetails.longVideoSectionSubDate.vip1 && 
                                    <div className="flex items-center font-sora text-[12px] font-medium text-white">
                                        <img src="/vip-icons/vip1.png" className="w-[15px]"/>
                                        VIP1
                                    </div>
                                }
                                {member.subscribtionDetails.longVideoSectionSubDate.vip2 && 
                                    <div className="flex items-center font-sora text-[12px] font-medium text-white">
                                        <img src="/vip-icons/vip1.png" className="w-[15px]"/>
                                        VIP2
                                    </div>
                                }
                            </div>
                            <span className="font-sora text-white text-[13px] font-medium flex items-center">
                                {t("myTeam.id")}: {member.uuid}
                                <div onClick={() => handleCopyUrl(member.uuid)} className="cursor-pointer">
                                    <img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADZQTFRFAAAA/1hV/1pX/lVS/1ZT/lhV/1ZX/1RR/1VO/1hV/1RV/1dU/1VW/1dW/1hV/1ZX/1pX/lpY5lQZOQAAABJ0Uk5TAP8/QL+/vzAg34B/oM/vEE8vGSmHuAAAAGtJREFUeJzd0dsKgCAMgOHNVqvMDu//shkuZXgI6q7/RuQDNxAghKoZVNhSbKm1Nl2W/GUoKPeqMSr7s9PDpqAO0eQoOkR05m5fRRNSWoVFixi0hsB+bhXhZ7i5Bl6/8Q6ZiI7qQtITZn3GE/oFA8zuICWXAAAAAElFTkSuQmCC"
                                        className="w-[12px] h-[12px] ml-2"
                                        alt="Copy ID"
                                    />
                                </div>
                            </span>
                        </div>
                    </div>

                    {/* Member Details */}
                    <div className="mt-2 flex flex-col w-full">

                        <div className="flex justify-between mt-2">
                            <span className="text-[#ffffff99] text-[13px] font-medium font-sora">
                                {t("myTeam.registrationDate")}:
                            </span>
                            <span className="text-white text-[13px] font-medium font-sora">{formatDateTime(member.registrationDate)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
