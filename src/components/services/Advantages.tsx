export default function Advantages() {
  const data = [
    {
      title: "1. Enhanced Online Visibility",
      desc: `A premium digital marketing company that incorporates cutting-edge SEO methods, PPC, and content marketing to improve your online presence. Besides, this increased visibility engenders more traffic and guarantees that a brand continuously stays relevant in the digital marketplace.`,
    },
    {
      title: "2. Targeted Audience Engagement",
      desc: `Unlike conventional advertising, which aims at attaining market coverage which is having a broad client base, digital marketing seeks to have the right one. With the right social media strategy, email marketing, and producing the right content, an experienced agency takes you to potential buyers.`,
    },
    {
      title: "3. Cost-Effectiveness",
      desc: `Hiring the services of a good digital marketing firm in Noida is cheaper than keeping a full-size marketing department. The advantage of outsourcing is easy and obtain access to a specialized team of professionals without having to invest in employees and take on all of the costs associated with training and hiring new talent.`,
    },
    {
      title: "4. Scalability and Flexibility",
      desc: `It is very important to notice that different stages of business development and the market environment require a consistent change of digital marketing initiatives. Professional agency provides flexible solutions that can develop with the enterprise requirement, and use new tendencies in a field.`,
    },
  ];

  return (
    <section className="bg-white py-5 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-12">
          Advantages of Selecting the Best Digital Marketing Company in Noida
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2">

          {data.map((item, index) => (
            <div
              key={index}
              className={`
                p-6 md:p-8
                ${index % 2 === 0 ? "md:border-r border-gray-300" : ""}
                ${index < 2 ? "border-b border-gray-300" : ""}
              `}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Highlight Text */}
        <div className="mt-10 text-center max-w-4xl mx-auto">
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Choosing the{" "}
            <span className="font-semibold">
              best digital marketing company in Noida
            </span>{" "}
            ensures tailored strategies, enhanced online visibility, targeted
            audience engagement, and cost-effectiveness, maximizing business
            growth and competitiveness in the digital landscape.
          </p>
        </div>
{/* Bottom Border */}
        <div className="border-t border-gray-300 mt-10"></div>
      </div>
    </section>
  );
}