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

export default function Russia() {
  return (
    <>
      <NavbarR />
      <HeroR />
      <CaetgoryR />
      <AboutSection />
      <Products />
      <CTAR />
      <IndustriesSection />
      <FormSectionR/>

      <FooterR/>
    </>
  );
}
