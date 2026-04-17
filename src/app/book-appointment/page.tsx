"use client";

import { useState } from "react";
import { CheckCircle, ShieldCheck, Clock, Car, PhoneCall, ArrowRight, User, Mail, Smartphone, CalendarDays, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookAppointmentPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send the request.");
      }

      form.reset();
      router.push('/thank-you');
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong joining the server. Please call us directly to book.");
      console.error(err);
    }
  };

  return (
    <>
      <section className="bg-black pt-16 pb-20 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Book <span className="text-primary italic">Service</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Providing Manchester, NH with honest, reliable, and high-tech automotive service.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="bg-grayCustom-light py-16 lg:py-24 relative z-10 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 mx-4 sm:mx-6 lg:mx-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold font-heading mb-6 border-b border-gray-100 pb-4">Contact Details</h2>
            
            {status === "error" && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium mb-6">
                {errorMessage}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="fullName">Full Name <span className="text-primary">*</span></label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input required id="fullName" name="fullName" type="text" className="w-full bg-gray-50 border border-transparent rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" placeholder="John Doe" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="phone">Phone Number <span className="text-primary">*</span></label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input required id="phone" name="phone" type="tel" className="w-full bg-gray-50 border border-transparent rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" placeholder="(603) 555-0123" />
                </div>
              </div>
              <div className="md:col-span-2 relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="email">Email Address <span className="text-primary">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input required id="email" name="email" type="email" className="w-full bg-gray-50 border border-transparent rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" placeholder="john@example.com" />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold font-heading mb-6 border-b border-gray-100 pb-4 mt-8">Vehicle & Service</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="year">Year <span className="text-primary">*</span></label>
                <input required id="year" name="year" type="text" className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-center" placeholder="2018" />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="make">Make <span className="text-primary">*</span></label>
                <input required id="make" name="make" type="text" className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-center" placeholder="Toyota" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="model">Model <span className="text-primary">*</span></label>
                <input required id="model" name="model" type="text" className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-center" placeholder="Camry" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5 mt-5">
              <div className="md:col-span-2 relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="service">Requested Service <span className="text-primary">*</span></label>
                <div className="relative">
                  <select required id="service" name="service" className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none font-medium cursor-pointer">
                    <option value="">Select a service...</option>
                    <option value="Diagnostics">Check Engine Light / Diagnostics</option>
                    <option value="Brakes">Brake Service</option>
                    <option value="Oil">Oil Change</option>
                    <option value="Tires">Tire Repair / Replacement</option>
                    <option value="General">General Maintenance / Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="date">Preferred Date</label>
                <div className="relative">
                  <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input id="date" name="date" type="date" className="w-full bg-gray-50 border border-transparent rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-600" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="time">Preferred Time</label>
                <div className="relative">
                  <select id="time" name="time" className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer font-medium text-gray-600">
                    <option value="">Any time</option>
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                    <option value="late">Late (4pm+)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" htmlFor="notes">Additional Notes</label>
                <textarea id="notes" name="notes" rows={3} className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" placeholder="Describe any symptoms..."></textarea>
              </div>
            </div>

            <div className="pt-8">
              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-primary hover:bg-red-700 text-white py-5 rounded-xl font-bold text-lg transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                {status === "submitting" ? "Submitting Request..." : "Request Appointment"}
                {status === "idle" || status === "error" ? <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> : null}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Book With Us Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why Book With Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
            <div className="text-center group">
              <div className="w-16 h-16 bg-grayCustom-light rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-100 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-black">Guaranteed Service</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">24-month/24k-mile warranty on all repairs.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-grayCustom-light rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-100 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-black">Fast Turnaround</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">Diagnosed and back on the road safely.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-grayCustom-light rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-100 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-black">Expert Technicians</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">Highly trained staff using factory-level tools.</p>
            </div>

            <div className="text-center bg-grayCustom-light p-8 rounded-3xl border border-gray-200 shadow-sm">
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-widest font-bold">Need Immediate Help?</p>
              <PhoneCall className="w-8 h-8 mx-auto text-primary mb-4" />
              <a href="tel:+16036224428" className="inline-block text-black text-2xl font-bold hover:text-primary transition-colors">
                (603) 622-4428
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
