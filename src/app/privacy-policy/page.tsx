"use client";

import {
    ShieldCheck,
    Lock,
    Database,
    Globe,
    FileText,
    Eye,
} from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <>

            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Privacy Policy
                </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Privacy Policy

                </p>
            </section>

            <main className="bg-[#f7f9fc] overflow-hidden">


                {/* ================= INTRO ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">

                            <div className="flex items-center gap-4 mb-6">

                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                                    <FileText className="w-7 h-7 text-blue-600" />
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900">
                                    Introduction
                                </h2>

                            </div>

                            <p className="text-gray-700 leading-8 text-base md:text-lg">
                                Digital Xplode Private Limited ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the site or use our services.
                            </p>

                        </div>

                    </div>

                </section>

                {/* ================= INFORMATION WE COLLECT ================= */}
                <section className="py-10 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center gap-4 mb-10">

                            <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
                                <Database className="w-7 h-7 text-cyan-600" />
                            </div>

                            <h2 className="text-4xl font-bold text-gray-900">
                                Information We Collect
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-2 gap-8">

                            {[
                                {
                                    title: "Personal Data",
                                    desc:
                                        "We may collect personally identifiable information, such as your name, email address, phone number, and other contact details when you voluntarily provide it to us.",
                                },
                                {
                                    title: "Payment Information",
                                    desc:
                                        "If you purchase our services, we may collect payment details such as credit card information and billing addresses.",
                                },
                                {
                                    title: "Usage Data",
                                    desc:
                                        "We may collect information about your interaction with our website and services, including IP addresses, browser types, pages viewed, and the dates/times of visits.",
                                },
                                {
                                    title: "Cookies",
                                    desc:
                                        "We may use cookies and similar tracking technologies to track the activity on our website and hold certain information.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                                >

                                    <h3 className="text-2xl font-semibold mb-5 text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        {item.desc}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* ================= HOW WE USE ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#eef5ff]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                                <Eye className="w-7 h-7 text-green-600" />
                            </div>

                            <h2 className="text-4xl font-bold text-gray-900">
                                How We Use Your Information
                            </h2>
                            <p>We use the information we collect in the following ways:</p>

                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {[
                                {
                                    title: "To Provide and Maintain Services",
                                    desc: "To deliver and manage our services to you."
                                },
                                { title: "To Improve Our Services", desc: "To enhance and personalize your experience." },
                                { title: "To Communicate", desc: "To send you updates, marketing information, and respond to your inquiries." },
                                { title: "To Process Transactions", desc: "To process your payments and manage your orders." },
                                { title: "To Analyze Data", desc: "To monitor and analyze usage and trends to improve our website and services." },
                                { title: "To Enforce Policies", desc: "To enforce our terms and conditions and comply with legal obligations." },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300"
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
                                        <ShieldCheck className="w-7 h-7 text-cyan-600" />
                                    </div>

                                    <h3 className="text-2xl font-semibold text-cyan-800 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        {item.desc}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* ================= SHARING ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center gap-4 mb-10">

                            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                                <Globe className="w-7 h-7 text-orange-600" />
                            </div>

                            <h2 className="text-4xl font-bold text-gray-900">
                                Sharing Your Information
                            </h2>
                            <p>We may share your information in the following circumstances:</p>

                        </div>

                        <div className="grid md:grid-cols-3 gap-8">

                            {[
                                {
                                    title: "With Service Providers",
                                    desc:
                                        "To third-party vendors and service providers who perform services on our behalf.",
                                },
                                {
                                    title: "For Legal Reasons",
                                    desc:
                                        "If required by law or in response to legal processes. With Your Consent: When you provide explicit consent for us to share your information.",
                                },

                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
                                >

                                    <h3 className="text-2xl font-semibold text-cyan-800 mb-5">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-700 leading-8">
                                        {item.desc}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* ================= SECURITY ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#0f172a] text-white">

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                        <div>

                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <Lock className="w-8 h-8 text-cyan-400" />
                            </div>

                            <h2 className="text-4xl font-bold mb-6">
                                Data Security
                            </h2>

                            <p className="text-gray-300 leading-8 text-base md:text-lg">
                                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                            <h3 className="text-3xl font-semibold mb-6">
                                Your Data Protection Rights
                            </h3>
                            <p>
                                Depending on your location, you may have the following rights regarding your personal data:
                            </p>

                            <div className="space-y-5 text-gray-300 leading-8">

                                <p>
                                    <span className="font-semibold text-white">Access:</span>
                                    You can request access to the personal data we hold about you.
                                </p>

                                <p>
                                    <span className="font-semibold text-white">Rectification:</span>
                                    You can request that we correct any inaccuracies in your personal data.
                                </p>

                                <p>
                                    <span className="font-semibold text-white">Data Portability:</span>
                                    You can request a copy of your personal data in a structured, commonly used, and machine-readable format.
                                </p>

                                <p>
                                    <span className="font-semibold text-white">Objection:</span>
                                    You can object to the processing of your personal data. To exercise these rights, please contact us at info@digitalxplode.com.
                                </p>


                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= THIRD PARTY ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20">

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                            <h2 className="text-3xl font-bold mb-6 text-cyan-800">
                                Third-Party Links
                            </h2>

                            <p className="text-gray-700 leading-8">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these third-party websites. Please review the privacy policies of any third-party sites you visit
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                            <h2 className="text-3xl font-bold mb-6 text-cyan-800">
                                Changes to This Privacy Policy
                            </h2>

                            <p className="text-gray-700 leading-8">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Changes are effective immediately upon posting.
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