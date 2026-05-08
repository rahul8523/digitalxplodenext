import TeamCard from "@/components/squard/TeamCard";
import { teamMembers } from "@/components/data/team";

export default function Home() {
    return (

        <>
            {/* HERO */}
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold">DX Squad</h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; DX Squad
                </p>
            </section>

            <main className="bg-gray-100 min-h-screen py-12 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} {...member} />
                        ))}
                    </div>

                </div>
            </main>

        </>
    );
}