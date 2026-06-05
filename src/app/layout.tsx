import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import PagePaddingWrapper from "@/components/PagePaddingWrapper";

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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PageTransitionWrapper />
        <Header />
        <PagePaddingWrapper>
          <main className="flex-grow">
            {children}
          </main>
        </PagePaddingWrapper>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
