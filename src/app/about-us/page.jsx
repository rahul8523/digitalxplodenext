"use client";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function AboutPage() {

  const techImages = [
    "tech-1.png",
    "tech-2.png",
    "tech-3.png",
    "tech-4.png",
    "tech-5.png",
    "tech-6.png",
  ];


  return (
    <div className="bg-[#f5f5f5] text-black">

           {/* HERO */}
      <section className="bg-black text-white text-center py-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-sm mt-2 text-gray-300">
          Home &gt; About Us
        </p>
      </section>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-[30%_70%] gap-12 items-start py-20">

        {/* LEFT */}
        <div>
          <h2 className="text-[100px] font-semibold leading-none">8+</h2>
          <p className="text-lg mt-2">Years Experience</p>

          {/* NAV BUTTONS */}
          <div className="flex gap-6 mt-10 w-full justify-end">

            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group hover:bg-black transition">
              <ArrowLeft size={22} className="text-black group-hover:text-white" />
            </div>
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group hover:bg-black transition">
              <ArrowRight size={22} className="text-black group-hover:text-white" />
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="p-2">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Full-Service Digital Agency providing growth driven solutions.
          </h1>

          <p className="text-gray-800 mt-6 leading-relaxed">
            We are one of the most trusted digital media companies in India,
            owing to our successful track record of 8+ years in serving our
            clients with innovative and specialized solutions.
          </p>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="bg-[#e9eef2] sm:py-10 sm:p-0  p-2">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="flex justify-center sm:gap-10">
            <div className="bg-[#2fa4c6] text-white py-4 px-4 sm:px-12 sm:py-6 rounded-xl">
              <img src="/assets/about/web-dark.png" className="w-15 sm:h-13 m-auto" />
              <p className="text-lg font-semibold pt-3">Web</p>
            </div>

            <div className="text-dark text-center py-4 px-4 sm:px-12 sm:py-6 rounded-xl">
              <img src="/assets/about/newmedia.png" className="w-15 sm:h-13 m-auto" />
              <p className="text-lg pt-3">New Media</p>
            </div>

            <div className="text-dark py-4 px-4 sm:px-12 sm:py-6 rounded-xl">
              <img src="/assets/about/elearning.png" className="w-15 sm:h-13 m-auto" />
              <p className="text-lg pt-3">E-learning</p>
            </div>
          </div>

          <hr className="border-gray-300" />

          <p className="mt-8 max-w-3xl text-base mx-auto text-gray-800">
            Enabling businesses to survive, thrive, and compete online, we offer a complete spectrum of web solutions that connect, communicate, and convert.
          </p>
        </div>
      </section>

      {/* STATS + SERVICES */}
      <section className="max-w-7xl mx-auto py-10 grid md:grid-cols-2 gap-10">

        {/* LEFT STATS */}
        <div className="grid grid-cols-2 gap-10 sm:p-0 p-2 items-center">
          {[
            { num: "15+", text: "Agency Partners across The World" },
            { num: "1200+", text: "Websites" },
            { num: "120+", text: "Ongoing Digital Marketing projects" },
            { num: "60+", text: "Apps Developed" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-5xl sm:text-7xl font-semibold">{item.num}</h3>
              <p className="text-gray-800 mt-2 text-base">{item.text}</p>
            </div>
          ))}
        </div>

        {/* RIGHT BLACK BOX */}
        <div className="bg-black text-white sm:p-10 p-5">
          <p className="text-gray-300 mb-6">
            Be it Web Design and Development, Mobile Apps, or Digital Marketing,
            we represent your businesses across all digital spaces, while combining unmatched creativity and sheer practicality.
          </p>

          <ul className="space-y-4">
            <li className="border-b pb-2">Web Design & Development</li>
            <li className="border-b pb-2">Digital Marketing</li>
            <li className="border-b pb-2">Mobile App Development</li>
          </ul>

          <div className="flex gap-4 mt-6">
            <button className="bg-[#2fa4c6] px-6 py-3">Know More</button>
            <button className="bg-[#2fa4c6] px-6 py-3">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="max-w-7xl mx-auto sm:py-10 sm:p-0 p-2 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-4xl font-semibold mb-6">Our Vision</h2>
          <p className="text-gray-800 leading-relaxed">
            Our digital marketing agency aims to help businesses of all sizes leverage the future of digital platforms to develop,
            connect, and prosper in an ever-changing online marketplace. We want to be the trusted partner that converts our customers'
            digital presence into a successful operator, encouraging innovation and long-term growth.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-800 leading-relaxed">
            Our objective is to provide personalized, results-driven digital marketing solutions that address each
            client's specific demands. We are dedicated to offering great service by leveraging cutting-edge methods
            and technology to increase brand awareness, engage target audiences, and achieve significant results.
            Our devoted team of professionals seeks to develop long-term partnerships and produce meaningful outcomes,
            ensuring our clients realize their digital business objectives.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="max-w-7xl mx-auto sm:py-10 sm:p-0 p-2 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-semibold mb-6">Technology</h2>

          <p className="text-gray-800 mb-6 text-2xl">
            Using advanced technology to bring you high end solutions in new media, web and e-learning
          </p>

          <p className="text-gray-800 text-base">
            At Xplode we believe in walking at pace with the growing technology and that is how we deliver results beyond expectations.
            We make use of the latest software and technology platforms to develop high end and technically advanced solutions.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-4 border border-gray-300">
          {Array(16)
            .fill(0)
            .map((_, i) => {
              const img = techImages[i % techImages.length]; 

              return (
                <div
                  key={i}
                  className="h-24 border border-gray-200 flex items-center justify-center"
                >
                  <img
                    src={`/assets/technology/${img}`}
                    className="h-12 object-contain"
                    alt="tech"
                  />
                </div>
              );
            })}
        </div>
      </section>

       {/* LOGOS */}
            <section className="bg-white py-10">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 opacity-70">
                    <img src="/assets/partners/client-1.png" className="h-13" />
                    <img src="/assets/partners/client-2.png" className="h-13" />
                    <img src="/assets/partners/client-3.png" className="h-13" />
                    <img src="/assets/partners/client-4.png" className="h-13" />
                    <img src="/assets/partners/client-5.png" className="h-13" />
                    <img src="/assets/partners/client-6.png" className="h-13" />

                </div>
            </section>

    </div>
  );
}