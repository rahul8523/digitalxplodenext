"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [open, setOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "How does Social Media help businesses to Grow?",
            a: "Social media helps businesses grow by increasing brand visibility, enabling direct customer engagement, targeted marketing and advertising, driving website traffic and lead generation, building brand loyalty and advocacy, and providing a competitive advantage in the digital landscape. Digital Xplode, an SMO company in India, can assist businesses in harnessing the power of social media through expert strategies, content creation, soci al media management, targeted advertising, and data analytics, helping them achieve growth and maximise their online presence"
        },
        {
            q: "I have a B2B business. Do I also need to be active on social media?",
            a: "Definitely! Social media can be very useful for B2B companies to find new audiences, create brand awareness, build trust, share useful information, nurture leads, and drive sales. Get in touch with our Social Media Marketing Services in India today to find out how you can leverage social media for your business."
        },
        {
            q: "Which social media platform is right for my business?",
            a: "Depending on the nature of your business, your industry, company size, etc., different social media channels like Facebook, Instagram, Twitter, LinkedIn, and YouTube can be leveraged to market your products and services. Contact our ex perts from Social Media Marketing Services to help you decide which social media platform works best for your business."
        },
        {
            q: "Do you also do paid marketing on social media?",
            a: "Yes, as the leading SMO company in India, we offer paid marketing services on social media platforms. This includes implementing strategies like social media marketing to enhance our overall digital marketing efforts. Our approach involves leveraging various Social media marketing channels to establish and grow your brand while increasing website traffic to your pages."
        },
        {
            q: "Why do I need to boost posts on Facebook & Instagram?",
            a: "Boosting posts on Facebook and Instagram expands your content's reach, engages a wider audience, and promotes brand awareness effectively. It's a cost-effective way to maximise reach and visibility, attract new followers, drive website traffic, and generate leads."
        },
        {
            q: "How do you monitor performance of social media optimization?",
            a: "We deploy the most relevant metrics to track the performance of your social media optimization campaign. We use advanced analytical tools and techniques as part of our Social Media Marketing Services to measure and test the effectiveness of our SMO strategies and ensure that they are aligned with your overall objectives."
        },
    ];


    const offerings = [
        {
            title: "Digital Strategy & Planning",
            img: "/assets/social/traget.jpg",
            desc: "We design impactful social media campaigns with thoughtful digital strategies and precision planning to strengthen your brand.",
        },
        {
            title: "Digital Brand Positioning",
            img: "/assets/social/brand.jpg",
            desc: "We plot your strategic position in the digital space by defining the value proposition of your brand.",
        },
        {
            title: "Content Creation and Posting",
            img: "/assets/social/Content.jpg",
            desc: "We create impactful content through visuals, infographics, motion graphics and engaging tools.",
        },
        {
            title: "Campaign Management & Optimization",
            img: "/assets/social/Campaign.jpg",
            desc: "We use analytics tools to manage and monitor campaigns and optimize them accordingly.",
        },
        {
            title: "Influencer Marketing",
            img: "/assets/social/Influencer.jpg",
            desc: "We create marketing strategies using key influencers to drive your brand message.",
        },
        {
            title: "Analysis and Reporting",
            img: "/assets/social/analysis.jpg",
            desc: "We provide transparent analysis and reporting with easy-to-understand insights.",
        },
    ]


    return (

        <>
        
           <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Social Media Management (SMM) </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt;  Social Media Management (SMM)
                </p>
            </section>
        
   
        <main className="bg-white text-gray-900">

            {/* ================= HERO ================= */}
            <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-3xl md:text-4xl font-light leading-tight mb-6">
                            Grow your Brand through our Result-Focused Social Media Marketing & Management Services
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed">
                            We develop cost-effective strategies to generate awareness about your brand, build more engagement and get results to help you achieve your business goals through social media channels. Our strategies involve fashioning a brand image for you, revolving around your products and services, that will be instantly relatable to your target audience. This will help to demonstrate your ability to remain relevant to your audience amidst evolving trends and preferences, thus fostering a deeper relationship with them.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/assets/social/social.png"
                            alt="social"
                            width={400}
                            height={400}
                        />
                    </div>

                </div>
            </section>

            {/* ================= WHAT WE OFFER ================= */}
            <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-100">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold">What We Offer</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {offerings.map((item, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 p-8 rounded-md border border-gray-100 
        transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >

                            {/* ICON */}
                            <div className="mb-6">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>

                            {/* TITLE */}
                            <h3 className="font-medium text-2xl mb-3 leading-snug">
                                {item.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-base text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>
            </section>

            {/* ================= WHY US ================= */}
            <section className="py-16 px-4 md:px-10 lg:px-20">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-semibold">Why us</h2>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-gray-600">

                    <p className="border-l-2 pl-4 text-base">
                        An experienced team that always focuses on attaining the business goals of clients.
                    </p>

                    <p className="border-l-2 pl-4 text-base">
                        Our commitment to delivering top quality service aimed client satisfaction
                    </p>

                    <p className="border-l-2 pl-4 text-base">
                        Moderate pricing parameters, while ensuring our clients always get more than what they expected.
                    </p>

                    <p className="border-l-2 pl-4 text-base">
                        Content creators who have a knack for producing useful, engaging, and highly interactive content that helps foster strong relationships with the target audience.
                    </p>

                    <p className="border-l-2 pl-4 text-base">
                        Our ability to take necessary steps to measure both campaign-focused metrics as well as ongoing analytics to track and trace the overall performance of the campaigns.
                    </p>



                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-4xl text-center font-semibold mb-10">
                        Frequently Asked Questions
                    </h2>

                    {faqs.map((item, i) => (
                        <div key={i} className="border-b">

                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <span className="font-medium">{item.q}</span>
                                <span className="text-xl">{open === i ? "-" : "+"}</span>
                            </button>

                            {open === i && (
                                <p className="pb-4 text-base text-gray-600 leading-relaxed">
                                    {item.a}
                                </p>
                            )}

                        </div>
                    ))}

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