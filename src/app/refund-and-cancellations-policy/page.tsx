"use client";

import {
    ShieldCheck,
    RefreshCcw,
    Ban,
    CreditCard,
    FileText,
} from "lucide-react";

export default function RefundCancellationPolicy() {
    return (

        <>
            <section className="bg-black text-white text-center py-8">
                <h1 className="text-4xl font-bold"> Refund & Cancellation Policy
                </h1>
                <p className="text-sm mt-2 text-gray-300">
                    Home &gt; Refund & Cancellation Policy

                </p>
            </section>

            <main className="bg-[#f7f8fc] overflow-hidden">

                {/* ================= INTRO ================= */}
                <section className="py-5 ">

                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                                    <ShieldCheck className="text-blue-600 w-7 h-7" />
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900">
                                    Introduction
                                </h2>
                            </div>

                            <p className="text-gray-700 leading-8 text-base md:text-lg">
                                At Digital Xplode Private Limited, we strive to ensure customer satisfaction with our services. This Refunds and Cancellations Policy outlines the circumstances under which refunds and cancellations are applicable. Please read this policy carefully.
                            </p>

                        </div>

                    </div>

                </section>

                {/* ================= INTRO ================= */}
                <section className="py-5 lg:px-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100">

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                                    <ShieldCheck className="text-blue-600 w-7 h-7" />
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900">
                                    Services Covered
                                </h2>
                            </div>

                            <p className="text-gray-700 leading-8 text-base md:text-lg">
                                This policy applies to all services provided by Digital Xplode Private Limited, including but not limited to website design and development, social media management, SEO, graphic design services, and website sales and AMC subscriptions.
                            </p>

                        </div>
                    </div>
                </section>

                {/* ================= REFUND SECTION ================= */}
                <section className="py-10 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                                <CreditCard className="w-7 h-7 text-green-600" />
                            </div>

                            <h2 className="text-4xl font-bold text-gray-900">
                                Refunds
                            </h2>
                            <p>Eligibility for Refunds:</p>

                        </div>

                        <div className="grid md:grid-cols-2 gap-8">

                            {[
                                {
                                    title: "Service Dissatisfaction:",
                                    desc:
                                        "If you are not satisfied with our services, please contact us within 15 days of the service delivery date to request a refund.",
                                },
                                {
                                    title: "Non-Delivery of Service",
                                    desc:
                                        "If the service is not delivered within the specified timeframe, you are eligible for a full refund.",
                                },
                                {
                                    title: "Completed Services",
                                    desc:
                                        "Services that have been fully delivered and approved by the client are non-refundable.",
                                },
                                {
                                    title: "Subscription Services",
                                    desc: "Services that have been fully delivered and approved by the client are non-refundable.",
                                },
                                {
                                    title: "Completed Services",
                                    desc: "Services that have been fully delivered and approved by the client are non-refundable.",
                                },
                                {
                                    title: "To Analyze Data",
                                    desc: "To monitor and analyze usage and trends to improve our website and services.",
                                },
                                {
                                    title: "Subscription Services",
                                    desc: "Payments for monthly or yearly subscriptions are non-refundable once the subscription term has commenced.",
                                },
                                {
                                    title: "Request",
                                    desc: "To request a refund, please contact us at [Your Contact Email] with your order details and the reason for the refund.",
                                },
                                {
                                    title: "Approval",
                                    desc: "Refund requests will be reviewed, and we will notify you of the approval or rejection of your refund.",
                                },
                                {
                                    title: "Processing",
                                    desc: "Approved refunds will be processed within 10-15 business days. The refund will be credited to your original method of payment.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
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

                {/* ================= PROCESS ================= */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#eef4ff]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-14">

                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Cancellations
                            </h2>


                        </div>

                        <div className="grid md:grid-cols-3 gap-8">

                            {[
                                {
                                    icon: <FileText className="w-8 h-8 text-blue-600" />,
                                    title: "Before Service Delivery",
                                    desc:
                                        "You may cancel a service at any time before it is delivered. To cancel, please contact us at info@digitalxplode.com with your order details.",
                                },
                                {
                                    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
                                    title: "After Service Delivery",
                                    desc:
                                        "Cancellations after the service has been delivered are not permitted.",
                                },
                                {
                                    icon: <RefreshCcw className="w-8 h-8 text-cyan-600" />,
                                    title: "Monthly Subscriptions",
                                    desc: "You may cancel a monthly subscription at any time. The cancellation will take effect at the end of the current billing cycle.",
                                },
                                {
                                    icon: <RefreshCcw className="w-8 h-8 text-cyan-600" />,
                                    title: "Yearly Subscriptions",
                                    desc: "You may cancel a yearly subscription at any time. However, no refunds will be provided for the remaining period of the subscription term.",
                                },

                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-all duration-300"
                                >

                                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4">
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