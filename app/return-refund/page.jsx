import React from "react";
import {
  RotateCcw,
  ShieldCheck,
  PackageX,
  BadgeDollarSign,
  RefreshCw,
  Truck,
  Ban,
  Mail,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Return & Refund Policy | ARB Bearings",
  description:
    "Review the ARB Bearings return, replacement, cancellation, and refund policy.",
};

const policySections = [
  {
    number: "1",
    title: "Return Eligibility",
    icon: RotateCcw,
    items: [
      "The product received is damaged during transit.",
      "An incorrect product or quantity is delivered.",
      "The product does not match the confirmed order specifications.",
      "Return requests must be submitted within 24–48 hours of delivery.",
    ],
  },
  {
    number: "2",
    title: "Non-Returnable Items",
    icon: PackageX,
    items: [
      "Opened or partially used products.",
      "Products stored improperly after delivery.",
      "Customized or made-to-order products.",
      "Products damaged due to customer mishandling.",
    ],
  },
  {
    number: "3",
    title: "Return Process",
    icon: RefreshCw,
    items: [
      "Contact our support team within the eligible return period.",
      "Share order details with photos or videos of the issue.",
      "Our team will review your request.",
      "If approved, return instructions will be provided.",
    ],
  },
  {
    number: "4",
    title: "Refund Policy",
    icon: BadgeDollarSign,
    items: [
      "Refunds are processed after inspection and approval.",
      "Approved refunds will be processed within 7–10 business days.",
      "Refunds will be credited via the original payment method or an agreed method.",
    ],
  },
  {
    number: "5",
    title: "Replacement Policy",
    icon: ShieldCheck,
    items: [
      "We may offer a replacement of the product.",
      "An alternative product may be offered.",
      "A refund may be provided, depending on the case.",
      "All replacement or refund decisions depend on damage, defect, or order accuracy verification.",
    ],
  },
  {
    number: "6",
    title: "Return Shipping",
    icon: Truck,
    items: [
      "If the issue is from our side, ARB Bearings will bear the shipping cost.",
      "Otherwise, return shipping may be the customer's responsibility.",
    ],
  },
  {
    number: "7",
    title: "Order Cancellation",
    icon: Ban,
    items: [
      "Orders can be cancelled before dispatch without charges.",
      "Post-dispatch cancellation may not be accepted.",
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
              Return &amp; Refund Policy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Clear product return, replacement, cancellation, and refund guidelines
              for every ARB Bearings order.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-600">
            ARB Bearings is committed to safe delivery and maintaining product quality.
            Our experienced team carefully handles every order, ensuring proper
            packaging, dispatch, and compliance with safety standards. Due to the nature
            of industrial and bearing products, this policy protects product quality,
            safety, and compliance while supporting customer satisfaction.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {policySections.map(({ number, title, icon: Icon, items }) => (
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

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                <ShieldCheck className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  08
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">Important Notes</h2>
              </div>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "Follow proper storage and handling guidelines.",
                "Claims without proof may not be approved.",
                "Always follow all supplied safety instructions.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              09
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              For return, replacement, or refund queries, contact ARB Bearings.
            </p>

            <div className="mt-6 space-y-4">
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
