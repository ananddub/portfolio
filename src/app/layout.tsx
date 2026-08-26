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
   metadataBase: new URL("https://portfolio-rho-gold-2auz6r1v9x.vercel.app"),
   title: "Anand Kumar Dubey - Software Engineer | Flutter, React Native, Rust & Go",
   description:
      "Software Engineer with 1+ year of professional experience building 60 FPS mobile apps (Flutter, React Native, Kotlin Compose) and high-throughput systems engines in Rust & Go.",
   keywords: [
      "Anand Kumar Dubey",
      "Anand Dubey",
      "Software Engineer",
      "Mobile Engineer",
      "Flutter Developer",
      "React Native Developer",
      "Android Developer",
      "Jetpack Compose",
      "Rust Developer",
      "Go Developer",
      "gRPC",
      "Systems Engineer",
      "Lock-Free Concurrency",
      "PostgreSQL",
      "ScyllaDB",
      "Redis",
   ],
   authors: [{ name: "Anand Kumar Dubey" }],
   creator: "Anand Kumar Dubey",
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
      url: "https://portfolio-rho-gold-2auz6r1v9x.vercel.app/",
      title: "Anand Kumar Dubey - Software Engineer | Mobile & Systems",
      description:
         "Software Engineer specializing in Flutter, React Native, Jetpack Compose, Rust, and Go. Built OpenOxide, FerroDB, Incord, and ETE (Google Play Store).",
      siteName: "Anand Kumar Dubey Portfolio",
      images: [
         {
            url: "https://portfolio-rho-gold-2auz6r1v9x.vercel.app/logo.png",
            width: 1200,
            height: 630,
            alt: "Anand Kumar Dubey - Software Engineer",
         },
      ],
   },
   alternates: { canonical: "https://portfolio-rho-gold-2auz6r1v9x.vercel.app/" },
};

const structuredData = {
   "@context": "https://schema.org",
   "@type": "Person",
   name: "Anand Kumar Dubey",
   jobTitle: "Software Engineer",
   description:
      "Software Engineer with 1+ year of professional experience building high-performance mobile apps (Flutter, React Native, Jetpack Compose) and distributed backend engines in Rust and Go.",
   url: "https://portfolio-rho-gold-2auz6r1v9x.vercel.app",
   image: "https://portfolio-rho-gold-2auz6r1v9x.vercel.app/logo.png",
   sameAs: [
      "https://github.com/ananddub",
      "https://linkedin.com/in/ananddub/",
   ],
   address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
   },
   email: "duanand6@gmail.com",
   telephone: "+91 8709501726",
   alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Vidya Vihar Institute of Technology",
   },
   knowsAbout: [
      "Rust",
      "Go",
      "TypeScript",
      "JavaScript",
      "Kotlin",
      "Dart",
      "Flutter",
      "React Native",
      "Jetpack Compose",
      "gRPC",
      "UDP Sockets",
      "PostgreSQL",
      "Redis",
      "ScyllaDB",
      "Docker",
      "Kubernetes",
      "Linux",
   ],
   workExample: [
      {
         "@type": "CreativeWork",
         name: "OpenOxide",
         url: "https://github.com/ananddub/openoxide",
      },
      {
         "@type": "CreativeWork",
         name: "FerroDB",
         url: "https://github.com/ananddub/ferrodb",
      },
      {
         "@type": "CreativeWork",
         name: "Incord",
         url: "https://github.com/ananddub/incord",
      },
      {
         "@type": "CreativeWork",
         name: "Equality Through Education (ETE)",
         url: "https://play.google.com/store",
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
