"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {

    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        {
            title: "Why Should You Choose Our Google Ads Agency in Noida?",
            desc: "Digital Xplode: the results-oriented Google Ads Agency in Noida specializes in helping businesses thrive online through focused ad campaigns. We personalize each plan to your requirements, assuring more visibility and greater returns on investment. Whether you're new to digital advertising or want to enhance your results, our team can provide effective, high-performance Google Ads solutions to help your business grow."
        },
        {
            title: "How Does Google AdWords Help My Business?",
            desc: "Google Adwords allows your business to appear at the top of search results when potential buyers actively seek products or services similar to yours. Our Google Adwords Company guarantees that your ad is optimized to target audience, resulting in increased traffic to your website and generating hefty revenues. Our main objective is to generate proven results, guaranteeing that your campaigns generate more leads and conversions at a reasonable cost."
        },
        {
            title: "What sets us apart as a Google Adwords Management Agency?",
            desc: "Our Google Adwords Management Agency is committed to help businesses in promoting their advertising spend. We offer comprehensive management, including keyword research, campaign setup, optimization, and performance tracking. Digital Xplode: the well-known Google Adwords Management Company, primarily focuses on producing visible results, guaranteeing that your campaigns generate more leads and conversions at a lesser cost."
        },
        {
            title: "Why Should I Hire a PPC Management Company in Noida?",
            desc: "Working with a PPC Management Company in Noida guarantees that your Google Ads are managed effectively, which leads to greater results. We specialize in providing tailored, data-driven PPC Services that reach the correct audience and convert clicks into sales. This Google Ads Agency helps your business get more out of your ad expenditure by providing professional management and constant optimisation."
        },
        {
            title: "How Can PPC Services Help My Business Improve Its Online Presence?",
            desc: "PPC Management Company assists your company get in front of the right audience effectively. Our team creates successful PPC campaigns to increase traffic to your website and generate leads. By targeting precise keywords and providing detailed reports, we ensure that your advertising is noticed by potential customers, increasing your online exposure and results."
        }
    ];


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
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <Image
                            src="/assets/google-ads/hero.jpg"
                            alt="PPC"
                            width={600}
                            height={450}
                            className="rounded-xl"
                        />

                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
                                Maximizing Your Digital Presence: Why Choosing the Best Google Ads Agency in Noida Matters
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                                Google Ads is very important in the competitive environment of the digital marketing to improve results of your business’s online presence and revenue. But to avoid these pitfalls, one needs to grasp the layers of Google AdWords, which can be difficult for many businesses to do internally. This is where are getting the help of a competent Google Ads agency and PPC Management Company becomes important. Especially in Noida which is a hotbed for technology, it becomes quite challenging to wade through all the Google Ads agencies and choose the right one for your specific business goals. Reading this article, you will get to know why it is crucial to choose the best Google Ads agency in Noida.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                Understanding the Role of a Google Ads Agency:
                            </h3>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Google Ads agency agency deals with the administration and maximizing the use of pay-per-click advertising on Google commonly referred to as Google Ads or Google AdWords. Their main objective is to unlock corporate potential in e-commerce by attracting the relevant audience to the website and converting this traffic into revenue.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= WHY LOCATION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Why Location Matters: Advantages of Hiring a Google Ads Agency for Your Business in Noida.
                        </h2>

                        <p className="text-gray-600 text-base mb-10">
                            Greater Noida being one of the most active business hubs has certain definite qualities which provides edge while opting for digital marketing services including Google Ads management, PPC Services. Here’s why choosing a local agency can be beneficial:
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">

                            {[
                                {
                                    img: "/assets/google-ads/1.jpg",
                                    title: "1. Local Market Knowledge",
                                    desc: "An agency such as Google Ads agency in Noida is likely going to have a better understanding of the local market and consumer characteristics than, for instance, an agency situated in Delhi or Mumbai. This insight is very useful when determining a localized strategy for the PPC campaign to capture the audience’s attention."
                                },
                                {
                                    img: "/assets/google-ads/2.jpg",
                                    title: "2. Accessibility and Communication",
                                    desc: "This makes it easier to communicate and get access to other resources, materials and colleagues. Actual meetings are always more productive and useful to discuss your marketing objectives and make sure that it is in harmony with the actions undertaken by the agency."
                                },
                                {
                                    img: "/assets/google-ads/3.jpg",
                                    title: "3. Cultural Understanding",
                                    desc: "This aspect gives the agency an advantage as it is aware of the cultural preferences of the people in Noida. Such understanding can be used in the following ways to ensure that the ads placed achieve the intended goal – culturally sensitive and relevant ad campaigns."
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">

                                    <Image
                                        src={item.img}
                                        alt=""
                                        width={400}
                                        height={250}
                                        className="w-full h-[200px] object-cover"
                                    />

                                    <div className="p-5">
                                        <h3 className="font-semibold mb-2 text-xl">{item.title}</h3>
                                        <p className="text-base text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* ================= KEY FACTORS ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-3xl font-semibold mb-6">
                            Key Factors to Consider When Choosing a Google Ads Agency
                        </h2>

                        <p className="text-gray-600 text-base mb-10">
                            Selecting the best Google Ads agency in Noida involves evaluating several key factors to ensure they align with your business objectives and expectations:


                        </p>

                        <div className="grid md:grid-cols-2 gap-10">

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-xl">1. Expertise in Google Ads:</h3>
                                    <p className="text-gray-600 text-base">
                                        Choose agencies that have experience in handling effective Google Ads solutions for businesses. They should have certified Google Ads experts who immerse themselves in trending features and techniques.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl">3. Transparent Reporting:</h3>
                                    <p className="text-gray-600 text-base">
                                        Make sure the agency offers clear documentation to monitor the effectiveness of your campaigns and also disclosures. Metrics and insights help in realizing ROI and make overall decisions much precise.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl">5. Client References and Reviews:</h3>
                                    <p className="text-gray-600 text-base">
                                        Go to the agency’s website or read clients’ testimonials on other platforms to obtain information concerning the agency’s credibility, customer care, as well as satisfaction among previous or existing clients.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg">2. Portfolio and Case Studies:</h3>
                                    <p className="text-gray-600 text-base">
                                        You can also find how widely they have worked through reviewing their portfolio and the case studies they have provided. This shows that they are capable of showing performance and modifying an approach if that is what a client requires.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">4. Customized Strategy:</h3>
                                    <p className="text-gray-600 text-base">
                                        good Google AdWords management agency will create an efficient campaign plan based on your business objectives, cost constraints and consumer profile. Stay away from agencies that give nonsensical solutions that cannot meet your needs or goals.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* ================= BENEFITS ================= */}
                <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-3xl font-semibold mb-10">
                            Advantages of Hiring a Google AdWords Management Services
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

                            {[
                                {
                                    title: "Optimized Campaign Performance",
                                    desc: "Professional agencies rely on complex techniques to refine your PPC promotion permanently. This entails determining relevant keywords, headlines or ad texts, bidding amounts, and testing copy to get the highest CTR and conversion."
                                },
                                {
                                    title: "Cost Efficiency",
                                    desc: "Campaign management enables one to get maximum value for the money spent in the campaign with emphasis on the goals as set. Different agencies can better realize that some money is wasted, and redirect this money into better channels for enhancing ROI."
                                },

                                {
                                    title: "Access to Advanced Tools and Insights",
                                    desc: "Google Ads agencies can leverage better analytics tools and trends that help to identify main KPIs and determine competitors’ activity. This allows for early corrective action to increase the prospects or chance of success."
                                },

                                {
                                    title: "Focus on Core Business Activities",
                                    desc: "Outsourcing Google Ads management allows your team to focus on core business activities without the distraction of managing complex PPC campaigns. This enhances productivity and efficiency across your organization."
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="font-semibold text-xl mb-2">
                                        {i + 1}. {item.title}
                                    </h3>
                                    <p className="text-base text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* ================= CONCLUSION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-3xl font-semibold mb-10">Conclusion:</h2>

                        <p className="text-gray-600 text-base leading-relaxed">
                            Selecting the right Google Adwords Company in Noida is a critical decision that will determine the level of success in marketing. Through a partnership with the agency like DigitalXplode, you get leverage in terms of experience, tools, and intelligence to see improved performance and business growth. Whether the primary aim is to drive more traffic to the website, generate high-quality leads, or achieve higher online sales, a specialized Google AdWords management agency is capable of creating solutions that will be most efficient for the intended goals. Spend some of your time working on researching various agencies depending on their experience, expertise, and comments from other customers to ensure you are making the right choice that will positively affect your business. When you are backed with the right partner, every potential of Google Ads can be unleashed to amplify your brand’s online effectiveness and profitability for Noida.
                            <br /><br />
                            This piece of content acts as a guide to choosing an ideal Google Ads agency in Noida, while highlighting the opportunities, risks, and opportunities that such cooperation may provide to companies interested in building a highly effective PPC strategy as part of their digital marketing initiatives. Choosing the best Google Ads agency and PPC Management Company in Noida is crucial for maximizing digital marketing success and achieving sustainable business growth.
                        </p>

                    </div>
                </section>


                {/* ================= FAQ ================= */}
                <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-3xl text-center font-semibold mb-10">
                            Frequently Asked Questions
                        </h2>

                        {faqs.map((q, i) => (
                            <div key={i} className="border-b">

                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex justify-between items-center py-4 text-left"
                                >
                                    <span className="text-xl font-medium">{q.title}</span>
                                    <span>{open === i ? "-" : "+"}</span>
                                </button>

                                {open === i && (
                                    <p className="pb-4 text-gray-600 text-base">
                                        {q.desc}
                                    </p>
                                )}

                            </div>
                        ))}

                    </div>
                </section>

            </main>

        </>
    );
}