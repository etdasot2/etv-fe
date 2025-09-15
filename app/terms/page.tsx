'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('terms.title')}
        back={true}
      />

<p className="whitespace-pre-line font-sora leading-4 text-[14px] font-medium text-white p-4 mt-5">
{`
Privacy Policy  
Effective Date: September 15, 2025  

1. Introduction  
Eternova Films Ltd. ("Eternova Films," "we," "us," or "our") is committed to safeguarding your privacy and personal information. This Privacy Policy describes in detail the types of data we collect, how we use it, how we protect it, and your rights regarding your data when you use our websites, mobile apps, and other related services (collectively, the "Services"). By using our Services, you agree to the practices set out in this policy.  

2. Information We Collect  

Information You Provide:  
- Contact details such as your name, email address, and phone number.  
- Login credentials including username and password.  
- Payment information, billing details, and transaction history.  
- Account settings, communication preferences, and profile details.  
- Content you upload, share, or create on our platform.  

Information We Collect Automatically:  
- Technical information such as IP address, device identifiers, browser type, and operating system.  
- Usage data including log-in times, features accessed, videos watched, music played, and general interaction patterns.  
- Location information if you allow access through your device.  
- Cookies, pixels, and tracking technologies used to improve functionality and measure performance.  

Information From Other Sources:  
- Verification data, analytics, or partner-provided information that helps us ensure your identity and deliver services securely.  

3. How We Use Your Information  
Your information is used for legitimate business purposes, including:  
- Managing and verifying your account.  
- Processing payments, subscriptions, and withdrawals securely.  
- Providing customer support and responding to your requests.  
- Protecting against fraud, abuse, or unauthorized activity.  
- Enhancing the functionality and personalization of our Services.  
- Communicating updates, promotions, and service notices (with your consent where required).  
- Complying with applicable laws and regulatory requirements.  

4. How We Share Your Information  
We do not sell your information. However, we may share it in limited circumstances:  
- With service providers (payment processors, hosting partners, analytics providers) who help us operate efficiently.  
- With financial institutions or payment networks to process authorized transactions.  
- With law enforcement or government authorities where legally required.  
- With affiliates or trusted partners within Eternova Films Ltd. group structures.  
- In the case of a business restructuring, merger, or acquisition.  

5. Data Retention and Security  
We retain your personal data only for as long as it is necessary for the purposes outlined above or as legally required.  
We employ strict organizational, technical, and administrative measures to safeguard data from unauthorized access, alteration, disclosure, or destruction. Despite these measures, no system is entirely foolproof, and absolute security cannot be guaranteed.  

6. International Data Transfers  
Your data may be transferred to and stored in countries outside your country of residence. Where international transfers occur, we implement legal safeguards such as contractual clauses and security protocols to ensure your information remains protected.  

7. Your Rights  
You have rights over your personal data, including the ability to:  
- **Access**: Request details about the information we hold on you.  
- **Correct**: Ask for inaccurate or incomplete data to be updated.  
- **Delete**: Request that we erase your personal data where legally permissible.  
- **Restrict**: Limit how your information is used in certain circumstances.  
- **Portability**: Receive your information in a machine-readable format to transfer elsewhere.  
- **Withdraw Consent**: Revoke permissions you previously gave, such as for marketing.  

To exercise these rights, email us at: **contact@eternovafilms.com**.  

8. Children's Privacy  
Our Services are not intended for children under 13 years old. We do not knowingly collect personal data from children. If such information is discovered, we will delete it immediately.  

9. Updates to This Privacy Policy  
We may update this Privacy Policy periodically to reflect legal, technical, or business changes. When updates are significant, we will notify you directly or provide clear notice within our Services. Your continued use of the Services after updates signifies your acceptance of the revised terms.  

10. Contact Us  
If you have questions, concerns, or complaints about this Privacy Policy or how your information is handled, please contact us at:  

Email: **contact@eternovafilms.com**  
Eternova Films Ltd.  
`}
</p>

    </div>
  )
}

export default TermsPage