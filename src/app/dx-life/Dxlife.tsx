"use client";
import Image from "next/image";

type Dxlife = {
    id: number;
    title: string;
    date: string;
    category: string;
    image: string;
    desc: string;
    size?: "large" | "normal";
};

const dxlife: Dxlife[] = [
    {
        id: 1,
        title: "JimCorbett Adventure",
        date: "NOV 01, 2023",
        category: "DX LIFE",
        desc: "Create memories, not just checklists.",
        image: "/assets/fun/Untitled-2.webp",
        size: "large",
    },
    {
        id: 2,
        title: "JimCorbett Adventure",
        date: "NOV 01, 2023",
        category: "DX LIFE",
        desc: " JimCorbett Adventure Create memories, not just checklists.",
        image: "/assets/fun/second.webp",
    },
    {
        id: 3,
        title: "JimCorbett Adventure",
        date: "JAN 25, 2024",
        category: "DX LIFE",
        desc: "JimCorbett Adventure Create memories, not just checklists.",
        image: "/assets/blogs/social.jpg",
        size: "large",
    },
    {
        id: 4,
        title: "Corbett Adventure",
        date: "NOV 01, 2023",
        category: "DX LIFE",
        desc: "Create memories, not just checklists.",
        image: "/assets/blogs/diary4.png",
        size: "large",
    },
    {
        id: 5,
        title: "Social Media",
        date: "NOV 01, 2023",
        category: "DX LIFE",
        desc: "A full Landing Page design for Arena Animation.",
        image: "/assets/fun/choti.webp",


    },

    {
        id: 6,
        title: "Social Media",
        date: "NOV 01, 2023",
        category: "DX LIFE",
        desc: "A full Landing Page design for Arena Animation.",
        image: "/assets/fun/first.jpg",

    },
    {
        id: 7,
        title: "Social Media",
        date: "NOV 01, 2023",
        category: "DX LIFE",
        desc: " 6 Small but Important Things to Observe in Web Design",
        image: "/assets/fun/trip.jpg",
        size: "large",

    },
    {
        id: 8,
        title: "Social Media",
        date: "NOV 01, 2023",
        category: "DX LIFE",
        desc: "A full Landing Page design for Arena Animation.",
        image: "/assets/fun/all-log.jpg",

    },
    {
        id: 9,
        title: "Social Media",
        date: "NOV 01, 2023",
        category: "DX LIFE",
        desc: "Visual and written content and Manipulation for a washing machine with nature.",
        image: "/assets/fun/Untitled-1.jpg",
        size: "large",
    },
    {
        id: 10,
        title: "Web Design",
        date: "JULY 12, 2020",
        category: "DX LIFE",
        desc: "App to connect all doctors Pan India",
        image: "/assets/fun/sab.jpg",

    },


];

export default function Dxlife() {
    return (
        <section className="w-full pb-16 bg-gray-100">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-2 auto-rows-[250px]">

                {dxlife.map((dxlif) => (
                    <div
                        key={dxlif.id}
                        className={`relative overflow-hidden group 
            ${dxlif.size === "large" ? "md:row-span-2" : ""}`}
                    >

                        <Image
                            src={dxlif.image}
                            alt={dxlif.title}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">

                            <span className="text-sm text-gray-200">
                                {dxlif.date}
                            </span>

                            <h3 className="text-white font-semibold text-lg">
                                {dxlif.title}
                            </h3>
                            <p className="text-white text-xs">
                                {dxlif.desc}
                            </p>

                            <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1">
                                {dxlif.category}
                            </span>


                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}