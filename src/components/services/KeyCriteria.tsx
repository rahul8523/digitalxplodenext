export default function KeyCriteria() {
  const data = [
    {
      title: "1. Expertise and Experience",
      desc: `Working with a professional digital marketing company in Noida means working with people who have multiple years of working experience and industry insights. When choosing the agencies always focus on those that have experience in executing successful marketing campaigns, especially in your industry of operation. This way they are knowledgeable about the modern trends in digital marketing, customers’ behavior, and all those strategies that may prove effective in the Noida market only.`,
    },
    {
      title: "2. Comprehensive Service Offerings",
      desc: `A reliable digital marketing company provides you with the necessary services to fit your enterprise requirements. Supporting services such as SEO, PPC campaigns, social media management, and content generation make for a holistic management solution for the digital portfolio.`,
    },
    {
      title: "3. Customized Strategies",
      desc: `As you may know, each business is unique and may need an individual approach to using digital marketing. Every good digital marketing firm in Noida is going to invest a considerable amount of time in the research of your business and marketing goals, your target audience, and the industry. They then come up with personalized communication plans that will be appealing to your targeted audience and which will have definable outcomes.`,
    },
    {
      title: "4. Proven Results and Case Studies",
      desc: `It is essential to take some time when hiring a digital marketing agency by checking on their portfolio and testimonials. Examples of successful campaigns show that they are effective tools as they can bring substantial changes for the stated goals. More transparency in reporting and analytics also supports the idea of how they can help in achieving and sometimes, even surpassing clients’ expectations.`,
    },
  ];

  return (
    <section className="bg-white py-5 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-12">
          Key Criteria for Choosing the Best Digital Marketing Company in Noida:
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
      {/* Bottom Border */}
        <div className="border-t border-gray-300 mt-10"></div>
      </div>
      
    </section>
  );
}