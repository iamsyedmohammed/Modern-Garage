import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, PenToolIcon as Tool, Phone } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Manchester NH`,
    description: service.fullDesc.substring(0, 160),
    keywords: [service.keyword, "auto repair Manchester NH"],
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Schema Markup for the Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.title,
            "provider": {
              "@type": "AutoRepair",
              "name": "Modern Auto Garage",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Manchester",
                "addressRegion": "NH"
              }
            },
            "areaServed": "Manchester, NH",
            "description": service.shortDesc
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-black py-20 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            {service.title} in <br className="hidden md:block" />
            <span className="text-primary italic">Manchester, NH</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-2 prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-black mb-6">About Our {service.title}</h2>
              <p className="text-grayCustom-text text-lg leading-relaxed mb-10">
                {service.fullDesc}
              </p>

              <h3 className="text-2xl font-heading font-bold text-black mb-6 flex items-center">
                <Tool className="mr-3 text-primary" /> What's Included
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-grayCustom-darkText font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-grayCustom-light p-8 rounded-xl border border-grayCustom-border mb-8">
                <h3 className="text-2xl font-heading font-bold text-black mb-6 flex items-center">
                  <AlertTriangle className="mr-3 text-primary" /> Signs You Need This Service
                </h3>
                <ul className="space-y-4">
                  {service.signs.map((sign, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                      <span className="text-grayCustom-darkText">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-heading font-bold text-black mb-4">Why Choose Modern Auto Garage?</h3>
                <p className="text-grayCustom-text">
                  Our shop is fully equipped with advanced diagnostic tools and staffed by expert technicians. When you bring your vehicle to us for {service.title.toLowerCase()}, we provide total transparency, honest pricing, and high-quality parts to get you back on the road safely in Manchester.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-black text-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-heading font-bold mb-4">Ready to fix your vehicle?</h3>
                  <p className="text-gray-400 mb-8">
                    Contact us today to schedule your {service.title.toLowerCase()}.
                  </p>
                  
                  <a href="tel:+16036224428" className="w-full bg-primary hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-colors mb-4">
                    <Phone className="mr-2 w-5 h-5" /> Call 603-622-4428
                  </a>
                  
                  <Link href="/book-appointment" className="w-full bg-white text-black hover:bg-gray-200 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-colors">
                    Book Appointment
                  </Link>

                  <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
                    <p className="font-bold text-white mb-2">Modern Auto Garage</p>
                    <p>Manchester, NH</p>
                    <p className="mt-2 text-primary font-medium">Same day service available!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
