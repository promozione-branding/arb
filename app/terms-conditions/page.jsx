import React from "react";
import {
  Globe,
  PackageCheck,
  CreditCard,
  Truck,
  RotateCcw,
  Scale,
  Copyright,
  RefreshCcw,
  Mail,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | ARB Bearings",
  description:
    "Read the terms and conditions governing ARB Bearings website use, orders, payments, delivery, returns, and policies.",
};

const termsSections = [
  {
    number: "1",
    title: "Use of Website",
    icon: Globe,
    items: [
      "You agree to use this website for lawful purposes only.",
      "You must not misuse, disrupt, or attempt unauthorized access.",
      "All content is for informational and commercial use only.",
    ],
  },
  {
    number: "2",
    title: "Product Information",
    icon: PackageCheck,
    items: [
      "We strive to ensure accurate product details and pricing.",
      "Minor variations may occur due to manufacturing or display.",
      "We reserve the right to update product details at any time.",
    ],
  },
  {
    number: "3",
    title: "Orders & Payments",
    icon: CreditCard,
    items: [
      "Orders are confirmed only after successful payment.",
      "We reserve the right to cancel or refuse any order.",
      "Pricing and availability are subject to change without notice.",
    ],
  },
  {
    number: "4",
    title: "Shipping & Delivery",
    icon: Truck,
    items: [
      "Delivery timelines are estimates and may vary.",
      "Delays due to external factors are not under our control.",
      "Refer to our Shipping Policy for detailed information.",
    ],
  },
  {
    number: "5",
    title: "Returns & Refunds",
    icon: RotateCcw,
    items: [
      "Returns are subject to our Return & Refund Policy.",
      "Certain items may not be eligible for return.",
      "Refunds are processed after inspection and approval.",
    ],
  },
  {
    number: "6",
    title: "Limitation of Liability",
    icon: Scale,
    items: [
      "ARB Bearings shall not be liable for indirect, incidental, or consequential damages arising from the use of our products or services.",
      "Any liability is limited to the maximum extent permitted by applicable law.",
    ],
  },
  {
    number: "7",
    title: "Intellectual Property",
    icon: Copyright,
    items: [
      "All content on this website, including text, images, logos, and graphics, is the property of ARB Bearings.",
      "Website content may not be reproduced or used without prior permission.",
    ],
  },
  {
    number: "8",
    title: "Policy Updates",
    icon: RefreshCcw,
    items: [
      "We reserve the right to update these terms at any time.",
      "Changes become effective once posted on this page.",
      "Continued use of the website signifies acceptance of updated terms.",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.25),transparent_38%)]" />
        <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              ARB Bearings
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Terms governing your use of the ARB Bearings website, products,
              and services.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-600">
            Welcome to ARB Bearings. By using our website, purchasing our
            products, or engaging with our services, you agree to the following
            terms and conditions. Please read them carefully before proceeding.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {termsSections.map(({ number, title, icon: Icon, items }) => (
            <section
              key={number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    {number.padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">{title}</h2>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              09
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              For any questions regarding these terms, please contact ARB Bearings.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:export@arb-bearings.com"
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                <Mail className="h-5 w-5 shrink-0 text-blue-700" />
                export@arb-bearings.com
              </a>
              <a
                href="tel:+919968373086"
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                <Phone className="h-5 w-5 shrink-0 text-blue-700" />
                +91-9968373086
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
