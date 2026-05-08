"use client";
import Image from "next/image";
import { useState } from "react"


export default function Page() {


    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        {
            title: "What Services Does Your E-commerce Web Development Agency in Noida Provide?",
            desc: (
                <>
                    Our E-commerce Web Development Agency in Noida offers comprehensive E-Commerce Website Development services, from creating user-friendly websites to integrating secure payment methods. Whether you have just started from scratch or modifying an existing site, we are committed to providing your customers with an effortless shopping experience.

                    <br />
                    <br />

                    We offer custom design, platform integration, product management, and post-launch help to guarantee that your online store works efficiently.
                </>
            )
        },
        {
            title: "What Makes Your Agency the Best Digital Marketing Company in Noida?",
            desc: (
                <>
                    Our E-commerce Web Development Agency in Noida offers comprehensive E-Commerce Website Development services, from creating user-friendly websites to integrating secure payment methods. Whether you have just started from scratch or modifying an existing site, we are committed to providing your customers with an effortless shopping experience.

                    <br />
                    <br />

                    We offer custom design, platform integration, product management, and post-launch help to guarantee that your online store works efficiently.
                </>
            )
        },
        {
            title: "How Does Your E-Commerce Web Development Company Ensure that My Consumers Have a Perfect Shopping Experience?",
            desc: "To improve the user experience, we prioritize effortless designs, fast browsing times, and a secure checkout process. Our team at E-Commerce Web Development Company seeks to design a mobile-friendly and responsive website that allows users to easily browse, select, and purchase items. By integrating trustworthy payment options and optimizing the user direction, we ensure that customers have a pleasant buying experience."
        },
        {
            title: "Why Should I Pick Your Noida-based E-Commerce Web Development Company?",
            desc: (
                <>
                    We understand the local market and add knowledge to global e-commerce trends. Our team of experts at E-Commerce Web Development Company in Noida is passionate about giving personalized solutions that ensure your website matches your brand's character and achieves your unique objectives.

                    <br />
                    <br />

                    Plus, we're with you every step of the way, from the initial design to ongoing maintenance, to keep your e-commerce platform competitive and up to date.

                </>
            )
        },
        {
            title: "Can Your E-Commerce Website Development Agency Integrate Payment Gateways and Other Essential Features?",
            desc: (
                <>
                    Absolutely! We will integrate all of your e-commerce site's major features, such as secure payment gateways and shipping interfaces, as well as product management tools and customer review systems.

                    <br />
                    <br />

                    Our objective is to give your consumers a pleasant, hassle-free shopping experience by ensuring that each element of your e-commerce website functions properly.

                </>
            )
        },
        {
            title: "Do You Provide Post-Launch Helping Hand And Maintenance For E-Commerce Sites?",
            desc: "Yes, we provide ongoing support and maintenance even after your website has gone live. We help with revisions, security checks, and performance monitoring to guarantee that your website stays active and safe. Our workforce is constantly accessible to fix any bugs that may show up, letting your business continue functioning smoothly."
        }
    ];
    return (

        <>
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Ecommerce Web Development Company in Noida </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Ecommerce Web Development Company in Noida
                </p>
            </section>


            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <Image
                            src="/assets/ecommerce/hero1.jpg"
                            alt=""
                            width={600}
                            height={400}
                            className="rounded-xl"
                        />

                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                                The Importance of Choosing the Best Ecommerce Web Development Agency in Noida
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Nowadays, having a properly developed internet presence is essential for a company success regardless of its size. Electronic commerce has had a very significant impact on the overall management of companies by ensuring that they get a wider market base, where they can easily complete their transactions via the Internet. Nevertheless, it is imperative to note that realizing success in internet selling goes beyond creating an ordinary website-selling store. It requires an engaging, easy-to-navigate website that will not only capture your attention but also entice you into buying the products. This is where the services of an exceptional e-commerce web development agency in Noida is most useful.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= SECTION 2 ================= */}
                <section className="pb-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Understanding E-commerce Web Development-
                            </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Ecommerce website development on the other hand relates to the construction of web sites for organizations carrying out business on the internet. These websites are basically developed to be user-friendly; safe and efficient in terms of transactions; enabling consumers to have an enjoyable shopping experience. It helps having a professional ecommerce website development Company in Noida and that has the technical know-how as well as the artistic skills that are needed to design such websites from the ground up or to redesign existing websites to bring them into compliance with present-day standards.
                            </p>
                        </div>

                        <Image
                            src="/assets/ecommerce/hero2.jpg"
                            alt=""
                            width={600}
                            height={400}
                            className="rounded-xl"
                        />

                    </div>
                </section>

                {/* ================= FACTORS ================= */}
                <section className="bg-[lightgray] py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Some of the factors that one needs to consider while selecting an ecommerce website development agency in Noida are-
                        </h2>

                        <p className="text-gray-600 text-base mb-10">
                            The right ecommerce web development company in Noida can help boost the success of your online business immensely. Here are several crucial factors to consider:
                        </p>

                        <div className="grid md:grid-cols-2 text-sm">

                            {[
                                {
                                    title: "Expertise and Experience",
                                    desc: "An ecommerce website development agency that has already been practicing in Noida for some time will have some of its previous work on successful ecommerce sites. They should also have a wealth of knowledge of various ecommerce platforms such as Shopify, Magento, WooCommerce or even other bespoke platforms depending on a business. Check for case studies, clients’ reviews as well as samples of their work in order to get a feel of their capacity."
                                },
                                {
                                    title: "Customization and Scalability",
                                    desc: "Any business is special and your online store must reflect its individuality and address certain needs and wants of the consumer. An excellent ecommerce website development company in Noida will give you the freedom to doodle for your requirements and create a website that is unique and meets your needs. In addition, they should be scalable so that your website can change progressively with the growth of your business without much inconvenience."
                                },
                                {
                                    title: "User Experience (UX) Design",
                                    desc: "The user experience stands out as a key factor in ecommerce since it is directly correlated to the rates of conversion. An experienced ecommerce website development agency will ensure that there is ease in navigation, the speed at which the site takes to load, its mobility and ease in check out to increase UX. They should engage in serious tests to find out some issues of usability and make sure your customers are enjoying their shopping marathons."
                                },
                                {
                                    title: "SEO and Digital Marketing Integration",
                                    desc: "Creating a visually engaging and practical online store application is half the work done. Another reason for creating web traffic is that your website will have to be search engine optimized (SEO) and aligned with other marketing technologies. And an excellent e-commerce web development agency in Noida will ensure you are using keywords strategically, meta tags and structuring your site in a manner that enhances your ranking."
                                },
                                {
                                    title: "Security Measures",
                                    desc: "Safety cannot be overemphasized in e-commerce since customers are required to input sensitive data such as credit cards. The top e-commerce web development companies in Noida ensure their websites’ security and safeguard themselves as well as clients from threats like the recent malware and hacking incidents by installing SSL certificates, encryption for data, PCI compliance, and security audits."
                                },
                                {
                                    title: "Ongoing Support and Maintenance",
                                    desc: "Establishing an e-commerce website is just the first step to being on the road. Technical support and maintenance services are critical for correcting bugs or technical faults, updating, and other enhancements needed to run the software efficiently. Select the most appropriate e-commerce web development agency in Noida to provide you with the required support services and be recognized for its customer care services."
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`border-b p-10 border-[#c1bebe] pb-6 ${i % 2 === 0 ? "md:border-r md:pr-8" : ""
                                        }`}
                                >
                                    <h3 className="font-semibold text-xl mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* ================= ADVANTAGES (DARK) ================= */}
                <section className="relative py-20 px-4 md:px-10 lg:px-20">

                    {/* Background */}
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/ecommerce/bg.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/70"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto text-white">

                        <h2 className="text-3xl font-semibold mb-4">
                            Advantages of hiring the Best Ecommerce Web Development Agency in Noida.
                        </h2>
                        <p className="text-base mb-10">
                            Partnering with a reputable e-commerce web development company in Noida offers numerous advantages:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">

                            {[
                                {
                                    title: "Competitive Advantage",
                                    icons: "/assets/ecommerce/icon1.png",
                                    desc: "An effective ecommerce website promotes the ability of your business to stand out from your competitors; further, it improves on the credibility of your business. This makes customers to have trust in the available products and also which leads to repeated buying sprees."
                                },
                                {
                                    title: "Enhanced Functionality",
                                    icons: "/assets/ecommerce/icon2.png",
                                    desc: "The professional ecommerce web development agencies can integrate the most modern techniques and standards and do coding to provide websites with more functionality. This involves aspects such as the presence of filters, the use of recommendation systems, integration with social networks, and others for enhancing the interaction with users and their satisfaction."
                                },
                                {
                                    title: "Cost-effectiveness",
                                    icons: "/assets/ecommerce/icon3.png",
                                    desc: "Continuing the same line, it can be said that quality always costs more, but hiring the best ecommerce web development agency in Noida may pay itself off in the future. They are knowledgeable in the job, hence effectiveness, fewer mistakes, and project flexibility in case far from being cost-effective to redesign or remake later."
                                },
                                {
                                    title: "Focus on Core Activities",
                                    icons: "/assets/ecommerce/icon5.png",
                                    desc: "When it comes to ecommerce web development, it is always advisable to outsource since it frees up time for company managers to focus on more crucial issues arising from the enterprise such as marketing and product development. Such specialization makes the entire business more productive and helps to progress at a faster pace."
                                },
                                {
                                    title: "Long-term Partnership",
                                    icons: "/assets/ecommerce/icon6.png",
                                    desc: "It is possible to develop a long-term working association with a suitable e-commerce web development agency in Noida. They can continue to assist with other needs you may have, offer changes, and make the website suitable for future markets, making your website relevant."
                                }
                            ].map((item, i, arr) => (
                                <div
                                    key={i}
                                    className={`backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl ${i === arr.length - 1 ? "md:col-span-2" : ""
                                        }`}
                                >
                                    <Image
                                        src={item.icons}
                                        alt=""
                                        width={90}
                                        height={90}
                                        className="p-3 border border-gray-500 rounded-full"
                                    />

                                    <h3 className="font-semibold text-lg my-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-base text-gray-200">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* ================= CONCLUSION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <Image
                            src="/assets/ecommerce/conclusion.jpg"
                            alt=""
                            width={600}
                            height={400}
                            className="rounded-xl"
                        />

                        <div>
                            <h2 className="text-4xl font-semibold mb-4"> Conclusion: </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                In conclusion, selecting DigitalXplode as your e-commerce web development agency in Noida promises to be a strategic decision that can propel your online business to new heights. With their demonstrated expertise, tailored solutions, and commitment to excellence, DigitalXplode stands out as a reliable partner in crafting a robust e-commerce presence. By leveraging their proficiency in UX design, SEO integration, security measures, and ongoing support, you can ensure your e-commerce website not only meets but exceeds industry standards. Trusting DigitalXplode means investing in a long-term partnership dedicated to enhancing your brand's online visibility, customer engagement, and ultimately, your bottom line. Embrace the future of e-commerce with confidence by choosing DigitalXplode—a choice that promises innovation, reliability, and success.
                            </p>

                        </div>

                    </div>
                </section>


                {/* ================= FAQ ================= */}
                <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">

                       <h2 className="text-4xl text-center font-semibold mb-10">
                            Frequently Asked Questions
                        </h2>

                        {faqs.map((q, i) => (
                            <div key={i} className="border-b">

                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex justify-between items-center py-4 text-left"
                                >
                                    <span className="text-lg font-medium">{q.title}</span>
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