"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '../startproject/ProjectModal';
import Image from 'next/image';

const Header = () => {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isXploreOpen, setXploreOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 bg-black text-white py-4 px-6 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo/logo.png"
              alt="Digital Xplode Logo"
              width={160}
              height={40}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-[13px] font-bold tracking-wider">
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className={`flex items-center gap-1 transition ${isMegaMenuOpen ? 'text-white' : 'hover:text-cyan-400'}`}>
              SERVICES <ChevronDown size={14} className={`transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* FULL WIDTH MEGA MENU */}
            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="fixed left-0 top-[73px] w-screen bg-[#00adef] text-white p-12 shadow-2xl overflow-hidden"
                >
                  <div className="max-w-7xl mx-auto grid grid-cols-5 gap-3">
                    {/* Column 1: Strategic */}
                    <div className="space-y-4">
                      <Link href="/services/strategy">
                        <h3 className="font-semibold text-lg uppercase hover:underline cursor-pointer">
                          Strategic Planning
                        </h3>
                      </Link>
                      <p className="text-sm leading-relaxed opacity-90 font-normal">
                        Strategic planning meets digital innovation. Get tailored strategies for sustainable growth.
                        Our experienced team driving measurable results aligned with your business objectives.
                      </p>
                      <Link href="/services/marketplace-management-services">
                        <h3 className="font-Semibold text-lg uppercase mt-6 pt-4 border-t border-white/20">
                          Marketplace Management Services
                        </h3>
                      </Link>
                    </div>

                    {/* Column 2: Digital Marketing */}
                    <div className="space-y-4">
                      <Link href="/services/digital-marketing-solution">
                        <h3 className="font-Semibold text-base uppercase">Digital Marketing</h3>
                      </Link>
                      <ul className="space-y-2 text-[14px] font-medium">
                       <Link href="/services/search-engine-optimization"><li className="hover:translate-x-2 transition-transform cursor-pointer">Search Engine Optimization (SEO)</li></Link> 
                        <li className="hover:translate-x-2 transition-transform cursor-pointer">Social Media Management (SMM)</li>
                        <li className="hover:translate-x-2 transition-transform cursor-pointer">Search Engine Marketing (SEM)</li>
                      </ul>
                    </div>

                    {/* Column 3: Web Dev */}
                    <div className="space-y-4">
                      <Link href="/services/web-design-and-development">
                        <h3 className="font-Semibold text-base uppercase">Web Design & Development</h3>
                      </Link>
                      <Link href="/services/ecommerce-web-development-service-noida">
                        <h3 className="font-Semibold text-base uppercase">Ecommerce Development</h3>
                      </Link>
                      <Link href="/services/mobile-app-development">
                        <h3 className="font-Semibold text-base uppercase">Mobile App Development</h3>
                      </Link> 
                    </div>

                    {/* Column 4: Media */}
                    <div className="space-y-4">
                      <Link href="/services/media-services">
                        <h3 className="font-Semibold text-base uppercase">Media Services</h3>
                      </Link>
                      <ul className="space-y-2 text-[14px] font-medium">
                        <li className="hover:translate-x-2 transition-transform cursor-pointer">Google Adwords</li>
                        <li className="hover:translate-x-2 transition-transform cursor-pointer">Meta Ads</li>
                        <li className="hover:translate-x-2 transition-transform cursor-pointer">Content Marketing</li>
                      </ul>
                    </div>

                    {/* Column 5: Solar */}
                    <div className="space-y-4 border-l border-white/20 pl-6">
                      <h3 className="font-Semibold text-base uppercase">Digital Marketing Services for Solar Companies</h3>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/portfolio" className="hover:text-cyan-400 uppercase">Portfolio</Link>
          <div
            className="relative"
            onMouseEnter={() => setXploreOpen(true)}
            onMouseLeave={() => setXploreOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-cyan-400 uppercase">
              Xplore DX <ChevronDown size={14} className={`transition ${isXploreOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isXploreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full mt-2 w-48 bg-white text-black shadow-xl z-50"
                >
                  <Link href="/about-us" className="block px-4 py-2 hover:bg-cyan-400">
                    About Us
                  </Link>

                  <Link href="/dx-squad" className="block px-4 py-2 hover:bg-cyan-400">
                    DX Squad
                  </Link>

                  <Link href="/dx-life" className="block px-4 py-2 hover:bg-cyan-400">
                    DX Life
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/contact-us" className="hover:text-cyan-400 uppercase">Contact Us</Link>
          <Link href="/sla-plan" className="hover:text-cyan-400 uppercase">$1 SLA Plan</Link>

        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setProjectModalOpen(true)}
            className="hidden md:block bg-white text-black text-sm px-5 py-2.5 rounded font-bold hover:bg-gray-200 transition"
          >
            Start a Project
          </button>
          <button className="hidden md:block border border-white text-white text-sm px-5 py-2.5 rounded font-bold hover:bg-white hover:text-black transition">
            Let's Talk
          </button>

          {/* Desktop Right Sidebar Icon (3 dante) */}
          <button className="hidden lg:block ml-2 group">
            <div className="space-y-1.5">
              <span className="block w-8 h-0.5 bg-white group-hover:bg-cyan-400 transition"></span>
              <span className="block w-5 h-0.5 bg-white group-hover:bg-cyan-400 transition ml-auto"></span>
              <span className="block w-8 h-0.5 bg-white group-hover:bg-cyan-400 transition"></span>
            </div>
          </button>

          {/* Mobile Menu Icon */}
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Code (Left side) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60]"
            />
            <motion.div
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              className="fixed left-0 top-0 h-full w-[80%] max-w-sm bg-black z-[70] p-8 shadow-2xl"
            >
              <button onClick={() => setMobileMenuOpen(false)} className="mb-10 text-white"><X size={30} /></button>
              <div className="flex flex-col gap-6 text-xl font-bold">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                <div className="text-cyan-400">SERVICES</div>
                <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)}>PORTFOLIO</Link>
                <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
                <button className="bg-[#00adef] text-white py-3 rounded mt-4">LET'S TALK</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ProjectModal isOpen={isProjectModalOpen} onClose={() => setProjectModalOpen(false)} />
    </header>
  );
};

export default Header;