// components/modal.tsx
import { useModal } from '@/context/modal-context';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CLOSE_ICON } from './custom-icons';

const Modal = () => {

    const { t } = useTranslation();

    const { isOpen, content, closeModal } = useModal();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Trigger enter animation
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            // Trigger exit animation
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 z-[9999] ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            <div className={`bg-[#1c1c1c] p-4 rounded-lg w-[340px] transition-all duration-300 transform `}>
                {content?.showUI || (
                    <>
                        <div className="flex items-center w-full justify-between">
                            <span className="text-white font-sora text-[16px] font-semibold">{t('modal.global.warmRemainder')}</span>
                            <div
                                onClick={closeModal}

                            >

                                <img src={CLOSE_ICON} className="w-[15.5px] h-[16px] pointer-events-none"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center"> 
                        <p className="text-center justify-center flex items-center text-white font-sora text-base font-medium mt-10 mb-4">{content?.message}</p>
                        </div>
                        <div className="flex gap-4 justify-end">

                            <button
                                onClick={() => {
                                    content?.onConfirm();
                                    closeModal();
                                }}
                                className="h-[44px] w-full flex items-center justify-center text-center font-sora text-[16px] rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                style={{
                                background: 'linear-gradient(-40deg, #f40208, #ff464b)',
                                }}
                            >
                                {t('global.ok')}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;