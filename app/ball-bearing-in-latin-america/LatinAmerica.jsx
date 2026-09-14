import ABoutA from '@/components/LatinAmerica-ads/ABoutA'
import CategoryA from '@/components/LatinAmerica-ads/CategoryA'
import CTAA from '@/components/LatinAmerica-ads/CTAA'
import FooterA from '@/components/LatinAmerica-ads/FooterA'
import FormSectionA from '@/components/LatinAmerica-ads/FormSectionA'
import HeroA from '@/components/LatinAmerica-ads/HeroA'
import IndustryA from '@/components/LatinAmerica-ads/IndustryA'
import NavbarA from '@/components/LatinAmerica-ads/NavbarA'
import ProductsA from '@/components/LatinAmerica-ads/ProductsA'
import StickyFooter from '@/components/StickyFooter'
import React from 'react'

export default function LatinAmerica() {
  return (
    <>
      <NavbarA />
      <HeroA />
      <CategoryA />
      <ABoutA />
      <ProductsA />
      <CTAA />
      <IndustryA />
      <FormSectionA />
      <FooterA />
      <StickyFooter whatsappNumber={"9968373086"} phoneNumber={"9968373086"} />
    </>
  )
}
