import Link from 'next/link';
import { AlertTriangle, Wrench, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-grayCustom-light px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Giant 404 with tire design */}
        <div className="flex justify-center items-center gap-2 sm:gap-6 mb-8">
          <span className="text-[100px] sm:text-[150px] md:text-[180px] font-black leading-none text-black">4</span>
          
          {/* Animated spinning wheel acting as the 0 */}
          <div className="text-primary animate-[spin_8s_linear_infinite]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" className="opacity-20"/>
              <circle cx="12" cy="12" r="10" strokeDasharray="16 16"/>
              <circle cx="12" cy="12" r="4"/>
              {/* Spokes */}
              <line x1="12" y1="2" x2="12" y2="8"/>
              <line x1="12" y1="22" x2="12" y2="16"/>
              <line x1="2" y1="12" x2="8" y2="12"/>
              <line x1="22" y1="12" x2="16" y2="12"/>
              <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/>
              <line x1="19.07" y1="19.07" x2="14.83" y2="14.83"/>
              <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/>
              <line x1="9.17" y1="14.83" x2="4.93" y2="19.07"/>
            </svg>
          </div>

          <span className="text-[100px] sm:text-[150px] md:text-[180px] font-black leading-none text-black">4</span>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
          
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">You've Gone Off-Road!</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            It looks like this page has blown a tire, been towed, or is parked in the wrong garage. Let's get you back onto the main road.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-primary transition-colors group">
              Return to Garage
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="bg-gray-100 text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Wrench className="w-5 h-5 mr-2" />
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
