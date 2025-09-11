'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'

const PackagesDetails = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#121212] text-white min-h-screen w-full bg-full relative"
        >
            <img src="/assets/download-14.png" className=" max-w-[435px] fixed top-0 left-1/1 w-full h-[400px] opacity-[.3]" />


            <BackTitle
                title={t('revenue.packageExplain')}
                back={true}
            />
            <div className="p-4 mt-2">
                <p className="text-white font-sora text-[15px] leading-5 whitespace-pre-line font-normal flex flex-col">
                    <span className="font-semibold text-[17px]">1. Packages </span>
                    <span className="mt-1 text-[14px]">At the moment we have only liking packages but more engagment packages are comming soon such as commenitng, saving, sharing </span>
                    <span className="mt-1 text-[14px]">Each package allow users to earn money  </span>
                </p>
                <br />
                <br />
                <br />
            </div>

        </div>
    )
}

export default PackagesDetails