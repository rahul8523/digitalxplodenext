export default function WhyLocal() {
  const data = [
    {
      title: "1. In-Depth Understanding of the Local Market",
      desc: `A digital marketing company in Noida will always understand consumers based on their behaviour, their choice, and trends in the local markets. It allows them to launch highly localized marketing initiatives that are likely to be appreciated by the target audience in your locality and generate better results.`,
    },
    {
      title: "2. Accessibility and Communication",
      desc: `When it comes to workflow and involving various structures of communication, distance is crucial. Selecting an agency with a local office in Noida makes it possible for both to have regular meetings, updates, and discussions. Such a closeness in operations enhances the flow of communication and general teamwork and thus ensures efficient working relations.`,
    },
    {
      title: "3. Community and Network Connections",
      desc: `Local digital marketing agencies particularly work closely with businesses within Noida and thus may already have existing networks in place. These relationships can create opportunities for your business by forming strategic partnerships and alliances, joint ventures, and business opportunities for the expansion of business outlets.`,
    },
  ];

  return (
    <section className="bg-white py-5 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-12">
          Why Should One Opt for a Local Digital Company in Noida Than Any Other Company?
        </h2>

        {/* 3 Column Grid */}
        <div className="grid md:grid-cols-3 border-b border-gray-300">

          {data.map((item, index) => (
            <div
              key={index}
              className={`
                p-6 md:p-8
                ${index !== data.length - 1 ? "md:border-r border-gray-300" : ""}
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

        {/* Conclusion Section */}
        <div className="mt-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Conclusion
          </h3>

          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Selecting Digitalxplode, the best digital marketing company in Noida is not picking a vendor; it’s about identifying a partner that will take your business to the next level. Outsourcing your digital marketing needs to a reliable agency that understands the dynamics of the services in Noida means getting professional help to develop well-coordinated and efficient promotional campaigns that will elevate your brand in the digital marketplace. Make a wise decision today about your online presence and achieve your business goals successfully.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            In conclusion, it can be said that choosing the right digital marketing agency in Noida which is none other than Digitalxplode can drastically change the company’s success in the realm of the World Wide Web. Thus, by concentrating on such aspects as expertise, the specificity of the approach, tangible outcomes, as well as the advantages of local skills, you can guarantee that your money spent on digital marketing will pay off.
          </p>
        </div>

      </div>
    </section>
  );
}