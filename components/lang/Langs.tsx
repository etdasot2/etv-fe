'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import { useInfoModal } from '@/context/InfoModalContext'
import { setDefaultLanguage } from '@/lib/api'

interface Language {
    code: string
    name: string
}

const languages: Language[] = [{ code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },        // Arabic
    { code: 'hi', name: 'हिन्दी' },          // Hindi (India)
    { code: 'fr', name: 'Français' },       // French
    { code: 'zh', name: '中文' },            // Chinese
    { code: 'tr', name: 'Türkçe' },         // Turkish
    { code: 'bg', name: 'Български' },      // Bulgarian
    { code: 'it', name: 'Italiano' },       // Italian
    { code: 'ja', name: '日本語' },          // Japanese
    { code: 'ru', name: 'Русский' }         // Russian
]

const SwitchLanguage: React.FC = () => {
    const { i18n } = useTranslation()
    const router = useRouter()
    const { setInfoText } = useInfoModal();


    const handleLanguageChange = async (code: string, name: string) => {

        i18n.changeLanguage(code)
        localStorage.setItem('lang', code)  // Store selected language in localStorage
        router.back();
        setInfoText(name);

        try {
            await setDefaultLanguage(code); // Call the endpoint to update the user's language
        } catch (error) {
            console.error('Failed to update default language:', error);
        }
    }

    return (
        <div className="p-4">
            <div className="bg-[#20201f] rounded-[10px] p-4">
                {languages.map((language) => (
                    <button
                        key={language.code}
                        className={`w-full text-left p-4 flex justify-between items-center rounded-[10px] ${i18n.language === language.code ? 'bg-[#9f9f9f0d]' : ''
                            }`}
                        onClick={() => handleLanguageChange(language.code, language.name)}
                    >
                        <span className="font-sora text-[14px] font-medium">
                            {language.name}
                        </span>
                        {i18n.language === language.code && (
                            <img
                                src="/assets/check-point-pro.png"
                                className="w-[21px] h-[21px]"
                                alt="selected language indicator"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SwitchLanguage