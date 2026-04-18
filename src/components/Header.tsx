"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const topServices = servicesData.slice(0, 5);

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-[84px] sm:h-[96px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading font-bold text-2xl sm:text-3xl tracking-tight">
              MODERN<span className="text-primary italic">AUTO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center h-full">
            
            <div className="relative group h-full flex items-center">
              <Link href="/services" className="text-grayCustom-light hover:text-primary transition-colors font-medium flex items-center h-full">
                Services <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              
              <div className="absolute left-0 top-full w-72 bg-white rounded-b-xl shadow-2xl border border-gray-200 border-t-4 border-t-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {topServices.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="block px-5 py-3 text-grayCustom-darkText hover:bg-gray-50 hover:text-primary font-medium text-sm transition-colors border-b border-gray-100 last:border-0">
                      {s.title}
                    </Link>
                  ))}
                  <div className="bg-gray-50 px-5 py-4 rounded-b-xl border-t border-gray-200 mt-1">
                    <Link href="/services" className="text-primary font-bold text-sm tracking-wide hover:text-red-700 flex items-center uppercase group">
                      View All Services
                      <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-grayCustom-light hover:text-primary transition-colors font-medium flex items-center h-full">About</Link>
            <Link href="/contact" className="text-grayCustom-light hover:text-primary transition-colors font-medium flex items-center h-full">Contact</Link>
            
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-800">
              <a href="tel:+16036224428" className="flex items-center text-white hover:text-primary transition-colors group">
                <Phone className="w-5 h-5 mr-2 text-primary group-hover:animate-pulse" />
                <span className="font-semibold text-lg">603-622-4428</span>
              </a>
              <Link href="/book-appointment" className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded shadow-sm text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Book Now
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed left-0 right-0 top-[84px] sm:top-[96px] bottom-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out flex flex-col ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col pt-8 px-6 space-y-4 overflow-y-auto">
          <div>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-2xl font-heading font-bold text-white hover:text-primary transition-colors pb-4 border-b border-gray-800"
            >
              <span>Services</span>
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[500px] opacity-100 mt-4 mb-2" : "max-h-0 opacity-0"}`}>
               <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-800 ml-2">
                 {topServices.map(s => (
                   <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">
                     {s.title}
                   </Link>
                 ))}
                 <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg text-primary font-bold pt-2 border-t border-gray-800 flex items-center">
                   View All Services
                   <ArrowRight className="ml-1.5 w-5 h-5" />
                 </Link>
               </div>
            </div>
          </div>

          <Link 
            href="/about" 
            className="text-2xl font-heading font-bold text-white hover:text-primary transition-colors pb-4 border-b border-gray-800 block"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-2xl font-heading font-bold text-white hover:text-primary transition-colors pb-4 border-b border-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        
        <div className="p-6 border-t border-gray-800 bg-black/80 pb-12 space-y-4">
          <a href="tel:+16036224428" className="flex items-center justify-center w-full bg-gray-900 border border-gray-800 text-white px-4 py-4 rounded-xl font-bold text-xl shadow-lg transition-transform active:scale-95">
            <Phone className="w-5 h-5 mr-3 text-primary animate-pulse" />
            603-622-4428
          </a>
          <Link 
            href="/book-appointment" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full bg-primary hover:bg-red-700 text-white px-4 py-4 rounded-xl font-bold uppercase tracking-wide text-center text-lg shadow-[0_0_20px_rgba(225,6,0,0.3)] transition-transform active:scale-95"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Book Appt
          </Link>
        </div>
      </div>
    </header>
  );
}
