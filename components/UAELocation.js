"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Hospital } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductsSlider from "@/components/ProductsSlider";

import IndustriesSection from "@/components/IndustriesSection";

import { ChevronDown } from "lucide-react";
import NavbarA from "./UAE-ads/NavbarU";
import FooterU from "./UAE-ads/FooterU";


const cityNames = {
  dubai: "دبي",
  "abu-dhabi": "أبوظبي",
  sharjah: "الشارقة",
  ajman: "عجمان",
  uae: "الإمارات العربية المتحدة",
};

const Location = () => {
  const [active, setActive] = useState(0);
  const params = useParams();
  const citySlug = params?.location?.includes("-in-")
    ? params.location.split("-in-")[1]
    : "uae";
  const city = cityNames[citySlug] ?? "الإمارات العربية المتحدة";



const faqs = [
    {
      question: "من هو مورد المحامل الموثوق في {city}؟",
      answer:
        "تُعد ARB Bearings موردًا ذا خبرة، وتوفر محامل عالية الجودة ومصممة بدقة للعملاء في {city} والأسواق الدولية.",
    },
    {
      question: "ما أنواع المحامل التي توفرها ARB Bearings؟",
      answer:
        "توفر ARB Bearings مجموعة واسعة من المحامل الكروية والأسطوانية عالية الجودة، بما في ذلك المحامل الكروية ذات الأخدود العميق، والمحامل الأسطوانية المخروطية والأسطوانية، ومحامل البكرات الكروية والإبرية ومحامل الدفع، للاستخدامات الصناعية والسيارات والزراعة والسكك الحديدية والتعدين وغيرها من التطبيقات الشاقة.",
    },
    {
      question: "هل تصدّر ARB Bearings المحامل إلى {city}؟",
      answer:
        "نعم، توفر ARB Bearings حلول المحامل للعملاء في {city} وتصدّرها إليهم، مع تغليف آمن ودعم موثوق للتوصيل الدولي.",
    },
    {
      question:
        "هل توفر ARB Bearings محامل لتطبيقات صناعية محددة؟",
      answer:
        "نعم. تناسب حلول المحامل لدينا تطبيقات السيارات والتعدين والزراعة والبناء وتوليد الطاقة وصناعة الصلب ومختلف أنواع الآلات الصناعية.",
    },
    {
      question:
        "كيف يمكنني طلب عرض سعر للمحامل من ARB Bearings؟",
      answer:
        "يمكنك التواصل مع فريق ARB Bearings وتزويده بنوع المحمل المطلوب ومقاسه وكميته وتفاصيل الاستخدام للحصول على معلومات المنتج وعرض سعر.",
    },
  ];


    return (
        <div dir="rtl" lang="ar">

           <NavbarA />
        
  
            <div>
                <section
                    id="home"
                    style={{
                        backgroundImage: "url('/ctabg.jpg')",
                        backgroundSize: "cover",
                        objectPosition: "center",
                    }}
                    className="py-20 relative z-10"
                >
                    <div className="absolute inset-0 bg-gray-900/60" />

                    <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-20 capitalize md:text-6xl">
                       مورد المحامل في {city}
                    </h1>
                </section>
            </div>





         <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-15">
  <div className="mx-auto max-w-7xl  ">
    <div className="grid items-center gap-16 lg:grid-cols-2">
     
      <div>
        <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1 text-sm font-semibold tracking-wide text-red-600">
          موثوقون حول العالم
        </span>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1B2A41] ">
          مورد رائد للمحامل في {city}
        </h2>

        <p className="mt-3 text-lg  text-slate-900">
          تُعد ARB Bearings موردًا معروفًا للمحامل على مستوى العالم، وتقدم حلولًا
          عالية الأداء للعملاء في {city} والأسواق الدولية. وبفضل عقود من الخبرة
          الهندسية وإمكانات التصنيع المتقدمة والالتزام الراسخ بالجودة، نصنع
          محامل مصممة بدقة لتلبي المتطلبات الصارمة للصناعات الحديثة. ونخدم
          قطاعات السيارات والتعدين والبناء والزراعة وتوليد الطاقة والصلب
          والهندسة الثقيلة. وتحظى محاملنا بالثقة لما تتميز به من متانة استثنائية
          ودقة وقدرة عالية على تحمل الأحمال وعمر تشغيلي طويل. يُصنع كل منتج من
          مواد خام ممتازة وباستخدام تقنيات إنتاج متقدمة لضمان أداء ثابت حتى في
          أقسى ظروف التشغيل.
        </p>

    

       
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {[
            "تشكيلة واسعة من المنتجات",
            "تصنيع داخلي",
          
          ].map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="font-semibold text-[#1B2A41]">{item}</h3>
            </div>
          ))}
        </div>
      </div>


     
      <div className="relative">
        <div className="absolute top-10 -left-10 h-48 w-48 rounded-full bg-red-100 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-blue-100 blur-3xl"></div>

        <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-2xl">
          <div className="mb-6 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            مصممة بدقة هندسية
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#1B2A41]">
            أداء متميز بفضل المحامل المناسبة
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            من الاستخدامات القياسية إلى المتطلبات الصناعية الشاقة، تقدم ARB
            Bearings حلول محامل مصممة بدقة لتوفر الأداء والمتانة والموثوقية.
          </p>

          <button className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#1B2A41]">
            احصل على حل للمحامل
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

           <section className="relative overflow-hidden bg-white py-15">
  
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-50 blur-3xl"></div>
    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl"></div>
  </div>

  <div className="relative mx-auto w-full px-6 lg:px-18">

    <div className="mx-auto max-w-5xl text-center">
      <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold tracking-wide text-red-600">
        لماذا تختارنا
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#1B2A41] ">
        لماذا تُعد ARB Bearings الخيار المناسب لاحتياجاتك من المحامل؟
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-900">
        اختر ARB Bearings موردًا موثوقًا للمحامل في {city}، مع حلول مصممة بدقة
        وموثوقة وعالية الأداء.
      </p>
    </div>

    
    <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {[
        {
          title: "مواد عالية الجودة",
          description:
            "توفر المواد الممتازة المتانة والقوة والأداء طويل الأمد للمحامل.",
        },
        {
          title: "هندسة دقيقة",
          description:
            "تضمن المحامل المصممة بدقة تشغيلًا سلسًا واحتكاكًا أقل وموثوقية عالية.",
        },
        {
          title: "رقابة صارمة على الجودة",
          description:
            "يُفحص كل محمل بعناية للحفاظ على جودة وأداء متسقين.",
        },
        {
          title: "خبرة عالمية في التصدير",
          description:
            "بصفتنا موردًا ذا خبرة للمحامل، نقدم حلولًا عالية الجودة للأسواق العالمية.",
        },
     
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
        >
      
          

         
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

         
          <h3 className="mt-8 text-xl font-bold text-[#1B2A41]">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-800">
            {item.description}
          </p>

       
          <div className="mt-8 h-1 w-16 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>



 <div id="product">
   <ProductsSlider isArabic />
 </div>

<section id="contact" className="relative overflow-hidden bg-gradient-to-r from-[#1B2A41] via-[#23384D] to-[#1B2A41] py-5">
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-red-600/20 blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
  </div>

  <div className="relative mx-auto  px-6 lg:px-8">
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl lg:p-10">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
            ابدأ اليوم
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white ">
            هل تبحث عن مورد موثوق للمحامل في {city}؟
          </h2>

          <p className="mt-3 text-lg leading-8 text-slate-200">
            احصل على محامل عالية الجودة ومصممة بدقة من ARB Bearings. سواء كنت
            بحاجة إلى محامل قياسية أو حلول متخصصة أو كميات كبيرة، فإن فريقنا
            مستعد لمساعدتك في اختيار المحمل المناسب لتطبيقك.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1B2A41]"
          >
            اطلب عرض سعر
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

            <IndustriesSection isArabic />

          <section className="bg-white py-14">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      
   
      <div>
        <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
          تميز في التصنيع
        </span>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1B2A41] ">
          تصنيع دقيق. جودة موثوقة.
        </h2>

        <p className="mt-3 text-lg leading-8 text-slate-600">
          بصفتها موردًا موثوقًا للمحامل في {city}، تتبع ARB Bearings عملية
          تصنيع دقيقة لتقديم حلول محامل موثوقة ومتينة وعالية الأداء. من المواد
          الخام الممتازة إلى الفحص النهائي والتغليف، تخضع كل مرحلة لرقابة دقيقة
          لضمان جودة متسقة.
        </p>

        <div className="mt-4 space-y-3">
          {[
            {
              title: "مواد خام ممتازة",
              desc: "نستخدم مواد خام مختارة بعناية لضمان القوة والمتانة وثبات أداء المحامل.",
            },
            {
              title: "تصنيع دقيق",
              desc: "بصفتنا موردًا ذا خبرة للمحامل، نستخدم آلات متقدمة وعمليات تصنيع حديثة لتحقيق دقة الأبعاد وثبات جودة الإنتاج.",
            },
            {
              title: "معالجة حرارية مضبوطة",
              desc: "تعزز عمليات المعالجة الحرارية المتخصصة قوة المحامل ومتانتها وقدرتها على تحمل ظروف التشغيل الشاقة.",
            },
           
          ].map((item, index) => (
            <div
              key={index}
              className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-red-500 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 font-bold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1B2A41]">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">

        {/* Decorative Border */}
        <div className="absolute -left-6 -top-6 h-full w-full rounded-[32px] border-2 border-red-200"></div>

        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src="/istockphoto-1203599074-612x612.jpg"
            alt="تصنيع محامل بدقة عالية"
            className="h-[620px] w-full object-contain"
          />

          {/* Floating Stats */}
          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">
            <p className="text-4xl font-bold text-red-600">60+</p>
            <p className="mt-1 font-medium text-[#1B2A41]">
              عامًا من التميز في التصنيع
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

          
        



       
            <section className="w-full bg-[#28186E] py-5 text-white">
                <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-right">
                        <Link href={"/"} className="text-2xl font-semibold">
                          مورد المحامل في {city}
                        </Link>
                        <p className="text-2xl md:text-[42px] font-semibold">
                          +91-7834872136
                        </p>
                        <p className="text-lg text-white">
                            لمزيد من التفاصيل، تواصل معنا الآن!
                        </p>
                    </div>

                    <div>
                        <a href="tel:+917834872136" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                            اتصل الآن
                        </a>
                    </div>
                </div>
            </section>



     <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-12">

         
          <div className="lg:col-span-4 lg:sticky lg:top-35 h-fit">

            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
              الأسئلة الشائعة
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#1B2A41]">
              الأسئلة الشائعة – مورد المحامل في {city}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-800">
              اعثر على إجابات للأسئلة الأكثر شيوعًا حول ARB Bearings وحلول
              المحامل وإمكانات التصنيع والتصدير لدينا.
            </p>

            <div className="mt-10 h-2 w-40 rounded-full bg-gradient-to-r from-red-600 to-[#28186E]"></div>

          </div>

      
          <div className="space-y-5 lg:col-span-8">

          {faqs.map((faq, index) => (
  <div
    key={index}
    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
      active === index
        ? "border-red-500 bg-white shadow-xl"
        : "border-slate-200 bg-white"
    }`}
  >
    <button
      onClick={() => setActive(active === index ? -1 : index)}
      className="flex w-full items-center justify-between px-8 py-7 text-right"
    >
      <div className="flex items-center gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-lg font-bold text-white">
          {index + 1}
        </div>

        <h3 className="text-xl font-semibold text-[#1B2A41]">
          {faq.question.replaceAll("{city}", city)}
        </h3>
      </div>

      <ChevronDown
        className={`transition duration-300 ${
          active === index ? "rotate-180 text-red-600" : ""
        }`}
      />
    </button>

    <div
      className={`grid transition-all duration-500 ${
        active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="border-t border-slate-100 px-8 py-6 pr-[92px] text-slate-600 leading-8">
          {faq.answer.replaceAll("{city}", city)}
        </div>
      </div>
    </div>
  </div>
))}
          </div>

        </div>

      </div>
    </section>

          
    
 <FooterU />

        </div>
    );
};

export default Location;
