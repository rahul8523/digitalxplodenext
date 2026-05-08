"use client";

import Image from "next/image";

export default function AppServices() {
  const data = [
    {
      title: "Mobile UI Design",
      img: "/assets/web-design/scaree.png",
      desc: `The Mobile UI Designs that we create offer an unmatched user experience with subtlety, beauty, and intuitiveness. Simplicity meets minimalism in all our UI design. The interfaces we create offer a fresh and natural feel with zero distraction. Keeping the clutter to a minimum to obtain the simplest form of user experience forms the basis of our design philosophy.`,
    },
    {
      title: "Native App Development",
      img: "/assets/web-design/native.png",
      desc: `Digital Xplode is a best-in-class native iPhone and Android Mobile App development company in India. In a short span of time, Digital Xplode has launched a wide range of B2B and B2C apps catering to users across the globe. The team carries significant expertise in design and development of native apps using iOS and Android SDK.`,
    },
    {
      title: "Hybrid App Development",
      img: "/assets/web-design/hybrid.png",
      desc: `Devising technology in favor of our clients' business proposition, Digital Xplode holds expertise in developing Hybrid Mobile Apps that combine best of both world-Native and HTML5 functionality. Digital Xplode offers range of user-friendly, rich-in-interface, visually optimized B2B, B2C Apps across major platforms-iOS, Android.`,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-start">

              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-3xl font-semibold mb-3 leading-snug">
                {item.title.split("  ").map((word, idx) => (
                  <span key={idx} className="block">
                    {word}
                  </span>
                ))}
              </h3>

              {/* Divider */}
              <div className="w-full h-[2px] bg-gray-300 mb-5"></div>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}