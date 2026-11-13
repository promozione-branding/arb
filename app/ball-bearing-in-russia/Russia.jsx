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
  { name: "Moscow", href: "/ball-bearing-in-moscow" },
  { name: "St. Petersburg", href: "/ball-bearing-in-st-petersburg" },
  { name: "Kazan", href: "/ball-bearing-in-kazan" },
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

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <StickyFooter whatsappNumber={"79859834837"} phoneNumber={"+79859834837"} />
      <WhatsApp whatsappNumber={"79859834837"} phoneNumber={"+79859834837"} />
    </>
  );
}
