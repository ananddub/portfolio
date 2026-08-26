import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Projects - Anand Kumar Dubey | Software Engineer Portfolio",
   description:
      "Explore engineering projects including OpenOxide, FerroDB, Incord, ETE, SoundPulse, and CartWave. Built with Rust, Go, Flutter, React Native, and Kotlin.",
   openGraph: {
      title: "Projects - Anand Kumar Dubey | Software Engineer Portfolio",
      description:
         "Explore engineering projects including OpenOxide, FerroDB, Incord, ETE, SoundPulse, and CartWave.",
      url: "https://portfolio-rho-gold-2auz6r1v9x.vercel.app/projects",
   },
   alternates: {
      canonical: "https://portfolio-rho-gold-2auz6r1v9x.vercel.app/projects",
   },
};

export default function ProjectsLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return children;
}
