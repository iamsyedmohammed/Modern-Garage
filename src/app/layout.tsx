import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Modern Auto Garage NH",
    default: "Modern Auto Garage | Professional Auto Repair in Manchester, NH",
  },
  description: "Modern Auto Garage provides professional, reliable auto repair services in Manchester, New Hampshire. From brakes and engines to tires and custom exhaust work.",
  keywords: ["auto repair Manchester NH", "mechanic Manchester NH", "engine diagnostics", "brake repair"],
  openGraph: {
    title: "Modern Auto Garage | Auto Repair in Manchester, NH",
    description: "Expert auto repair, diagnostics, and maintenance in Manchester, NH.",
    url: "https://modernautogaragenh.com",
    siteName: "Modern Auto Garage",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pt-[84px] sm:pt-[96px]">
        <PageTransitionWrapper />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
