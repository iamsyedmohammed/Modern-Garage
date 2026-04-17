import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-grayCustom-light pt-16 pb-8 border-t-[4px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <div className="mb-6">
              <Link href="/" className="font-heading font-bold text-3xl tracking-tight text-white">
                MODERN<span className="text-primary italic">AUTO</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium automotive repair and maintenance in Manchester, NH. We combine modern technology with honest, reliable service to keep your vehicle running smoothly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">All Services</Link></li>
              <li><Link href="/book-appointment" className="text-gray-400 hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/brake-repair-manchester-nh" className="text-gray-400 hover:text-primary transition-colors">Brake Repair</Link></li>
              <li><Link href="/services/engine-diagnostics-manchester-nh" className="text-gray-400 hover:text-primary transition-colors">Engine Diagnostics</Link></li>
              <li><Link href="/services/oil-change-maintenance-manchester-nh" className="text-gray-400 hover:text-primary transition-colors">Oil Changes</Link></li>
              <li><Link href="/services/tire-services-manchester-nh" className="text-gray-400 hover:text-primary transition-colors">Tire Services</Link></li>
              <li><Link href="/services/check-engine-light-diagnostics-manchester-nh" className="text-gray-400 hover:text-primary transition-colors">Check Engine Light</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-white text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <a href="https://maps.google.com/?cid=15670931166112632579" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  34 S Beech St<br />
                  Manchester, NH 03103
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+16036224428" className="text-gray-400 hover:text-white transition-colors">603-622-4428</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:modernarllc@gmail.com" className="text-gray-400 hover:text-white transition-colors">modernarllc@gmail.com</a>
              </li>
              <li className="flex items-center pt-2">
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <FaFacebookF className="w-5 h-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <FaInstagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Modern Auto Garage LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
