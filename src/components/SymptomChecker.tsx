'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Stethoscope, ArrowRight, Disc, AlertCircle, BatteryCharging, MoveHorizontal, Droplet } from 'lucide-react'

const symptoms = [
  { 
    title: "Squeaky Brakes", 
    icon: Disc, 
    desc: "High-pitched squealing or grinding noises often indicate worn brake pads or rotor issues. Ignoring these sounds can lead to more expensive repairs and reduced stopping power.",
    fix: "Brake Pad Replacement / Rotor Resurfacing",
    url: "/services/brake-repair-manchester-nh"
  },
  { 
    title: "Check Engine Light", 
    icon: AlertCircle, 
    desc: "A glowing engine icon could mean anything from a loose gas cap to a serious engine fault. Our factory-level scanners pinpoint the exact error code to save you time and money.",
    fix: "Computerized Diagnostics",
    url: "/services/check-engine-light-diagnostics-manchester-nh"
  },
  { 
    title: "Slow Engine Crank", 
    icon: BatteryCharging, 
    desc: "If your engine struggles to turn over or your headlights seem dim, your battery is likely failing or your alternator isn't charging correctly. We test both systems.",
    fix: "Battery Replacement / Alternator Repair",
    url: "/services/battery-replacement-manchester-nh"
  },
  { 
    title: "Steering Vibration", 
    icon: MoveHorizontal, 
    desc: "Shaking in the steering wheel at high speeds usually points to tire imbalance or alignment issues, while low-speed vibrations can indicate suspension wear.",
    fix: "Wheel Alignment & Balancing",
    url: "/services/wheel-alignment-manchester-nh"
  },
  { 
    title: "Fluid Leaks", 
    icon: Droplet, 
    desc: "Bright green, red, or dark brown puddles under your vehicle are signs of cooling, transmission, or oil leaks. Catching these early prevents engine overheating and failure.",
    fix: "Leak Detection & Seal Repair",
    url: "/services/oil-change-maintenance-manchester-nh"
  }
];

const SymptomChecker = () => {
  const [activeSymptom, setActiveSymptom] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full mb-4">
            <Stethoscope className="w-4 h-4 mr-2" />
            Digital Diagnostic Tool
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">Self-Service Symptom Checker</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select what your vehicle is experiencing for an instant preliminary diagnosis and recommended next steps.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-12">
          {/* Horizontal Symptom Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {symptoms.map((symptom, i) => (
              <button
                key={i}
                onClick={() => setActiveSymptom(i)}
                className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 min-w-[120px] ${
                  activeSymptom === i 
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105" 
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-primary"
                }`}
              >
                <symptom.icon className="w-8 h-8 mb-3" />
                <span className="text-xs font-bold uppercase tracking-wider">{symptom.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Diagnostic Content */}
          <div className="max-w-4xl mx-auto text-center">
            
            <h4 className="text-3xl md:text-4xl font-heading font-bold text-black mb-6">
              {symptoms[activeSymptom].title}
            </h4>
            
            <p className="text-gray-600 text-xl leading-relaxed mb-12">
              {symptoms[activeSymptom].desc}
            </p>

            <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 inline-block w-full">
              <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">Professional Resolution</p>
              <h6 className="text-2xl font-heading font-bold mb-8 text-black">{symptoms[activeSymptom].fix}</h6>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={symptoms[activeSymptom].url} 
                  className="inline-flex items-center justify-center bg-white border border-gray-200 text-black hover:bg-gray-50 px-10 py-4 rounded-xl font-bold transition-all shadow-sm"
                >
                  Learn More
                </Link>
                <Link 
                  href="/book-appointment" 
                  className="inline-flex items-center justify-center bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/40"
                >
                  Schedule Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SymptomChecker
