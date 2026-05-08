import StrategyHero from "@/components/strategy/StrategyHero";
import DigitalStrategy from "@/components/strategy/DigitalStrategy";
import WhyStrategy from "@/components/strategy/WhyStrategy";

export default function StrategyPage() {
    return (
        <>
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold">Strategic Planning</h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Strategic Planning
                </p>
            </section>
            <StrategyHero />
            <DigitalStrategy />
            <WhyStrategy />
        </>
    );
}