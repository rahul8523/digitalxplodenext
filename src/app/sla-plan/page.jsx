"use client";
import Image from "next/image";
import { title } from "node:process";


export default function SLAPlan() {

    const benefits = [

        {
            title: "Peace of Mind",
            desc: "Rest easy knowing that your website is in good hands with our team of experienced professionals",
        },
        {
            title: "Cost-Effective Solutions",
            desc: "Our $1/month SLA model offers an affordable way to access high-quality website support and maintenance services.",
        },
        {
            title: "Expert Support",
            desc: "Benefit from the expertise of our dedicated team, who are committed to helping you achieve your business goals.",
        },
        {
            title: "Focus on Core Business",
            desc: "Free up your time and resources to focus on what you do best, while we take care of your online presence.",
        },

    ]


    const howtowork = [
        {
            title: "Sign the $1/month SLA Agreement",
            desc: "Outline the terms and conditions of our partnership to ensure mutual understanding and agreement.",
        },
        {
            title: "Request Services",
            desc: "Reach out to us through our regular communication channels to request services or assistance.",
        },
        {
            title: "Priority Response",
            desc: "Our team will prioritize your requests and ensure they are completed within agreed timelines."
        },
        {
            title: "Cost Transparency",
            desc: "Any service costs beyond the $1/month SLA will be communicated and agreed upon before implementation"
        }

    ]

    const services = [
        {
            title: "Website Maintenance",
            desc: "From regular updates to security checks and performance optimization, we ensure your website is always at its best.",
        },
        {
            title: "Graphic Design",
            desc: "Our talented designers create eye-catching banners, logos, and social media graphics to enhance your brand identity.",
        },
        {
            title: "Content Updates",
            desc: "Keep your website fresh and engaging with regular content updates, including blog posts, product listings, and more.",
        },
        {
            title: "Technical Support",
            desc: "Our expert team is on hand to troubleshoot issues and provide technical assistance whenever you need it.",
        },
        {
            title: "SEO Optimization",
            desc: "Improve your search rankings and visibility with our advanced SEO strategies tailored to your business.",
        },
        {
            title: "Hosting",
            desc: "We take care of all your hosting needs, including file and database management, backup and restoration, and domain configuration.",
        },
        {
            title: "E-commerce Integration",
            desc: "Whether you're setting up a new online store or expanding your existing one, we provide seamless integration solutions tailored to your needs.",
        },
    ];


    return (
        <div className="bg-[#f5f5f5] text-black sm:px-0">

            {/* HEADER */}
            <div className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold">$1 SLA Plan</h1>
                <p className="mt-2 text-sm">Home &gt; SLA PLAN</p>
            </div>

            {/* HERO */}
            <section className="max-w-7xl mx-auto py-10 px-2">
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                    Empowering Businesses, $1/Month: Transform Your Website with Our Monthly SLA!
                </h1>

                <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
                    <p className="text-gray-800 leading-relaxed">
                        At Digital Xplode, we understand the critical role your online presence plays in the success of your business. That's why we're dedicated to offering comprehensive website maintenance and design services to ensure your website remains a powerful tool for growth and engagement.
                    </p>

                    <div className="flex justify-start md:justify-end">
                        <button className="bg-black text-white px-10 py-4 rounded-full flex items-center gap-2 hover:opacity-90">
                            → Get Started
                        </button>
                    </div>
                </div>

                <hr className="mt-16 border-gray-300" />

                {/* Commitment */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        Our Commitment to Excellence
                    </h2>
                    <p className="text-gray-800 leading-relaxed">
                        With our $1/month Service Level Agreement (SLA), we're revolutionizing the way businesses approach website support and maintenance. By subscribing for just $1/month, you gain access to a contractual agreement that guarantees priority response and assistance for all your website-related needs. Gone are the days of uncertainty and unpredictability – with Digital Xplode, you can rest assured knowing that your website is in capable hands.
                    </p>
                </div>
            </section>

            {/* SERVICES */}
            <section className="max-w-7xl mx-auto py-10 px-2">
                <h2 className="text-4xl md:text-5xl font-semibold text-center">
                    Comprehensive Service Offerings
                </h2>
                <p className="text-center text-gray-500 mt-3">
                    Our suite of services encompasses everything you need to keep your website running smoothly and effectively
                </p>

                <div className="grid md:grid-cols-4 gap-0 mt-16 border-t border-gray-300">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className="p-4 sm:p-8 border-b md:border-r border-gray-300"
                        >
                            <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                            <p className="text-gray-800 text-base ">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENEFITS */}
            <section className="max-w-7xl mx-auto py-10 px-2">
                <h2 className="text-4xl md:text-5xl font-semibold text-center">
                    Benefits of Choosing Us
                </h2>

                <div className="grid md:grid-cols-4 mt-16 border-t border-gray-300">

                    {benefits.map((item, i) => (
                        <div
                            key={i}
                            className="p-4 sm:p-8 border-b md:border-r border-gray-300"
                        >
                            <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                            <p className="text-gray-800 text-base ">{item.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="max-w-7xl mx-auto py-10 px-2 grid md:grid-cols-2 gap-30">

                <div>
                    <h2 className="text-9xl font-semibold">
                        How It Works
                    </h2>
                    <p className="mt-4 text-gray-800 sm:text-2xl">
                        Getting started with Digital Xplode is easy:
                    </p>
                    <img src="assets/site-plan/leftarrow.png" className="w-full" />
                </div>

                <div className="grid sm:grid-cols-2 border border-gray-300">

                    {howtowork.map((item, i) => (
                        <div
                            key={i}
                            className="p-4 sm:p-8 border-b md:border-r border-gray-300"
                        >
                            <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                            <p className="text-gray-800 text-base ">{item.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* PRICING */}
            <section className="max-w-7xl mx-auto py-10 px-2">

                <div className="w-full text-center ">
                    <h2 className="text-5xl font-semibold mb-4 ">Cost of Work</h2>
                    <p className="text-gray-800 mb-4">We believe in transparent pricing, which is why we offer competitive rates for our services</p>
                </div>


                <div className="grid md:grid-cols-2 gap-10">

                    <div className="pt-4">
                        <p className="text-gray-800 mb-3 text-2xl">Execution Cost</p>
                        <h3 className="text-7xl font-bold">$12/hour</h3>

                        <p className="text-gray-800 mt-10 text-2xl">Pre-Book Hours</p>
                        <p className="mb-8">Reduce your costs by pre-booking hours at</p>
                        <h3 className="text-7xl font-bold py-3">$9/hour</h3>
                        <p className="text-gray-800 leading-relaxed">
                       with lifetime validity
                    </p>
                    </div>
                    
                    <div className="pt-4">
                        <p className="text-gray-800">At Digital Xplode, we're committed to supporting your online success and helping you achieve your business goals. With our $1/month SLA model, you can trust us to provide reliable, high-quality website maintenance and design services at an affordable price.</p>
                          <br/>
                        <p className="text-gray-800">Ready to take your website to the next level? Partner with Digital Xplode today and experience the difference for yourself.</p>
                      <p className="text-gray-800 text-2xl mt-5 leading-relaxed">
                       Contact us at support@digitalxplode.com or call +1 (832) 802-4342 to get started. We look forward to working with you!
                    </p>
                      <button className="mt-8 bg-black text-white px-8 py-4 rounded-full">
                        → Subscribe $1 SLA Now
                    </button>
                   
                    </div>
              
                </div>

            </section>

            {/* CTA */}
            <section className="bg-black text-white py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <h2 className="text-2xl md:text-3xl">
                        Let our amazing team help you in media services.
                    </h2>

                    <button className="mt-6 md:mt-0 border border-white px-6 py-3 rounded-full">
                        Start a project →
                    </button>
                </div>
            </section>

            {/* LOGOS */}
            <section className="bg-white py-10">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 opacity-70">
                    <img src="assets/partners/client-1.png" className="h-13" />
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