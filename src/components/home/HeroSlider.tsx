"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Driving Success With Digital Strategies",
    subtitle: "",
    description: "",
    isFirst: true,
    img: "/assets/slider/dxvideo.gif",
    bg: "bg-black",
  },
  {
    id: 2,
    title: "Helping Solar Companies Build Strong Brands",
    subtitle: "Digital Presence & Consistent Qualified Leads",
    description: "We help solar EPCs, installers, and manufacturers build trust, dominate local markets, and generate installation-ready enquiries through branding, digital presence, and performance marketing.",
    img: "/assets/slider/slider2.webp",
    bg: "bg-black",
    showIcons: true,
    isBackground: true,
    showRightImage: true,
    BgBackground: "/assets/slider/bgslider2.jpg",
    icons: [
      { text: "Solar EPCs & Installers", icon: "/assets/slider/soloricon.png" },
      { text: "ROI-Driven Campaigns", icon: "/assets/slider/icon2.png" },
      { text: "Global Markets", icon: "/assets/slider/icon3.png" }
    ]
  },
  {
    id: 3,
    title: "Complete Digital Growth for Manufacturers",
    subtitle: "B2B Market Leadership",
    description: "Building brand authority and generating high-quality B2B enquiries for global manufacturing units.",
    img: "/assets/slider/bgslider3.webp",
    isBackground: true,
    showRightImage: true,
    BgBackground: "/assets/slider/bgslider3.webp",
    showIcons: true,
    icons: [
      { text: "B2B Lead Generation", icon: "/assets/slider/icon1.png" },
      { text: "Strong Digital Presence", icon: "/assets/slider/icon5.png" },
      { text: "Performance Marketing", icon: "/assets/slider/icon4.png" }
    ]
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  // Animation Variants
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imgVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen sm:h-screen w-full bg-black overflow-hidden font-outfit">

      {/* GLOBAL AI GLOW EFFECT */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brandBlue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}

        effect="fade"
        speed={1200}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        className="h-full w-full relative z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative h-full w-full flex flex-col-reverse md:flex-row items-center px-2 md:px-20 ${slide.bg || ""}`}>

              {/* Background Layer for Slide 3 */}
              {slide.isBackground && (
                <div className="absolute inset-0 -z-0 hidden md:block">
                  <Image
                    src={slide.BgBackground || slide.img}
                    alt="bg"
                    fill
                    className="object-cover opacity-40 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
                </div>
              )}



              {/* Text Content */}
              <div className="w-full md:w-3/5 z-20 pt-20 md:pt-0">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={`content-${index}`}
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                      }}
                    >


                      <motion.h1
                        variants={textVariant}
                        className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.span
                        variants={textVariant}
                        className="inline-block text-brandBlue font-medium text-sm md:text-2xl mb-4"
                      >
                        {slide.subtitle}
                      </motion.span>

                      {activeIndex === 0 && (
                        <div className="lg:hidden w-full mt-6">

                          <div className="h-[2px] bg-[#00cfff] w-full relative mb-6">
                            <motion.div
                              key={activeIndex}
                              initial={{ x: "-100%" }}
                              animate={{ x: "0%" }}
                              transition={{ duration: 6, ease: "linear" }}
                              className="absolute inset-0 bg-brandBlue"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-center content-center">

                            {[
                              "Strategic Planning",
                              "Website Development",
                              "SEO",
                              "SMM",
                              "Google Adwords",
                              "Graphic Design",
                              "Mobile App Development"
                            ].map((item, i) => (

                              <div
                                key={i}
                                className="bg-[#d9d9d9] text-black text-[13px] py-3 px-4 rounded-full font-medium"
                              >
                                {item}
                              </div>

                            ))}

                          </div>

                        </div>
                      )}

                      <motion.p
                        variants={textVariant}
                        className="text-gray-400 text-base md:text-lg max-w-xl mb-5 leading-relaxed font-light"
                      >
                        {slide.description}
                      </motion.p>

                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-1 mb-8">

                        {slide.icons?.map((icon, i) => (

                          <div key={i} className="flex items-center">

                            {/* icon + text */}
                            <div className="flex items-center gap-3">

                              <div className="relative w-8 h-8">
                                <Image
                                  src={icon.icon}
                                  alt={icon.text}
                                  fill
                                  className="object-contain"
                                />
                              </div>

                              <span className="text-white text-sm md:text-base whitespace-nowrap">
                                {icon.text}
                              </span>

                            </div>

                            {/* divider */}
                            {i !== slide.icons.length - 1 && (
                              <div className="hidden md:block w-[1px] h-8 bg-gray-600 mx-6"></div>
                            )}

                          </div>

                        ))}

                      </div>
                      {index !== 0 && (
                        <motion.div variants={textVariant}>
                          <button className="group relative overflow-hidden border border-white text-white px-10 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-black">

                            <span className="relative z-10">
                              See How We Grow Solar Brands
                            </span>

                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Image Side */}
              {(!slide.isBackground || slide.showRightImage) && (
                <div
                  className={`w-full md:w-2/5 justify-center items-center mt-0 md:mt-0 
  ${index === 2 ? "flex md:hidden" : "flex"}
`}
                >
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        key={`img-${index}`}
                        variants={imgVariant}
                        initial="hidden"
                        animate="visible"
                        className="relative w-full aspect-square md:w-[110%]"
                      >
                        <Image
                          src={slide.img}
                          alt="feature"
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BOTTOM NAVIGATION & PROGRESS BAR */}
      <div className="absolute bottom-15 left-0 w-full z-30 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Progress System */}
        <div className="hidden lg:block flex-1 max-w-4xl">
          <div className="h-[2px] bg-[#00cfff] w-full relative overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0 bg-brandBlue shadow-[0_0_10px_#00adef]"
            />
          </div>
          <div className="flex justify-between text-[12px] text-gray-200 uppercase mt-3 tracking-widest">
            {["Strategic Planning", "Website Development", "SEO", "SMM", "Google Adwords", "Graphic Design", "Mobile App Development"].map((item, i) => (
              <span key={i} className={activeIndex === i ? "text-brandBlue transition-colors" : ""}>{item}</span>
            ))}
          </div>

        </div>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex gap-4">
          <button
            ref={prevRef}
            type="button"
            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-brandBlue hover:text-brandBlue transition-all duration-300 group"
          >
            <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-brandBlue hover:text-brandBlue transition-all duration-300 group"
          >
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Slide Counter (AI Style) */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden md:flex flex-col gap-10 items-center z-30">
        <span className="text-gray-600 text-xs font-bold rotate-90">03</span>
        <div className="w-[1px] h-20 bg-gray-800 relative">
          <div
            className="absolute top-0 left-0 w-full bg-brandBlue transition-all duration-500"
            style={{ height: `${((activeIndex + 1) / 3) * 100}%` }}
          />
        </div>
        <span className="text-white text-xs font-bold rotate-90">0{activeIndex + 1}</span>
      </div>

    </section>
  );
};

export default HeroSlider;