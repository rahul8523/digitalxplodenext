export default function WhyChoose() {
    const data = [
        {
            title: "Experience Across Major Platforms",
            desc: "Our team has a proven track record of managing successful stores on Amazon, eBay, Walmart, and other popular marketplaces.",
        },
        {
            title: "Custom Strategies Tailored to Your Brand",
            desc: "We don’t believe in a one-size-fits-all approach. We customize our marketplace strategies to meet your unique business goals and industry requirements.",
        },
        {
            title: "End-to-End Management",
            desc: "From initial setup to ongoing optimization and support, we provide comprehensive management solutions, allowing you to focus on scaling your business.",
        },
        {
            title: "Dedicated Team of Experts",
            desc: "Our specialists are not only skilled in marketplace management but also in digital marketing strategies, helping you integrate a holistic approach to drive sales across all channels.",
        },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-semibold mb-2 text-gray-900 text-center"> Why Choose Us? </h2>
                <p className="text-gray-700 text-sm mb-12 text-center">
                    Partnering with Digital Xplode for your website maintenance and design needs offers numerous benefits, including
                </p>

                <div className="grid md:grid-cols-4 border-t border-gray-300">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className={`p-6 md:p-8 ${i !== data.length - 1 ? "md:border-r border-gray-300" : ""
                                }`}
                        >
                            <h3 className="font-semibold mb-3 text-2xl text-gray-900">{item.title}</h3>
                            <p className="text-base text-gray-900">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}