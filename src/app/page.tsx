import BlogSection from "@/components/home/BlogSection";
import ClientsSection from "@/components/home/ClientsSection";
import ExcellenceSection from "@/components/home/ExcellenceSection";
import HeroSlider from "@/components/home/HeroSlider";
import LifeDX from "@/components/home/LifeDX";
import Partners from "@/components/home/Partners";
import PortfolioSection from "@/components/home/PortfolioSection";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSlider />
      <Partners/>
      <ExcellenceSection/>
      <PortfolioSection/>
      <ClientsSection/>
      <LifeDX/>
      <BlogSection/>
      
      {/* Agle sections yahan aayenge */}
      <section className="py-20 px-10 text-center">
        <h2 className="text-white text-3xl font-bold">Our Excellence</h2>
        <p className="text-gray-500 mt-4">More content coming soon...</p>
      </section>
    </div>
  );
}