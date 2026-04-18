import { Metadata } from "next";
import Link from "next/link";
import { Search, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work Gallery | Modern Auto Garage",
  description: "Browse our gallery of auto repair and maintenance work in Manchester, NH. See our mechanics in action.",
};

const galleryItems = [
  { title: "Complete Engine Rebuild", category: "Engine", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop" },
  { title: "Brake System Overhaul", category: "Brakes", img: "https://images.unsplash.com/photo-1579606132009-17bd127aa2fd?q=80&w=800&auto=format&fit=crop" },
  { title: "Custom Exhaust Work", category: "Exhaust", img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop" },
  { title: "Suspension Diagnostics", category: "Suspension", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" },
  { title: "Performance Tuning", category: "Performance", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop" },
  { title: "Wheel & Tire Fitting", category: "Tires", img: "https://images.unsplash.com/photo-1530906358829-e84b2769270f?q=80&w=800&auto=format&fit=crop" },
  { title: "Engine Bay Detailing", category: "Maintenance", img: "https://images.unsplash.com/photo-1610484742616-56263300ce43?q=80&w=800&auto=format&fit=crop" },
  { title: "Full Vehicle Inspection", category: "Inspections", img: "https://images.unsplash.com/photo-1635424710928-0524e52748ef?q=80&w=800&auto=format&fit=crop" },
  { title: "Transmission Servicing", category: "Transmission", img: "https://images.unsplash.com/photo-1503376711718-d0690cb2e831?q=80&w=800&auto=format&fit=crop" }
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-20 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/50 text-white font-semibold rounded-full mb-6 backdrop-blur-sm">
            Modern Auto Garage Shop
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Work <span className="text-primary italic">Gallery</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Take a look behind the scenes at some of the vehicles we've serviced, showing the dedication and precision of our trusted technicians in Manchester, NH.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-grayCustom-light min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <div 
                key={i} 
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20 aspect-[4/3] bg-white cursor-pointer"
              >
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-primary text-white p-4 rounded-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                    <Search className="w-6 h-6" /> 
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 z-30 flex flex-col justify-end">
                  <span className="text-xs font-bold text-white bg-primary uppercase inline-block mb-3 px-4 py-1.5 rounded-full w-fit shadow-md tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-white font-heading font-bold text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjNDAwIiAvPgo8cGF0aCBkPSJNMCA4TDggMFpNMCA0TDQgMFpNOCA0TDQgOFoiIHN0cm9rZT0iIzkxMCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgo8L3N2Zz4=')] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Like What You See?</h2>
          <p className="text-xl opacity-90 mb-10 font-medium">
            Bring your vehicle to Modern Auto Garage and experience the same level of care and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+16036224428" className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center text-lg transition-all shadow-xl">
              <Phone className="mr-3 w-5 h-5" />
              Call Now
            </a>
            <Link href="/book-appointment" className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center text-lg transition-all shadow-xl">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
