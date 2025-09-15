import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { InfoModalProvider } from "@/context/InfoModalContext";
import I18nProvider from "@/providers/i18nProvider";
import LanguageProvider from "@/providers/LanguageProvider";
import { ModalProvider } from "@/context/modal-context";
import { SecurityVerificationProvider } from "@/context/FundsPasswordContext";
import { LoadingProvider } from "@/context/LoadingContext";

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
  description: "Watching movies and earning money",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
                ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              
                ttq.load('CSTDMA3C77U450RN310G');
                ttq.page();
              }(window, document, 'ttq');
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
