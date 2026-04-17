import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, Users, Wrench as Tool, CalendarCheck, Search, FileText, CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Modern Auto Garage, Manchester's premier auto repair shop. Honest service, experienced mechanics, and modern technology.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-black py-20 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            About <span className="text-primary italic">Modern Auto Garage</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Providing Manchester, NH with honest, reliable, and high-tech automotive service.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Content */}
            <div>
              <span className="text-primary font-bold tracking-widest uppercase mb-3 block">Est. 2010</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 text-black leading-tight">
                Our <span className="text-primary">Story</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-10 border-l-4 border-primary pl-6">
                <p className="mb-4">
                  Modern Auto Garage was founded on a simple principle: combine the trust and honesty of a local neighborhood mechanic with the advanced technology and cleanliness of a modern dealership.
                </p>
                <p>
                  Located right here in Manchester, NH, we've built our reputation by providing straightforward advice. If your car needs a repair to be safe, we'll tell you. If it can wait, we'll tell you that too. Our goal is not just to fix your car today, but to be your trusted automotive partner for life.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Locally Owned & Operated",
                  "Factory-Level Diagnostics",
                  "Transparent Digital Specs",
                  "ASE-Certified Technicians"
                ].map((item, i) => (
                  <div key={i} className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="text-primary w-6 h-6 mr-3 flex-shrink-0 bg-white rounded-full shadow-sm" />
                    <span className="text-black font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image / Badge content */}
            <div className="relative px-4 sm:px-8 mt-12 md:mt-0">
              <div className="aspect-[4/3] md:aspect-[5/4] bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-2xl border-4 sm:border-8 border-white ring-1 ring-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern Auto Garage mechanics at work"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-24 bg-grayCustom-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-black">Why We're Different</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-grayCustom-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold mb-4">Quality Parts</h4>
              <p className="text-grayCustom-text">We source OEM or premium aftermarket parts to ensure your vehicle performs at its best and repairs last longer.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-grayCustom-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tool className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold mb-4">Modern Equipment</h4>
              <p className="text-grayCustom-text">Our facility is equipped with state-of-the-art diagnostic and alignment technology, allowing us to service newer vehicles accurately.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-grayCustom-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold mb-4">Customer First</h4>
              <p className="text-grayCustom-text">We speak your language—explaining complex auto concepts plainly, and giving you total control over what services are performed.</p>
            </div>
          </div>
        </div>
      </section>
      {/* The Modern Process Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Our Process</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-black mb-6">What to Expect</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We've eliminated the typical anxiety of auto repair through a highly transparent, digital-first approach.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-[3px] bg-gray-100 -z-10"></div>
            
            <div className="grid md:grid-cols-4 gap-12 relative">
              
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="w-20 h-20 bg-white border-[4px] border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary transition-colors duration-300 shadow-md">
                  <div className="w-full h-full bg-primary flex items-center justify-center rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 absolute inset-0">
                     <CalendarCheck className="w-8 h-8"/>
                  </div>
                  <span className="text-2xl font-bold text-gray-300 group-hover:opacity-0 transition-opacity duration-300">1</span>
                </div>
                <h4 className="text-xl font-heading font-bold mb-3">Drop-off Or Book</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-2">Easily schedule online or use our 24/7 designated secure key drop-box.</p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="w-20 h-20 bg-white border-[4px] border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary transition-colors duration-300 shadow-md">
                  <div className="w-full h-full bg-primary flex items-center justify-center rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 absolute inset-0">
                     <Search className="w-8 h-8"/>
                  </div>
                  <span className="text-2xl font-bold text-gray-300 group-hover:opacity-0 transition-opacity duration-300">2</span>
                </div>
                <h4 className="text-xl font-heading font-bold mb-3">Digital Inspection</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-2">Our techs perform a rigorous inspection, capturing photos and videos of any issues.</p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="w-20 h-20 bg-white border-[4px] border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary transition-colors duration-300 shadow-md">
                  <div className="w-full h-full bg-primary flex items-center justify-center rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 absolute inset-0">
                     <FileText className="w-8 h-8"/>
                  </div>
                  <span className="text-2xl font-bold text-gray-300 group-hover:opacity-0 transition-opacity duration-300">3</span>
                </div>
                <h4 className="text-xl font-heading font-bold mb-3">Transparent Estimate</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-2">You receive the full report on your phone to review and digitally approve.</p>
              </div>

              {/* Step 4 */}
              <div className="relative text-center group">
                <div className="w-20 h-20 bg-white border-[4px] border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary transition-colors duration-300 shadow-md">
                  <div className="w-full h-full bg-primary flex items-center justify-center rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 absolute inset-0">
                     <CheckSquare className="w-8 h-8"/>
                  </div>
                  <span className="text-2xl font-bold text-gray-300 group-hover:opacity-0 transition-opacity duration-300">4</span>
                </div>
                <h4 className="text-xl font-heading font-bold mb-3">Quality Repair</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-2">We execute the repair using premium parts and notify you when keys are ready.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* The Modern Guarantee */}
      <section className="py-24 bg-grayCustom-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <h2 className="text-primary font-bold tracking-wider uppercase mb-3 relative z-10">Our Promise</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 relative z-10">The Modern Auto Guarantee</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 relative z-10">
                We stand behind our work. Every repair performed at Modern Auto Garage comes with a comprehensive nationwide warranty. If something isn't right, we will make it right—no questions, no pushback.
              </p>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center text-white">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                     <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   24-Month / 24,000-Mile Warranty
                </li>
                <li className="flex items-center text-white">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                     <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   100% Satisfaction Guarantee
                </li>
                <li className="flex items-center text-white">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                     <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   ASE-Certified Master Technicians
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?q=80&w=1000&auto=format&fit=crop" alt="Premium Garage Warranty" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl opacity-90 mb-10">
            Join the hundreds of Manchester locals who trust Modern Auto Garage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+16036224428" className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Call Us Now
            </a>
            <Link href="/book-appointment" className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
