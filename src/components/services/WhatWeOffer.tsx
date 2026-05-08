import { desc } from "framer-motion/client";

export default function WhatWeOffer() {
  const services = [
    {
      title: "1. Marketplace Setup & Optimization",
      desc: "We help businesses get started or optimize existing stores on leading e-commerce platforms. From store creation to product listing and SEO, we ensure your marketplace presence is structured for success.",
      points: [
        "Product Listing Optimization",
        "SEO-Driven Titles & Descriptions",
        "Image & Video Enhancement",
        "Marketplace Account Setup",
      ],
    },
    {
      title: "2. Inventory & Order Management",
      desc: "Seamless management of your product listings, inventory levels, and orders to avoid overselling and stockouts. Our system ensures real-time updates and synchronization across multiple platforms.",
      points: [
        "Automated Inventory Syncing",
        "Real-time Order Tracking",
        "Inventory Forecasting",
        "Stock Alerts & Replenishment",
      ],
    },
    {
      title: "3. Pricing & Competition Analysis",
      desc: "Stay ahead of the competition with dynamic pricing strategies tailored to maximize profits while staying competitive. We monitor competitors’ pricing, product trends, and customer behavior to adjust your pricing in real-time.",
      points: [
        "Price Optimization Tools",
        "Competitor Monitoring",
        "Dynamic Pricing Adjustments",
      ],
    },
    {
      title: "4. PPC & Advertising Campaigns",
      desc: "We design and execute data-driven advertising campaigns to increase product visibility and drive sales. Our team specializes in crafting Pay-Per-Click (PPC) campaigns on platforms like Amazon Ads, Google Shopping, and more.",
      points: [
        "Sponsored Ads",
        "Display Ads",
        "Retargeting Campaigns",
        "Budget Optimization",
      ],
    },
    {
      title: "5. Marketplace Analytics & Reporting",
      desc: "Understand your store’s performance through in-depth reporting and analytics. We track essential KPIs, including sales growth, customer engagement, and return on ad spend (ROAS), to provide actionable insights for continuous improvement.",
      points: [
        "Sales Reports",
        "Conversion Optimization",
        "ROI Analysis",
        "Customer Feedback Monitoring",
      ],
    },
    {
      title: "6. Customer Support & Feedback",
      desc: "A strong marketplace presence goes beyond selling. We assist in managing customer queries, reviews, and feedback to ensure a positive shopping experience and build brand trust.",
      points: [
        "Review Management",
        "Seller Rating Improvement",
        "Customer Query Handling",
        "Reputation Management",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl text-gray-900 font-semibold text-center mb-2">
          What We Offer
        </h2>
        <p className="text-center text-gray-600 mb-12 text-base">
          Our offerings
        </p>

        <div className="grid md:grid-cols-3 border-t border-gray-300">
          {services.map((item, i) => (
            <div
              key={i}
              className={`
                p-6 md:p-8
                ${i % 3 !== 2 ? "md:border-r border-gray-300" : ""}
                ${i < 3 ? "border-b border-gray-300" : ""}
              `}
            >
              <h3 className="font-semibold mb-4 text-2xl text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base mb-4">
                {item.desc}
              </p>

              <ul className="text-base text-gray-600 space-y-2 list-disc pl-4">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}