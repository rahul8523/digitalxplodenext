"use client";
import Image from "next/image";
import { useState } from "react"


export default function Page() {


    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        {
            title: "How Does Your Social Media Agency in Noida Help Businesses Grow?",
            desc: "This Social Media Agency in Noida focuses on creating a strong and engaging presence for your brand on numerous social media platforms. By creating specific content, running targeted ad campaigns, and actively engaging with your audience, we can help boost your brand's visibility, drive traffic to your website, and produce quality leads. Our goal is to help you expand organically while delivering precise results that are in line with your company goals."
        },
        {
            title: "What Platforms Do You Focus on as a Social Media Marketing Company in Noida?",
            desc: (
                <>
                    This Social Media Marketing Company in Noida manages all major social media platforms, such as Facebook, Instagram, LinkedIn, Twitter, and YouTube. Depending on the brand and audience, we build platform-specific strategies to increase interaction and reach.

                    <br />
                    <br />

                    Whether you want to develop a community on Instagram or make professional contacts on LinkedIn, we tailor our strategy to each platform's capabilities and your specific business goals.

                </>
            )
        },
        {
            title: "Why Should I Use Your Social Media Marketing Agency in Noida Over Others?",
            desc: (
                <>
                    We don't only upload content; we also focus on building meaningful relationships with your audience. Our social media prolifics take the time to understand your brand's voice and goals, ensuring that each post, ad, and interaction is consistent with your vision. We also stay current with the newest trends and strategies to guarantee that your marketing remains fresh and relevant.
                    <br />
                    <br />
                    With a results-driven strategy, we want to produce profitable results that go beyond likes and shares.

                </>
            )
        },
        {
            title: "Can Your Social Media Marketing Agency in Noida Manage Paid Advertising Campaigns?",
            desc: "Yes, we handle sponsored social media campaigns across multiple platforms, including Facebook, Instagram, and LinkedIn. We create specific ads that reach your target audience, whether you want to enhance visibility, generate leads, or increase sales. Our team of experts at the Best Social Media Marketing Agency in Noida is always monitoring and optimizing campaigns to provide the highest possible return on investment (ROI), adapting strategy depending on results to make the most of your ad spend."
        },
        {
            title: "Do You Give Social Media Strategy Advice to Firms in Noida?",
            desc: (
                <>
                    Yes, we provide complete social media strategy advice that is targeted to your specific business needs. Whether you want to customize your current plan or start from scratch, we can help. Our consultations include content development, audience targeting, ad campaigns, and performance tracking to ensure you have a clear route to success on social media.

                    <br />
                    <br />
                    We work closely with you to ensure that the plan is in line with your business objectives.

                </>
            )
        }

    ];
    return (

        <>
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Best Social Media Marketing Agency in Noida
                </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Best Social Media Marketing Agency in Noida

                </p>
            </section>


            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <Image
                            src="/assets/socialmedia/social.jpg"
                            alt=""
                            width={600}
                            height={400}
                            className="rounded-xl"
                        />

                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                                Choosing the Best Social Media Agency in Noida: A Strategic Investment for Your Business Growth
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed">
                                In today’s world of marketing where organizations deal with their customers over the Internet, an organization must incorporate social media as a means of communicating with the targeted clients. However, there is some difficulty encountered when one is seeking to get into the interface of social marketing and this has to be known by anyone who should be willing to undertake this. This is where it becomes very relevant to hire the Best Social Media Marketing Agency in Noida for your business. Here’s why partnering with the right agency is crucial for your business success:
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= SECTION 2 ================= */}
                <section className="pb-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Understanding the Role of a Social Media Agency in Noida:
                            </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                A social media agency is an establishment that centres on creating and managing strategies that are designed for marketing brands, products, or services in one or many social networks. They have mastery in the following; developing good and high-quality content, moderation of the community, paying promotions and advertisement, and computation of metrics for evaluation with subsequent feedback for refining the process. It empowers you to connect with your audience effectively, build brand loyalty, and achieve your marketing objectives with precision and impact.
                            </p>
                        </div>

                        <Image
                            src="/assets/socialmedia/talk.jpg"
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
                            Benefits Of Searching For The Best Social Media Agency In Noida.
                        </h2>

                        <div className="grid md:grid-cols-2 text-sm">

                            {[
                                {
                                    title: "Expertise and Experience:",
                                    desc: "Today there are plenty of talented social media marketing agencies in Noida, which is a perfect bonus for clients who are eager to work with experienced professionals. They understand the mechanics and functionality of places like Facebook, Instagram, Twitter, and LinkedIn, among others. This knowledge assists them in planning the approaches to reach out to relevant followers and website visitors."
                                },
                                {
                                    title: "Strategic Approach:",
                                    desc: "However, social media marketing cannot be defined as an update made on the social account of the brand. It includes habitual and purposeful plans, contents, users, and often self-reflective processes. A good agency assists in formulating a social media plan that aligns with your business goals and objectives for the networks, with which every action taken is aligned."
                                },
                                {
                                    title: "Time and Cost Efficiency:",
                                    desc: "Having the Best Social Media Marketing Agency in Noida manage your social media accounts helps you reduce the time and money you would have spent on the task. While you may spend more time and resources trying to monitor social media internally, it can equally be handled by the agency you hire, and at the same time, you can concentrate on other core business activities."
                                },
                                {
                                    title: "Creativity and Innovation:",
                                    desc: "Working with our Social Media Agency in Noida, agencies should really focus on embracing the hottest trends and technologies in social media marketing! They bring fresh ideas to the table, ensuring your brand stands out in the crowded social media landscape. Whether it's creating viral content, running interactive campaigns, or utilizing influencer partnerships, they know how to spark interest and drive results."
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

                {/* ================= SMM CRITERIA ================= */}
                <section className="relative py-20 px-4 md:px-10 lg:px-20">

                    {/* Background */}
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/ecommerce/bg.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/80"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto text-white">

                        {/* Heading */}
                        <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-center">
                            How to Identify the Finest Social Media Marketing Agency Noida?
                        </h2>

                        {/* GRID */}
                        <div className="grid md:grid-cols-2 gap-10 items-center items-stretch">

                            {/* LEFT IMAGE */}
                            <div>
                                <Image
                                    src="/assets/socialmedia/re.jpg"
                                    alt="Agency"
                                    width={600}
                                    height={350}
                                    className="rounded-lg"
                                />
                            </div>

                            {/* RIGHT CONTENT */}
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
                                <h3 className="font-semibold text-xl mb-3">
                                    1. Customization and Flexibility:
                                </h3>
                                <p className="text-gray-200 text-base leading-relaxed">
                                    Look into how the agency has been performing at handling and completing projects and the kind of feedback that is being given. Check for client feedback, testament, case studies, and other reviews online as this will assist you in seeing the credibility of the project and success rate.
                                </p>
                            </div>

                            {/* LEFT CONTENT */}
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
                                <h3 className="font-semibold text-xl mb-3">
                                    2. Portfolio and Expertise:
                                </h3>
                                <p className="text-gray-200 text-base leading-relaxed">
                                    Visit their website which contains a section where previous campaigns and previous clients are displayed. Consider whether or not their design aesthetic and working method fits in with your brand and what you want to achieve.
                                </p>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div>
                                <Image
                                    src="/assets/socialmedia/sh.jpg"
                                    alt="Social Media"
                                    width={600}
                                    height={350}
                                    className="rounded-lg"
                                />
                            </div>



                            {/* LEFT IMAGE */}
                            <div>
                                <Image
                                    src="/assets/socialmedia/22.jpg"
                                    alt="Agency"
                                    width={600}
                                    height={350}
                                    className="rounded-lg"
                                />
                            </div>

                            {/* RIGHT CONTENT */}
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
                                <h3 className="font-semibold text-xl mb-3">
                                    3. Customization and Flexibility:
                                </h3>
                                <p className="text-gray-200 text-base leading-relaxed">
                                    Ideally, a good agency should be able to provide specific solutions that meet the needs of the particular industry in question. Ideally, they should be willing to use your feedback to tweak their strategies based on your feedback and existing market conditions.
                                </p>
                            </div>

                            {/* LEFT CONTENT */}
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
                                <h3 className="font-semibold text-xl mb-3">
                                    4. Communication and Transparency:
                                </h3>
                                <p className="text-gray-200 text-base leading-relaxed">
                                    It is always important to ensure that communication is fostered so that there can be a successful partnership. Make sure that the reporting of Social Media Marketing Agency Noida is easily understandable, frequent, and comprehensive, and that it reveals crucial information on the campaign’s progress and outcomes.
                                </p>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div>
                                <Image
                                    src="/assets/socialmedia/77.jpg"
                                    alt="Social Media"
                                    width={600}
                                    height={350}
                                    className="rounded-lg"
                                />
                            </div>

                        </div>

                    </div>
                </section>

                {/* ================= SMM EFFECTIVENESS ================= */}
                <section className="bg-black text-white py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                            The Effectiveness of Social Media Marketing on Business Development-
                        </h2>

                        <p className="text-gray-400 text-base mb-10">
                            Effective social media marketing can significantly impact your business growth in several ways:
                        </p>

                        {/* Cards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            {[
                                {
                                    title: "Increased Brand Awareness:",
                                    desc: "If done by the hand of a capable social media agency, your target market will always be engaged thus promoting brand visibility and recognition.",
                                },
                                {
                                    title: "Enhanced Customer Engagement:",
                                    desc: "Organizations must embrace social media since it serves as a direct communication tool through which organizations can engage customers in real-time. The active agency will moderate comments, messages, and feedback, all that is aimed at constructive interaction with the audience.",
                                },
                                {
                                    title: "Lead Generation & Conversion:",
                                    desc: "By having carefully planned services developed by a professional campaign agency, one can identify competent leads and cultivate them appropriately to boost conversion ratios.",
                                },
                                {
                                    title: "Data-Driven Insights:",
                                    desc: "Through social media campaigns, marketers are in a position to get insights into the information that relates to the consumers, their buying behaviour, and the trends. This helps agencies to fine-tune the campaign and make better future campaign expectations to achieve the best results.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="border border-white/40 p-6 min-h-[260px] flex flex-col justify-start 
          hover:border-white transition-all duration-300"
                                >
                                    <h3 className="font-semibold text-xl mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-300 text-base leading-relaxed">
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
                            src="/assets/socialmedia/111.jpg"
                            alt=""
                            width={600}
                            height={600}
                            className="rounded-xl w-full h-auto"
                        />

                        <div>
                            <h2 className="text-4xl font-semibold mb-4"> Conclusion: </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Searching for the right Social Media Marketing Company Noida like Digital Xplode is not about delegating a particular project but about partnering with the best company that would bring value to the table and proven business results. By leveraging their expertise, creativity, and industry insights, you can unlock the full potential of social media marketing and stay ahead of the competition.
                                <br /><br />
                                In essence, partnering with a reputable Social Media Marketing Company Noida is a strategic investment that yields long-term benefits for your business. It empowers you to connect with your audience effectively, build brand loyalty, and achieve your marketing objectives with precision and impact.
                                <br /><br />
                                Whether you're a startup looking to establish a strong online presence or an established business aiming to scale your marketing efforts, choosing the right social media agency can make a significant difference. It positions your brand for success in the dynamic and competitive landscape of digital marketing, ensuring sustainable growth and profitability in the long run.
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