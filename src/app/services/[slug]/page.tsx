import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    title: service.metaTitle || `${service.title} | Manchester NH`,
    description: service.metaDesc || service.fullDesc.substring(0, 160),
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
                "streetAddress": "30 S Beech St",
                "addressLocality": "Manchester",
                "addressRegion": "NH",
                "postalCode": "03103"
              }
            },
            "areaServed": service.locations?.map(loc => ({
              "@type": "City",
              "name": loc
            })) || "Manchester, NH",
            "description": service.shortDesc
          })
        }}
      />

      {/* FAQ Schema Markup */}
      {service.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": service.faqs.map((faq: any) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      )}

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
              {service.image && (
                <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}
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

              <div className="mt-12 space-y-12">
                {service.detailedSections?.map((section: any, index: number) => (
                  <div key={index} className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="text-2xl font-heading font-bold text-black mb-4">{section.title}</h3>
                    <div className="text-grayCustom-text text-lg leading-relaxed whitespace-pre-line">
                      {section.content.split(/(\*\*.*?\*\*)/g).map((part: string, i: number) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i} className="text-black font-bold">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </div>
                  </div>
                ))}

                {!service.detailedSections && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-heading font-bold text-black mb-4">Why Choose Modern Auto Garage?</h3>
                    <p className="text-grayCustom-text">
                      Our shop is fully equipped with advanced diagnostic tools and staffed by expert technicians. When you bring your vehicle to us for {service.title.toLowerCase()}, we provide total transparency, honest pricing, and high-quality parts to get you back on the road safely in Manchester.
                    </p>
                  </div>
                )}
              </div>

              {/* Vehicle Brands Section */}
              {service.brands && (
                <div className="mt-16 pt-16 border-t border-gray-200">
                  <h3 className="text-2xl font-heading font-bold text-black mb-8 text-center">Vehicle Brands We Service</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {service.brands.map((brand: string, i: number) => (
                      <span key={i} className="px-6 py-3 bg-gray-100 rounded-full text-gray-800 font-semibold shadow-sm hover:bg-primary hover:text-white transition-colors cursor-default">
                        {brand}
                      </span>
                    ))}
                  </div>
                  <p className="text-center text-gray-500 mt-6 italic">And many more. We service all makes and models!</p>
                </div>
              )}

              {/* Local SEO Section */}
              {service.locations && (
                <div className="mt-16 bg-gray-900 text-white p-10 rounded-2xl">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-white italic">Serving Southern New Hampshire</h3>
                  <p className="text-gray-200 mb-8 text-lg">
                    Modern Auto Garage is proud to be the trusted choice for {service.title.toLowerCase()} for drivers across Southern NH. We offer convenient scheduling and fast service for residents in:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {service.locations.map((loc: string, i: number) => (
                      <div key={i} className="flex items-center text-primary font-bold">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs Section */}
              {service.faqs && (
                <div className="mt-16">
                  <h3 className="text-3xl font-heading font-bold text-black mb-10">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {service.faqs.map((faq: any, i: number) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h4 className="text-xl font-bold text-black mb-3">{faq.question}</h4>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Internal Linking Section */}
              <div className="mt-16 pt-12 border-t border-gray-200">
                <h3 className="text-xl font-bold text-black mb-6">Explore Other Services</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/services/tire-services-manchester-nh" className="text-primary hover:underline font-medium">Tire Services</Link>
                  <Link href="/services/brake-repair-manchester-nh" className="text-primary hover:underline font-medium">Brake Repair</Link>
                  <Link href="/services/suspension-steering-repair-manchester-nh" className="text-primary hover:underline font-medium">Suspension Inspection</Link>
                  <Link href="/" className="text-primary hover:underline font-medium">Home</Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-black text-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                    {service.ctaTitle || "Ready to fix your vehicle?"}
                  </h3>
                  <p className="text-gray-200 mb-8">
                    {service.ctaDesc || `Contact us today to schedule your ${service.title.toLowerCase()}.`}
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
