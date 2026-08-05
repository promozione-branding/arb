"use client";

import Link from "next/link";
import Image from "next/image";
import { labelFor } from "../../../../../data/labels";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Enquiry from "@/components/Enquiry";
import {
  ChevronRight,
  Shield,
  Grid3x3,
  ArrowLeftRight,
  Clock,
  ArrowRight,
  Download,
  Factory,
  Bike,
  Car,
  Boxes,
} from "lucide-react";
import Catpopup from "@/components/Catpopup";
export default function ProductClient({ result }) {
  const { entry, product } = result;
  const { category, subCategory } = entry;
  const [FormOpen, setFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const specifications = {
    ...(product.dimensions || {}),
    ...(product.loadRating || {}),
    ...(product.mass || {}),
  };

  const [loading, setLoading] = useState(false);
 const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !message) {
      return toast.error("Please fill all fields");
    }

    if (phone.length !== 10) {
      return toast.error("Enter a valid phone number");
    }

    try {
      setLoading(true);

      const formData = {
        platform: "ARB Bearings Product Enquiry",
        platformEmail: "yourcompany@email.com", // Change this
        name,
        phone,
        email,
        product: product.model,
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data.success) {
        toast.success("Enquiry Submitted Successfully");

        const whatsappText = `Hi,

I am ${name}

Product : ${product.model}

Phone : ${phone}

Email : ${email}

Requirement :
${message}`;

        window.open(
          `https://wa.me/919999402424?text=${encodeURIComponent(whatsappText)}`,
          "_blank",
        );

        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Submission Failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* HERO */}

      <section className="w-full px-6 mx-auto grid lg:grid-cols-2">
        {/* LEFT */}

        <div className="border-r border-slate-200">
          <div className="sticky top-24 px-10 py-14">
            <Image
              src={product.image}
              alt={product.model}
              width={700}
              height={700}
              className="w-full object-contain"
            />

            <div className="flex gap-3 mt-8">
              <span className="bg-[#28186C] text-white text-xs px-4 py-2 rounded">
                INDUSTRIAL GRADE
              </span>

              <span className="bg-[#28186C] text-white text-xs px-4 py-2 rounded">
                HIGH PRECISION
              </span>
            </div>

            <div className="mt-10 border-t pt-5">
              <p className="text-xs tracking-widest text-gray-500">MODEL NO.</p>

              <h3 className="font-bold mt-2 text-xl">{product.model}</h3>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="bg-[#edf6ff] px-10 py-14">
          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/">Home</Link>

            <ChevronRight size={12} />

            <Link href={`/products/${category.slug}`}>{category.name}</Link>

            <ChevronRight size={12} />

            <Link href={`/products/${category.slug}/${subCategory.slug}`}>
              {subCategory.name}
            </Link>

            <ChevronRight size={12} />

            <span className="font-semibold text-black">{product.model}</span>
          </div>

          <h2 className="text-4xl font-bold mb-6">
            {product.model} <span> {subCategory.name}</span>
          </h2>

              <p className="text-slate-900 leading-8">
                {subCategory.description}
              </p>


          {/* Feature Cards */}

          <div className="grid grid-cols-2 gap-4 mt-8">
            {subCategory.features?.map((feature, index) => (
              <div key={index} className="bg-white border rounded-lg p-4  ">
                <div className="mb-3">
                  {index === 0 && <Shield className="text-red-600" />}

                  {index === 1 && <Grid3x3 className="text-red-600" />}

                  {index === 2 && <ArrowLeftRight className="text-red-600" />}

                  {index > 2 && <Clock className="text-red-600" />}
                </div>

                <h3 className="font-bold text-sm mb-2">FEATURE {index + 1}</h3>

                <p className="text-md text-slate-800">{feature}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-10">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#28186C] hover:bg-[#1d1250] transition text-white rounded-lg px-7 py-3 flex items-center gap-2"
            >
              ENQUIRE NOW
              <ArrowRight size={16} />
            </button>

          
              <button
                onClick={() => setFormOpen(true)}
               
              
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg px-7 py-3 flex items-center gap-2 hover:bg-white transition"
              >
                <Download size={16} />
                BROCHURE
              </button>
           
          </div>

          {/* Tabs */}

          <div className="flex gap-10 border-b mt-16">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 border-b-2 transition ${
                activeTab === "overview"
                  ? "border-red-600"
                  : "border-transparent"
              }`}
            >
              PRODUCT OVERVIEW
            </button>

            <button
              onClick={() => setActiveTab("downloads")}
              className={`pb-4 border-b-2 transition ${
                activeTab === "downloads"
                  ? "border-red-600"
                  : "border-transparent"
              }`}
            >
              DOWNLOADS
            </button>
          </div>
          {/*  OVERVIEW  */}

          {activeTab === "overview" && (
            <div className="py-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                About {subCategory.name}
              </h2>

              <p className="text-slate-600 leading-8">
                {subCategory.description}
              </p>

              {subCategory.features?.length > 0 && (
                <>
                  <hr className="my-10" />

                  <h3 className="text-2xl font-bold mb-6">Product Features</h3>

                  <ul className="space-y-4">
                    {subCategory.features.map((feature, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-600 mt-3" />

                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {subCategory.applications?.length > 0 && (
                <>
                  <hr className="my-12" />

                  <h3 className="text-3xl font-bold mb-8">
                    Industrial Applications
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {subCategory.applications.map((item, index) => (
                      <div
                        key={index}
                        className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:bg-[#28186C] hover:border-[#1C398E]"
                      >
                        <div className="mb-2 text-sm font-semibold tracking-[0.25em] text-[#1C398E] transition-all group-hover:text-white/70">
                          {(index + 1).toString().padStart(2, "0")}
                        </div>

                        <h3 className="text-lg font-semibold leading-7 text-slate-900 transition-all group-hover:text-white">
                          {item}
                        </h3>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {activeTab === "downloads" && (
            <div className="py-14">
              <h2 className="text-3xl font-bold mb-8">Downloads</h2>

            
                <button onClick={() => setFormOpen(true)}
                 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border rounded-xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div>
                    <h4 className="font-semibold">Product Datasheet</h4>

                    <p className="text-sm text-gray-500">PDF Document</p>
                  </div>

                  <Download size={24} />
                </button>
           
            </div>
          )}
        </div>
      </section>

      {/* ======================================================
          SPECIFICATIONS + ENQUIRY FORM
          Paste the next part here
      ====================================================== */}

      <section className="py-10 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-[#6A1F2B] mb-13">
            Product Specifications
          </h2>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Specifications */}

            <div className="lg:col-span-3">
              <div className="bg-white rounded-[30px] shadow-xl border border-slate-200 p-10">
                <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-6">
                  Technical Details
                </p>

                {Object.entries(specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-2 py-5 border-b border-dashed"
                  >
                    <h4 className="font-medium text-slate-700">
                      {labelFor(key)}
                    </h4>

                    <p className="text-right font-bold text-[#6A1F2B]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry */}

            <div className="lg:col-span-2">
              <div className="bg-white rounded-[30px] shadow-2xl border p-8">
                <h2 className="text-3xl font-bold mb-2">Submit Your Enquiry</h2>

                <p className="text-gray-500 mb-4">
                  Our team will contact you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 ">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-14 border rounded-xl px-4 outline-none focus:border-[#28186C]"
                    required
                  />

                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Phone Number"
                    className="w-full h-14 border rounded-xl px-4 outline-none focus:border-[#28186C]"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 border rounded-xl px-4 outline-none focus:border-[#28186C]"
                    required
                  />

                  <input
                    type="text"
                    value={product.model}
                    readOnly
                    className="w-full h-14 border rounded-xl px-4 bg-gray-50"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Requirement"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border rounded-xl p-4 outline-none focus:border-[#28186C]"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-xl bg-[#28186C] text-white font-semibold hover:bg-[#1f1455] transition disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>





{FormOpen && (
  <Catpopup
    Onpen={FormOpen}
    onClose={() => setFormOpen(false)}
  />
)}

    {isFormOpen && (
        <Enquiry
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}



    </div>
  );
}
