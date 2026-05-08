"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
                <h1 className="text-4xl font-bold">SEO(Search Engine Optimisation)</h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt;  SEO(Search Engine Optimisation)
                </p>
            </section>

            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        <Image
                            src="/assets/seo/mac-book.png"
                            alt=""
                            width={600}
                            height={400}
                            className="w-full"
                        />

                        <div>
                            <p className="text-gray-600 text-base mb-4">
                                In today's digital age, having a strong online presence is essential for businesses of all sizes. Search Engine Optimization (SEO) plays a crucial role in ensuring that your website ranks high on search engine results pages (SERPs). If you're looking to increase your visibility, drive organic traffic, and ultimately boost your business, you've come to the right place.
                            </p>
                            <p className="text-gray-600 text-base">
                                At Digital Xplode, we offer top-notch SEO services tailored to the unique needs of businesses. With a team of experienced SEO experts, we have a proven track record of helping our clients achieve higher search engine rankings and drive more qualified leads to their websites.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= SERVICES TEXT ================= */}
                <section className="py-10 px-4 text-center">
                    <p className="max-w-4xl mx-auto text-2xl text-gray-900">
                        Our search engine optimization core services include: Organic Search, On-Page SEO, Link Building, Keyword Research / Strategy and Activity Report.
                    </p>
                </section>

                {/* ================= 3 SERVICES ================= */}
                <section className="py-14 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

                        {/* Item 1 */}
                        <div className="flex items-start gap-4">
                            <div className="text-3xl mt-1"><Image src="/assets/seo/search.png" width={200} height={40} alt="" /></div>
                            <div>
                                <h3 className="text-2xl font-light mb-2">
                                    Organic Search
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Development and targeted promotion of remarkable content that fulfills your needs by achieving, improving and maintaining the visibility of your web presence.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-4">
                            <div className="text-3xl mt-1"><Image src="/assets/seo/onpage.png" width={200} height={40} alt="" /></div>
                            <div>
                                <h3 className="text-2xl font-light mb-2">
                                    On-Page SEO
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Make your content easily accessible to search engines. Our team is ready to implement solutions to boost your rankings and improve your performance.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-start gap-4">
                            <div className="text-3xl mt-1"><Image src="/assets/seo/share-2.png" width={200} height={40} alt="" /></div>
                            <div>
                                <h3 className="text-2xl font-light mb-2 uppercase">
                                    Organic Search
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    An essential part of any successful SEO strategy, let’s build your internal link profile to add significance to your page keywords listed within search engines.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ================= TEXT BLOCK ================= */}
                <section className="py-10 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 text-sm text-gray-600">

                        <p className="text-lg text-gray-600">

                            Search Engine Optimization is fundamental to success. Our SEO strategies will earn your site a higher ranking in search results. We’ll provide a full SEO keyword rankings report, a link building profile report and indexed page information. Our customer focused team will improve your traffic flow and increase sales for your web-based operations.
                        </p>

                        <p className="text-lg text-gray-600">

                            SEO is the lifeline of online marketing. We offer our valued clients a high quality and affordable package. Leave the rest up to us as our experts are trained on the latest guidelines from all major search engines such as Google, Bing, Yandex and Yahoo.
                        </p>
                    </div>
                </section>

                {/* ================= STATS ================= */}
                <section className="py-14 border-t">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                        {[
                            { value: 83, label: "Organic Traffic - Increase" },
                            { value: 52, label: "Bounce Rate - Decrease" },
                            { value: 38, label: "Average Visit Duration - Increase" },
                            { value: 27, label: "Pages Per Session - Increase" },
                        ].map((item, i) => {
                            const radius = 65;
                            const circumference = 2 * Math.PI * radius;
                            const offset = circumference - (item.value / 100) * circumference;

                            return (
                                <div key={i} className="flex flex-col items-center">

                                    <div className="relative w-40 h-40">
                                        <svg className="w-full h-full transform -rotate-90">

                                            {/* Background Circle */}
                                            <circle
                                                cx="80"
                                                cy="80"
                                                r={radius}
                                                stroke="#e5e5e5"
                                                strokeWidth="6"
                                                fill="transparent"
                                            />

                                            {/* Progress Circle */}
                                            <circle
                                                cx="80"
                                                cy="80"
                                                r={radius}
                                                stroke="black"
                                                strokeWidth="6"
                                                fill="transparent"
                                                strokeDasharray={circumference}
                                                strokeDashoffset={offset}
                                                strokeLinecap="round"
                                            />
                                        </svg>

                                        {/* Center Text */}
                                        <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                                            {item.value}%
                                        </div>
                                    </div>

                                    {/* Label */}
                                    <p className="text-base mt-3 text-gray-900 max-w-full">
                                        {item.label}
                                    </p>

                                </div>
                            );
                        })}

                    </div>
                </section>

                {/* ================= FEATURES ================= */}

                <section className="py-14 px-4 md:px-10 lg:px-20 border-t">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                        {/* Item 1 */}
                        <div className="flex items-start gap-6">

                            {/* Icon */}
                            <Image
                                src="/assets/seo/Keyword.png"
                                alt="keyword"
                                width={100}
                                height={100}
                                className="opacity-70"
                            />

                            {/* Content */}
                            <div>
                                <h3 className="font-semibold text-2xl md:text-3xl mb-3">
                                    Keyword Research / Strategy
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    One of the most important SEO elements is the target keywords. Let our
                                    team determine the best strategy for all your link building activities
                                    to increase your search engine ranking and organic traffic.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-6">

                            {/* Icon */}
                            <Image
                                src="/assets/seo/Reports.png"
                                alt="report"
                                width={100}
                                height={100}
                                className="opacity-70"
                            />

                            {/* Content */}
                            <div>
                                <h3 className="font-semibold text-2xl md:text-3xl mb-3">
                                    Activity Reports
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We provide a detailed report of your website SEO performance evaluation,
                                    as well as data about your traffic, top referring keywords and a full
                                    explanation of your search engine activity.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ================= PRICING ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 text-center">

                    <p className="text-blue-600 text-sm mb-2">SEO PACKAGES</p>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-12">
                        Take the 1st Step
                    </h2>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-left">

                        {/* Beginner */}
                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">SEO Beginner</h3>
                            <p className="text-base text-gray-600 mb-4">
                                Everything you need to gain rankings on Google and increase revenue. Take that first step in online success.
                            </p>

                            <p className="text-xl font-bold mb-4">$149/month</p>

                            <p className="font-semibold mb-2 text-base">This includes:</p>
                            <ul className="text-base text-gray-600 space-y-2">
                                <li>10 keywords</li>
                                <li>Keyword Research</li>
                                <li>Website Tune Up</li>
                                <li>Google analytics installation and monitoring</li>
                                <li>Keyword Rank Tracking</li>
                                <li> Email, Phone and Text support from owner</li>
                                <li>Webmaster Tool Monitoring</li>
                                <li>Month to Month agreement</li>
                            </ul>
                        </div>

                        {/* Associate (Highlighted) */}
                        <div className="p-6 border bg-[#f3f3f3] rounded-xl shadow-sm relative">

                            {/* Badge */}
                            <span className="absolute top-4 left-4 bg-gray-200 text-xs px-3 py-1 rounded">
                                Most popular
                            </span>

                            <h3 className="font-semibold text-lg mb-2 mt-6">SEO Associate</h3>

                            <p className="text-base text-gray-600 mb-4">
                                Everything you need to gain rankings on Google and increase revenue. Take that first step in online success.
                            </p>

                            <p className="text-xl font-bold mb-4">$299/month</p>

                            <p className="font-semibold mb-2 text-base">This includes:</p>
                            <ul className="text-base text-gray-600 space-y-2">
                                <li>Everything from the Beginer Package</li>
                                <li>Full Competitor Analysis</li>
                                <li>By request website edits</li>
                                <li>Agressive linking building</li>
                                <li>Email, Phone and Text communication after hours</li>
                                <li>Month to Month Agreement</li>
                            </ul>
                        </div>

                        {/* Executive */}
                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">SEO Executive</h3>

                            <p className="text-base text-gray-600 mb-4">
                                Everything you need to gain rankings on Google and increase revenue. Take that first step in online success.
                            </p>

                            <p className="text-xl font-bold mb-4">$499/month</p>

                            <p className="font-semibold mb-2 text-base  ">This includes:</p>
                            <ul className="text-base text-gray-600 space-y-2">
                                <li>Everything from the Beginner and Associate Package</li>
                                <li>Monthly keyword rankings reporting</li>
                                <li>Google analytics reporting</li>
                                <li>Monthly Google analytics reporting</li>
                                <li>Blog and content creation assistance</li>
                                <li>Month to Month Agreement</li>
                            </ul>
                        </div>

                    </div>

                </section>

                {/* ================= CASE STUDIES ================= */}

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

                {/* ================= CONTACT ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

                        <div>
                            <h2 className="text-3xl font-semibold mb-2">
                                See How Well Your Page is Optimized
                            </h2>
                            <p className="text-2xl text-gray-900 mb-2">
                                Let us help you get your business online and grow it with passion.
                            </p>
                            <p className="text-base text-gray-900">
                                Our team of professional SEO experts is the perfect partner for a successful business partnership.
                            </p>
                        </div>

                        <form className="grid grid-cols-2 gap-4">
                            <input className="border p-2 rounded" placeholder="Website URL" />
                            <input className="border p-2 rounded" placeholder="Name" />
                            <input className="border p-2 rounded" placeholder="Email" />
                            <input className="border p-2 rounded" placeholder="Phone" />
                            <textarea className="col-span-2 border p-2 rounded" placeholder="Detail"></textarea>

                            <button className="col-span-2 bg-black text-white py-2 rounded">
                                Submit
                            </button>
                        </form>

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