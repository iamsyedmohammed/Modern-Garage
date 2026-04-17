import Link from "next/link";
import Image from "next/image";
import { 
  Wrench, ShieldCheck, Clock, Settings, Zap, 
  MapPin, Phone, Mail, ArrowRight, CheckCircle2,
  Car, Activity, Disc, Battery, Settings2
} from "lucide-react";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Modern Auto Garage",
            "image": "https://modernautogaragenh.com/hero-bg.jpg",
            "@id": "https://modernautogaragenh.com",
            "url": "https://modernautogaragenh.com",
            "telephone": "603-622-4428",
            "email": "modernarllc@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Manchester",
              "addressRegion": "NH",
              "addressCountry": "US"
            },
            "priceRange": "$$"
          })
        }}
      />
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <div 
            className="absolute inset-0 opacity-60 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop')" }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/50 text-white font-semibold rounded-full mb-6 backdrop-blur-sm">
              Premium Auto Repair in Manchester, NH
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Professional Auto <br/>
              <span className="text-primary italic">Repair & Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Expert diagnostics, trusted repairs, and routine maintenance. From brakes and custom exhausts to complete engine overhauls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+16036224428" className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(225,6,0,0.4)]">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              <Link href="/book-appointment" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide flex items-center justify-center transition-all hover:border-white">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 md:py-24 bg-grayCustom-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">Comprehensive Auto Solutions</h3>
            <p className="text-lg text-grayCustom-text max-w-2xl mx-auto">
              We provide state-of-the-art diagnostic and repair services to keep your vehicle performing safely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Brake Repair", icon: Disc, url: "/services/brake-repair-manchester-nh" },
              { title: "Engine Diagnostics", icon: Activity, url: "/services/engine-diagnostics-manchester-nh" },
              { title: "Oil Change", icon: Settings, url: "/services/oil-change-maintenance-manchester-nh" },
              { title: "Tire Services", icon: Car, url: "/services/tire-services-manchester-nh" },
              { title: "Wheel Alignment", icon: Settings2, url: "/services/wheel-alignment-manchester-nh" },
              { title: "Check Engine", icon: Zap, url: "/services/check-engine-light-diagnostics-manchester-nh" },
              { title: "Battery Services", icon: Battery, url: "/services/battery-replacement-manchester-nh" },
              { title: "Exhaust Repair", icon: Wrench, url: "/services/exhaust-repair-manchester-nh" },
            ].map((service, i) => (
              <Link key={i} href={service.url} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-grayCustom-border hover:border-primary flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-grayCustom-light group-hover:bg-primary/10 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <service.icon className="w-8 h-8 text-black group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-3">{service.title}</h4>
                <div className="mt-auto flex items-center text-primary font-medium tracking-wide">
                  <span className="group-hover:mr-2 transition-all">Learn more</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center font-bold text-white bg-primary hover:bg-red-700 px-8 py-4 rounded-xl transition-all shadow-md text-lg">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Content */}
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase mb-3">The Modern Difference</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Honest repairs.<br/>Modern technology.</h3>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                As a locally owned business in Manchester, NH, we believe that transparency, quality, and modern efficiency shouldn't be luxury upgrades. 
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Experienced Local Technicians", desc: "Our team has years of specialized experience to handle standard maintenance and complex diagnostics." },
                  { title: "Modern Diagnostic Equipment", desc: "We use factory-level scanners and software to pinpoint issues quickly and accurately." },
                  { title: "Transparent Pricing", desc: "No hidden fees. We explain what needs fixing now and what can wait." }
                ].map((feature, i) => (
                  <div key={i} className="flex group bg-gray-900/40 hover:bg-gray-900/80 p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center text-primary transition-colors">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image/Visual */}
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden hidden lg:block border border-gray-800 shadow-2xl">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop')" }} 
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-gray-700 p-6 rounded-2xl z-20">
                  <div className="flex items-center text-primary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    ))}
                  </div>
                  <p className="text-white font-bold text-lg font-heading">5-Star Rated Service</p>
                  <p className="text-gray-400 text-sm">Trusted by Manchester locals</p>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* BEFORE & AFTER REPAIRS GALLERY */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Our Work</h2>
            <h3 className="text-4xl font-heading font-bold text-black mb-6">Real Results</h3>
            <p className="text-lg text-grayCustom-text max-w-2xl mx-auto">
              We stand by the quality of our auto repairs. See regular jobs performed in our Manchester shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { title: "Brake Rotor Replacement", tag: "Brakes", img: "https://images.unsplash.com/photo-1579606132009-17bd127aa2fd?q=80&w=800&auto=format&fit=crop" },
              { title: "Engine Rebuild", tag: "Engine", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop" },
              { title: "Full Exhaust Installation", tag: "Exhaust", img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-grayCustom-border">
                <div className="aspect-[4/3] bg-gray-200">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-6 pt-12">
                  <span className="text-xs font-bold text-primary uppercase inline-block mb-1 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">{item.tag}</span>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-16 md:py-24 bg-grayCustom-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl font-heading font-bold text-black mb-6">What Manchester Says</h3>
            <div className="flex items-center justify-center space-x-1 mb-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
              ))}
            </div>
            <p className="text-grayCustom-text font-medium">4.9/5 Average rating on Google Reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[ 
              {
                text: "Fantastic service! My check engine light was on, and they correctly diagnosed a bad O2 sensor. Fixed it the same day, highly recommend their transparency.",
                name: "Sarah M.",
                service: "Engine Diagnostics"
              },
              {
                text: "Honest pricing and excellent work on my brakes. I originally thought I needed completely new rotors but they were able to turn them and save me a ton of money.",
                name: "David H.",
                service: "Brake Repair"
              },
              {
                text: "Brought my truck in for new tires and an alignment. The team is friendly and straightforward. Found my new long-term mechanic here in Manchester.",
                name: "Michael R.",
                service: "Tire & Alignment"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-grayCustom-border flex flex-col">
                <p className="text-grayCustom-darkText italic mb-6 leading-relaxed flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <span className="font-bold font-heading text-black">{review.name}</span>
                  <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded">{review.service}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="#" className="inline-flex items-center font-bold text-black border-2 border-black hover:bg-black hover:text-white px-6 py-3 rounded-xl transition-colors">
              Read All Reviews
            </a>
          </div>
        </div>
      </section>

      {/* STRONG CTA / CONTACT INFO */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjNDAwIiAvPgo8cGF0aCBkPSJNMCA4TDggMFpNMCA0TDQgMFpNOCA0TDQgOFoiIHN0cm9rZT0iIzkxMCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgo8L3N2Zz4=')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Need Auto Repair Now?</h2>
            <p className="text-xl text-white/90 font-medium">Same Day Service Often Available. Ask our team!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+16036224428" className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-xl">
              <Phone className="mr-2 w-5 h-5" /> 603-622-4428
            </a>
            <Link href="/book-appointment" className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-xl">
              Book Your Spot
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
