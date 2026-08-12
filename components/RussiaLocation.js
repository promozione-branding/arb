"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Hospital } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductsSlider from "@/components/ProductsSlider";
import { Factory, Store, Hotel, Home, Leaf, Warehouse, Truck, Tags, Handshake } from "lucide-react";

import {   Pickaxe, Fuel, Building2, Train, Cog } from "lucide-react";


import { ChevronDown } from "lucide-react";

import { ArrowRight } from "lucide-react";
import { Eye, X } from "lucide-react";

const Location = () => {


const products = [
  {
    title: "Шариковые подшипники",
    desc: "Высокая грузоподъемность, превосходная долговечность, идеально подходит для радиальных и осевых нагрузок.",
    image: "/arb-images/BALL BEARING 62208 2RS.png",
    applications: [
      "Электродвигатели",
      "Автомобили",
      "Сельскохозяйственная техника",
      "Промышленные насосы",
      "Вентиляторы и дутьевые установки",
      "Редукторы",
    ],
  },

  {
    title: "Подшипники колес",
    desc: "Прецизионные подшипники ступицы колеса, плавная работа, долговечная надежность.",
    image: "/arb-images/Wheel Bearing.png",
    applications: [
      "Горнодобывающая промышленность",
      "Стальные заводы",
      "Бумажные фабрики",
      "Цементная промышленность",
     
    ],
  },




  {
    title: "Роликовые подшипники",
    desc: "Плавное вращение, низкое трение, надежная работа для универсальных применений.",
    image: "/arb-images/prodtaper.png",
    applications: [
      "Электродвигатели",
      "Автомобили",
      "Сельскохозяйственная техника",
      "Промышленные насосы",
      "Вентиляторы и дутьевые установки",
      "Редукторы",
    ],
  },

  // {
  //   title: "Deep Groove Ball Bearings",
  //   desc: "High speed, low friction, versatile applications",
  //   image: "/1.webp",
  //   applications: [
  //     "Electric Motors",
  //     "Automobiles",
  //     "Agricultural Machinery",
  //     "Industrial Pumps",
  //     "Fans & Blowers",
  //     "Gearboxes",
  //   ],
  // },
];



 const [selectedProduct, setSelectedProduct] = useState(null);






      const [active, setActive] = useState(0);
    const params = useParams();

    const city = params?.location?.includes("-in-")
        ? params.location.split("-in-")[1].split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        : "India";








const faqs = [
    {
      question: "Кто является надежным поставщиком подшипников в {city}?",
      answer:
        "Компания ARB Bearings — опытный поставщик подшипников, предлагающий высококачественные, точно спроектированные подшипниковые решения клиентам в России и на международных рынках.",
    },
    {
      question: "Какие типы подшипников поставляет компания ARB Bearings?,",
      answer:
        "Компания ARB Bearings поставляет широкий ассортимент высококачественных шариковых и роликовых подшипников, включая радиальные шариковые подшипники глубокого канавочного типа, конические роликовые, цилиндрические роликовые, сферические роликовые, игольчатые и упорные подшипники. Они предназначены для использования в промышленности, автомобильной отрасли, сельском хозяйстве, железнодорожном транспорте, горнодобывающей промышленности и других сферах с высокими эксплуатационными требованиями.",
    },
    {
      question: "Экспортирует ли компания ARB Bearings подшипники в {city}?",
      answer:
        "Да, компания ARB Bearings поставляет и экспортирует подшипниковые решения клиентам в России, обеспечивая надежную упаковку и качественную международную доставку.",
    },
    {
      question:
        "Может ли компания ARB Bearings поставлять подшипники для конкретных промышленных применений?,",
      answer:
        "Да. Наши подшипниковые решения подходят для автомобильной, горнодобывающей, сельскохозяйственной, строительной, энергетической, металлургической и различных промышленных машин.",
    },
    {
      question:
        "Как я могу запросить у компании ARB Bearings ценовое предложение на подшипники?",
      answer:
        "Вы можете связаться с командой ARB Bearings, указав необходимый тип, размер, количество и область применения подшипников, чтобы получить информацию о продукции и коммерческое предложение.",
    },
  ];



  const industries = [
  {
    title: "Металлургия",
    image: "/Metallurgy.webp",
    icon: Factory,
  },
  {
    title: "Горнодобывающая промышленность",
    image: "/mining.jpg",
    icon: Pickaxe,
  },
  {
    title: "Нефть и газ",
    image: "/oil.jpg",
    icon: Fuel,
  },
  {
    title: "Строительство",
    image: "/const.jpg",
    icon: Building2,
  },
  {
    title: "Железные дороги",
    image: "/railway.jpg",
    icon: Train,
  },

];



    return (
        <>
        
   {/* Hero */}
            <div className="">
                <section
                    style={{
                        backgroundImage: "url('/ctabg.jpg')",
                        backgroundSize: "cover",
                        objectPosition: "center",
                    }}
                    className="py-20 relative z-10"
                >
                    <div className="absolute inset-0 bg-gray-900/60" />

                    <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-20 capitalize md:text-6xl">
                      Поставщик подшипников в {city}
                    </h1>
                </section>
            </div>





         <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-15">
  <div className="mx-auto max-w-7xl  ">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      
      {/* Left Content */}
      <div>
        <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1 text-sm font-semibold tracking-wide text-red-600">
        Доверяют во всем мире
        </span>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1B2A41] ">
        Ведущий поставщик подшипников   {city}
        </h2>

        <p className="mt-3 text-lg  text-slate-900">
       Компания ARB Bearings — признанный во всем мире поставщик подшипников, предлагающий высокоэффективные подшипниковые решения клиентам {city} и на международных рынках. Благодаря многолетнему опыту в области инженерного дела, передовым производственным возможностям и неизменной приверженности качеству, мы производим прецизионные подшипники, отвечающие самым высоким требованиям современных отраслей промышленности. Как опытный поставщик подшипников, мы обслуживаем такие отрасли, как автомобилестроение, горнодобывающая промышленность, строительство, сельское хозяйство, энергетика, металлургия и тяжелое машиностроение. Наши подшипники ценятся за исключительную долговечность, точность, высокую несущую способность и длительный срок службы. Каждый продукт изготавливается с использованием высококачественного сырья и передовых производственных технологий, что обеспечивает стабильную работу даже в самых сложных условиях эксплуатации.
        </p>

    

        {/* Features */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {[
            "Широкий ассортимент продукции",
            "Собственное производство",
          
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

      {/* Right Side */}
      <div className="relative">
        {/* Background Blur */}
        <div className="absolute top-10 -left-10 h-48 w-48 rounded-full bg-red-100 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-blue-100 blur-3xl"></div>

        <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-2xl">
          <div className="mb-6 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
         Точное машиностроение
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#1B2A41]">
           Повышение производительности благодаря правильному подшипнику.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            От стандартных применений до сложных промышленных задач, компания ARB Bearings предлагает высокоточные подшипниковые решения, разработанные для обеспечения производительности, долговечности и надежности.
          </p>

          <button className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#1B2A41]">
          Найдите решение по подшипникам.
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
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-50 blur-3xl"></div>
    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl"></div>
  </div>

  <div className="relative mx-auto w-full px-6 lg:px-18">
    {/* Heading */}
    <div className="mx-auto max-w-5xl text-center">
      <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold tracking-wide text-red-600">
     Почему выбирают нас?
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#1B2A41] ">
       Почему подшипники ARB — правильный выбор для ваших потребностей в подшипниках
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-900">
       Выберите ARB Bearings в качестве вашего надежного поставщика подшипников {city} , предлагающего высокоточные, надежные и высокопроизводительные подшипниковые решения.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {[
        {
          title: "Материалы высшего качества",
          description:
            "Высококачественные материалы обеспечивают долговечность, прочность и длительную работу подшипников.",
        },
        {
          title: "Точное машиностроение",
          description:
            "Точно спроектированные подшипники обеспечивают плавную работу, снижение трения и надежность.",
        },
        {
          title: "Строгий контроль качества",
          description:
            "Каждый подшипник проходит тщательную проверку для обеспечения стабильного качества и производительности.",
        },
        {
          title: "Глобальная экспертиза в области экспорта",
          description:
            "Как опытный поставщик подшипников, мы предлагаем качественные подшипниковые решения для мировых рынков.",
        },
     
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
        >
          {/* Number */}
          <div className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition-all duration-300 group-hover:text-red-100">
            {`0${index + 1}`}
          </div>

          {/* Icon */}
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

          {/* Content */}
          <h3 className="mt-8 text-xl font-bold text-[#1B2A41]">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-800">
            {item.description}
          </p>

          {/* Bottom Accent */}
          <div className="mt-8 h-1 w-16 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>



  <section className="bg-blue-50 py-15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}

        <div className="flex justify-between items-center mb-14">
          <div>
            <p className="text-red-600 uppercase text-sm tracking-[3px] font-semibold">
              Наша продукция
            </p>

            <h2 className="text-blue-700 text-5xl font-bold mt-2">
              <span className="text-black">Точность в </span> каждом вращении
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-3 border border-red-500 text-red-400 px-7 py-3 rounded-md hover:bg-red-600 hover:text-white transition">
           ПОСМОТРЕТЬ ВСЕ ТОВАРЫ
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="relative">
          {/* <button className="custom-prev absolute -left-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#091A2D] flex items-center justify-center hover:bg-blue-600 transition">
            <ChevronLeft className="text-white" />
          </button> */}

          {/* <button className="custom-next absolute -right-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#091A2D] flex items-center justify-center hover:bg-blue-600 transition">
            <ChevronRight className="text-white" />
          </button> */}

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7">
  {products.map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      {/* Top Accent */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#1C398E] via-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Product Image */}
      <div className="relative flex items-center justify-center h-72 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute w-40 h-40 rounded-full bg-blue-500/10 blur-3xl group-hover:scale-125 transition duration-500" />

        {/* Decorative Ring */}
        <div className="absolute w-52 h-52 rounded-full border border-slate-200" />

        <Image
          src={item.image}
          alt={item.title}
          width={450}
          height={350}
          className="relative z-10 w-74 h-74 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
        />

        {/* View Button */}
        <button
          onClick={() => setSelectedProduct(item)}
          className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#1C398E] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600"
        >
          <Eye size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 line-clamp-2">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
          {item.desc}
        </p>

        {/* Bottom CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-sm font-semibold text-[#1C398E] group-hover:translate-x-1 transition">
Просмотреть подробности
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C398E]/10 text-[#1C398E] group-hover:bg-[#1C398E] group-hover:text-white transition">
            <Eye size={18} />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white overflow-hidden shadow-2xl">
            {/* Close */}

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}

              <div className="bg-blue-50 flex items-center justify-center ">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={720}
                  height={720}
                  className="object-cover animate-spin-slow"
                />
              </div>

              {/* Content */}

              <div className="p-5">
                <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">
                 Подробная информация о подшипнике
                </span>

                <h2 className="text-3xl font-bold text-[#091A2D] mt-3">
                  {selectedProduct.title}
                </h2>

                <p className="text-gray-600 mt-5 leading-7">
                  {selectedProduct.desc}
                </p>

                <h3 className="mt-8 text-xl font-semibold text-[#091A2D]">
                  Приложения
                </h3>

                <ul className="mt-4 space-y-3">
                  {selectedProduct.applications.map((app, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>

<section className="relative overflow-hidden bg-gradient-to-r from-[#1B2A41] via-[#23384D] to-[#1B2A41] py-5">
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
           Начните сегодня!
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white ">
           Ищете надежного поставщика подшипников в {city}?
          </h2>

          <p className="mt-3 text-lg leading-8 text-slate-200">
           Приобретайте высококачественные подшипники точной конструкции от ARB Bearings. Независимо от того, нужны ли вам стандартные подшипники, специализированные решения или оптовые партии, наша команда готова помочь вам подобрать подходящий подшипник для вашего применения.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1B2A41]"
          >
          Запросить ценовое предложение
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
           Связаться с нами
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

          <section className="bg-[#EDF4FE] py-10">
      <div className="max-w-7xl mx-auto ">

        <span className="text-[#D9251C] uppercase tracking-[4px] text-sm font-semibold">
        Отрасли, которые мы обслуживаем
        </span>

        <h2 className="text-5xl font-bold text-blue-700 mt-3 mb-12">
         <span className="text-black">Промышленность</span>  по всему миру
        </h2>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">

          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative h-[360px] overflow-hidden rounded-xl border border-white/10 bg-[#09192d] cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061322] via-[#061322]/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                      <Icon className="text-white w-5 h-5" />
                    </div>

                    <h3 className="text-white text-sm font-semibold">
                      {item.title}
                    </h3>

                  </div>

                </div>

                <div className="absolute inset-0 border border-transparent group-hover:border-blue-500 rounded-xl transition-all duration-500" />

                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition duration-500" />

              </div>
            );
          })}

        </div>

        <div className="flex justify-center mt-12">

          <button className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-md text-white font-semibold hover:shadow-[0_0_30px_rgba(37,99,235,.45)] transition">

            ПОСМОТРЕТЬ ВСЕ ОТРАСЛИ

            <ArrowRight className="group-hover:translate-x-1 transition" />

          </button>

        </div>

      </div>
    </section>




          <section className="bg-white py-14">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      
      {/* Left Content */}
      <div>
        <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
         Производственное совершенство
        </span>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1B2A41] ">
       Высокоточное производство. Проверенное качество.
        </h2>

        <p className="mt-3 text-lg leading-8 text-slate-600">
      Компания ARB Bearings, являясь надежным поставщиком подшипников в {city} , использует высокоточный производственный процесс для создания надежных, долговечных и высокопроизводительных подшипниковых решений. От высококачественного сырья до окончательной проверки и упаковки — каждый этап тщательно контролируется для обеспечения стабильного качества.
        </p>

        <div className="mt-4 space-y-3">
          {[
            {
              title: "Высококачественное сырье",
              desc: "Для обеспечения прочности, долговечности и стабильной работы подшипников мы используем тщательно отобранные сырьевые материалы.",
            },
            {
              title: "Точное производство",
              desc: "Как опытный поставщик подшипников, мы используем передовое оборудование и современные производственные процессы для достижения точности размеров и стабильного качества продукции.",
            },
            {
              title: "Контролируемая термообработка",
              desc: "Специализированные процессы термообработки повышают прочность, долговечность и устойчивость подшипников к сложным условиям эксплуатации.",
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
            alt="Precision Bearing Manufacturing"
            className="h-[620px] w-full object-contain"
          />

          {/* Floating Stats */}
          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">
            <p className="text-4xl font-bold text-red-600">60+</p>
            <p className="mt-1 font-medium text-[#1B2A41]">
             Годы производственного совершенства
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

          
        



        {/* CTA */}
            <section className="w-full bg-[#28186E] text-white py-5">
                <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="md:text-left text-center">
                        <Link href={"/"} className="text-2xl font-semibold">
                        Поставщик подшипников в {city}
                        </Link>
                        <p className="text-2xl md:text-[42px] font-semibold">
                          +91-7834872136
                        </p>
                        <p className="text-lg text-white">
                           Для получения более подробной информации свяжитесь с нами прямо сейчас!
                        </p>
                    </div>

                    <div>
                        <a href="tel:+917834872136" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Подключиться сейчас
                        </a>
                    </div>
                </div>
            </section>



     <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-12">

          {/* Left Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-35 h-fit">

            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
         Часто задаваемые вопросы
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#1B2A41]">
            Часто задаваемые вопросы – Поставщик подшипников в {city}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-800">
           Здесь вы найдете ответы на наиболее часто задаваемые вопросы о подшипниках ARB, наших решениях в области подшипников, производственных возможностях и экспорте.
            </p>

            <div className="mt-10 h-2 w-40 rounded-full bg-gradient-to-r from-red-600 to-[#28186E]"></div>

          </div>

          {/* Right Side */}
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
      className="flex w-full items-center justify-between px-8 py-7 text-left"
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
        <div className="border-t border-slate-100 px-8 py-6 pl-[92px] text-slate-600 leading-8">
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

          
    


        </>
    );
};

export default Location;
