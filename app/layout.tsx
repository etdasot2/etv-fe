import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { InfoModalProvider } from "@/context/InfoModalContext";
import I18nProvider from "@/providers/i18nProvider";
import LanguageProvider from "@/providers/LanguageProvider";
import { ModalProvider } from "@/context/modal-context";
import { SecurityVerificationProvider } from "@/context/FundsPasswordContext";
import { LoadingProvider } from "@/context/LoadingContext";
import GlobalInfoSetup from "@/components/GlobalInfoSetup";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eternova Films",
  description: "Start earning income by watching movies and listening to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/assets/logopro.webp" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/logopro.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logopro.webp" />
        <link rel="apple-touch-icon-precomposed" href="/assets/logopro.webp" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PG2YSJF1R7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PG2YSJF1R7');
            `,
          }}
        />
        
      </head>
      <body
        className={`bg-black/90 ${geistSans.variable} select-none ${geistMono.variable} antialiased overflow-x-hidden bg-black`}
      >
        {/* <div className="max-w-[30%] m-auto w-full"> */}

        <LoadingProvider>
          <I18nProvider>
            <LanguageProvider>
              <InfoModalProvider>
                <GlobalInfoSetup />
                <ModalProvider>
                  <SecurityVerificationProvider>
                    <div className="max-w-[435px] m-auto w-full">
                      {children}
                    </div>
                  </SecurityVerificationProvider>
                </ModalProvider>
              </InfoModalProvider>
            </LanguageProvider>
          </I18nProvider>
        </LoadingProvider>

        {/* </div> */}

      </body>
    </html>
  );
}
