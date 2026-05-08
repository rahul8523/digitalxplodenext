"use client";

import { ArrowUpRight } from "lucide-react";

export default function DxLifeHeader() {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex items-center justify-between">
        
        {/* Left */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
          Dx Life
        </h2>

        {/* Center */}
        <p className="hidden md:block text-gray-700 text-xl font-medium">
          Relax, Refresh, Recharge
        </p>

        {/* Right */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl text-gray-900 font-medium hover:underline"
        >
          Careers
          <span className="border border-gray-900 rounded-full p-1">
            <ArrowUpRight size={20} />
          </span>
        </a>
      </div>
    </div>
  );
}