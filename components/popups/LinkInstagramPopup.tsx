'use client'

import { useInfoModal } from '@/context/InfoModalContext';
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface LinkInstagramPopupProps {
    isOpen: boolean;
    onClose: () => void;
    forCommingSoon: string;
}

export default function LinkInstagramPopup({ isOpen, onClose, forCommingSoon }: LinkInstagramPopupProps) {
    const { t } = useTranslation();
    const router = useRouter();
    const { setInfoText } = useInfoModal();

    return (
        <div className={`fixed  inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div
                className={`bg-[#20201f] w-[90%] p-6 rounded-lg shadow-xl transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
                <div className="flex justify-center items-center mb-4 relative">
                    <h2 className="text-[18px] font-bold text-white font-sora  text-center items-center justify-center leading-[1.1] w-[80%]">
                        {t('notAvaliableFeatures.commingSoonTitle')}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 absolute top-[-10px] right-[-5px] hover:text-white transition-colors">
                        <X size={24} />
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                <div className="flex flex-col items-center mb-6">
                    <p className="text-white text-center font-sora text-[14px] opacity-[.7]">
                        {forCommingSoon === 'follow' && t('notAvaliableFeatures.followCommingSoon')}
                        {forCommingSoon === 'share' && t('notAvaliableFeatures.shareCommingSoon')}
                        {forCommingSoon === 'save' && t('notAvaliableFeatures.saveCommingSoon')}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">

                    <button
                        className="w-[100%] bg-primary border border-primary text-white py-2 rounded-md font-sora text-[14px] font-semibold  transition-colors"
                        
                        onClick={()=>{
                            setInfoText(t('notAvaliableFeatures.weWillNotify'))
                            onClose();
                        }}
                    >
                        {t('notAvaliableFeatures.notifyMe')}
                    </button> 
                    <button className="font-sora text-white text-[14px] opacity-[.8]"
                        onClick={onClose}
                    >
                        {t('notAvaliableFeatures.notInterested')}
                    </button>
                </div>
            </div>
        </div>
    )
}