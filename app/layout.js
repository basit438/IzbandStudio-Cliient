import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "izband studio",
  keywords: [
    "izband",
    "studio",
    "web development",
    "software development",
    "digital solutions",
    "innovation",
    "technology",
    "design",
    "branding",
    "user experience",
    "UI/UX",
    "web design",
    "custom software",
    "application development",
    "digital transformation",
    "AI integration",
    "offshore development",
    "dedicated development team",
    "CTO as a service",
    "API integration",
    "high-load systems",
    "software architecture",
    "product discovery",
    "enterprise software",
    "software re-engineering",
    "data migration",
    "application modernization"
  ],
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
