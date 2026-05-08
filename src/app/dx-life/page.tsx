"use client";

import Dxlife from "./Dxlife";
import DxLifeHeader from "@/components/DxLifeHeader";

export default function Home() {
  return (
    <>
     

      {/* Existing Section */}
      <section className="bg-black text-white text-center py-8">
        <h1 className="text-4xl font-bold">DX Squad</h1>
        <p className="text-sm mt-2 text-gray-300">
          Home &gt; DX Squad
        </p>
      </section>
  
      <DxLifeHeader />
      <Dxlife />

             {/* LOGOS */}
            <section className="bg-white py-10">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 opacity-70">
                    <img src="assets/partners/client-1.png" className="h-13" />
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