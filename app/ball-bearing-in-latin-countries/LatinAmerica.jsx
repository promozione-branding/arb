import ABoutA from '@/components/LatinAmerica-ads/ABoutA'
import CategoryA from '@/components/LatinAmerica-ads/CategoryA'
import CTAA from '@/components/LatinAmerica-ads/CTAA'
import FooterA from '@/components/LatinAmerica-ads/FooterA'
import FormSectionA from '@/components/LatinAmerica-ads/FormSectionA'
import HeroA from '@/components/LatinAmerica-ads/HeroA'
import IndustryA from '@/components/LatinAmerica-ads/IndustryA'
import NavbarA from '@/components/LatinAmerica-ads/NavbarA'
import ProductsA from '@/components/LatinAmerica-ads/ProductsA'
import WhatsApp from '@/components/Russia-ads/WhatsApp'
import StickyFooter from '@/components/StickyFooter'
import React from 'react'
import Link from 'next/link'

const supplyCountries = [
  { name: 'Argentina', href: '/ball-bearing-in-argentina' },
  { name: 'México', href: '/ball-bearing-in-mexico' },
  { name: 'Paraguay', href: '/ball-bearing-in-paraguay' },
  { name: 'Chile', href: '/ball-bearing-in-chile' },
  { name: 'Brasil', href: '/ball-bearing-in-brazil' },
  { name: 'Bolivia', href: '/ball-bearing-in-bolivia' },
  { name: 'Perú', href: '/ball-bearing-in-peru' },
  { name: 'Ecuador', href: '/ball-bearing-in-ecuador' },
]

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
      <section
        aria-labelledby="supply-network-heading"
        className="bg-[#EDF4FE] py-10"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-0">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D9251C]">
            América Latina
          </span>
          <h2
            id="supply-network-heading"
            className="mb-8 mt-3 text-3xl font-bold text-blue-700 md:text-4xl"
          >
            <span className="text-black">Nuestra</span> red de suministro
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supplyCountries.map((country) => (
              <Link
                key={country.href}
                href={country.href}
                className="flex min-h-20 items-center rounded-xl border border-blue-100 bg-white px-6 py-5 font-semibold text-gray-900 shadow-sm"
              >
                {country.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FormSectionA />
      <FooterA />
      <StickyFooter whatsappNumber={"9968373086"} phoneNumber={"9968373086"} />
      <WhatsApp whatsappNumber={"9968373086"} phoneNumber={"9968373086"} />
    </>
  )
}
