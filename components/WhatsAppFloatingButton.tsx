"use client";

import { useState } from "react";

const WhatsAppFloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const phoneNumber = "917623043499";
    const message =
      "Hello! I'm interested in your immigration services. Can you help me?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    console.log("🟢 WhatsApp button clicked!");
    console.log("📱 Opening WhatsApp in new tab:", whatsappURL);

    // Force open WhatsApp in new tab
    const newWindow = window.open(whatsappURL, "_blank", "noopener,noreferrer");

    if (newWindow) {
      console.log("✅ WhatsApp opened in new tab successfully!");
      // Focus the new tab
      newWindow.focus();
    } else {
      console.log("❌ Popup blocked! Please allow popups for this site.");
     
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      {/* Main WhatsApp Button */}
      <a
        href={`https://wa.me/917623043499?text=${encodeURIComponent(
          "Hello! I'm interested in your immigration services. Can you help me?"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-300"
        style={{ zIndex: 9999 }}
      >
        {/* WhatsApp Icon SVG */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515" />
        </svg>
      </a>

      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></div>

      {/* Secondary Pulse Ring */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-10 pointer-events-none"></div>

      {/* Simple Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </div>
      )}

      {/* Notification dot */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse pointer-events-none">
        <span className="sr-only">New message</span>
      </div>
    </div>
  );
};

export default WhatsAppFloatingButton;
