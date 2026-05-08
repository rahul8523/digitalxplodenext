export default function MarketplaceCTA() {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Ready to Scale Your Online Marketplace?
          </h3>
          <p className="text-sm text-gray-300">
            Get in touch with us today to start driving better results.
          </p>
        </div>

        <button className="border border-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
          Start a project →
        </button>

      </div>
    </section>
  );
}