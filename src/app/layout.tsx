import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WebsiteStructuredData, PersonStructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bennett Buhner - Portfolio",
    template: "%s | Bennett Buhner",
  },
  description: "Design engineer: voice, agents, and interaction craft. I ship AI-native products end to end — measured voice pipelines, agent tooling, and UI you'd actually want to use.",
  keywords: ["Design Engineer", "Voice", "AI Agents", "Interaction Design", "Software Development", "Portfolio"],
  authors: [{ name: "Bennett Buhner" }],
  creator: "Bennett Buhner",
  publisher: "Bennett Buhner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bennettbuhner.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bennett Buhner - Portfolio",
    description: "Design engineer: voice, agents, and interaction craft. I ship AI-native products end to end — measured voice pipelines, agent tooling, and UI you'd actually want to use.",
    url: "https://bennettbuhner.com",
    siteName: "Bennett Buhner",
    images: [
      {
        url: "/api/og/page?type=home",
        width: 1200,
        height: 630,
        alt: "Bennett Buhner - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bennett Buhner - Portfolio",
    description: "Design engineer: voice, agents, and interaction craft. I ship AI-native products end to end — measured voice pipelines, agent tooling, and UI you'd actually want to use.",
    images: ["/api/og/page?type=home"],
    creator: "@BennettBuhner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bennett Buhner",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0c4c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <WebsiteStructuredData />
          <PersonStructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
