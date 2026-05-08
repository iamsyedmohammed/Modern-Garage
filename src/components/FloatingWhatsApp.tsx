"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "16036224428"; // Format: country code + number
  const message = "Hello Modern Auto Garage, I would like to inquire about a service.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-black hover:bg-gray-900 text-primary p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group border border-primary/20"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm text-white">
        Chat with us
      </span>
    </a>
  );
}
