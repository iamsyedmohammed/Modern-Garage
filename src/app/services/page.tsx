import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowRight, Wrench, Disc, Activity, Wind, CircleDashed, MoveHorizontal, MoveVertical, Thermometer, BatteryCharging, Zap, AlertCircle, Droplet, Settings } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Repair Services",
  description: "Explore our comprehensive auto repair services in Manchester, NH. We offer brake repair, engine diagnostics, oil changes, tire services, and more.",
};

const iconMap: Record<string, React.ElementType> = {
  "brake-repair-manchester-nh": Disc,
  "engine-diagnostics-manchester-nh": Activity,
  "exhaust-repair-manchester-nh": Wind,
  "tire-services-manchester-nh": CircleDashed,
  "wheel-alignment-manchester-nh": MoveHorizontal,
  "suspension-steering-repair-manchester-nh": MoveVertical,
  "radiator-cooling-system-repair-manchester-nh": Thermometer,
  "battery-replacement-manchester-nh": BatteryCharging,
  "electrical-diagnostics-manchester-nh": Zap,
  "check-engine-light-diagnostics-manchester-nh": AlertCircle,
  "oil-change-maintenance-manchester-nh": Droplet,
  "transmission-diagnostics-manchester-nh": Settings,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-20 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Our Auto Repair <span className="text-primary italic">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From routine maintenance to complex engine diagnostics, Modern Auto Garage provides top-tier automotive care for all makes and models in Manchester, NH.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-grayCustom-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const Icon = iconMap[service.slug] || Wrench;
              return (
              <div key={service.slug} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-grayCustom-border flex flex-col h-full">
                <div className="p-8 flex-grow flex flex-col">
                  <div className="w-14 h-14 bg-grayCustom-light rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-4">{service.title}</h2>
                  <p className="text-grayCustom-text mb-8 flex-grow">
                    {service.shortDesc}
                  </p>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center bg-primary text-white font-bold hover:bg-red-800 transition-colors mt-auto px-6 py-3 rounded-lg w-fit"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Not Sure What You Need?</h2>
          <p className="text-xl opacity-90 mb-10">
            Our expert technicians are here to help diagnose and fix any issue your vehicle might be experiencing. Give us a call or schedule an inspection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+16036224428" className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Call 603-622-4428
            </a>
            <Link href="/book-appointment" className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
