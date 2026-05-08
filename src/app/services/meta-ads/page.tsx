"use client";

import Image from "next/image";

export default function Page() {
    return (

        <>

            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Meta Ads </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Meta Ads
                </p>
            </section>


            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}
                <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                               Expert Meta Ads Management and Optimization for Your Business
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                                Digital Xplode specializes in delivering top-tier Meta Ads services tailored to propel your business forward. Our team of certified Meta Ads experts excels in crafting comprehensive advertising strategies designed to reach your target audience effectively. By leveraging advanced audience research, we identify and engage the right demographics, interests, and behaviors to ensure maximum impact.
                            </p>

                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                At Digital Xplode, we provide detailed analytics and transparent reporting to keep you informed about your campaign's performance.
                            </p>

                            <div className="flex gap-4">
                                <button className="border px-6 py-3 text-sm hover:bg-black hover:text-white transition">
                                    Start a Project
                                </button>

                                <button className="bg-black text-white px-6 py-3 text-sm hover:opacity-80 transition">
                                    Let's Talk
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/assets/social/meta-ads-img.jpg"
                                alt="content marketing"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>

                    </div>
                </section>

                {/* ================= 3 SERVICES ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Ad Creation & Design",
                                img: "/assets/social/meta-ads-3.jpg",
                                desc: "Our creative team designs visually compelling ads that capture attention and drive action. Whether it’s eye-catching graphics, engaging videos, or persuasive ad copy, we ensure your ads stand out in the crowded social media space.",
                            },
                            {
                                title: "Targeted Audience Research",
                                img: "/assets/social/meta-ads-4.jpg",
                                desc: "Using advanced tools and techniques, we identify and segment your ideal audience. By focusing on the right demographics, interests, and behaviors, we ensure your ads reach the people most likely to engage with your brand.",
                            },
                            {
                                title: "Detailed Analytics & Reporting",
                                img: "/assets/social/meta-ads-5.jpg",
                                desc: "We provide comprehensive reports that give you clear insights into your campaign’s performance. From click-through rates to conversion metrics, we keep you informed about every aspect of your Meta Ads campaign.",
                            },
                        ].map((item, i) => (
                            <div key={i}>
                                <Image src={item.img} alt="" width={200} height={120} />

                                <h3 className="text-xl font-semibold mt-4 mb-2">
                                    {item.title}
                                </h3>

                                <div className="w-full h-[1px] bg-gray-300 my-4"></div>

                                <p className="text-base text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </section>

                {/* ================= CONTENT INFO ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT TITLE */}
                        <div>
                            <h2 className="text-3xl md:text-5xl font-semibold">
                                Meta Advertisement
                            </h2>
                        </div>

                        {/* RIGHT TEXT */}
                        <div>
                            <p className="text-gray-600 text-base mb-4">
                              At Digital Xplode, we provide detailed analytics and transparent reporting to keep you informed about your campaign's performance. With our ongoing management and dedicated support, we ensure your Meta Ads campaigns remain fresh, effective, and aligned with your business goals. Trust Digital Xplode to enhance your digital advertising efforts and achieve exceptional ROI.
                            </p>

                            <a href="/portfolio" className="underline text-sm font-medium">
                                View Portfolio
                            </a>
                        </div>

                    </div>
                </section>

                {/* ================= FINAL SECTION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT */}
                        <div>
                            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                               Our creative team designs visually compelling ads that not only capture attention but also drive meaningful engagement
                            </h2>

                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                               At Digital Xplode, transparency and communication are key. We provide detailed analytics and comprehensive reporting, giving you clear insights into your campaign’s performance. From click-through rates to conversion metrics, we keep you informed about every crucial aspect of your Meta Ads campaigns.
                            </p>

                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                But our service doesn’t stop there. We believe in a hands-on approach to campaign management, offering ongoing support and adjustments to keep your ads fresh and aligned with evolving market trends. Our dedicated team is always ready to refine strategies and tactics to ensure sustained success.
                            </p>

                            <div className="flex gap-4">
                                <button className="border px-6 py-3 text-sm hover:bg-black hover:text-white transition">
                                    Start a Project
                                </button>

                                <button className="bg-black text-white px-6 py-3 text-sm hover:opacity-80 transition">
                                    Let's Talk
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/assets/social/meta-ads-6.jpg"
                                alt=""
                                width={500}
                                height={500}
                            />
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

                        <button className="border border-white px-6 py-3 flex items-center gap-2  hover:bg-white hover:text-black transtion">
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