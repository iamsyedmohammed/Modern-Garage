import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Modern Auto Garage",
  description: "Terms of Service and conditions for using Modern Auto Garage services in Manchester, NH.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-20 border-b-4 border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Terms of <span className="text-primary italic">Service</span>
          </h1>
          <p className="text-xl text-gray-400">
            Effective Date: April 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
            
            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website and utilizing the services of Modern Auto Garage, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">2. Services and Estimates</h2>
              <p>
                Modern Auto Garage provides automotive repair and maintenance services. All estimates provided are valid for 14 days unless otherwise specified. While we strive to provide accurate estimates, unforeseen complications during repair may require additional labor or parts. In such events, we will always contact you for authorization before proceeding with additional work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">3. Payment Terms</h2>
              <p>
                Full payment is due upon completion of services and prior to the release of the vehicle. We accept major credit cards, debit cards, and cash. Vehicles left at our facility for more than 48 hours after completion may be subject to a daily storage fee.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">4. Warranties and Guarantees</h2>
              <p>
                We stand behind our work. Most repairs are backed by our standard warranty covering parts and labor. This warranty is void if the vehicle is altered, misused, or if another facility attempts to repair the specific systems we serviced without our prior authorization.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">5. Limitation of Liability</h2>
              <p>
                Modern Auto Garage is not responsible for loss or damage to vehicles or articles left in vehicles in case of fire, theft, or any other cause beyond our control. We are not liable for incidental or consequential damages.
              </p>
            </div>

            <div className="pt-10 border-t border-gray-200 mt-12 bg-grayCustom-light p-8 rounded-2xl">
              <p className="font-bold text-black text-xl mb-2">Questions about our Terms?</p>
              <p>
                Please contact us at <a href="mailto:modernarllc@gmail.com" className="text-primary font-bold hover:underline">modernarllc@gmail.com</a> or call <a href="tel:+16036224428" className="text-primary font-bold hover:underline">603-622-4428</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
