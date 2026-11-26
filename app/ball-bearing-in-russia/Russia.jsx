import AboutSection from "@/components/Russia-ads/AboutR";
import CaetgoryR from "@/components/Russia-ads/CategoryR";
import CTAR from "@/components/Russia-ads/CTAR";
import HeroR from "@/components/Russia-ads/HeroR";
import NavbarR from "@/components/Russia-ads/NavbarR";
import Products from "@/components/Russia-ads/ProductsR";
import IndustriesSection from "@/components/Russia-ads/IndustriesSectionR";
import React from "react";
import FooterR from "@/components/Russia-ads/FooterR";
import FormSectionR from "@/components/Russia-ads/FormSectionR";
import StickyFooter from "@/components/StickyFooter";
import WhatsApp from "@/components/Russia-ads/WhatsApp";

const supplyCities = [
  { name: "Москва", href: "/ball-bearing-in-moscow" },
  { name: "Санкт-Петербург", href: "/ball-bearing-in-st-petersburg" },
  { name: "Краснодар", href: "/ball-bearing-in-krasnodar" },
  { name: "Екатеринбург", href: "/ball-bearing-in-yekaterinburg" },
  { name: "Нижний Новгород", href: "/ball-bearing-in-nizhny-novgorod" },
  { name: "Казань", href: "/ball-bearing-in-kazan" },
  { name: "Новосибирск", href: "/ball-bearing-in-novosibirsk" },
  { name: "Уфа", href: "/ball-bearing-in-ufa" },
  { name: "Владивосток", href: "/ball-bearing-in-vladivostok" },
  { name: "Ростов-на-Дону", href: "/ball-bearing-in-rostov-on-don" },
 
  { name: "Красноярск", href: "/ball-bearing-in-krasnoyarsk" },
  { name: "Самара", href: "/ball-bearing-in-samara" },
  { name: "Воронеж", href: "/ball-bearing-in-voronezh" },
  { name: "Химки", href: "/ball-bearing-in-khimki" },
];

export default function Russia() {
  return (
    <>
      <NavbarR />
      <HeroR />
      <CaetgoryR />
      <Products />
      <AboutSection />
      <CTAR />
      <IndustriesSection />
     <section
  aria-labelledby="supply-network-heading"
  className="bg-[#EDF4FE] py-12 sm:py-16"
>
  <div className="mx-auto max-w-7xl px-4">
    <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D9251C]">
      Подшипники ARB в России
    </span>

    <h2
      id="supply-network-heading"
      className="mb-8 mt-3 text-3xl font-bold text-blue-700 md:text-4xl"
    >
      <span className="text-black">Наша сеть</span> поставок
    </h2>

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
      {supplyCities.map((city) => (
        <a
          key={city.href}
          href={city.href}
          className="group flex min-h-20 items-center justify-between rounded-xl border border-blue-100 bg-white px-6 py-5 font-semibold text-gray-900 shadow-sm transition hover:-translate-y-1 hover:border-[#D9251C] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9251C]"
        >
          <span>{city.name}</span>

          <span
            aria-hidden="true"
            className="text-xl text-[#D9251C] transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </a>
      ))}
    </div>
  </div>
</section>
      <FormSectionR />

      <FooterR />
      <StickyFooter email={"export@arb-bearings.com"} phoneNumber={"+79859834837"} />
      <WhatsApp  phoneNumber={"+79859834837"} />
    </>
  );
}
