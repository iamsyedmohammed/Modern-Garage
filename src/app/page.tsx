import Link from "next/link";
import Image from "next/image";
import { 
  Wrench, ShieldCheck, Clock, Settings, Zap, 
  MapPin, Phone, Mail, ArrowRight, CheckCircle2,
  Car, Activity, Disc, Battery, Settings2,
  Droplet, CircleDashed, MoveHorizontal, AlertCircle, BatteryCharging, Wind, Quote, ChevronDown
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
              { title: "Oil Change", icon: Droplet, url: "/services/oil-change-maintenance-manchester-nh" },
              { title: "Tire Services", icon: CircleDashed, url: "/services/tire-services-manchester-nh" },
              { title: "Wheel Alignment", icon: MoveHorizontal, url: "/services/wheel-alignment-manchester-nh" },
              { title: "Check Engine", icon: AlertCircle, url: "/services/check-engine-light-diagnostics-manchester-nh" },
              { title: "Battery Services", icon: BatteryCharging, url: "/services/battery-replacement-manchester-nh" },
              { title: "Exhaust Repair", icon: Wind, url: "/services/exhaust-repair-manchester-nh" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-grayCustom-border flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-grayCustom-light rounded-full flex items-center justify-center mb-6 transition-colors">
                  <service.icon className="w-8 h-8 text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-6">{service.title}</h4>
                <div className="flex-grow"></div>
                <Link 
                  href={service.url}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-bold transition-colors mt-auto px-6 py-3 rounded-xl w-fit group"
                >
                  View Details
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[ 
              { title: "Complete Engine Rebuild", tag: "Engine", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop" },
              { title: "Brake Rotor Replacement", tag: "Brakes", img: "https://images.unsplash.com/photo-1579606132009-17bd127aa2fd?q=80&w=800&auto=format&fit=crop" },
              { title: "Full Exhaust Installation", tag: "Exhaust", img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20 ${
                  i === 0 ? "md:col-span-8 md:row-span-2 min-h-[400px]" : "md:col-span-4 min-h-[250px]"
                }`}
              >
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-primary text-white p-4 rounded-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                    <ArrowRight className="w-6 h-6 -rotate-45" /> 
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 z-30 flex flex-col justify-end">
                  <span className="text-xs font-bold text-white bg-primary uppercase inline-block mb-3 px-4 py-1.5 rounded-full w-fit shadow-md tracking-wider">
                    {item.tag}
                  </span>
                  <h4 className={`text-white font-heading font-bold ${i === 0 ? "text-3xl md:text-4xl" : "text-xl"} translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out`}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link href="/gallery" className="inline-flex items-center justify-center bg-primary border-2 border-primary text-white hover:bg-red-800 hover:border-red-800 font-bold transition-all px-8 py-4 rounded-xl text-lg w-fit group shadow-md hover:shadow-lg">
              View Complete Gallery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-gray-50 opacity-60 rotate-12 group-hover:scale-110 group-hover:text-gray-100 transition-all duration-500" />
                
                <div className="flex flex-col mb-6 relative z-10 flex-grow">
                   <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                     ))}
                   </div>
                   <p className="text-gray-700 font-medium leading-relaxed italic text-lg">
                     "{review.text}"
                   </p>
                </div>
                
                <div className="flex items-center border-t border-gray-100 pt-6 mt-auto relative z-10 w-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-red-800 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">{review.name}</span>
                    <span className="text-xs text-primary font-bold uppercase tracking-wider">{review.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <a href="#" className="inline-flex items-center justify-center bg-black text-white font-bold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl px-8 py-4 rounded-xl text-lg w-fit group">
              Read All Reviews
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">FAQ</h2>
            <h3 className="text-4xl font-heading font-bold text-black mb-6">Frequently Asked Questions</h3>
            <p className="text-lg text-grayCustom-text">
              Have questions about your vehicle's repair? Here are some of the most common questions we get from our Manchester customers.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How often should I get my oil changed?", a: "For modern vehicles using synthetic oil, we generally recommend an oil change every 5,000 to 7,500 miles. However, the best interval relies heavily on your driving habits and your vehicle's factory specifications. Check your manual or ask our technicians!" },
              { q: "Why is my check engine light on?", a: "The check engine light can trigger for dozens of reasons—from a loose gas cap to a failing catalytic converter. Since it's impossible to know without reading the code, we highly recommend bringing it in for a quick diagnostic rather than ignoring it." },
              { q: "Do you offer warranties on your repairs?", a: "Yes! We stand entirely behind our work. Most repairs include a standard warranty on both parts and labor. Restrictions may apply depending on the specific service and parts used, which we discuss upfront." },
              { q: "Can I drop my car off after hours?", a: "Absolutely. We have a secure drop-box located at the front of our shop. Simply park your car, fill out one of the provided envelopes with your contact information, lock your keys inside, and drop it in." },
              { q: "Do you provide estimates before doing the work?", a: "We believe in 100% transparency. We will always provide a detailed estimate and ask for your explicit approval before performing any service on your vehicle. No surprise bills, ever." },
            ].map((faq, i) => (
              <details key={i} className="group bg-grayCustom-light rounded-2xl border border-gray-100 [&_summary::-webkit-details-marker]:hidden open:shadow-md transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-bold text-lg text-gray-900 transition-all">
                  {faq.q}
                  <ChevronDown className="w-6 h-6 text-primary transition-transform duration-300 group-open:rotate-180 shrink-0" />
                </summary>
                <p className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
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
