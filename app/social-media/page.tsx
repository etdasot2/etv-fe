'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import ListSocial from '@/components/social-media/ListSocial'
import { useTranslation } from 'react-i18next'

const SocialMediaPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#121212] min-h-screen text-white relative"
        >

            <img src="/assets/download-14.png" className=" max-w-[435px] fixed top-0 left-1/1 w-full h-[400px] opacity-[.5]"/>

            <BackTitle
                title={t('social.title')}
                back={true}
            />

            <ListSocial />
        </div>
    )
}

export default SocialMediaPage