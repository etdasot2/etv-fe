'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'
import PackageTable from '@/components/platfrom-rules/PackageTable'
import CommissionTable from '@/components/platfrom-rules/CommissionTable'
import SalariesTable from '@/components/platfrom-rules/SalariesTable'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import AnimationPage from '@/components/AnimationPage'
import Details from '@/components/platform-details/Details'

// Define the nested content type
type ContentItem = {
  subtitle: string;
  text: string;
}

// Define the section type with union type for content
type Section = {
  title: string;
  content: string | ContentItem[];
}

// Define the full rules type
type PlatformRules = {
  title: string;
  sections: Section[];
}

// Define the translation type
type TranslationType = {
  platformRules: PlatformRules;
}

const PlatfromRules = () => {
  // Type the useTranslation hook
  const { t } = useTranslation<keyof TranslationType>();
  useSmoothScroll(60);

  // Access the platformRules directly from the translation
  const platformRules = t('platformRules', {
    // This tells TypeScript that the return value should be treated as PlatformRules
    returnObjects: true
  }) as unknown as PlatformRules;

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen w-full bg-full relative">

      <BackTitle
        title={platformRules.title}
        back={true}
      />

      <AnimationPage
        direction='top'
      >
         <Details />
      </AnimationPage>
    </div>
  )
}

export default PlatfromRules