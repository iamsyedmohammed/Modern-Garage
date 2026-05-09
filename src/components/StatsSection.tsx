'use client';

import { useState, useEffect } from "react";
import { Clock, Car, Star, Smile } from "lucide-react";

const StatCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}</span>;
};

export default function StatsSection() {
  const stats = [
    { label: "Years Experience", value: 15, suffix: "+", icon: Clock },
    { label: "Vehicles Serviced", value: 5000, suffix: "+", icon: Car },
    { label: "Google Rating", value: 4.9, suffix: "+", icon: Star, decimals: 1 },
    { label: "Happy Customers", value: 500, suffix: "+", icon: Smile }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
            <stat.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
          </div>
          <div className="text-4xl font-black text-black mb-2">
            <StatCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
          </div>
          <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
