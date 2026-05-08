export default function WhyStrategy() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          Why brands need digital strategy
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Content */}
          <div className="text-gray-600 text-base leading-relaxed space-y-4">
            <p>
              Having a cohesive digital strategy enables businesses to have a firmer grip on their target audience as they have an insightful awareness about the platforms their audiences prefer to spend time on.
            </p>

            <p className="text-base">
              Plus, the capability to measure the performance of marketing tactics brings in cost-effectiveness in strategy and helps them identify the nonperforming areas.
            </p>

            <p className="text-base">
              In our journey of 2 decades strengthening businesses digitally, what we have concluded is that it always takes a tailor-made digital strategy to deliver powerful digital experiences.
            </p>

            <p className="font-semibold text-gray-800 text-lg">
              Therefore, focusing on creating digital policies, priorities and even people, we have helped hundreds of businesses globally
            </p>
          </div>

          {/* Right Timeline */}
          <div className="relative pl-10">
            
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-300" />

            {[
              "Sketching actionable digital roadmaps",
              "Designing and developing new business websites",
              "Creating hybrid and native mobile apps",
            ].map((item, i) => (
              <div key={i} className="relative mb-10">
                
                {/* Circle */}
                <div className="absolute -left-2 w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center text-2x1 font-semibold">
                  {`0${i + 1}`}
                </div>

                <p className="text-gray-700 text-2xl ml-10">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}