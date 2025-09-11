'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#121212] min-h-screen text-white"
    >

      <BackTitle
        title={t('terms.title')}
        back={true}
      />

      <p className="whitespace-pre-line font-sora leading-4 text-[14px] font-medium text-white p-4 mt-5">
        {` 
Privacy Policy

Effective Date: December 29, 2024

1. Introduction

Eternova Films UK ("Eternova Films," "we," "us," or "our") values your privacy. This policy explains how we collect, use, share, and protect your information when you use our platform and services (the "Services").

2. Information We Collect

Information You Provide:
Your name, email, phone number.
Username and password.
Payment details and transaction history.
Your account settings and preferences.
Any content you create or share on our platform.
Information We Collect Automatically:
Your IP address, device type, and operating system.
How you use our Services (e.g., when you log in, what pages you visit).
Your location (if you allow it).
Information From Other Sources:
We may get information from partners who help us verify your identity or provide other services.
3. How We Use Your Information

We use your information to:

Manage your account and verify your identity.
Process your payments and transactions.
Keep our platform secure and prevent fraud.
Provide customer support.
Improve our Services and personalize your experience.
Comply with legal requirements.
4. How We Share Your Information

We may share your information with:

Companies that help us provide our Services (e.g., payment processors).
Financial institutions for transaction processing.
Law enforcement, if required by law.
Our affiliated companies.
In the event of a bussiness transfer, such as a merger, or acqusition.
5. Data Security

We take steps to protect your information from unauthorized access, loss, or misuse. We keep your information only as long as necessary and delete or anonymize it when it's no longer needed.

6. International Data Transfers

Your information may be transferred to and processed in other countries. We use legal safeguards to protect your information during these transfers.

7. Your Rights

You have the right to:

Access your information.
Correct any errors.
Delete your information.
Limit how we use your information.
Receive your information in a portable format.
Withdraw your consent.
To exercise these rights, please contact us at contact@mail.Eternova Films.vip.

8. Children's Privacy

Our Services are not for children under 13. We do not knowingly collect their information. If we learn we have, we will delete it.

9. Changes to This Policy

We may update this policy. We will notify you of significant changes. By continuing to use our Services, you agree to the updated policy.

10. Contact Us

If you have any questions, please contact us at:

Email: contact@mail.Eternova Films.vip
Eternova Films Ltd.

 `}
      </p>

    </div>
  )
}

export default TermsPage