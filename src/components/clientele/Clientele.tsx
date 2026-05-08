import ClientCard from "./ClientCard";
import { clients } from "@/components/data/clients";

export default function Clientele() {
  return (
    <>
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Grid */}
          <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-4 
          xl:grid-cols-4
          gap-6
        ">
            {clients.map((client, index) => (
              <ClientCard key={index} {...client} />
            ))}
          </div>

        </div>
      </section>


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