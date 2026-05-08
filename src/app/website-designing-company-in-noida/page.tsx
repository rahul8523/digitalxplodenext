"use client";
import { useState } from "react"
import Image from "next/image";

export default function WebsiteDesigningCompanyNoida() {

    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        {
            title: "What Differentiates Your Company as the Best Website Designing Company In Noida?",
            desc: (
                <>
                    We take pride in providing unique Web Development Services catering to each client's individual needs. Our skilled designers specialise in designing websites that are easy to use, eye-catching, and fully responsive. We use the most recent design trends and technology to ensure your website works effectively on all devices. Furthermore, we prioritise SEO-friendly designs, which help businesses rank better in search engines. With a proven track record, we assist our customers in establishing a strong online presence, increasing brand awareness and consumer interaction.

                </>
            )
        },
        {
            title: "How Do I Know Which is the Top Website Designing Company in Noida for My Projects?",
            desc: "When you work with Digital Xplode - a Top Website Designing Company in Noida, you get years of knowledge and skill in the industry. We concentrate on creating websites that not only look fantastic but also work perfectly. Our team knows the value of matching the design to your brand identity and commercial objectives. When you choose us, you get a website that is optimized for performance, security, and search engine rankings, resulting in a smooth user experience that keeps your customers engaged and coming back."
        },
        {
            title: "How Does Your Web Development Agency near Delhi Support Business Growth?",
            desc: (
                <>
                    Our web development agency near Delhi is dedicated to helping businesses grow by creating robust, scalable, and secure websites. We work closely with our clients to understand their objectives and develop solutions that cater to their needs. Whether you need a custom web application, an e-commerce platform, or a content management system, we have the expertise to deliver.We also focus on optimising websites for speed, performance, and search engines, ensuring that your digital platform supports your long-term growth and enhances user experience.

                </>
            )
        },
        {
            title: "What Services Does Your Web Development Company in Noida Offer?",
            desc: "As a leading web development company in Noida, we offer a comprehensive range of services, including custom website development, e-commerce solutions, and CMS-based platforms. We specialise in building websites that are responsive, fast, and secure, helping businesses establish a solid online presence. Our development process ensures that your website meets industry standards and is tailored to your specific requirements. Additionally, we provide ongoing support and maintenance to ensure your website remains up-to-date with the latest technologies and optimisations."
        },
        {
            title: "Why Should I Choose Your Web Development Services?",
            desc: "Our web development services are designed to provide businesses with a digital platform that drives results. We focus on creating websites that are user-friendly, mobile-optimised, and secure, ensuring an optimal experience for your customers. We stay up-to-date with the latest technologies and industry trends, allowing us to deliver cutting-edge solutions tailored to your needs. Whether you require a simple business website or a complex web application, we have the skills and experience to bring your vision to life, while also offering ongoing support for long-term success."
        }

    ];

    return (

        <>
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Best Website Designing Company in Noida
                </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Best Website Designing Company in Noida

                </p>
            </section>


            <main className="bg-white overflow-hidden">


                {/* ================= HERO ================= */}
                <section className="py-14 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

                        {/* LEFT IMAGE */}
                        <div className="relative w-full h-[260px] sm:h-[350px] lg:h-[420px] rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/digital/web.avif"
                                alt="Website Designing Company"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                                The Importance of Choosing the Best Website
                                Designing Company in Noida
                            </h1>

                            <div className="space-y-5 text-gray-700 leading-8 text-base">
                                <p>
                                    In this modern world, every enterprise that has an intention to be successful and expand itself must have a powerful internet presence. If you are a startup or small business, or any large business for that matter your website is the first interface and may be the only interface with your customer. Therefore, the website must be professionally designed and developed. If you are operating your business in Noida or any nearby area of Delhi then considering the Best Website Designing Company in Noida can prove beneficial for your business. It is now time to discuss why choosing the right company in Noida can make a difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= IMPORTANCE ================= */}
                <section className="bg-[#eef5fb] py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-5">
                            The Importance of Having a Professional Website
                        </h2>

                        <p className="text-gray-700 leading-8 mb-12 max-w-6xl">
                            Before going into the parameters of identifying the Top Website Designing Company in Noida, it is necessary to look at the importance of a professional website. A good web design is effective in advertising, improves the view of the visitors, and creates trust with the visitors.
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">

                            {[
                                {
                                    title: "1. First Impressions Matter:",
                                    desc: "Potential customers’ first impression of your brand can be through your website, Thus, there are various aspects, that speak for a professional design of a site to avoid negative first impressions.",
                                },
                                {
                                    title: "2. Improved User Experience:",
                                    desc: "One of the many reasons why a good website’s format should be well-organized and beautiful to look at is because visitors tend to linger longer and interact more.",
                                },
                                {
                                    title: "3. Higher Search Engine Rankings:",
                                    desc: "The process of web development also includes the usage of SEO recommendations that make the site occupy a high position in the search results.",
                                },
                                {
                                    title: "4. Brand Credibility:",
                                    desc: "Well well-designed and informative website assures the customers regarding the credibility of the brand.",
                                },
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* ================= WHY NOIDA ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

                        {/* LEFT */}
                        <div>

                            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
                                Why Noida is the Hub for Web Designing and Development?
                            </h2>

                            <p className="text-gray-700 leading-8 mb-8">
                                Noida is one of the cities in the National Capital Region (NCR) and has grown very fast to become a major hub for Information Technology and Business Processing. The city has cultural connections, local talent, and an environment that is friendly to technology and growth. Here are some reasons why Noida is ideal for web designing and web development services:
                            </p>

                            <div className="space-y-8">

                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                        1. Skilled Talent Pool
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        There are many colleges and universities in Noida and many IT companies are situated hence there is always availability of talent in the market.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                        2.Cost-Effective Solutions:
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        As for the price level, the Top Website Designing Company in Noida are more affordable as compared to other large metropolitan cities and in no way inferior to them in terms of quality.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                        3.Strategic Location:
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        It is easily accessible and well connected being in proximity to Delhi hence making it strategic for any business to undertake.
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/digital/business.jpg"
                                alt="Web Development"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* ================= SELECTING COMPANY ================= */}
                <section className="bg-[#eef5fb] py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
                            Selecting the Top Website Designing Company in Noida-
                        </h2>

                        <p className="text-gray-700 mb-12">
                            Choosing the right Website Design Company Noida is the most important thing when it comes to web designing.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">

                            {[
                                {
                                    title: "1. Expertise and Experience:",
                                    desc: "Hiring the best web designing company in Noida can ensure that you are tapping into a pool of expertise and vast experience. They know what is new in design trends, have experience in using interfaces and have tendencies in the field. Such expertise makes sure your website does not only look good but also works a great deal.",
                                },
                                {
                                    title: "2. Customized Solutions:",
                                    desc: "Some of the top Website Design Company Noida are known to offer their clients solutions that are unique enough for one’s business. Being in close communication with the client, they pay attention to all the peculiarities of your brand, the target audience, and most importantly – the goals of your business.",
                                },
                                {
                                    title: "3. Innovative Designs:",
                                    desc: "Web designing requires innovation in the following ways: Some of the largest and most successful companies use advanced instruments and tools to come up with unique and fascinating designs. It serves to achieve the purpose of making your website more easily visible in densely populated cyberspace.",
                                },
                                {
                                    title: "4. Responsive Design:",
                                    desc: "One aspect that cannot be overlooked is the necessity of having a website entity that can be accessed through a mobile device. Professional Website Designing Company in Noida pays particular attention to cross-browser compatibility and ensures that the site looks good on any device including desktops, tablets, and mobiles.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-semibold mb-5 text-gray-800">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* ================= DEVELOPMENT COMPANY ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-800 mb-5">
                            Why Partner with the Best Web Development Company in Noida?
                        </h2>

                        <p className="text-center text-gray-700 mb-14 max-w-5xl mx-auto leading-8">
                            Web development comes as the next phase after design; once you are done with your website design. Partnering with a top Website Designing Company in Noida offers numerous advantages:
                        </p>

                        {/* CARD 1 */}
                        <div className="bg-[#eef5fb] rounded-3xl p-6 md:p-10 mb-10">

                            <div className="grid lg:grid-cols-2 gap-10 items-center">

                                <div className="relative h-[260px] sm:h-[340px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="/assets/digital/man.avif"
                                        alt="Technical Expertise"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-semibold mb-5 text-gray-800">
                                        1. Technical Expertise
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        Web development is not just the act of designing and creating a website, but it also demands skills and knowledge. The top web development firm in Noida has a team of professionals who can code in multiple languages and work with the use of frameworks. Their technical experience means that your site is not just functional, efficient, and stable but also protected from hacks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-[#eef5fb] rounded-3xl p-6 md:p-10">

                            <div className="grid lg:grid-cols-2 gap-10 items-center">

                                <div className="order-2 lg:order-1">
                                    <h3 className="text-3xl font-semibold mb-5 text-gray-800">
                                        2. Comprehensive Services
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        The best web development Agency in Noida offers a plethora of solutions such as front-end development, back-end development, e-commerce solutions, CMS service, and many others. Such an approach guarantees that whatever services you require in your website, are well and efficiently managed.
                                    </p>
                                </div>

                                <div className="relative h-[260px] sm:h-[340px] rounded-2xl overflow-hidden order-1 lg:order-2">
                                    <Image
                                        src="/assets/digital/agency.jpg"
                                        alt="Comprehensive Services"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* CARD 3 */}
                        <div className="bg-[#eef5fb] rounded-3xl p-6 md:p-10 mb-10">

                            <div className="grid lg:grid-cols-2 gap-10 items-center">

                                <div className="relative h-[260px] sm:h-[340px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="/assets/digital/timely.jpg"
                                        alt="Technical Expertise"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-semibold mb-5 text-gray-800">
                                        3. Timely Delivery:
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        The business world operates under tight schedules, thereby making time an essential element. The top web developers in Noida follow project deadlines skilfully, which means your website will be delivered on time and will not be of low quality.
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* CARD 4 */}
                        <div className="bg-[#eef5fb] rounded-3xl p-6 md:p-10">

                            <div className="grid lg:grid-cols-2 gap-10 items-center">

                                <div className="order-2 lg:order-1">
                                    <h3 className="text-3xl font-semibold mb-5 text-gray-800">
                                        4. Post-Launch Support:
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        Website development is not over after the completion and launch of the site. Therefore, regular support and maintenance are necessary for the effective running of the website. The best web development company Noida provides guaranteed and efficient post-launch services like fixing any problems and making changes or updates as and when needed.
                                    </p>
                                </div>

                                <div className="relative h-[260px] sm:h-[340px] rounded-2xl overflow-hidden order-1 lg:order-2">
                                    <Image
                                        src="/assets/digital/support.avif"
                                        alt="Comprehensive Services"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ================= CONCLUSION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        <Image
                            src="/assets/digital/98.jpg"
                            alt=""
                            width={600}
                            height={600}
                            className="rounded-xl w-full h-auto"
                        />

                        <div>
                            <h2 className="text-4xl font-semibold mb-4 text-gray-800"> Conclusion: </h2>

                            <p className="text-gray-600 text-base leading-relaxed">
                                To sum up, the selection of a web designing and web development company in Noida like “Digital Xplode” is one of the most important decisions that define the business’s success. There is a clear-cut delivery of field knowledge, specific solutions, unique and effective designs, and development services in the top web development companies of Noida that guarantees that your website is a powerful revenue-growing tool. Regardless of choosing a web development agency near Delhi, it is crucial to work with experts who will listen to your idea and implement it, creating an intuitive, aesthetic, and effective website for your needs. Hiring the right web design and web development services is not something you should only consider as a mere requirement, but as an investment that helps you move closer to achieving your business objectives in today’s world.
                            </p>

                        </div>

                    </div>
                </section>


                {/* ================= FAQ ================= */}
                <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-4xl text-center font-semibold text-gray-800 mb-10">
                            Frequently Asked Questions
                        </h2>

                        {faqs.map((q, i) => (
                            <div key={i} className="border-b">

                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex justify-between items-center py-4 text-left"
                                >
                                    <span className="text-lg font-medium text-gray-800">{q.title}</span>
                                    <span className="text-gray-600">{open === i ? "-" : "+"}</span>
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