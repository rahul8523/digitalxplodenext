"use client";

import { useState } from "react";
import { portfolioData } from "@/./components/data/portfolio";

const tabs = ["All", "Website", "SEO", "SMM", "Logo Design", "Google Ads"];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData =
    activeTab === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeTab);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-black text-white text-center py-8">
        <h1 className="text-4xl font-bold">View Portfolio</h1>
        <p className="mt-2 text-sm">Home &gt; Portfolio</p>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 border ${activeTab === tab
                ? "bg-black text-white"
                : "bg-white text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 p-10">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer group"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              className="w-full h-auto object-cover border border-black group-hover:scale-102 transition"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
    {selectedItem && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
    
    <div className="bg-white w-full max-w-5xl relative rounded-lg overflow-hidden">

      {/* CLOSE */}
      <button
        onClick={() => setSelectedItem(null)}
        className="absolute top-3 right-4 text-2xl z-10 text-black"
      >
        ✕
      </button>

      {/* TITLE */}
      <div className="p-4 border-b text-black">
        <h2 className="text-xl font-semibold">
          {selectedItem.name}
        </h2>
      </div>

      {/* SCROLLABLE FULL WEBSITE IMAGE */}
      <div className="max-h-[80vh] overflow-y-auto">
        <img
          src={selectedItem.gallery[0]}
          className="w-full h-auto"
        />
      </div>

    </div>
  </div>
)}

    </div>
  );
}