import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Modern Auto Garage",
  description: "Privacy Policy detailing how Modern Auto Garage handles your data and personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-20 border-b-4 border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Privacy <span className="text-primary italic">Policy</span>
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
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">1. Information We Collect</h2>
              <p>
                At Modern Auto Garage, we strictly collect information that helps us repair your vehicle and communicate with you effectively. This includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-primary">
                <li>Personal identification information (Name, email address, phone number).</li>
                <li>Vehicle Information (Make, model, year, VIN, license plate).</li>
                <li>Service records and transaction history related to your visits.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect primarily to provide, maintain, and improve our services. We may use your data to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-primary">
                <li>Schedule appointments and provide accurate repair estimates.</li>
                <li>Contact you regarding the status of your vehicle.</li>
                <li>Maintain comprehensive warranty and service records for your vehicle.</li>
                <li>Send occasional updates, service reminders, or promotional offers (which you can opt out of at any time).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">3. Data Sharing and Protection</h2>
              <p>
                We take your privacy seriously. We do not sell, trade, or rent your personal information to third parties. We may share necessary vehicle data with parts suppliers, warranty providers, or insurance companies specifically related to rendering our services or fulfilling a claim. All digital records are stored securely with restricted access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">4. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-black mb-4 border-l-4 border-primary pl-4">5. Your Consent</h2>
              <p>
                By using our website and services, you consent to our Privacy Policy. We reserve the right to update or change our Privacy Policy at any time, and you should check this page periodically.
              </p>
            </div>

            <div className="pt-10 border-t border-gray-200 mt-12 bg-grayCustom-light p-8 rounded-2xl">
              <p className="font-bold text-black text-xl mb-2">Contact Us</p>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:modernarllc@gmail.com" className="text-primary font-bold hover:underline">modernarllc@gmail.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
