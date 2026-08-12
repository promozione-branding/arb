
"use client";

import Link from "next/link";
import Image from "next/image";
import { labelFor } from "../../../../../data/labels";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Enquiry from "@/components/Enquiry";
import CursorZoomImage from "@/components/CursorZoomImage";
import {
  ChevronRight,


  Shield,
  Grid3x3,
  ArrowLeftRight,
  Clock,
  ArrowRight,
  Download,
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
        platformEmail: "yourcompany@email.com",
        name,
        phone,
        email,
        product: product.model,
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
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
          `https://wa.me/919999402424?text=${encodeURIComponent(
            whatsappText
          )}`,
          "_blank"
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
    <div className="min-h-screen  bg-[#f8fafc]">
      

      <section className="mx-auto grid w-full grid-cols-1 px-4 sm:px-6 lg:grid-cols-2 lg:px-6">
       

        <div className="border-r-0 border-slate-200 lg:border-r">
          <div
            className="
              sticky
              top-10
              px-0
              py-8
              sm:px-4
          
              md:px-6
              lg:px-10
              
            "
          >
          <div
  className="
    group
    relative
    mx-auto
    w-full
    overflow-hidden
    rounded-[30px]
    bg-white
    p-3

    sm:p-5
    md:p-7
    lg:p-8
  "
>
  {/* Background Glow */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-48
      w-48
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#28186C]/10
      blur-3xl
      transition-all
      duration-700
      group-hover:h-72
      group-hover:w-72
      group-hover:bg-[#28186C]/15
    "
  />

  {/* Decorative Ring */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[70%]
      w-[70%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-[#28186C]/5
      transition-all
      duration-700
      group-hover:scale-110
      group-hover:border-[#28186C]/10
    "
  />

  {/* Cursor Zoom */}

  <div
    className="
      relative
      z-10
      h-[360px]
      w-full
      sm:h-[460px]
      md:h-[520px]
      lg:h-[600px]
    "
  >
    <CursorZoomImage
      src={product.image}
      alt={product.model}
      zoom={1.35}
      className="
        drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)]
        transition-[filter]
        duration-500
        group-hover:drop-shadow-[0_30px_50px_rgba(40,24,108,0.22)]
      "
    />
  </div>

  {/* Premium Shine */}

 
  {/* Zoom Label */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-5
      right-5
      z-30
      rounded-full
      border
      border-slate-200
      bg-white/90
      px-4
      py-2
      text-[10px]
      font-semibold
      tracking-[0.15em]
      text-slate-600
      opacity-0
      shadow-lg
      backdrop-blur-md
      transition-all
      duration-300
      group-hover:translate-y-0
      group-hover:opacity-100
      translate-y-2
      sm:text-xs
    "
  >
    MOVE TO EXPLORE
  </div>
</div>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
                sm:mt-8
                sm:gap-3
              "
            >
              <span className="rounded bg-[#28186C] px-3 py-2 text-[10px] text-white sm:px-4 sm:text-xs">
                INDUSTRIAL GRADE
              </span>

              <span className="rounded bg-[#28186C] px-3 py-2 text-[10px] text-white sm:px-4 sm:text-xs">
                HIGH PRECISION
              </span>
            </div>

            <div className="mt-7 border-t pt-5 sm:mt-10">
              <p className="text-[10px] tracking-widest text-gray-500 sm:text-xs">
                MODEL NO.
              </p>

              <h3 className="mt-2 break-words text-lg font-bold sm:text-xl">
                {product.model}
              </h3>
            </div>
          </div>
        </div>

      

        <div className="bg-[#edf6ff] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-14">
         

          <div
            className="
              mb-5
              flex
              flex-wrap
              items-center
              gap-x-1.5
              gap-y-2
              text-xs
              text-gray-500
              sm:mb-6
              sm:gap-2
              sm:text-sm
            "
          >
            <Link href="/" className="shrink-0">
              Home
            </Link>

            <ChevronRight size={12} className="shrink-0" />

            <Link
              href={`/products/${category.slug}`}
              className="max-w-[130px] truncate sm:max-w-none"
            >
              {category.name}
            </Link>

            <ChevronRight size={12} className="shrink-0" />

            <Link
              href={`/products/${category.slug}/${subCategory.slug}`}
              className="max-w-[150px] truncate sm:max-w-none"
            >
              {subCategory.name}
            </Link>

            <ChevronRight size={12} className="shrink-0" />

            <span className="max-w-[180px] truncate font-semibold text-black sm:max-w-none">
              {product.model}
            </span>
          </div>

          <h2
            className="
              mb-5
              break-words
              text-2xl
              font-bold
              leading-tight
              sm:mb-6
              sm:text-3xl
              md:text-4xl
            "
          >
            {product.model} <span>{subCategory.name}</span>
          </h2>

          <p className="text-sm leading-7 text-slate-900 sm:text-base sm:leading-8">
            {subCategory.description}
          </p>


          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-3
              min-[480px]:grid-cols-2
              sm:mt-8
              sm:gap-4
            "
          >
            {subCategory.features?.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border bg-white p-4"
              >
                <div className="mb-3">
                  {index === 0 && (
                    <Shield className="text-red-600" size={22} />
                  )}

                  {index === 1 && (
                    <Grid3x3 className="text-red-600" size={22} />
                  )}

                  {index === 2 && (
                    <ArrowLeftRight className="text-red-600" size={22} />
                  )}

                  {index > 2 && (
                    <Clock className="text-red-600" size={22} />
                  )}
                </div>

                <h3 className="mb-2 text-xs font-bold sm:text-sm">
                  FEATURE {index + 1}
                </h3>



                <p className="break-words text-sm text-slate-800 sm:text-base">
                  {feature}
                </p>

                
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-3
              sm:mt-10
              sm:flex-row
              sm:flex-wrap
              sm:gap-4
            "
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#28186C]
                px-7
                py-3
                text-sm
                text-white
                transition
                hover:bg-[#1d1250]
                sm:w-auto
              "
            >
              ENQUIRE NOW
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setFormOpen(true)}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                px-7
                py-3
                text-sm
                transition
                hover:bg-white
                sm:w-auto
              "
            >
              <Download size={16} />
              BROCHURE
            </button>
          </div>

       

          <div
            className="
              mt-12
              flex
              w-full
              gap-7
              overflow-x-auto
              border-b
              scrollbar-hide
              sm:mt-16
              sm:gap-10
            "
          >
            <button
              onClick={() => setActiveTab("overview")}
              className={`
                shrink-0
                pb-3
                text-xs
                font-medium
                transition
                sm:pb-4
                sm:text-sm
                ${
                  activeTab === "overview"
                    ? "border-b-2 border-red-600"
                    : "border-b-2 border-transparent"
                }
              `}
            >
              PRODUCT OVERVIEW
            </button>

            <button
              onClick={() => setActiveTab("downloads")}
              className={`
                shrink-0
                pb-3
                text-xs
                font-medium
                transition
                sm:pb-4
                sm:text-sm
                ${
                  activeTab === "downloads"
                    ? "border-b-2 border-red-600"
                    : "border-b-2 border-transparent"
                }
              `}
            >
              DOWNLOADS
            </button>
          </div>

     

          {activeTab === "overview" && (
            <div className="py-8 sm:py-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:mb-5 sm:text-3xl">
                About {subCategory.name}
              </h2>

              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {subCategory.description}
              </p>

              {subCategory.features?.length > 0 && (
                <>
                  <hr className="my-8 sm:my-10" />

                  <h3 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
                    Product Features
                  </h3>

                  <ul className="space-y-4">
                    {subCategory.features.map((feature, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />

                        <span className="break-words text-sm text-slate-700 sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {subCategory.applications?.length > 0 && (
                <>
                  <hr className="my-9 sm:my-12" />

                  <h3 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
                    Industrial Applications
                  </h3>

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-3
                      min-[480px]:grid-cols-2
                      lg:grid-cols-4
                      sm:gap-5
                    "
                  >
                    {subCategory.applications.map((item, index) => (
                      <div
                        key={index}
                        className="
                          group
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white
                          p-4
                          transition-all
                          duration-300
                          hover:border-[#1C398E]
                          hover:bg-[#28186C]
                          sm:p-4
                        "
                      >
                        <div className="mb-2 text-sm font-semibold tracking-[0.25em] text-[#1C398E] transition-all group-hover:text-white/70">
                          {(index + 1).toString().padStart(2, "0")}
                        </div>

                        <h3 className="break-words text-base font-semibold leading-6 text-slate-900 transition-all group-hover:text-white sm:text-lg sm:leading-7">
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
            <div className="py-10 sm:py-14">
              <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
                Downloads
              </h2>

              <button
                onClick={() => setFormOpen(true)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  rounded-xl
                  border
                  bg-white
                  p-4
                  text-left
                  transition
                  hover:shadow-lg
                  sm:p-6
                "
              >
                <div className="min-w-0">
                  <h4 className="break-words font-semibold">
                    Product Datasheet
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    PDF Document
                  </p>
                </div>

                <Download
                  size={22}
                  className="shrink-0 sm:h-6 sm:w-6"
                />
              </button>
            </div>
          )}
        </div>
      </section>



      <section className="bg-gradient-to-b from-white to-slate-100 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2
            className="
              mb-9
              text-center
              text-3xl
              font-bold
              text-[#6A1F2B]
              sm:mb-12
              sm:text-4xl
              lg:mb-13
              lg:text-5xl
            "
          >
            Product Specifications
          </h2>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-5 lg:gap-10">
           

            <div className="lg:col-span-3">
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-xl
                  sm:rounded-[30px]
                  sm:p-7
                  md:p-10
                "
              >
                <p className="mb-5 text-xs uppercase tracking-[2px] text-gray-400 sm:mb-6 sm:text-sm sm:tracking-[3px]">
                  Technical Details
                </p>

                {Object.entries(specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="
                      grid
                      grid-cols-1
                      gap-1
                      border-b
                      border-dashed
                      py-4
                      sm:grid-cols-2
                      sm:gap-4
                      sm:py-5
                    "
                  >
                    <h4 className="break-words text-sm font-medium text-slate-700 sm:text-base">
                      {labelFor(key)}
                    </h4>

                    <p className="break-words text-left text-sm font-bold text-[#6A1F2B] sm:text-right sm:text-base">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry */}

            <div className="lg:col-span-2">
              <div
                className="
                  rounded-2xl
                  border
                  bg-white
                  p-5
                  shadow-2xl
                  sm:rounded-[30px]
                  sm:p-7
                  md:p-8
                "
              >
                <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
                  Submit Your Enquiry
                </h2>

                <p className="mb-5 text-sm text-gray-500 sm:mb-4">
                  Our team will contact you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 w-full rounded-xl border px-4 text-sm outline-none focus:border-[#28186C]"
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
                    className="h-14 w-full rounded-xl border px-4 text-sm outline-none focus:border-[#28186C]"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 w-full rounded-xl border px-4 text-sm outline-none focus:border-[#28186C]"
                    required
                  />

                  <input
                    type="text"
                    value={product.model}
                    readOnly
                    className="h-14 w-full rounded-xl border bg-gray-50 px-4 text-sm"
                  />

                  <textarea
                    rows={4}
                    placeholder="Your Requirement"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border p-4 text-sm outline-none focus:border-[#28186C]"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      h-14
                      w-full
                      rounded-xl
                      bg-[#28186C]
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#1f1455]
                      disabled:opacity-50
                    "
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

