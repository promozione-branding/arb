import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Banner */}
            <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700">
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative mx-auto flex min-h-[280px] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                            ARB Bearings
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Privacy Policy
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                            Learn how ARB Bearings collects, uses, protects, and manages your
                            personal information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
                    <p className="mb-8 text-base leading-8 text-gray-600">
                        ARB Bearings values your privacy and is committed to handling your
                        personal information responsibly with the utmost care. This Data
                        Protection Policy outlines our practices for collecting, using,
                        disclosing, and securing your data when you visit our website or
                        engage with our products and services. By continuing to use our
                        services, you acknowledge and agree to the practices described in
                        this statement.
                    </p>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">
                            Legal Requirements
                        </h2>
                        <p className="text-base leading-8 text-gray-600">
                            We may disclose your information if required by law or in
                            response to valid legal requests, such as subpoenas or court
                            orders. Additionally, we may disclose your information if we
                            believe that such action is necessary to protect the rights,
                            property, or safety of ARB Bearings, our users, or others. This
                            may include sharing information with law enforcement, legal
                            advisors, or other third parties as needed.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">
                            Data Security
                        </h2>
                        <p className="text-base leading-8 text-gray-600">
                            We implement a variety of security measures, including encryption
                            and access controls, to maintain the safety of your personal
                            information. However, please be aware that no method of
                            transmission over the Internet or electronic storage is completely
                            secure. While we strive to protect your data, we cannot guarantee
                            absolute security.
                        </p>

                        <p className="mt-4 text-base leading-8 text-gray-600">
                            We encourage you to take steps to protect your own information,
                            such as using strong passwords and being cautious of phishing
                            attempts. Our security practices are reviewed and updated
                            periodically to address evolving risks and vulnerabilities.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-5 text-2xl font-bold text-gray-900">
                            Your Rights
                        </h2>

                        <p className="mb-4 text-base leading-8 text-gray-600">
                            You have the right to:
                        </p>

                        <ul className="space-y-4">
                            <li className="flex gap-3 text-base leading-7 text-gray-600">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                <span>
                                    <strong className="text-gray-900">
                                        Access, Update, or Delete Your Personal Information:
                                    </strong>{" "}
                                    You may request access to, update, or delete your personal
                                    information at any time.
                                </span>
                            </li>

                            <li className="flex gap-3 text-base leading-7 text-gray-600">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                <span>
                                    <strong className="text-gray-900">
                                        Object to or Restrict Processing:
                                    </strong>{" "}
                                    You have the right to object to or request the restriction of
                                    our processing of your personal information.
                                </span>
                            </li>

                            <li className="flex gap-3 text-base leading-7 text-gray-600">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                <span>
                                    <strong className="text-gray-900">
                                        Withdraw Consent:
                                    </strong>{" "}
                                    If we process your data based on consent, you can withdraw
                                    your consent at any time.
                                </span>
                            </li>

                            <li className="flex gap-3 text-base leading-7 text-gray-600">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                <span>
                                    <strong className="text-gray-900">
                                        Lodge a Complaint:
                                    </strong>{" "}
                                    You have the right to lodge a complaint with a supervisory
                                    authority if you believe that your privacy rights have been
                                    violated.
                                </span>
                            </li>
                        </ul>

                        <p className="mt-6 text-base leading-8 text-gray-600">
                            To exercise these rights, please contact us at{" "}
                            <a
                                href="mailto:info@arb-bearings.com"
                                className="font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                            >
                                info@arb-bearings.com
                            </a>
                            . We will respond to your request in accordance with applicable
                            laws. For users in international jurisdictions, please refer to
                            specific local regulations that may apply.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">
                            Changes to This Privacy Policy
                        </h2>

                        <p className="text-base leading-8 text-gray-600">
                            We may update this Privacy Policy from time to time. Any changes
                            will be posted on this page, and the "Effective Date" at the top
                            will be updated accordingly. We encourage you to review this
                            Privacy Policy periodically to stay informed about how we are
                            protecting your information. Your continued use of our website or
                            services after any changes signifies your acceptance of the
                            updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-gray-900">
                            Contact Us
                        </h2>

                        <p className="mb-5 text-base leading-8 text-gray-600">
                            If you have any questions or concerns about this Privacy Policy or
                            our data protection practices, please contact us at:
                        </p>

                        <div className="rounded-xl bg-gray-50 p-6">
                            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:gap-4">
                                <span className="font-semibold text-gray-900">Email:</span>
                                <a
                                    href="mailto:info@arb-bearings.com"
                                    className="text-blue-700 hover:underline"
                                >
                                    info@arb-bearings.com
                                </a>
                            </div>

                            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                                <span className="font-semibold text-gray-900">Phone:</span>
                                <a
                                    href="tel:7-9859834837"
                                    className="text-blue-700 hover:underline"
                                >
                                    +7-9859834837
                                </a>
                                <span className="hidden text-gray-400 sm:inline">|</span>
                                <a
                                    href="tel:91-7834872136"
                                    className="text-blue-700 hover:underline"
                                >
                                    +91-7834872136
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;