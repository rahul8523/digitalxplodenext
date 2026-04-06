"use client";
import Image from "next/image";

type Blog = {
    id: number;
    title: string;
    date: string;
    category: string;
    image: string;
    desc: string;
    size?: "large" | "normal";
};

const blogs: Blog[] = [
    {
        id: 1,
        title: "Social Media",
        date: "NOV 01, 2023",
        category: "View Portfolio",
        desc: "To meet the needs of homeowners worldwide, Kohler Co. maintains a six-continent distribution and service network.",
        image: "/assets/blogs/trip.png",
        size: "large",
    },
    {
        id: 2,
        title: "Pinterest Marketing",
        date: "SEPT 11, 2023",
        category: "Blog",
        desc: "Pinterest Marketing: Take Your Website to New Heights",
        image: "/assets/blogs/pinterest.jpg",
    },
    {
        id: 3,
        title: "Corbett Adventure",
        date: "JAN 25, 2024",
        category: "DX LIFE",
        desc: "Corbett Adventure Create memories, not just checklists.",
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
        category: "Case Study",
        desc: "A full Landing Page design for Arena Animation.",
        image: "/assets/blogs/diary6.png",


    },

    {
        id: 6,
        title: "Social Media",
        date: "AUG 19, 2023",
        category: "Blog",
        desc: "Tactics to Get More Leads",
        image: "/assets/blogs/meme.jpg",

    },
    {
        id: 7,
        title: "Social Media",
        date: "NOV 01, 2023",
        category: "Case Study",
        desc: "A full Landing Page design for Arena Animation.",
        image: "/assets/blogs/diary6.png",
        size: "large",

    },
    {
        id: 7,
        title: "Blog",
        date: "AUG 15, 2023",
        category: "Blog",
        desc: "Why Should everybody Employ Digital Marketing Techniques for their Business?",
        image: "/assets/blogs/socia.jpg",

    },
    {
        id: 8,
        title: "Case Study",
        date: "JULY 12, 2020",
        category: "Case Study",
        desc: "App to connect all doctors Pan India",
        image: "/assets/blogs/lakme.webp",
        size: "large",
    },
    {
        id: 9,
        title: "Case Study",
        date: "NOV 01, 2023",
        category: "Case Study",
        desc: "Visual and written content and Manipulation for a washing machine with nature.",
        image: "/assets/blogs/sbl.webp  ",

    },


];

export default function BlogSection() {
    return (
        <section className="w-full py-10 bg-gray-100">

            <h2 className="text-center text-4xl md:text-5xl text-black font-bold mb-10">
                From Our Diary
            </h2>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-2 auto-rows-[250px]">

                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className={`relative overflow-hidden group 
            ${blog.size === "large" ? "md:row-span-2" : ""}`}
                    >

                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">

                            <span className="text-sm text-gray-200">
                                {blog.date}
                            </span>

                            <h3 className="text-white font-semibold text-lg">
                                {blog.title}
                            </h3>
                            <p className="text-white text-xs">
                                {blog.desc}
                            </p>

                            <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1">
                                {blog.category}
                            </span>


                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}