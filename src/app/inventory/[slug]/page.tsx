import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { vehicleBySlugQuery } from '@/sanity/lib/queries'
import { Vehicle } from '@/types/vehicle'
import ImageGallery from '@/components/ImageGallery'
import VehicleStructuredData from '@/components/VehicleStructuredData'
import { PortableText } from '@portabletext/react'
import { 
  Fuel, 
  Gauge, 
  Settings2, 
  ChevronRight, 
  CheckCircle2, 
  Calendar, 
  Info,
  Phone,
  Mail,
  MapPin,
  Car,
  Compass,
  ShieldCheck,
  FileText,
  Sparkles
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const vehicle: Vehicle = await client.fetch(vehicleBySlugQuery, { slug })

  if (!vehicle) return { title: 'Vehicle Not Found' }

  return {
    title: `${vehicle.year} ${vehicle.brand} ${vehicle.model} for Sale in Manchester NH | Modern Auto Garage`,
    description: `Check out this ${vehicle.condition} ${vehicle.year} ${vehicle.brand} ${vehicle.model} at Modern Auto Garage. ${vehicle.mileage} miles, ${vehicle.fuelType}, ${vehicle.transmission}. Price: $${vehicle.price.toLocaleString('en-US')}.`,
  }
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const vehicle: Vehicle = await client.fetch(vehicleBySlugQuery, { slug })

  if (!vehicle) {
    notFound()
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(vehicle.price)

  const formattedMileage = new Intl.NumberFormat('en-US').format(vehicle.mileage)

  return (
    <main className="min-h-screen bg-gray-50/50 pb-24">
      <VehicleStructuredData vehicle={vehicle} />
      
      {/* Sleek Breadcrumb Bar */}
      <div className="border-b border-gray-200 bg-white py-4 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <Link href="/inventory" className="hover:text-primary transition-colors">Inventory</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-black font-extrabold">{vehicle.brand} {vehicle.model}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        
        {/* Title and Badges Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight mb-4">
              {vehicle.year} {vehicle.brand} <span className="text-primary italic">{vehicle.model}</span>
            </h1>
            
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="px-3.5 py-1.5 bg-black text-white text-[11px] font-extrabold uppercase rounded-lg tracking-wider">
                {vehicle.condition}
              </span>
              <span className={`px-3.5 py-1.5 text-[11px] font-extrabold uppercase rounded-lg tracking-wider border ${
                vehicle.status === 'Available' 
                  ? 'bg-green-500/10 text-green-700 border-green-500/20' 
                  : 'bg-primary/10 text-primary border-primary/20'
              }`}>
                {vehicle.status}
              </span>
              {vehicle.vin && (
                <span className="px-3.5 py-1.5 bg-white border border-gray-200 text-gray-500 text-[11px] font-bold rounded-lg font-mono">
                  VIN: {vehicle.vin}
                </span>
              )}
            </div>
          </div>

          {/* Quick Mobile Price Display */}
          <div className="md:hidden flex items-baseline gap-2 bg-white p-4 rounded-2xl border border-gray-200">
            <span className="text-xs text-gray-400 font-bold uppercase">Price:</span>
            <span className="text-3xl font-black text-black">{formattedPrice}</span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Gallery & Specs */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Gallery Wrapper */}
            <div className="bg-white p-4 sm:p-6 rounded-[2.5rem] border border-gray-200 shadow-sm">
              <ImageGallery images={vehicle.images} />
            </div>

            {/* Immersive Specifications Grid */}
            <section className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-black text-black mb-6 flex items-center gap-3">
                <Car className="w-6 h-6 text-primary" />
                Vehicle Specifications
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                
                {/* Year */}
                <div className="bg-gray-50 p-3.5 sm:p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 hover:bg-gray-100/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5 truncate">Year</p>
                    <p className="font-extrabold text-black text-base sm:text-lg truncate">{vehicle.year}</p>
                  </div>
                </div>

                {/* Mileage */}
                <div className="bg-gray-50 p-3.5 sm:p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 hover:bg-gray-100/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5 truncate">Mileage</p>
                    <p className="font-extrabold text-black text-base sm:text-lg truncate">{formattedMileage} mi</p>
                  </div>
                </div>

                {/* Transmission */}
                <div className="bg-gray-50 p-3.5 sm:p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 hover:bg-gray-100/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Settings2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5 truncate">Transmission</p>
                    <p className="font-extrabold text-black text-base sm:text-lg truncate">{vehicle.transmission}</p>
                  </div>
                </div>

                {/* Fuel Type */}
                <div className="bg-gray-50 p-3.5 sm:p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 hover:bg-gray-100/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Fuel className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5 truncate">Fuel Type</p>
                    <p className="font-extrabold text-black text-base sm:text-lg truncate">{vehicle.fuelType}</p>
                  </div>
                </div>

                {/* Body Type */}
                <div className="bg-gray-50 p-3.5 sm:p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 hover:bg-gray-100/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5 truncate">Body Style</p>
                    <p className="font-extrabold text-black text-base sm:text-lg truncate">{vehicle.bodyType || 'Sedan/SUV'}</p>
                  </div>
                </div>

                {/* Condition */}
                <div className="bg-gray-50 p-3.5 sm:p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 hover:bg-gray-100/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5 truncate">Condition</p>
                    <p className="font-extrabold text-black text-base sm:text-lg truncate">{vehicle.condition}</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Local Trust Badges Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-black text-white p-6 rounded-[2rem] shadow-md border border-gray-800">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wide text-white">150-Point Checked</h4>
                  <p className="text-[11px] text-gray-400">Fully inspected workshop</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
                <FileText className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wide text-white">Clean Title</h4>
                  <p className="text-[11px] text-gray-400">Guaranteed history</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
                <Sparkles className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wide text-white">Ready for Road</h4>
                  <p className="text-[11px] text-gray-400">Detailed & serviced</p>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <h2 className="text-2xl font-black text-black mb-6 flex items-center gap-3">
                <Info className="w-6 h-6 text-primary" />
                Seller's Description
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-medium">
                {vehicle.description ? (
                  <PortableText value={vehicle.description} />
                ) : (
                  <p>No description available for this vehicle. Contact Modern Auto Garage for complete vehicle specs.</p>
                )}
              </div>
            </section>

            {/* Premium Features Section */}
            {vehicle.features && vehicle.features.length > 0 && (
              <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-black text-black mb-8 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Premium Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3.5 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-primary/20 transition-all hover:bg-gray-100/30">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span className="text-grayCustom-darkText font-bold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT COLUMN: Premium Price Card & Actions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Premium Pricing & Finance Card */}
              <div className="bg-gradient-to-b from-gray-900 via-black to-black text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden border border-gray-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                
                <p className="text-gray-400 font-extrabold uppercase tracking-widest text-[10px] mb-6">Modern Garage Price</p>
                <h3 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">{formattedPrice}</h3>
                
                <hr className="border-white/10 mb-6" />

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-gray-400 flex items-center gap-2"><Calendar className="w-4 h-4" /> Year</span>
                    <span className="font-extrabold text-white">{vehicle.year}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-gray-400 flex items-center gap-2"><Settings2 className="w-4 h-4" /> Transmission</span>
                    <span className="font-extrabold text-white">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-gray-400 flex items-center gap-2"><Gauge className="w-4 h-4" /> Mileage</span>
                    <span className="font-extrabold text-white">{formattedMileage} mi</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-gray-400 flex items-center gap-2"><Fuel className="w-4 h-4" /> Fuel Type</span>
                    <span className="font-extrabold text-white">{vehicle.fuelType}</span>
                  </div>
                </div>

                {vehicle.status === 'Available' && (
                  <div className="space-y-3">
                    {/* WhatsApp Inquiry Button (Primary CTA) */}
                    <a 
                      href={`https://wa.me/16036224428?text=${encodeURIComponent(`Hello Modern Auto Garage, I am interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model} (Price: ${formattedPrice}). Is it still available?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20ba59] text-white text-center py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#25D366]/20"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Inquire via WhatsApp
                    </a>

                    {/* Booking CTA (Secondary CTA) */}
                    <a
                      href="tel:+16035185444"
                      className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-red-700 text-white text-center py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                    >
                      Book Test Drive
                    </a>
                  </div>
                )}
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-sm">
                <h4 className="text-xl font-black mb-6 text-black">Modern Support</h4>
                
                <div className="space-y-6">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Call Direct</p>
                      <a href="tel:+16035185444" className="font-extrabold text-black text-base hover:text-primary transition-colors">(603) 518-5444</a>
                    </div>
                  </div>

                  {/* Visit */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Visit Location</p>
                      <p className="font-extrabold text-black text-base">34 S Beech St, Manchester, NH</p>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email Us</p>
                      <a href="mailto:modernarllc@gmail.com" className="font-extrabold text-black text-base hover:text-primary transition-colors">modernarllc@gmail.com</a>
                    </div>
                  </div>

                </div>

                <hr className="my-6 border-gray-200" />
                
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
                  <p className="text-xs text-gray-500 font-bold">Mon - Sun: 9:00 AM - 10:00 PM</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
