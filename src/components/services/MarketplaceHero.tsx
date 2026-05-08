"use client";

import Image from "next/image";

export default function MarketplaceHero() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Optimize Your Marketplace Presence, Drive Sales & Increase ROI
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            In today’s competitive digital landscape, having a presence on major online marketplaces like Amazon, eBay, Etsy, and Walmart is essential.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Our Marketplace Management Services help you unlock the full potential of your online store by enhancing product visibility, driving more traffic, and boosting conversions.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90">
            → Get Started
          </button>
        </div>

        {/* Right Logos */}
        <div className="gap-6 items-center">
       
            <Image
              src={`/assets/optimize/amxone.jpeg`}
              alt="Optimize"
              width={600}
              height={600}
              className="object-contain mx-auto"
            />
  
        </div>

      </div>
    </section>
  );
}