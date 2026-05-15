
import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import ClientLoader from "./ClientLoader";

// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Snappy Motions",
  description:
    "From product launches to full-scale campaigns, Snappy motions delivers 3D animation, Video Editing, Film Production services that's fast, consistent, and built to wow your audience."

};

const aminute = localFont({
  src: "../public/fonts/Aminute.ttf",
  variable: "--font-aminute", // optional but useful
});

const gaveto = localFont({
  src: "../public/fonts/Gaveto.ttf",
  variable: "--font-gaveto", // optional but useful
});

const poppins = localFont({
  src: "../public/fonts/Poppins.ttf",
  variable: "--font-poppins", // optional but useful
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const [progress, setProgress] = useState(0);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   let value = 0;

  //   const interval = setInterval(() => {
  //     value += 10;
  //     setProgress(value);

  //     if (value >= 100) {
  //       clearInterval(interval);

  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 300);
  //     }
  //   }, 150);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <html
      lang="en"
      className={`${aminute.variable} ${gaveto.variable} ${poppins.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        {/* Font Preload */}

        {/* Dynamic Favicon Script */}
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {`
            function updateFavicon() {
              const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const faviconHref = darkMode ? '/icons/skitbit-white.svg' : '/icons/favicon-dark.svg';
              let link = document.querySelector("link[rel~='icon']");
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
              }
              link.href = faviconHref;
            }
            updateFavicon();
            // Listen for changes in theme
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
          `}
        </Script>

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body>
          {/* {loading && <Loader progress={progress} />}
           */}
           <ClientLoader>
        {children}

           </ClientLoader>

        {/* Vercel Speed Insights and Analytics components */}
        {/* <SpeedInsights />
        <Analytics /> */}
      </body>
    </html>
  );
}
