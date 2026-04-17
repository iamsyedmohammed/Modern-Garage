import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Thank you for reaching out to Modern Auto Garage.",
};

export default function ThankYouPage() {
  return (
    <section className="py-24 bg-grayCustom-light min-h-[80vh] flex items-center justify-center pt-32">
      <div className="max-w-xl mx-auto px-4 text-center bg-white p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-heading font-black mb-4">Request Received!</h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          Thank you for reaching out! One of our service advisors will review your request and call you shortly to confirm your booking. We've also sent a confirmation to your email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book-appointment" className="bg-gray-100 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-colors">
            Book Another Service
          </Link>
          <a href="tel:+16036224428" className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-black transition-colors">
            Call Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
