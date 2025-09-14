import { useInfoModal } from '@/context/InfoModalContext';
import { formatDateTime } from '@/utils/time-format';
import { Copy } from 'lucide-react';
import React from 'react'
import { useTranslation } from 'react-i18next';

interface InvalidMemberCardProps {
    member: any;
}

export default function InvalidMemberCard({ member }: InvalidMemberCardProps) {
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
                        <div className="flex items-center ">
                            <div className="border border-[#805c33] rounded-full ">
                                <img
                                    src={"/assets/default-avatar (1).png"}
                                    className="w-[40px] h-[40px] object-cover object-center rounded-full  opacity-[.6] "
                                    alt={member.username}
                                    // onError={(e) => {
                                    //     ; (e.target as HTMLImageElement).src = "/default-avatar.png"
                                    // }}
                                />
                            </div>
                            <div className="flex flex-col ml-2">
                                <span className="font-sora text-[14px] font-semibold">{member.username}</span>
                                <span className="font-sora text-white text-[12px]  flex items-center">
                                    {t("myTeam.id")}: {member.uuid}
                                    <div onClick={() => handleCopyUrl(member.uuid)} className="cursor-pointer">
                                       
      <Copy className="w-3 h-3 ml-1 cursor-pointer text-[#eebc7a]" 
      />
                                    </div>
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Member Details */}
                    <div className="mt-2 flex flex-col w-full">

                        <div className="flex justify-between mt-2">
                            <span className="text-[#ffffff99] text-[12px]  font-sora">
                                {t("myTeam.registrationDate")}:
                            </span>
                            <span className="text-white text-[11px]  font-mono">{formatDateTime(member.registrationDate)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
