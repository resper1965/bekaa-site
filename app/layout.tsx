import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bekaa.eu"),
  title: "Bekaa | Trusted Advisors in Cybersecurity & Corporate Intelligence",
  description: "Strategic advisory for leadership teams on cyber crisis management, reputation protection, fraud investigation, and AI governance.",
  keywords: ["cybersecurity advisors", "crisis management", "fraud investigation", "AI governance", "trusted advisors"],
  authors: [{ name: "Bekaa Trusted Advisors" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bekaa.eu",
    title: "Bekaa | Trusted Advisors",
    description: "Strategic advisory for leadership teams on cybersecurity, crisis management, and corporate intelligence.",
    siteName: "Bekaa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bekaa | Trusted Advisors",
    description: "Strategic advisory for leadership teams.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="canonical" href="https://bekaa.eu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
