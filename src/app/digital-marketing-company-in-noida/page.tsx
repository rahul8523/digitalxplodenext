"use client";
import Image from "next/image";
import { useState } from "react"

export default function Page() {


    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        {
            title: "Which is the best digital marketing company in Noida?",
            desc: "Digital Xplode is the best Digital Marketing Company in Noida, specializing in SMM, SEO, Website Designing and Development, Lead Generation, and PPC Services."
        },
        {
            title: "What Makes Your Agency the Best Digital Marketing Company in Noida?",
            desc: (
                <>
                    Our Digital Marketing Company is known for providing personalized digital marketing services that are aligned with your business goals. We take a data-driven strategy to guarantee that each campaign is significant and effective. With a specialized team of professionals specializing in SEO, Social Media Marketing, Content Marketing, and Paid Advertising, we prioritize ROI.

                    <br />
                    <br />
                    Furthermore, our extensive knowledge of the local Noida market offers us an advantage in developing successful tactics that provide tangible results for businesses of all kinds.

                </>
            )
        },
        {
            title: "How Do You Approach Digital Marketing for Organizations in Noida?",
            desc: (
                <>
                    The way we work starts off with a thorough understanding of your commercial business, industry, and target market. Our Digital Marketing Agency in Noida executes a specific digital marketing plan that includes Search Engine Optimization, Social Media Management, Content Marketing, and PPC Advertising to maximize your digital presence.

                    <br />
                    <br />

                    We systematically monitor and evaluate marketing campaign effectiveness, modifying approaches as needed to ensure that your branding and advertising activities stay effective. Our goal is to attract visitors, beautify your brand, and produce high-quality leads to help your business thrive in a competitive market like Noida.


                </>
            )
        },
        {
            title: "Do You Give Digital Marketing Services to Firms Outside of Noida?",
            desc: (
                <>
                    Yes, despite our Digital Marketing Company in Noida, we work with clients nationwide. Our services are flexible and versatile, allowing us to serve organizations from diverse regions and sectors. Whether you're a new or existing business, we can customize digital marketing solutions to meet your individual goals.

                    <br />
                    <br />

                    We provide the same degree of attention and experience to each project, guaranteeing that our clients benefit from specific campaigns that produce clear results, no matter the location.

                </>
            )
        },
        {
            title: "What Services Does Your Digital Marketing Company Provide?",
            desc: (
                <>
                    Our Digital Marketing Company provides comprehensive digital
                    marketing services, including:

                    <br />
                    <br />

                    • SEO <br />
                    • PPC Advertising <br />
                    • Website Design and Development <br />
                    • App Store Optimisation <br />
                    • Social Media Marketing <br />
                    • Content Marketing <br />
                    • Email Marketing <br />
                    • Graphic Designing <br />
                    • ORM and more
                </>
            )
        },
        {
            title: "How Does our Digital Marketing Company in Noida Differ From Others?",
            desc: (
                <>
                    What sets apart us is our dedication to creating precise, data-driven strategies that match each of our client's goals. We do not believe in a one-size-fits-all strategy. Instead, we personalize our services to your specific company objectives, guaranteeing that you get the most out of your digital marketing investment.

                    <br />
                    <br />

                    Furthermore, our team of professionals keeps up with the newest digital trends and technology, guaranteeing that we adopt cutting-edge solutions to provide you with a competitive advantage. This Digital Marketing Company in Noida is constantly focused on achieving long-term, attainable results.

                </>
            )
        }
    ];


    return (

        <>

            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Best Digital Marketing Company in Noida </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Best Digital Marketing Company in Noida
                </p>
            </section>

            <main className="bg-white text-gray-900">

                {/* ================= HERO ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                        <Image
                            src="/assets/digital/hero.jpg"
                            alt="Digital Marketing"
                            width={600}
                            height={500}
                            className="rounded-2xl w-full h-auto"
                        />

                        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">

                            <p className="text-base">
                                Digital Xplode is the best Digital Marketing Company in Noida, specializing in SMM, SEO, Website Designing and Development, Lead Generation, and PPC Services. With a team of surprisingly professional specialists and a demonstrated music document of handing over a hit digital advertising campaigns, Digital Xplode is committed to helping organizations in Noida and beyond attain their advertising dreams. Whether you want to increase your on-line visibility, power more visitors for your website, or generate awesome leads, Digital Xplode has the knowledge and enjoy to supply awesome effects.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-semibold text-black">
                                Maximizing Your Digital Presence: Why Choosing the Best Digital Marketing Company in Noida Matters
                            </h2>

                            <p className="text-base">
                                With so much competition in the digital world of Noida, it is crucial to select the right partner for digital marketing to reap higher dividends for your business. Since there is a wide range of companies available that offer digital marketing services, it becomes really important to choose the best digital marketing company in Noida so that you can get targeted and planned advancements for your business. In this article, you will find out why cooperation with the best digital marketing agency in Noida can be a game changer in marketing your business.
                            </p>

                            <h3 className="text-2xl md:text-3xl font-semibold text-black">
                                The Significance of Digital Marketing-
                            </h3>

                            <p className="text-base">
                                Digital marketing has impacted how people relate with their audiences or customers. With competition high in Noida, using digital mediums with efficiency helps in setting your brand apart, creating traffic and leads, and selling to online customers. A good digital marketing company in Noida considers these dynamics and uses them to develop effective marketing strategies that are appropriate to your business model.
                            </p>

                        </div>

                    </div>
                </section>

                {/* ================= DARK CRITERIA ================= */}
                <section className="bg-[#0f1117] text-white py-10 px-4 md:px-10 lg:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-5 mb-10">
                            <div>
                                <h2 className="text-5xl font-semibold leading-tight mb-4">
                                    Key Criteria for Choosing
                                </h2>
                                <p className="text-xl text-gray-300">
                                    Digital Marketing Company in Noida
                                </p>
                            </div>

                            {/* Highlight Card */}
                            <div className="hover:bg-teal-800 p-6 bg-[#25272b] rounded-xl">
                                <h3 className="font-semibold text-lg mb-3">
                                    1. Expertise and Experience:
                                </h3>
                                <p className="text-base text-gray-200 leading-relaxed">
                                    Working with a professional digital marketing company in Noida means working with people who have multiple years of working experience and industry insights. When choosing the agencies always focus on those that have experience in executing successful marketing campaigns, especially in your industry of operation. This way they are knowledgeable about the modern trends in digital marketing, customers’ behavior, and all those strategies that may prove effective in the Noida market only.
                                </p>
                            </div>
                        </div>

                        {/* 3 CARDS */}
                        <div className="grid md:grid-cols-3 gap-6">

                            {[
                                {
                                    title: "2. Comprehensive Service Offerings:",
                                    desc: "A reliable digital marketing company provides you with the necessary services to fit your enterprise requirements. Supporting services such as SEO, PPC campaigns, social media management, and content generation make for a holistic management solution for the digital portfolio."
                                },
                                {
                                    title: "3. Customized Strategies:",
                                    desc: "As you may know, each business is unique and may need an individual approach to using digital marketing. Every good digital marketing firm in Noida is going to invest a considerable amount of time in the research of your business and marketing goals, your target audience, and the industry. They then come up with personalized communication plans that will be appealing to your targeted audience and which will have definable outcomes."
                                },
                                {
                                    title: "4. Proven Results and Case Studies:",
                                    desc: "It is essential to take some time when hiring a digital marketing agency by checking on their portfolio and testimonials. Examples of successful campaigns show that they are effective tools as they can bring substantial changes for the stated goals. More transparency in reporting and analytics also supports the idea of how they can help in achieving and sometimes, even surpassing clients’ expectations."
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

                {/* ================= ADVANTAGES ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">

                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                            Advantages of Selecting the Best Digital Marketing Company in Noida-
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

                            {[
                                {
                                    title: "Expertise and Experience:",
                                    desc: "Working with a professional digital marketing company in Noida means working with people who have multiple years of working experience and industry insights. When choosing the agencies always focus on those that have experience in executing successful marketing campaigns, especially in your industry of operation. This way they are knowledgeable about the modern trends in digital marketing, customers’ behavior, and all those strategies that may prove effective in the Noida market only."
                                },
                                {
                                    title: "Comprehensive Service Offerings:",
                                    desc: "A reliable digital marketing company provides you with the necessary services to fit your enterprise requirements. Supporting services such as SEO, PPC campaigns, social media management, and content generation make for a holistic management solution for the digital portfolio."
                                },
                                {
                                    title: "Customized Strategies:",
                                    desc: "As you may know, each business is unique and may need an individual approach to using digital marketing. Every good digital marketing firm in Noida is going to invest a considerable amount of time in the research of your business and marketing goals, your target audience, and the industry. They then come up with personalized communication plans that will be appealing to your targeted audience and which will have definable outcomes."
                                },
                                {
                                    title: "Proven Results and Case Studies:",
                                    desc: "It is essential to take some time when hiring a digital marketing agency by checking on their portfolio and testimonials. Examples of successful campaigns show that they are effective tools as they can bring substantial changes for the stated goals. More transparency in reporting and analytics also supports the idea of how they can help in achieving and sometimes, even surpassing clients’ expectations."
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

                        {/* Bottom Paragraph */}
                        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm text-base text-gray-600">
                            Choosing the best digital marketing company in Noida ensures tailored strategies, enhanced online visibility, targeted audience engagement, and cost-effectiveness, maximizing business growth and competitiveness in the digital landscape.
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
                            Why Should One Opt for a Local Digital Marketing Company in Noida Than Any Other Company?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

                            {[
                                {
                                    title: "1. In-Depth Understanding of the Local Market:",
                                    icons: "/assets/digital/icon11.png",
                                    desc: "A digital marketing company in Noida will always understand consumers based on their behaviour, their choice, and trends in the local markets. It allows them to launch highly localized marketing initiatives that are likely to be appreciated by the target audience in your locality and generate better results."
                                },
                                {
                                    title: "2. Accessibility and Communication:",
                                    icons: "/assets/digital/icon12.png",
                                    desc: "When it comes to workflow and involving various structures of communication, distance is crucial. Selecting an agency with a local office in Noida makes it possible for both to have regular meetings, updates, and discussions. Such a closeness in operations enhances the flow of communication and general teamwork and thus ensures efficient working relations."
                                },
                                {
                                    title: "3. Community and Network Connections:",
                                    icons: "/assets/digital/icon13.png",
                                    desc: "Local digital marketing agencies particularly work closely with businesses within Noida and thus may already have existing networks in place. These relationships can create opportunities for your business by forming strategic partnerships and alliances, joint ventures, and business opportunities for the expansion of business outlets."
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
                                        width={70}
                                        height={70}
                                        className="p-3 border border-gray-500 rounded-full object-cover"
                                    />

                                    <h3 className="font-semibold text-xl my-4">
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
                            src="/assets/digital/best-marketing.jpg"
                            alt=""
                            width={600}
                            height={400}
                            className="rounded-xl"
                        />

                        <div>
                            <h2 className="text-4xl font-semibold mb-4"> Conclusion: </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                Selecting Digitalxplode the, best digital marketing company in Noida is not picking a vendor; it’s about identifying a partner that will take your business to the next level. Outsourcing your digital marketing needs to a reliable agency that understands the dynamics of the services in Noida means getting professional help to develop well-coordinated and efficient promotional campaigns that will elevate your brand in the digital marketplace. Make a wise decision today about your online presence and achieve your business goals successfully.
                            </p>

                            <p className="text-gray-600 text-base leading-relaxed">
                                In conclusion, it can be said that choosing the right digital marketing agency in Noida which is none other than Digitalxplode can drastically change the company’s success in the realm of the World Wide Web. Thus, by concentrating on such aspects as expertise, the specificity of the approach, tangible outcomes, as well as the advantages of local skills, you can guarantee that your money spent on digital marketing will pay off.
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