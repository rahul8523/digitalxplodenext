"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      title: "How Does Our Graphic Design Agency in Noida Boost Brand Recognition?",
      desc: "Our Graphic Design Agency in Noida specializes in designing graphics that suit your brand's identity. We work on designing visuals that stand for your company's nature yet maintain consistency across every platform, whether online or offline. From logos to marketing collateral, we create designs that help people recognize and engage with your business. A strong, consistent design differentiates your brand, encourages trust and encourages customer loyalty."
    },
    {
      title: "What Should I Expect From a Graphic Design Company in Noida?",
      desc: "When working with our Graphic Design Company in Noida, you will get customized strategies to all of your design requirements. We work together with your team to understand your vision and business objectives. Our designers specialize in designing anything from corporate branding to engaging social media posts, ensuring that your message is communicated effectively and aesthetically. Expect professional designs that look fantastic while also efficiently communicating your brand's message."
    },
    {
      title: "How Can Our Graphic Design Services in Noida Help With Digital Marketing?",
      desc: "Graphic design plays a significant role in digital marketing, and our Graphic Design Services in Noida serve to improve your online presence. We come up with eye-catching and engaging designs for websites, social media, email campaigns, and other platforms. We apply strategic design features for better click-through rates, improve user experience, and make your marketing efforts more effective. Our goal is to improve the performance of your digital campaigns by marrying creativity with marketing expertise."
    },
    {
      title: "How Do Good Graphic Designs Influence Customer Perception?",
      desc: "First impression is the last impression, and excellent graphic design influences how customers judge the company you run. Our Graphic Design Services in Noida guarantee that every visual part of your company, from brochures to digital marketing, is polished and professional. Well-designed visuals generate credibility, making your brand look more trustworthy and reputable. This can help to impact consumer decisions and increase conversions."
    },
    {
      title: "Why Is It Important to Update Your Brand’s Visuals?",
      desc: "In today's fast-paced digital era, old-fashioned designs could prove your brand irrelevant. Our Graphic Design Company in Noida keeps your brand's looks up-to-date and modern. Whether you want a rebrand or changes to your existing stuff, we ensure that your company stays competitive and visually appealing. Regularly improving your designs maintains your brand relevant to industry trends and changing client expectations, allowing you to stay relevant and ahead of the competition."
    }
  ];

  return (

    <>

      <section className="bg-black text-white text-center py-8">
        <h1 className="text-4xl font-bold"> Graphic Design Company in Noida </h1>
        <p className="text-sm mt-2 text-gray-300">
          Home &gt; Graphic Design Company in Noida
        </p>
      </section>



      <main className="bg-white text-gray-900">

        {/* ================= HERO ================= */}
        <section className="py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

            <Image
              src="/assets/graphic/hero.jpg"
              alt=""
              width={600}
              height={400}
              className="rounded-lg"
            />

            <div>
              <h1 className="text-3xl font-semibold mb-4">
                Design that doesn't just look good, it gets results
              </h1>

              <p className="text-gray-600 text-base leading-relaxed">
                As we are living in a world that revolves around the internet and technology, graphics designing is very crucial in creating a brand image that engages the customers and also helps in conveying a message to the target group. While the climate of the city may not encourage radical concepts, entering the best graphic design agency partnership is vital for businesses in Noida – a thriving and developing Indian economic hub. In this article, you will see its relevance to choose the best Graphic Design Agency in Noida which is significant to determine the path of business success, brand appeal, and continuous development.
              </p>
            </div>

          </div>
        </section>

        {/* ================= CONTENT BLOCK ================= */}
        <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto space-y-6">

            <h2 className="text-3xl font-semibold">
              Why opt for Graphic Design Agency in Noida?
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Noida is an emerging city that is now the epitome of technological advancements, art, and trade. There are several graphic design agencies in this city that have distinct offers and premiership of certain skills and experience. Whether one is a young start company that wants to carve out an own image locally or an existing business that wants to revise and improve its graphic communication approach, Noida is home to numerous talented a graphic designer who can come up with solutions that are as unique as the needs of the business.
            </p>

            <h3 className="text-xl font-semibold">
              Advantages of Selecting the Best Graphic Design Company in Noida-
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              Working with a number one graphic design agency in Noida means that a agency would be brought to the table combined with crucial trends and technologies to suit graphic design needs. These agencies use personnel who are conversant with graphic design, typography, colour, and basic layout, so as to make each design to reflect the kind of company you have and is appealing to the market you intend to sell your products. With adequate mastery of design software and adopting the right techniques, these agencies can help translate your ideas into suitable realities that suit your brand to set high standards on various platforms including prints and multimedia.
            </p>

            <h3 className="text-xl font-semibold">
              Custom Services Meeting Each Clients Requirement-
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              Leading graphic design agencies in Noida provide a range of services that include Graphic Designing, Logo Designing, Web Designing, Search Engine Optimization, Content Writing, and e-Commerce Solutions. Whether you require logo design, brand identity development, marketing collateral creation, or website design, these agencies provide tailored solutions that align with your brand's objectives and market positioning. Their ability to customize designs ensures that every visual asset reflects your brand's values and communicates your message effectively to your target audience. This tailored approach not only enhances brand consistency but also strengthens brand loyalty and fosters long-term customer relationships.
            </p>

          </div>
        </section>

        {/* ================= FACTORS ================= */}
        <section className="py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto">

            <h2 className="text-3xl font-semibold mb-10">
              Factors to Consider When Hiring Graphic Design Agency
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">
                  1. Portfolio and Track Record:
                </h3>
                <p className="text-base text-gray-600">
                  As with any graphic design agency, when selecting one in Noida, a review of the portfolio and previous work is valuable. It will therefore be beneficial to look for an agency that displays a range of projects which are diverse enough to show that the agency is not only versatile and innovative, but also capable of achieving the desired outcomes across multiple industries and designs.
                </p>
                <p className="text-base text-gray-600">
                  Stay focused on the quality of the work, idea, and the general organization of design concepts, and the ability to convey the identity of every brand they are working for. That is why a solid portfolio is a great indication not only of the expertise in particular applications, but also their ability to bring the brand concept to life through creative, engaging designs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">
                  2. Client Testimonials and Reviews:
                </h3>
                <p className="text-base text-gray-600">
                  The various reviews and testimonials from the clients are so important in giving a clear insight of the reputation, reliability and satisfaction level of the agency. These positive sentiments left by previous clients give testimony to the professionalism of the agency involved, their clear communication, great project management skills, and the fact that they deliver before the stipulated time and sometimes even go beyond expectations. Thus, using the information found in client feedback and reviews gives more insights and possibilities of the agency’s expertise, possible drawbacks, and client satisfaction level. With this information, you can determine which graphic design service provider serves the needs of your business and shares the same values.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= WHY QUALITY ================= */}
        <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto space-y-16">

            <h2 className="text-3xl font-semibold mb-10">
              Why Quality Graphic Design Services Matter
            </h2>

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <Image
                src="/assets/graphic/branding.png"
                alt=""
                width={500}
                height={350}
                className="rounded-lg"
              />

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  1. Enhanced Brand Identity:
                </h3>
                <p className="text-gray-600 text-base mb-2">
                  To succeed in the current economic climate and to target a diverse audience it is crucial to ensure that your business has a well-designed and integrated brand image. Repetition enhances company identity and creates an emotional connection with the clientele by using similar graphic design patterns, colour combinations, typefaces, and overall appearance.
                </p>

                <p className="text-gray-600 text-base">
                  A quality graphic design agency in Noida can be useful in not only creating a unique brand image that can capture the identity of your business but also in continually updating it to reflect the culture, vision, and individual selling propositions of the company. Their experience in logo design or management of brand elements for products and services helps in making sure that every piece of promotional material is cohesively intermeshed with the brand concept and hence appeals to the consumer as well as further enhancing brand equity.
                </p>
              </div>

            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  2. Increased Engagement and Conversion Rates:
                </h3>
                <p className="text-gray-600 text-base">
                  A good graphic design has a great potential to draw the attention of the viewer, encourage specific emotions, and make the consumer act as needed. From aesthetically appealing social media posts, easy to navigate website, and remarkable advertisement creative, the right and quality graphic for any product boost the user experience, engagement and lead to higher conversion rates. Utilizing design elements including the organization of art elements, utilizing images within a story and practicing user-centered design, a reputed graphic design services in Noida can greatly enhance the effectiveness of your marketing communications. Through effective graphic storytelling your brand’s messages reach the market with influence, making it easier for you to engage the customer and make something happen.
                </p>
              </div>

              <Image
                src="/assets/graphic/engagement.jpg"
                alt=""
                width={500}
                height={350}
                className="rounded-lg"
              />

            </div>

          </div>
        </section>

        {/* ================= CONCLUSION ================= */}
        <section className="py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

            <Image
              src="/assets/graphic/conclusion.jpg"
              alt=""
              width={500}
              height={350}
              className="rounded-lg"
            />

            <div>
              <h2 className="text-4xl font-semibold mb-4">Conclusion:</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-2">
                Selecting the right graphic design agency in Noida like DigitalXplode is not simply a business call, it is an investment in your organizational graphic identity, competition mapping, and business growth. It is notable that through cooperation with the most appropriate graphic design company that possesses both ideas and experience, the companies in Noida open new possibilities, increase their visibility to the target clients, and develop successful cooperation with them.
              </p>

              <p className="text-gray-600 text-base leading-relaxed mb-2">
                It is essential to open your eyes and mind to how graphic design can be used to set your brand apart from your competitors and demonstrate the value that your product or service brings to the lives of your customers so that your business can thrive in the current market. Choosing the perfect graphic design agency is therefore minimal when you consider the benefits of creating a brand that stands out, captures the consumer’s attention and ultimately makes the desired impact on consumers hence the right business impact.
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