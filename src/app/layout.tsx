import { ThemeProvider } from "@/lib/theme-provider";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { CustomCursor } from "@/components/CustomCursor";
import { BackToTop } from "@/components/BackToTop";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   metadataBase: new URL("https://ananddub.dev"),
   title: "Anand Dubey - Full Stack Developer | React, Next.js, Go, Python Expert | Hire Now",
   description:
      "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS. Built OmniAI, CareerWise, PeerDrop. Available for hire in Kolkata, India.",
   keywords: [
      "Anand Dubey",
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Go Developer",
      "Python Developer",
      "JavaScript Expert",
      "TypeScript",
      "AI ML Developer",
      "Web Developer Kolkata",
      "Hire Full Stack Developer",
      "React Native",
      "FastAPI",
      "Docker",
      "AWS",
      "Kubernetes",
      "Software Engineer India",
      "Freelance Developer",
   ],
   authors: [{ name: "Anand Dubey" }],
   creator: "Anand Dubey",
   icons: { icon: "/logo.png", apple: "/logo.png" },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-image-preview": "large",
         "max-snippet": -1,
         "max-video-preview": -1,
      },
   },
   openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://ananddub.dev/",
      title: "Anand Dubey - Full Stack Developer | React, Next.js, Go, Python Expert",
      description:
         "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS. Available for hire.",
      siteName: "Anand Dubey Portfolio",
      images: [
         {
            url: "https://ananddub.dev/logo.png",
            width: 1200,
            height: 630,
            alt: "Anand Dubey - Full Stack Developer",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      site: "@jack718r",
      creator: "@jack718r",
      title: "Anand Dubey - Full Stack Developer | React, Next.js, Go, Python Expert",
      description:
         "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS.",
      images: ["https://ananddub.dev/logo.png"],
   },
   alternates: { canonical: "https://ananddub.dev/" },
};

const structuredData = {
   "@context": "https://schema.org",
   "@type": "Person",
   name: "Anand Dubey",
   jobTitle: "Full Stack Developer",
   description:
      "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS.",
   url: "https://ananddub.dev",
   image: "https://ananddub.dev/logo.png",
   sameAs: [
      "https://github.com/ananddub",
      "https://www.linkedin.com/in/rana-dolui-89357728a/",
      "https://x.com/jack718r",
   ],
   address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
   },
   email: "duanand6@gmail.com",
   knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Go",
      "Python",
      "Node.js",
      "FastAPI",
      "React Native",
      "Docker",
      "Kubernetes",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AI/ML",
      "LangChain",
   ],
   workExample: [
      {
         "@type": "CreativeWork",
         name: "OmniAI",
         url: "https://github.com/ananddub/omniai",
      },
      {
         "@type": "CreativeWork",
         name: "CareerWise",
         url: "https://careerw-ise.vercel.app/",
      },
      {
         "@type": "OpenSource",
         name: "FlashORM",
         url: "https://lumos-labs-hq.github.io/flash/",
      },
   ],
};

export default function RootLayout({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={`${geistMono.variable} antialiased`}>
            <Script
               id="structured-data"
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(structuredData),
               }}
            />
            <ThemeProvider>
               <Preloader />
               <ScrollProgress />
               <MouseSpotlight />
               <CustomCursor />
               {children}
               <BottomNav />
               <BackToTop />
            </ThemeProvider>
            <Analytics />
            <SpeedInsights />
         </body>
      </html>
   );
}
