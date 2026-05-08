"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {

    const portfolio = [
        {
            title: "Delhi Public School",
            category: "Search Engine Optimisation",
            image: "/assets/portfolio/arena.webp",
        },
        {
            title: "Delhi Public School",
            category: "Search Engine Optimisation",
            image: "/assets/portfolio/alstone.webp",
        },
        {
            title: "Delhi Public School",
            category: "Search Engine Optimisation",
            image: "/assets/portfolio/sbl.webp",
        },
    ];


    return (
        <>
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold">Web Design & Development</h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Web Design & Development
                </p>
            </section>


            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

                        {/* LEFT */}
                        <div>
                            <h1 className="text-3xl md:text-5xl font-semibold mb-6">
                                Web Design & Development
                            </h1>

                            <h2 className="text-xl md:text-4xl font-light mb-6 leading-snug">
                                Create and control your web identity with an enviable website.
                            </h2>

                            <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                Your website is the first impression of your company and speaks volumes
                                about your work, not just in terms of the information that it
                                carries but more importantly through the experience it
                                gives to website visitors. While getting a website
                                designed & developed, you need a partner with an
                                industry specific approach and creative zeal.
                            </p>

                            <p className="text-gray-600 text-base mb-6 leading-relaxed">
                                Digital Xplode, a leading Web Design and Development Company,
                                is where your search will end and you will walk out with a
                                modern website that gives you a leading edge in the industry.
                            </p>

                            <div className="flex gap-4">
                                <button className="border border-gray-400 px-6 py-3 text-sm 
  hover:bg-black hover:text-white hover:border-black 
  transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                    Start A Project
                                </button>
                                <button className="bg-black text-white px-6 py-3 text-sm 
  transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                    Let's Talk
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGES */}
                        <div className="space-y-4">
                            <Image src="/assets/web-design/web-design.png" alt="" width={500} height={300} className="w-full" />
                        </div>

                    </div>
                </section>

                {/* Portfolio */}

                <section className="bg-[#ebebeb] py-10 px-6 md:px-16">
                    {/* GRID */}
                    <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto">

                        {portfolio.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >

                                {/* IMAGE CARD */}
                                <div className="overflow-hidden">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={500}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                </div>

                                {/* TEXT */}
                                <div className="mt-4">

                                    <p className="text-gray-400 text-sm mb-1">
                                        {item.category}
                                    </p>

                                    <h3 className="text-lg text-black font-semibold">
                                        {item.title}
                                    </h3>

                                </div>

                            </motion.div>

                        ))}

                    </div>
                </section>

                {/* ================= SERVICES ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto space-y-20">

                        {/* Web Design */}
                        <div className="grid md:grid-cols-2 gap-10 mb-10">
                            <h2 className="text-3xl md:text-5xl font-semibold">
                                Web Design <br /> & Development
                            </h2>

                            <div>
                                <p className="text-gray-600 text-base leading-relaxed mb-6">
                                    We design and develop customized website keeping in mind the specific requirements of our customers and establish their unique brand identity. Through uniquely designed pages, carefully selected images compelling content on every pages, and intuitive navigation we provide an immersive experience for users.
                                </p>

                                <Link href="/portfolio" className="underline text-base">
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                        {/* Bottom Border */}
                        <div className="border-t border-gray-300 mt-5 mb-5"></div>
                        {/* Wordpress */}
                        <div className="grid md:grid-cols-2 gap-10 mb-10">
                            <h2 className="text-3xl md:text-5xl font-semibold">
                                Wordpress <br /> Development
                            </h2>

                            <div>
                                <p className="text-gray-600 text-base leading-relaxed mb-6">
                                    Our team of highly skilled developers have the ability to select the most appropriate WordPress templates for your business or can do the custom design and integrate it with WordPress to build websites which are fast, secure and deliver unbeatable performance.
                                </p>

                                <Link href="/portfolio" className="underline text-base">
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                        {/* Bottom Border */}
                        <div className="border-t border-gray-300 mt-5 mb-0"></div>
                        {/* Ecommerce */}
                        <div className="grid md:grid-cols-2 gap-10 mb-10">
                            <h2 className="text-3xl md:text-5xl font-semibold">
                                Ecommerce <br /> Development
                            </h2>

                            <div>
                                <p className="text-gray-600 text-base leading-relaxed mb-6">
                                    We provide the most appropriate ecommerce solutions for your business. From design and selection of right development platform i.e. Custom, Magento, WooCommerce, or Shopify to other services, we are the one-stop-shop for all your ecommerce requirements.
                                </p>

                                <Link href="/portfolio" className="underline text-base">
                                    View Portfolio
                                </Link>
                            </div>
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

                {/* ================= TECH STACK ================= */}
                <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

                        <div>
                            <h2 className="text-3xl md:text-6xl font-bold mb-4">
                                TECHNOLOGY
                            </h2>

                            <div className="text-4xl bg-black text-white inline-block px-3 py-1 mb-2">
                                to bring you
                            </div>
                            <br />
                            <div className="text-4xl bg-black text-white inline-block px-3 py-1">
                                high end solutions
                            </div>
                        </div>

                        <div>
                            <h4 className="text-gray-900 text-2xl mb-4">
                                Using advanced technology to bring you high end solutions in new media, web and e-learning
                            </h4>

                            <p className="text-gray-600 text-base leading-relaxed">
                                At Xplode we believe in walking at pace with the growing technology and that is how we deliver results beyond expectations.
                            </p>
                        </div>

                    </div>

                    {/* LOGOS */}
                    <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-6 gap-6 text-center text-sm">
                        {["HTML5", "React", "AngularJS", "jQuery", "Node", "PHP", "SQL", "WooCommerce", "Shopify", "MySQL", "Magento", "OpenCart", "OpenCart", "Joomla", "Laravel", "Flutter", "Wix", "WordPress", "Python", "Ruby", "Microsoft.NET"].map((tech, i) => (
                            <div key={i} className="border p-0 bg-white">
                                <img
                                    src={`/assets/web-design/${tech.toLowerCase()}.jpg`}
                                    alt={`${tech} logo`}
                                    className="mx-auto h-25 w-auto object-contain"
                                />
                            </div>
                        ))}
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