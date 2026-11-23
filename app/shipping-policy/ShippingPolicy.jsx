"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Clock3,
  PackageCheck,
  Truck,
  Mail,
  Phone,
  Send,
} from "lucide-react";

export default function ShippingPolicy() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        platform: "arb website enquiry Form",
        platformEmail: "export@arb-bearings.com",
        name: form.name,
        phone: form.phone,
        email: form.email || "N/A",
        place: form.location || "N/A",
        product: "Shipping Inquiry",
        message: form.message || "Shipping information request",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data.success) {
        toast.success("Inquiry submitted successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
        });
      } else {
        toast.error("Submission failed.");
      }
    } catch (error) {
      toast.error("Unable to submit your inquiry. Please call or email us.");
    } finally {
      setLoading(false);
    }
  };

  const highlights = [
    {
      icon: Clock3,
      title: "2–5 Business Days",
      text: "Standard order processing after payment and order confirmation.",
    },
    {
      icon: Truck,
      title: "Safe Dispatch",
      text: "Trusted logistics partners and specialized carriers for heavy machinery.",
    },
    {
      icon: PackageCheck,
      title: "Tracked Delivery",
      text: "Tracking or transport information shared after dispatch.",
    },
  ];

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
              Shipping Policy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Safe, transparent, and reliable delivery of every ARB Bearings product.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto -mt-10 max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Icon className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-900">1. Order Processing</h2>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                <li>All orders are processed after confirmation of payment and order details.</li>
                <li><strong className="text-slate-900">Standard processing time:</strong> 2–5 business days, depending on product availability and customization.</li>
                <li>Processing time for bulk or customized machinery may vary and will be communicated in advance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">2. Shipping &amp; Delivery Time</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-blue-700">Metro Cities</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">5–7 Days</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-blue-700">Other Locations</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">7–14 Days</p>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Remote or rural areas may require additional delivery time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">3. Shipping Charges</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Shipping charges are calculated based on product weight and packaging,
                delivery location, and mode of transport. Final charges will be shared
                during order confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">4. Delivery Method</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We work with trusted logistics partners for safe and reliable delivery.
                Heavy machinery may be transported using specialized carriers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">5. Order Tracking</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Once your order is dispatched, tracking details or transport information
                will be shared via phone or email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">6. Delivery Guidelines</h2>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                <li>The customer or an authorized representative must be available at the delivery location.</li>
                <li>Customers should arrange unloading equipment such as cranes or forklifts if required.</li>
                <li>Please inspect the product carefully upon delivery for any visible damage.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">7. Damaged or Delayed Shipments</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Report damaged products within <strong className="text-slate-900">24 hours</strong>,
                along with photos or videos for verification. Delivery delays caused by
                weather, transportation issues, strikes, or other unforeseen events may occur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">8. Service Availability</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We currently ship across India. For international orders, please contact us
                directly to discuss availability and shipping options.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky md:top-34 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">Shipping Help</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Need details about an order or delivery location?
              </p>
              <div className="mt-5 space-y-4">
                <a href="mailto:export@arb-bearings.com" className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-700">
                  <Mail className="h-5 w-5 text-blue-700" />
                  export@arb-bearings.com
                </a>
                <a href="tel:+919968373086" className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-700">
                  <Phone className="h-5 w-5 text-blue-700" />
                  +91 99683 73086
                </a>
               
              </div>
            </div>

            
          </aside>
        </div>
      </section>
    </main>
  );
}
