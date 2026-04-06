"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  "/assets/clients/icri.jpg",
  "/assets/clients/mittal.png",
  "/assets/clients/m2k.png",
  "/assets/clients/lakme.png",
  "/assets/clients/alstone.png",
  "/assets/clients/pms.png",
  "/assets/clients/niche.jpg",
  "/assets/clients/sgrh.png",
  "/assets/clients/azad.jpg",
  "/assets/clients/naturals.png",
  "/assets/clients/vijohn.png",
  "/assets/clients/megarind.png",
  "/assets/clients/kohler.jpg",
  "/assets/clients/ims.png",
  "/assets/clients/school.png",
  "/assets/clients/ilam.png",
  "/assets/clients/maac.png",
  "/assets/clients/sbl.png",
  "/assets/clients/icprd.png",
  "/assets/clients/arena.png",
  "/assets/clients/rof.jpg",
  "/assets/clients/truere.png",
  "/assets/clients/hikon.png",
  "/assets/clients/galgotias.png",
];

export default function ClientsSection() {
  return (
    <section className="bg-[#f3f3f3] py-10 px-6 md:px-16">

      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl text-black font-bold mb-10">
        Our Clients
      </h2>

      {/* Logo Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-gray-300">

        {clients.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center p-8 bg-white border border-gray-200"
          >
            <Image
              src={logo}
              alt="client"
              width={120}
              height={60}
              className="object-contain hover:grayscale transition duration-300"
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
}