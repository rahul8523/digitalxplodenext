"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Logo Section */}
        <div className="mb-10">
          <Image
            src="/assets/logo/logo.png"
            alt="Digital Xplode"
            width={180}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Hero Text Section */}
        <div className="text-center mb-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide mb-10">
            Finding an Agency Who Understands your Digital Needs <br />
            Ask us How We can Elevate your Brand.
          </h2>

          {/* Top Links with Vertical Dividers */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 text-[12px] font-medium text-white uppercase">
            <Link href="/about" className="hover:text-cyan-400">About Us</Link>
            <span className="text-gray-600">|</span>
            <Link href="/contact" className="hover:text-cyan-400">Contact Us</Link>
            <span className="text-gray-600">|</span>
            <Link href="/clientele" className="hover:text-cyan-400">Clientele</Link>
            <span className="text-gray-600">|</span>
            <Link href="/blogs" className="hover:text-cyan-400">Blogs</Link>
            <span className="text-gray-600">|</span>
            <Link href="/seo" className="hover:text-cyan-400">Search Engine Optimization</Link>
            <span className="text-gray-600">|</span>
            <Link href="/smm" className="hover:text-cyan-400">Social Media Management</Link>
            <span className="text-gray-600">|</span>
            <Link href="/digital-marketing" className="hover:text-cyan-400">Digital Marketing Solution</Link>
          </div>

          <button
            onClick={() => window.open("https://maps.app.goo.gl/D6dNwvsav7gWB5vh8", "_blank")}
            className="mt-5 text-[13px] font-Semibold hover:text-cyan-400 uppercase"
          >
            Give us Feedback
          </button>
        </div>

        {/* Small Tags Links */}
        <div className="w-full text-center text-[12px] text-gray-100 uppercase space-y-2 mb-10 border-t border-gray-800 pt-8">
          <p className="flex flex-wrap justify-center gap-2">
            <Link href="/graphic-design-company-in-noida" className="hover:text-white transition">
              Graphic Design Company in Noida
            </Link><span className="text-gray-300">|</span>

            <Link href="/ppc-management-company-in-noida" className="hover:text-white transition">
              Google-Adwords Company in Noida
            </Link><span className="text-gray-300">|</span>

            <Link href="/ecommerce-web-development-company-in-noida" className="hover:text-white transition">
              Ecommerce Development Company in Noida
            </Link><span className="text-gray-700">|</span>

            <Link href="/digital-marketing-company-in-noida" className="hover:text-white transition">
              Digital Marketing Company in Noida
            </Link><span className="text-gray-700">|</span>

            <Link href="/social-media-agency-in-noida" className="hover:text-white transition">
              Social Media Agency in Noida </Link>

          </p>
          <p className="flex flex-wrap justify-center gap-2">
            <Link href="/seo-company-in-noida" className="hover:text-white transition">
              SEO Company in Noida
              <span className="text-gray-300">|</span>
            </Link>

            <Link href="/website-designing-company-in-noida" className="hover:text-white transition">
              Website Design Company in Noida
              <span className="text-gray-300">|</span>
            </Link>

            <Link href="/google-adwords-management-company" className="hover:text-white transition">
              Google Ads Management Company
              <span className="text-gray-700">|</span>
            </Link>

            <Link href="/social-media-agency-in-noida" className="hover:text-white transition">
              Marketplace Management Services
              <span className="text-gray-700">|</span>
            </Link>

            <Link href="/smarketplace-management-services" className="hover:text-white transition">
              Digital Marketing for Manufacturers
            </Link>
          </p>
        </div>

        {/* Address & Maps Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border border-gray-800 px-6">
          {/* Column 1: Maps */}
          <div className="md:col-span-4 space-y-3">
            <iframe
              className="w-full h-24 rounded hover:grayscale transition duration-500"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.197797565717!2d77.31486877457125!3d28.593842385838336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5162452931f%3A0x37452a025c89e8f6!2sDigital%20Xplode%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1718358570250!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <iframe
              className="w-full h-24 rounded hover:grayscale transition duration-500"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.216354918631!2d-95.532518!3d29.539192999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ef08e7299ba9%3A0x97b46d79144a07dc!2s9119%20Hwy%206%20230%20162%2C%20Missouri%20City%2C%20TX%2077459%2C%20USA!5e0!3m2!1sen!2sin!4v1718362735423!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Column 2: Address */}
          <div className="md:col-span-4 text-base space-y-4 md:pl-10 pt-2 border-l border-gray-800">
            <div>
              <p className="flex items-center gap-2 font-Semibold mb-1"><Image src="/assets/flag/india.jpg" width={30} height={30} alt="IN" /> <span className="text-gray-300">C-50 G/03, Sector 6,</span></p>
              <p className="text-gray-400">Noida, Uttar Pradesh 201301 India</p>
            </div>
            <div>
              <p className="flex items-center gap-2 font-Semibold mb-1"><Image src="/assets/flag/usa.png" width={30} height={30} alt="USA" /> <span className="text-gray-300">9100 Southwest FRWY, Suite 242,</span></p>
              <p className="text-gray-400">Houston, Texas 77074</p>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4 text-base space-y-3 md:pl-10 pt-2 border-l border-gray-800">
            <p className="text-gray-100"><Link href="tel:+18328024342" className="text-gray-400"><span className="text-gray-400">US:</span> +1(832)802-4342</Link></p>
            <p className="text-gray-100"><Link href="tel:+919560785068" className="text-gray-400"><span className="text-gray-400">IND:</span> +91- 956-078-5068</Link></p>
            <p className="text-gray-100"><Link href="mailto:support@digitalxplode.com" className="text-gray-400"><span className="text-gray-400">Support:</span> support@digitalxplode.com</Link></p>
            <p className="text-gray-100"><Link href="mailto:info@digitalxplode.com" className="text-gray-400"><span className="text-gray-400">Enquiry:</span> info@digitalxplode.com</Link></p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="w-full mt-10 pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 gap-4">
          <p>© Copyright 2017 - 2026. All Rights Reserved</p>

          <div className="flex gap-4">
            <Link href="/term-condition" className="hover:text-white transition">Terms & Condition</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <span>|</span>
            <Link href="/refund-&-cancellations-policy" className="hover:text-white transition">Refund & Cancellation Policy</Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link href="https://x.com/digital_xplode" className="hover:scale-110 transition"><Twitter size={18} fill="currentColor" /></Link>
            <Link href="https://www.facebook.com/digitalxplodeofficial/" className="hover:scale-110 transition text-blue-600"><Facebook size={18} fill="currentColor" /></Link>
            <Link href="https://www.instagram.com/digitalxplodeofficial/" className="hover:scale-110 transition text-pink-600"><Instagram size={18} /></Link>
            <Link href="https://www.linkedin.com/company/digital-xplode-official/" className="hover:scale-110 transition text-blue-500"><Linkedin size={18} fill="currentColor" /></Link>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <a
        href="#"
        className="fixed right-0 top-1/2 -rotate-90 origin-right bg-white text-black py-2 px-6 font-bold text-xs uppercase shadow-2xl z-50 flex items-center gap-2 hover:bg-gray-200 transition"
      >
        <span className="rotate-90">📅</span> Book a Meeting
      </a>
    </footer>
  );
};

export default Footer;