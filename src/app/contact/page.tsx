import { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Modern Auto Garage in Manchester, NH. Book an appointment, get directions, or call us for immediate service.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-black py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Get In <span className="text-primary italic">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're here to help. Reach out for estimates, appointments, or any questions about your vehicle.
          </p>
        </div>
      </section>

      {/* Floating Contact Cards */}
      <section className="-mt-12 relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4 text-sm">Immediate support and scheduling</p>
              <a href="tel:+16036224428" className="text-xl font-heading font-bold text-primary mt-1">
                (603) 622-4428
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4 text-sm">For quotes and general inquiries</p>
              <a href="mailto:modernarllc@gmail.com" className="text-xl font-heading font-bold text-primary mt-1">
                modernarllc@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-center hover:-translate-y-1 transition-transform sm:col-span-2 md:col-span-1 flex flex-col justify-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-500 mb-4 text-sm">Open 7 days a week</p>
              {/* <p className="text-2xl font-bold text-black">
                Everyday
              </p> */}
              <p className="text-xl font-heading font-bold text-primary mt-1">
                9:00 AM – 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and CTA Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row relative shadow-lg">

            {/* CTA Side */}
            <div className="lg:w-1/3 bg-black text-white p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 font-heading">Need an Appointment?</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Skip the phone call and request your preferred time online. We typically respond within 1 business hour to confirm.</p>
                <Link href="/book-appointment" className="block w-full bg-primary hover:bg-red-700 text-white text-center py-4 rounded-xl font-bold uppercase tracking-wide transition-transform active:scale-95 shadow-[0_0_20px_rgba(225,6,0,0.3)]">
                  Book Online Now
                </Link>
              </div>
            </div>

            {/* Map Side */}
            <div className="lg:w-2/3 h-[500px] lg:h-auto z-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.2953790160595!2d-71.45500919999999!3d42.972051099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24fbe79ec9b61%3A0xd97a54de0fbdcf03!2sModern%20Auto%20Garage!5e0!3m2!1sen!2sin!4v1776451334322!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Modern Auto Garage Location"
                className="filter contrast-125 saturate-150 grayscale-[0.2]"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
