import MarketplaceHero from "@/components/services/MarketplaceHero";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import WhyChoose from "@/components/services/WhyChoose";
import MarketplaceCTA from "@/components/services/MarketplaceCTA";

export default function Page() {
    return (
        <>

            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold">Marketplace Management Services</h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Marketplace Management Services
                </p>
            </section>

            <MarketplaceHero />
            <WhatWeOffer />
            <WhyChoose />
            <MarketplaceCTA />

                {/* LOGOS */}
            <section className="bg-white py-10">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
                    <img src="/assets/partners/client-1.png" className="h-13" />
                    <img src="/assets/partners/client-2.png" className="h-13" />
                    <img src="/assets/partners/client-3.png" className="h-13" />
                    <img src="/assets/partners/client-4.png" className="h-13" />
                    <img src="/assets/partners/client-5.png" className="h-13" />
                    <img src="/assets/partners/client-6.png" className="h-13" />

                </div>
            </section>
        </>
    );
}