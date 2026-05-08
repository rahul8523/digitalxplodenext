"use client";

import Image from "next/image";

export default function Page() {
    return (

        <>
        
           <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Google Adwords Management Company </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Google Adwords Management Company
                </p>
            </section>
            
        
        <main className="bg-white text-gray-900">

            {/* ================= HERO ================= */}
            <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
                            HOW WE OFFER THE BEST PPC AD CAMPAIGN?
                        </h1>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The team of Digital Xplode carefully and strategically drafts every PPC Ad campaign keeping in mind the dire requirement of the clients. To make every Ad campaign successful and worth investing, our experts magnificently research day in and day out to get the relevant data in order to understand the algorithm. Then, our programmer-analyst diverts or bring relevant & potential customers based on their search behavior to your ad that land to your digital product display on website. We not only ensure enough engagement on your website through our PPC Services but also create brand-recall value. Brand promotion and sales can be triggered together resulting in remarkable ROI.
                        </p>
                    </div>

                    <div>
                        <Image
                            src="/assets/social/google-adword.jpg"
                            alt="PPC"
                            width={500}
                            height={400}
                        />
                    </div>

                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-16 px-4 md:px-10 lg:px-20">
                <div className="text-center mb-16">
                    <p className="text-lg text-gray-500">
                        We believe in results and we convert it as well!
                    </p>
                    <h2 className="text-5xl font-semibold">
                        Our Services Includes
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

                    {[
                        { title: "Search Advertising", icon: "/assets/social/seacrcgh.png", desc: "Search Advertising Services also called as Google advertising helps in placing your online advertisement on the web pages whenever the search query is made relevant to your business. Search Advertising Services gives you high ROI and fast results. Our team efficiently work in making the cost-effective Search Ad Campaign for the clients with complete success rate." },

                        { title: "Banner Advertising", icon: "/assets/social/banners.png", desc: "Have you ever came across on the most appealing visual graphics that compelled you to click on it? That is where the Banner or Display Ads comes. Banner Ad is the most popular form of advertising over the web. Our Banner Advertising services hold the power of generating needs of that displayed product leading the potential buyer to your website. Our experts make sure that use of text & image used in the ad are intriguing enough to get a click on it." },

                        { title: "Mobile Advertising", icon: "/assets/social/mobile-advertising.png", desc: "With the increasing usage of smartphones, Mobile Advertising has witnessed a mounting growth over the years. Mobile Advertising is an effective advertising method that targets the wider audience enhancing the reach and visibility. Our team understands the Mobile usage behaviour and pattern of the customer so to get the best results. Hence, choose pay per click advertising to get an edge." },

                        { title: "Remarketing Advertising", icon: "/assets/social/google-adverting.png", desc: "Ever wondered why a similar ad is following you wherever you go on the net? Like a strong telecom network of your smart phone? The magic of AI when it comes to creativity, ensures an increase in your presence. Our experts ensures that your budget is well-utilized affecting the buying behavior of the customer. Report says that remarketing is capable of increasing sale by 50-60% hence makes Re-marketing an unavoidable digital practice to be used- A must to have pay per click advertising." },

                        { title: "Google Shopping Ads", icon: "/assets/social/remarketing.png", desc: "These are the Shopping Ads also called PLA Ads which you see on your screen displaying with market price. This is a smarter way to list your product to promote your service or goods directly. Being the google adwords agency, our team uses their core expertise in placing the right ad while the searches are registered on search-engines. Google Reports confirm that PLA provide 26%-30% higher conversion rate than that of text-based ad. Hence, the Google Ads can be cost effective when used with due diligence." },

                    ].map((item, i) => (
                        <div key={i}>
                            <Image src={item.icon} alt="" width={80} height={80} />

                            <h3 className="font-semibold text-2xl mt-4 mb-2">
                                {item.title}
                            </h3>

                            <div className="w-full h-[1px] bg-gray-300 my-4"></div>

                            <p className="text-base text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20 text-center">
                <h2 className="text-5xl font-semibold mb-10">Our Stats</h2>

                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

                    {[
                        { num: "3+", label: "Years of Experience" },
                        { num: "32", label: "Professional Experts" },
                        { num: "556", label: "Successful Projects" },
                        { num: "189", label: "Satisfied Customers" },
                    ].map((stat, i) => (
                        <div key={i} className="border-r last:border-none">
                            <h3 className="text-5xl font-bold">{stat.num}</h3>
                            <p className="text-lg text-gray-600 mt-2 uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-16 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h2 className="text-3xl font-semibold mb-4">
                            Pick The Best, Pick PPC!
                        </h2>

                        <p className="text-gray-600 text-base mb-6">
                            Pay-Per-click advertising is an effective online advertising tactic that gives an instant speed to online businesses. Through PPC advertising campaign and PPC Services, online businesses gains higher visibility on search engines and attracts the target customers hence creating an instant impact. Approximately, 50% Visitors tend to make purchase through PPC Ad.
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

                    <div>
                        <Image
                            src="/assets/social/7169.jpg"
                            alt=""
                            width={500}
                            height={350}
                        />
                    </div>

                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="bg-gray-50 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-center">

                    {[
                        { title: "Bid management", icon: "/assets/social/laensess.jpg" },
                        { title: "Industry analysis", icon: "/assets/social/research.webp" },
                        { title: "Customer targeting", icon: "/assets/social/target-icon.webp" },
                        { title: "Keyword optimization", icon: "/assets/social/keywordh-removebg-preview.png" },
                        { title: "Ad copywriting", icon: "/assets/social/pencil.jpg" },
                        { title: "Ad testing", icon: "/assets/social/testing-removebg-preview.png" },
                        { title: "Ad tracking", icon: "/assets/social/ad-tracking-removebg-preview.png" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center w-1/2 sm:w-1/3 md:w-[14%] py-6 relative"
                        >

                            {/* Divider Line */}
                            {i !== 6 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gray-300"></div>
                            )}

                            {/* Icon */}
                            <img
                                src={item.icon}
                                alt=""
                                className="w-15 h-15 object-contain mb-3"
                            />

                            {/* Text */}
                            <p className="text-lg font-medium text-gray-800 leading-snug">
                                {item.title}
                            </p>

                        </div>
                    ))}

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