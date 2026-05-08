"use client";

import Image from "next/image";

export default function Page() {
    return (

        <>

            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Content Marketing </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt;  Content Marketing
                </p>
            </section>


            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}
                <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT */}
                        <div>
                            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                                Unlock Your Brand's Potential with Expert Content Marketing Services
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                                In the digital age, content is king. At Digital Xplode, we understand the power of compelling content in driving engagement, building trust, and growing your business. Our comprehensive content marketing services are designed to create valuable, relevant, and consistent content that attracts and retains a clearly defined audience.
                            </p>

                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                With our expertise, we help you navigate the complexities of the digital landscape and establish a robust online presence.
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
                                src="/assets/social/main.jpg"
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
                                title: "Content Creation",
                                img: "/assets/social/content-creation.jpg",
                                desc: "Our skilled writers and content creators are dedicated to producing high-quality content that engages and inspires your audience. From insightful blog posts and informative articles to visually appealing infographics, captivating videos, and engaging social media posts, we create a diverse range of content that drives engagement and encourages sharing. Each piece is carefully crafted to reflect your brand’s voice and message, ensuring consistency and authenticity across all platforms.",
                            },
                            {
                                title: "SEO Optimization",
                                img: "/assets/social/seo.jpg",
                                desc: "In today’s digital landscape, visibility is key. To ensure your content reaches a wider audience, we incorporate SEO best practices into every piece we create. By targeting relevant keywords and optimizing for search engines, we help your content rank higher and attract organic traffic. Our SEO specialists continuously monitor and adjust strategies to stay ahead of algorithm changes, ensuring your content remains competitive and effective.",
                            },
                            {
                                title: "Audience Engagement",
                                img: "/assets/social/audience-engagement.jpg",
                                desc: "Building a loyal audience requires more than just producing content; it requires genuine engagement. We help you build and nurture relationships with your audience through consistent and meaningful interactions. By responding to comments, encouraging discussions, and fostering a sense of community, we keep your audience connected and engaged. This ongoing dialogue not only strengthens your brand’s relationship with its audience but also provides valuable insights into their needs and preferences.",
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
                                Content Marketing
                            </h2>
                        </div>

                        {/* RIGHT TEXT */}
                        <div>
                            <p className="text-gray-600 text-base mb-4">
                                Our comprehensive content marketing services are meticulously designed to create valuable, relevant, and consistent content that attracts and retains a clearly defined audience. With our expertise, we help you navigate the complexities of the digital landscape and establish a robust online presence.
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
                                We are committed to producing high-quality content that adds value to your audience and sets you apart from the competition.
                            </h2>

                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                                Creating great content is just the beginning. To maximize its reach and impact, we strategically distribute your content across various channels, including your website, social media, email newsletters, and more. Our comprehensive distribution plan ensures that your content reaches your target audience at the right time and place, driving higher engagement and conversions.
                            </p>

                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                To measure the success of your content marketing efforts, we provide detailed analytics and performance reports. From tracking website traffic and engagement metrics to analyzing conversion rates and user behavior, we give you clear insights into how your content is performing and where there’s room for improvement.
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
                                src="/assets/social/content-marketing.jpg"
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