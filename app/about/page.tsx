'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack' 
import { useTranslation } from 'react-i18next'
import AnimationPage from '@/components/AnimationPage'

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] text-white min-h-screen w-full bg-full relative"
    >


      <BackTitle
        title={t('about.title')}
        back={true}
      />
      <AnimationPage
        direction='top'
      >
        <div className="p-4 mt-0">
      <p className="text-white font-sora text-[15px] leading-5 whitespace-pre-line font-normal">{`Established in London, United Kingdom, Eternova Films Ltd is an international entertainment and technology company dedicated to uniting the worlds of cinema and music. From our foundation, our vision has been to create a platform where creativity thrives, audiences are engaged, and innovation drives new opportunities for both industries.

Eternova Films was built on the belief that film and music are more than forms of art—they are cultural bridges that connect people across languages, regions, and generations. We combine this philosophy with cutting-edge technology to deliver transparent promotion systems, reward models, and audience engagement tools that transform how entertainment is produced, distributed, and experienced.

Our platform offers filmmakers and music producers the resources they need to expand their reach, while ensuring audiences worldwide can access, enjoy, and interact with high-quality creative works. We are also committed to empowering our community through structured membership programs, referral opportunities, and a transparent earnings ecosystem that rewards participation fairly.

Looking ahead, Eternova Films is dedicated to becoming a global leader in film and music innovation. We will continue to expand internationally, forge partnerships with leading industry players, and invest in emerging creators who represent the future of art. By fostering inclusivity, fairness, and creativity without borders, Eternova Films strives to build not just a platform but a cultural movement that redefines the entertainment experience for decades to come.`}
      </p>

      <br/>
      <br/>
      <br/> 
      </div>

      </AnimationPage>
    </div>
  )
}

export default AboutUs