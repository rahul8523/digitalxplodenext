"use client";

import {
    FileText,
    Shield,
    CreditCard,
    Lock,
    Ban,
    Scale,
    RefreshCcw,
    Gavel,
} from "lucide-react";

export default function TermsConditionsPage() {
    return (


        <>

            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Terms & Conditions
                </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Terms & Conditions

                </p>
            </section>

            <main className="bg-[#f7f9fc] overflow-hidden">


                {/* ================= INTRODUCTION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">

                        <div className="flex items-center gap-4 mb-6">

                            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                                <Shield className="w-7 h-7 text-blue-600" />
                            </div>

                            <h2 className="text-3xl font-bold text-gray-800">
                                Introduction
                            </h2>

                        </div>

                        <p className="text-gray-700 leading-8 text-base md:text-lg">
                            Welcome to Digital Xplode Private Limited. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree to these terms, you should not use our website or services.
                        </p>

                    </div>

                </section>

                {/* ================= SERVICES OFFERED ================= */}
                <section className="py-10 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-4xl font-bold text-gray-800 mb-10">
                            Services Offered
                        </h2>

                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">

                            <p className="text-gray-700 leading-8 text-base md:text-lg">
                                Digital Xplode Private Limited provides a variety of digital services including website design and development, social media management, SEO, graphic design services, and website sales and AMC on a subscription model. The specifics of each service will be outlined in the respective service agreements
                            </p>


                        </div>

                    </div>

                </section>

                {/* ================= USER RESPONSIBILITIES ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#eef5ff]">

                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-4xl font-bold text-gray-800 mb-10">
                            User Responsibilities
                        </h2>
                        <p className="text-gray-600 leading-8">
                            Accuracy of Information: Users must ensure that all information provided is accurate and up-to-date. Compliance: Users must comply with all applicable laws and regulations in connection with their use of our services. Prohibited Activities: Users are prohibited from engaging in any unlawful activities or any activities that could harm Digital Xplode Private Limited or its reputation.
                        </p>

                    </div>

                </section>

                {/* ================= PAYMENT TERMS ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center gap-4 mb-10">

                            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                                <CreditCard className="w-7 h-7 text-green-600" />
                            </div>

                            <h2 className="text-4xl font-bold text-gray-800">
                                Payment Terms
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-3 gap-8">

                            {[
                                {
                                    title: "Fees",
                                    desc:
                                        "All fees for services provided by Digital Xplode Private Limited will be outlined in the service agreement.",
                                },
                                {
                                    title: "Payment Schedule",
                                    desc:
                                        "Payment schedules will be specified in the service agreement. Failure to make timely payments may result in suspension or termination of services.",
                                },
                                {
                                    title: "Refunds",
                                    desc:
                                        "Refund policies will be specified in the individual service agreements.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                                >

                                    <h3 className="text-2xl text-gray-800 font-semibold mb-5">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-8">
                                        {item.desc}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* ================= SUBSCRIPTION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#eef5ff]">

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                            <div className="flex items-center gap-4 mb-6">
                                <RefreshCcw className="w-8 h-8 text-cyan-600" />

                                <h2 className="text-3xl font-bold text-gray-800">
                                    Subscription Model
                                </h2>
                            </div>

                            <p className="text-gray-700 leading-8">
                                Website and AMC Subscription: Subscriptions for website and AMC services are available on a monthly or yearly basis. Specific terms, including pricing and renewal conditions, will be detailed in the subscription agreement. Cancellation: Subscribers may cancel their subscription at any time. However, no refunds will be provided for the remaining period of the subscription term.
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                            <div className="flex items-center gap-4 mb-6">
                                <Ban className="w-8 h-8 text-red-600" />

                                <h2 className="text-3xl font-bold text-gray-800">
                                    Cancellation
                                </h2>
                            </div>

                            <p className="text-gray-700 leading-8">
                                Subscribers may cancel their subscription at any time. However, no refunds will be provided for the remaining period of the subscription term.
                            </p>

                        </div>

                    </div>

                </section>

                {/* ================= INTELLECTUAL PROPERTY ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center gap-4 mb-10">

                            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                                <Lock className="w-7 h-7 text-purple-600" />
                            </div>

                            <h2 className="text-4xl font-bold text-gray-800">
                                Intellectual Property
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                                <h3 className="text-2xl font-semibold mb-5 text-gray-800">
                                    Ownership
                                </h3>

                                <p className="text-gray-700 leading-8">
                                    All content, trademarks, and data on the Digital Xplode Private Limited website are the property of Digital Xplode Private Limited unless otherwise st
                                </p>

                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                                <h3 className="text-2xl font-semibold mb-5 text-gray-800">
                                    Usage Rights
                                </h3>

                                <p className="text-gray-700 leading-8">
                                    Users are granted a limited license to access and use the content for personal, non-commercial purposes. Any other use requires prior written permission from Digital Xplode Private Limited.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= CONFIDENTIALITY ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#0f172a] text-white">

                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                <Shield className="w-7 h-7 text-cyan-400" />
                            </div>

                            <h2 className="text-4xl font-bold ">
                                Confidentiality
                            </h2>

                        </div>

                        <p className="text-gray-300 leading-8 text-base md:text-lg">
                            Digital Xplode Private Limited agrees to keep all client information confidential and will not disclose any such information to third parties without the client's consent, except as required by la
                        </p>

                    </div>

                </section>

                {/* ================= LIABILITY ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center gap-4 mb-10">

                            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                                <Scale className="w-7 h-7 text-orange-600" />
                            </div>

                            <h2 className="text-4xl font-bold text-gray-800">
                                Limitation of Liability
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                                <h3 className="text-2xl font-semibold mb-5 text-gray-800">
                                    No Warranty
                                </h3>

                                <p className="text-gray-700 leading-8">
                                    Digital Xplode Private Limited makes no warranties or representations about the accuracy or completeness of the website’s content or the content of any sites linked to this site.
                                </p>

                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                                <h3 className="text-2xl font-semibold mb-5 text-gray-800">
                                    Limitation
                                </h3>

                                <p className="text-gray-700 leading-8">
                                    In no event shall Digital Xplode Private Limited be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or our services.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= TERMINATION ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#eef5ff]">

                    <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">

                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Termination
                        </h2>

                        <p className="text-gray-700 leading-8 text-base md:text-lg">
                            Digital Xplode Private Limited reserves the right to terminate or suspend any user’s access to the website or services without notice, for conduct that Digital Xplode Private Limited believes violates these Terms and Conditions or is harmful to other users of the website, Digital Xplode Private Limited, or third parties, or for any other reason at its sole discretion.
                        </p>

                    </div>

                </section>

                {/* ================= AMENDMENTS ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                            <div className="flex items-center gap-4 mb-5">
                                <RefreshCcw className="w-7 h-7 text-cyan-600" />

                                <h2 className="text-3xl font-bold text-gray-800">
                                    Amendments
                                </h2>
                            </div>

                            <p className="text-gray-700 leading-8">
                                Digital Xplode Private Limited reserves the right to amend these Terms and Conditions at any time. Users are encouraged to review the Terms and Conditions periodically for any changes. Continued use of the website and services following any changes constitutes acceptance of those changes.
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                            <div className="flex items-center gap-4 mb-5">
                                <Gavel className="w-7 h-7 text-blue-600" />

                                <h2 className="text-3xl font-bold text-gray-800">
                                    Governing Law
                                </h2>
                            </div>

                            <p className="text-gray-700 leading-8">
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Noida,UttarPradesh.
                            </p>

                        </div>
                    </div>
                </section>
            </main>

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