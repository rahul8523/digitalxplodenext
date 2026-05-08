"use client";

import Image from "next/image";

export default function Page() {
    return (

        <>
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold">SEM(Search Engine Marketing)</h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt;  SEM(Search Engine Marketing)
                </p>
            </section>




            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}

                <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT */}
                        <div>
                            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                                Pay only for What Pays You Back
                            </h1>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                We identify, analyze, and understand what it takes to reach the right audience at the right time through our custom-designed Paid Media Marketing solutions.
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Be it giving a solid start to your promotional messages or optimizing them for better returns, we make paid media always perform to the end of their possibilities. Through our strategic partnerships with all the leading digital advertising platforms, we empower you with exclusive access to diverse programs and features to accelerate your business performance on all paid media channels.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/assets/social/paid_market.png"
                                alt="Paid Media Marketing"
                                width={450}
                                height={450}
                                className="object-contain"
                            />
                        </div>

                    </div>
                </section>

                <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            What We Do
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Search Advertising", icon: "/assets/social/Search.png" },
                            { title: "Display Advertising", icon: "/assets/social/Display.png" },
                            { title: "Lead-based Marketing", icon: "/assets/social/Lead-based.png" },
                            { title: "Product Listing Ads", icon: "/assets/social/Product.png" },
                            { title: "Mobile Advertising", icon: "/assets/social/Mobile.png" },
                            { title: "Shopping Ads", icon: "/assets/social/Shopping.png" },
                            { title: "Remarketing", icon: "/assets/social/Remarketing.png" },
                            { title: "E-mail Marketing", icon: "/assets/social/E-mail.png" },
                            { title: "Social Media Advertising", icon: "/assets/social/SocialMedia.png" },
                            { title: "YouTube Marketing", icon: "/assets/social/YouTube.png" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#f4f1ec] p-6 flex flex-col items-start justify-center 
        h-[150px] rounded-md hover:shadow-md transition-all duration-300"
                            >

                                {/* ICON */}
                                <div className="mb-4">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>

                                {/* TEXT */}
                                <p className="text-sm font-medium leading-snug">
                                    {item.title.split(" ").map((word, idx) => (
                                        <span key={idx} className="block">
                                            {word}
                                        </span>
                                    ))}
                                </p>

                            </div>
                        ))}

                    </div>

                </section>

                {/* ================= WHY CHOOSE US ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT IMAGE */}
                        <div>
                            <Image
                                src="/assets/social/monitar2.jpg"
                                alt="devices"
                                width={600}
                                height={400}
                                className="w-full object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="bg-[#19b5e4] text-white p-8 md:p-12 rounded-md">
                            <p className="text-sm mb-3">Why choose us?</p>

                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                We believe that you should pay only for what pays you back
                            </h2>

                            <p className="text-sm leading-relaxed">
                                Working on the same principle, we make a comprehensive analysis of your business requirements, find the areas that need immediate attention, and then come up with a strategic and well-calculated Paid Marketing Campaign that catapults your sales. Be it a small-sized startup or a large corporation, we have got unmatched abilities to tailor paid media campaigns that bring to you long-lasting, revenue-driving channels of traffic.
                            </p>
                        </div>

                    </div>
                </section>




                {/* ================= ICON SERVICES ================= */}

                <section className="border-t py-10 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {/* Item 1 */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                            <Image
                                src="/assets/web-design/annual.png"
                                alt=""
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                            <h3 className="text-lg md:text-xl font-semibold">
                                Annual <br /> Maintenance
                            </h3>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                            <Image
                                src="/assets/web-design/content.png"
                                alt=""
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                            <h3 className="text-lg md:text-xl font-semibold">
                                Content <br /> Writing
                            </h3>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                            <Image
                                src="/assets/web-design/support.png"
                                alt=""
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                            <h3 className="text-lg md:text-xl font-semibold">
                                Support <br /> Services
                            </h3>
                        </div>

                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="bg-black text-white py-12 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                        <h3 className="text-xl md:text-3xl">
                            Let our amazing team help you in  <br /> media services.
                        </h3>

                        <button className="border border-white px-6 py-3 flex items-center gap-2">
                            Start a Project →
                        </button>

                    </div>
                </section>


                {/* LOGOS */}
                <section className="bg-white py-10">
                    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
                        <img src="/assets/partners/client-1.png" className="h-13" />
                        <img src="/assets/partners/client-2.png" className="h-13" />
                        <img src="/assets/partners/client-3.png" className="h-13" />
                        <img src="/assets/partners/client-4.png" className="h-13" />
                        <img src="/assets/partners/client-5.png" className="h-13" />
                        <img src="/assets/partners/client-6.png" className="h-13" />

                    </div>
                </section>

            </main>

        </>
    );
}