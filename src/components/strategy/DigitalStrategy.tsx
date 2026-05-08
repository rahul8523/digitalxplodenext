import Image from "next/image";

export default function DigitalStrategy() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          Digital Strategy
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div>
            <Image
              src="/assets/strategy/strategy.png"
              alt="strategy"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
              We’re called Xplode for one simple reason – ability to lead the next generation enterprises in the digital-first business era.
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              As a formidable branding and digital agency, we provide strategic value for companies, brands, and future-driven projects through digital strategies that are the key to any organization's future viability.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Our digital strategy focuses on how businesses can ideate, innovate and create new strategies and business models to thrive in the digital age.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}