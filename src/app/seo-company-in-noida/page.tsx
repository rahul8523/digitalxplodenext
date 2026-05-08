"use client";
import Image from "next/image";
import { useState } from "react"


export default function Page() {


    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        {
            title: "What Makes Digital Xplode the Best SEO Company in Noida?",
            desc: (
                <>
                    We don't solely care about rankings; we also care about results. Our team takes the time to learn about your company, target audience, and objectives to create a unique SEO plan that delivers authentic growth.

                    <br />
                    <br />

                   Our SEO Company in Delhi NCR is committed to achieving long-term success, whether it is increasing search engine visibility drawing more site visitors, or increasing conversions. We also keep up with the newest SEO trends to ensure that your company stays ahead in a competitive industry.



                </>
            )
        },
        {
            title: "How Can Your SEO Services in Noida Will Help My Business Grow?",
            desc: "Our SEO Services in Noida are all about making sure your company gets noticed online by suitable customers. We optimise your website for search engines, use the most effective ways to boost ranks, attract more visitors, and convert them into customers. Whether you're targeting a local or wider audience, we want to help your company grow organically by raising interaction and generating qualified leads to your website."
        },
        {
            title: "Why Partner with a Leading SEO Company in Delhi NCR?",
            desc: (
                <>
                   We use a unique plan of action, paying attention to what works best for your company rather than implementing generic SEO strategies. Our SEO professionals adhere to transparency, so you'll always understand what we're doing and how it will impact your business. We believe in building belief via progress rather than promises.


                    <br />
                    <br />
                    Moreover, because we are situated in Noida, we have a solid understanding of the Delhi NCR market, giving us an advantage when it comes to offering locally relevant SEO Services in Noida.



                </>
            )
        },
        {
            title: "As an Experienced SEO Services Provider Company, Do You Offer SEO Services Tailored for Small Firms in Noida?",
            desc: "Absolutely. Whether you're a small local business or a large organization, our SEO services cater to your particular needs. We think that every business, regardless of size, needs a great online presence. Our team engages with small businesses to provide cost-effective, results-driven SEO strategies that increase exposure, attract local consumers, and grow your business online."
        },
        {
            title: "How Long Does it Take to See Results from Your SEO Services?",
            desc: "SEO is a long-term game, but with the right techniques in place, you can expect an increase in your website's exposure and traffic within 3 to 6 months. The exact time varies depending on your business, competitors, and the current state of your website. Our focus is on long-term growth, therefore we avoid shortcut solutions in favour of methods that will provide benefits over time. We keep you informed of the newest changes at all times."
        }

    ];
    return (

        <>
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Best SEO Company in Noida
                </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Best SEO Company in Noida

                </p>
            </section>


            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <Image
                            src="/assets/seocompany/seo.jpg"
                            alt=""
                            width={600}
                            height={400}
                            className="rounded-xl"
                        />

                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                                Why Choosing the Best SEO Company in Noida is Crucial for Your Business Growth
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed">
                                In the contemporary world where the internet forms the backbone of communication, SEO plays a critical role. Companies in Noida and other regions of the Delhi NCR are getting inculpative aware of the importance of SEO in helping firms to build up their internet presence and grow their companies’ business. This piece of writing aims to discuss the importance of choosing right SEO company in Noida for your business to succeed.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= SECTION 2 ================= */}
                <section className="pb-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Why Is SEO Important for Business?
                            </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                SEO has a crucial significance to enhance the website’s presence on various search engines including Google, Yahoo, or Bing. Through keyword targeting, proper use of organic content and appropriately positioned links, SEO directs prospective clients to sites that suit their needs. Today in Noida environment is highly competitive especially between businesses and this is where an excellent SEO service will pull your brand through the crowd.
                            </p>
                        </div>

                        <Image
                            src="/assets/seocompany/seo2.jpg"
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
                            The Advantages of Selecting the Right SEO Company in Noida
                        </h2>

                        <div className="grid md:grid-cols-2 text-sm">

                            {[
                                {
                                    title: "1. Expertise and Experience-",
                                    desc: "o Since people are choosing an SEO company in Noida to manage their SEO needs, they should expect professionalism and efficiency. They offer knowledge of the current market, competition, customer preferences, and the prevailing trends in SEO. It gives them a unique opportunity to develop effective approaches that will help to obtain tangible outcomes."
                                },
                                {
                                    title: "2. Customized SEO Strategies-",
                                    desc: "To understand how SEO operates, it is vital to remember that every business is different, and thus, should have a distinct plan for SEO. Professional SEO Agency in Noida have unique strategies that they adapt to depending on one’s objective, target market, among others. Personalized SEO solutions are suitable for all types of businesses irrespective of its size and needs from an online presence, whether you are a start-up or a well-established enterprise."
                                },
                                {
                                    title: "3. Comprehensive SEO Services-",
                                    desc: "In addition to keyword optimization and content writing, the best SEO companies in Noida utilize other services including the technical SEO assessment, on-site and off-site SEO, local SEO, as well as, SEO reporting and evaluation services. They come up with comprehensive packages where by the time you hire them, they guarantee to have made your website more relevant to SERPs and also ward off future algorithm updates."
                                },
                                {
                                    title: "4. Measurable Results and ROI-",
                                    desc: "Partnering with the best SEO company in Noida enables you to track and measure the effectiveness of your SEO campaigns. They use analytics tools to monitor website traffic, keyword rankings, and conversion rates. By analysing these metrics, they continuously refine their strategies to maximize your return on investment (ROI)."
                                },
                                {
                                    title: "5. Staying Ahead in Competition-",
                                    desc: "In a bustling business environment like Delhi NCR, staying ahead of competitors is crucial. An experienced SEO service provider not only helps you rank higher but also ensures your brand maintains a competitive edge. They keep abreast of industry trends and implement strategies that keep your website relevant and visible in search engine results"
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

                {/* ================= DARK CRITERIA ================= */}
                <section className="bg-[#0f1117] text-white py-10 px-4 md:px-10 lg:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-5 mb-10">
                            <div>
                                <h2 className="text-5xl font-semibold leading-tight mb-4">
                                    How to Choose the Best SEO Company in Noida
                                </h2>

                            </div>

                            {/* Highlight Card */}
                            <div className="hover:bg-teal-800 bg-[#25272b] p-6 rounded-xl">
                                <h3 className="font-semibold text-lg mb-3">
                                    1. Evaluate Their Track Record-
                                </h3>
                                <p className="text-base text-gray-200 leading-relaxed">
                                    To evaluate the kind of experiences that the SEO company has had in the past, one should consider looking at customer testimonial, or success stories. The record of past work affirms their capability to perform well in future endeavours.
                                </p>
                            </div>

                            {/* Highlight Card */}
                            <div className="hover:bg-teal-800 bg-[#25272b] p-6 rounded-xl">
                                <h3 className="font-semibold text-lg mb-3">
                                    2. Transparency and Communication-
                                </h3>
                                <p className="text-base text-gray-200 leading-relaxed">
                                    Description of the communication required within business relations: Together, both business parties should be open and keep a clear line of communication. Make sure that the SEO company concerned communicates with you frequently, clearly, and proactively, sharing more about their plans and results.
                                </p>
                            </div>
                        </div>

                        {/* 3 CARDS */}
                        <div className="grid md:grid-cols-3 gap-6">

                            {[

                                {
                                    title: "3. Industry Reputation and Credibility-",
                                    desc: "Explore its popularity within the business world. Review their certifications, awards, and affiliation as a way of making a judgment about their authenticity and enthusiasm about their work."
                                },
                                {
                                    title: "4. Customized Solutions and Strategy-",
                                    desc: "undefined A good SEO company in Noida will also ensure that they work closely with you to fully understand what you intend to achieve so that they can help you achieve it through the best Search Engine Optimization strategies in Noida."
                                },
                                {
                                    title: "5. Long-Term Partnership-",
                                    desc: "o SEO is not a one-time thing as it is some kind of an ongoing process which must be monitored and altered time to time. It is therefore important to select a company that will partner with your business for a long time and that is more than willing to see your business thrive."
                                },
                            ].map((item, i) => (
                                <div key={i} className="hover:bg-teal-800 p-6 bg-[#25272b] rounded-xl">
                                    <h3 className="font-semibold mb-3 text-xl " >{item.title}</h3>
                                    <p className="text-base text-gray-400">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>


                {/* ================= SECTION 2 ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Selecting the Best SEO Service Provider
                            </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                When selecting an SEO service provider in Noida or Delhi NCR, consider factors such as:
                            </p>
                           <h4 className="text-xl mt-4 font-semibold">Local Expertise:</h4>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Choose businesses that have experience with the local market, its clients, and search engine optimization specifics.
                            </p>

                            <h4 className="text-xl mt-4 font-semibold">Proven Results:</h4>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Find out the previous SEO campaigns done and their effectiveness in enhancing site traffic, converting visitors to clients, and enhancing the website’s ranking on search engines.
                            </p>


                            <h4 className="text-xl mt-4 font-semibold"> Comprehensive Services:</h4>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Make sure that your company provides every level of SEO from the technical ones to the content level, link level and analytical level.
                            </p>

                            <h4 className="text-xl mt-4 font-semibold">Ethical Practices:</h4>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Ensure you have checked whether the SEO strategies being used conform to the importance set down by search engines to prevent penalties.
                            </p>

                        </div>

                        <Image
                            src="/assets/seocompany/see.jpg"
                            alt=""
                            width={600}
                            height={400}
                            className="rounded-xl"
                        />

                    </div>
                </section>

                {/* ================= CONCLUSION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <Image
                            src="/assets/seocompany/im2.jpg"
                            alt=""
                            width={600}
                            height={600}
                            className="rounded-xl w-full h-auto"
                        />

                        <div>
                            <h2 className="text-4xl font-semibold mb-4"> Conclusion: </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Hiring the leading SEO services in Noida or any part of Delhi NCR is a wise investment for the sustainable growth of any business. You can effectively stand your brand at par with the competition through expertise, custom strategies, and resulting-oriented professionals. Both small and large companies can benefit from proper SEO implementation as it creates a long-term foundation for growth and profitability of a business.
                                <br /><br />
                                Ready to elevate your online presence and drive business growth with strategic SEO solutions? Contact us, the leading SEO service provider in Noida, and discover how we can help you achieve your digital marketing goals.
                                <br /><br />
                                Choosing the best SEO company in Noida or SEO company in Delhi NCR isn't just about optimizing your website for search engines; it's about transforming your digital presence and maximizing your business potential.
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