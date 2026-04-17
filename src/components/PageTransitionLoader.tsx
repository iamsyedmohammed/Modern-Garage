"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(true); // Start true for initial page load

  // Initial Load hiding
  useEffect(() => {
    const hideLoader = () => {
      setTimeout(() => setIsNavigating(false), 500); // 500ms delay to let user see the cool animation on initial load
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
      return () => window.removeEventListener("load", hideLoader);
    }
  }, []);

  // Route change hiding
  useEffect(() => {
    // Whenever pathname or searchParams change, show the loader briefly
    setIsNavigating(true);
    const timeout = setTimeout(() => {
      setIsNavigating(false);
    }, 400); // Briefly show tire tuning on fast route changes

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (!isNavigating) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-opacity duration-300">
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-[40px] bg-primary/30 animate-pulse"></div>
        
        <div className="text-primary animate-[spin_1.5s_linear_infinite] relative z-10 w-24 h-24 sm:w-28 sm:h-28">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            {/* Outer tire tread */}
            <circle cx="12" cy="12" r="10" className="text-black" stroke="currentColor" strokeWidth="4" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="10" className="text-black opacity-20" stroke="currentColor" strokeWidth="4" />
            
            {/* Inner rim border */}
            <circle cx="12" cy="12" r="7" className="text-black opacity-80" strokeWidth="1" />
            
            {/* Hubcap */}
            <circle cx="12" cy="12" r="3" className="fill-primary" stroke="white" strokeWidth="1.5" />
            
            {/* Spokes */}
            <line x1="12" y1="5" x2="12" y2="9"/>
            <line x1="12" y1="19" x2="12" y2="15"/>
            <line x1="5" y1="12" x2="9" y2="12"/>
            <line x1="19" y1="12" x2="15" y2="12"/>
            
            <line x1="7.05" y1="7.05" x2="9.88" y2="9.88"/>
            <line x1="16.95" y1="16.95" x2="14.12" y2="14.12"/>
            <line x1="16.95" y1="7.05" x2="14.12" y2="9.88"/>
            <line x1="7.05" y1="16.95" x2="9.88" y2="14.12"/>
          </svg>
        </div>
      </div>
      <h3 className="mt-8 font-heading font-black text-xl sm:text-2xl text-black tracking-[0.2em] uppercase animate-pulse">
        Tuning Up<span className="text-primary">...</span>
      </h3>
    </div>
  );
}
