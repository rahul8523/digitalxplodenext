"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function ExcellenceSection() {
    return (
        <section className="w-full bg-[#f3f3f3] sm:py-10 py-6 px-6 md:px-20">

            <div className="max-w-7xl mx-auto grid md:grid-cols-[30%_70%] gap-12 items-start">

                {/* LEFT SIDE */}
                <div className="flex flex-col items-start">

                    <h2 className="text-[90px] md:text-[120px] font-medium leading-none text-black">
                        8+
                    </h2>

                    <p className="text-lg font-medium text-black mt-2">
                        Years Experience
                    </p>

                    {/* NAV BUTTONS */}
                    <div className="flex gap-6 mt-10 w-full justify-end">

                        <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group hover:bg-black transition">
                            <ArrowLeft size={22} className="text-black group-hover:text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group hover:bg-black transition">
                            <ArrowRight size={22} className="text-black group-hover:text-white" />
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="max-w-5xl">

                    <h3 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                        Empowering Growth <br /> Through Digital Excellence
                    </h3>

                    <p className="text-black mt-6 leading-relaxed">
                        At our full-service digital agency, we're proud to bring over 8 years of experience,
                        during which we've had the privilege of serving more than 565 clients and generating
                        over 1000 Crore+ in revenue. Our journey in the digital landscape has been marked by
                        success stories, strategic partnerships, and a relentless commitment to driving
                        growth for our clients.
                    </p>

                    {/* KNOW MORE */}
                    <div className="flex items-center gap-3 mt-6 cursor-pointer group">

                        <span className="text-sm tracking-wide font-semibold text-black">
                            KNOW MORE
                        </span>

                        <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                            <ArrowUpRight size={22} className="text-black group-hover:text-white" />
                        </div>

                    </div>

                    {/* RATING CARDS */}
                    <div className="flex flex-row sm:gap-6 gap-2 mt-10">

                        {/* GOOGLE */}
                        <div className="bg-black text-white px-8 py-5 rounded-2xl flex items-center gap-4">

                            <Image
                                src="/assets/rateus/google-rating.svg"
                                alt="google"
                                width={200}
                                height={200}
                            />


                        </div>

                        {/* CLUTCH */}
                        <div className="bg-black text-white px-8 py-5 rounded-2xl flex items-center gap-4">

                            <Image
                                src="/assets/rateus/rating.svg"
                                alt="clutch"
                                width={200}
                                height={200}
                            />



                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}