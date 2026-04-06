"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { id: 1, src: "/assets/partners/client-1.webp", alt: "Search Engine Journal" },
  { id: 2, src: "/assets/partners/client-2.webp", alt: "MOZ" },
  { id: 3, src: "/assets/partners/client-3.webp", alt: "Shopify Partners" },
  { id: 4, src: "/assets/partners/client-4.webp", alt: "Yext Certified Partner" },
  { id: 5, src: "/assets/partners/client-5.webp", alt: "Google Partner" },
  { id: 6, src: "/assets/partners/client-6.webp", alt: "Facebook Marketing Partner" },
  { id: 7, src: "/assets/partners/client-7.webp", alt: "BNI Member" },
  { id: 8, src: "/assets/partners/client8.webp", alt: "IIA" },
];

const Partners = () => {
  return (
    <section className="bg-white py-10 md:py-10 overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-5 text-center md:text-left hidden">

        <h3 className="text-gray-400 text-sm font-bold tracking-[0.2em] uppercase font-outfit">
          Our Trusted Partners
        </h3>
      </div>


      <div className="relative w-full flex items-center">
        
        <div className="absolute left-0 top-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 md:gap-24 items-center w-max pl-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, 
          }}
        >
         
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="relative w-[120px] md:w-[160px] h-[60px] md:h-[80px] flex-shrink-0 flex items-center justify-center group"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain filter transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </motion.div>

        <div className="absolute right-0 top-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
      </div>
    </section>
  );
};

export default Partners;