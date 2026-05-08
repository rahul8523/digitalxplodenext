"use client";

import { Phone, Mail } from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-[#f3f3f3] min-h-screen">

      {/* HERO */}
      <section className="bg-black text-white text-center py-8">
        <h1 className="text-4xl font-bold">Feel Free To Reach Out!</h1>
        <p className="text-sm mt-2 text-gray-300">
          Home &gt; Contact Us
        </p>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* US OFFICE */}
          <div className="bg-black text-white rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">US Office</h3>

            <p className="text-sm leading-relaxed">
              9100 Southwest FRWY,<br />
              Suite 242 Houston, Texas 77074
            </p>

            <p className="flex my-3 text-sm"><Phone size={18} style={{ marginRight: "8px" }} /> +1 (469) 663-1569</p>
            <p className="flex text-sm"> <Mail size={18} style={{ marginRight: "8px" }} /> info@digitalxplode.com</p>
          </div>

          {/* INDIA OFFICE */}
          <div className="bg-black text-white rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">India Office</h3>

            <p className="text-sm leading-relaxed">
              C-50 Ground Floor, G/2 & G/3, Sector 6, Noida,<br />
              Uttar Pradesh 201301
            </p>

            <p className="flex my-3 text-sm"><Phone size={18} style={{ marginRight: "8px" }} /> +91 9560785068</p>
            <p className="flex text-sm"> <Mail size={18} style={{ marginRight: "8px" }} /> info@digitalxplode.com</p>
          </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <div className="md:col-span-2 text-black bg-[#ededed] rounded-lg p-8 shadow-sm">

          <h3 className="font-semibold mb-6">
            Please Fill The Form Below:
          </h3>

          <form className="space-y-4">

            {/* NAME */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded w-full placeholder-gray-400" 
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* EMAIL PHONE */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded w-full"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* COMPANY */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name"
                className="border p-3 rounded w-full"
              />

              <input
                type="text"
                placeholder="Website URL"
                className="border p-3 rounded w-full"
              />
            </div>


            {/* SERVICES */}
            <div>
              <h4 className="font-medium mb-3">Services</h4>

              <div className="grid md:grid-cols-2 gap-2 text-sm">

                <label><input type="checkbox" /> Strategic Planning</label>
                <label><input type="checkbox" /> Website Development</label>

                <label><input type="checkbox" /> SEO (Search Engine Optimization)</label>
                <label><input type="checkbox" /> SMM (Social Media Management)</label>

                <label><input type="checkbox" /> Google Adwords</label>
                <label><input type="checkbox" /> Graphic Design</label>

                <label><input type="checkbox" /> Mobile App Development</label>
                <label><input type="checkbox" /> Marketplace Management Services</label>

              </div>
            </div>


            {/* MESSAGE */}
            <textarea
              placeholder="Message (Optional)"
              className="border p-3 rounded w-full"
              rows={4}
            />


            {/* CAPTCHA PLACEHOLDER */}
            <div className="border p-4 w-[300px] text-sm bg-gray-100">
              I'm not a robot
            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 text-sm font-semibold hover:bg-gray-800 transition"
            >
              SUBMIT
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}