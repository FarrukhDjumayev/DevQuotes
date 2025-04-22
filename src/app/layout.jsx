// layout.jsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particles from "@/app/components/Particles";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Quotes",
  description: "Created by Farrukh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg text-black dark:bg-black dark:text-green-400 font-mono transition-colors duration-300 relative min-h-screen`}
      >
        <div className="absolute inset-0 -z-10 pointer-events-none hidden dark:block">
          <Particles
            particleColors={["#00FF00", "#00FF00"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <main className="relative z-10">
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </main>
      </body>
    </html>
  );
}
