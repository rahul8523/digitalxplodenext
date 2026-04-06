"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolio = [
  {
    title: "Galgotias University",
    category: "Web Design & Development",
    image: "/assets/portfolio/Galgotiaas.webp",
  },
  {
    title: "Lakmé Academy",
    category: "Google AdWord",
    image: "/assets/portfolio/lakme.webp",
  },
  {
    title: "Delhi Public School",
    category: "Search Engine Optimisation",
    image: "/assets/portfolio/dps.webp",
  },
  {
    title: "Delhi Public School",
    category: "Search Engine Optimisation",
    image: "/assets/portfolio/arena.webp",
  },
  {
    title: "Delhi Public School",
    category: "Search Engine Optimisation",
    image: "/assets/portfolio/alstone.webp",
  },
  {
    title: "Delhi Public School",
    category: "Search Engine Optimisation",
    image: "/assets/portfolio/sbl.webp",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#ebebeb] py-10 px-6 md:px-16">

      {/* TITLE */}
      <h2 className="text-center text-4xl md:text-5xl text-black font-bold mb-10">
        Portfolio
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto">

        {portfolio.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >

            {/* IMAGE CARD */}
            <div className="overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

            </div>

            {/* TEXT */}
            <div className="mt-4">

              <p className="text-gray-400 text-sm mb-1">
                {item.category}
              </p>

              <h3 className="text-lg text-black font-semibold">
                {item.title}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>

      <div className="flex text-center items-center justify-center gap-3 mt-12 cursor-pointer group">

        <span className="text-sm tracking-wide font-semibold text-black">
          KNOW MORE
        </span>

        <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
          <ArrowUpRight size={22} className="text-black group-hover:text-white" />
        </div>

      </div>

    </section>
  );
}