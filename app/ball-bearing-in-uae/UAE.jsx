import StickyFooter from '@/components/StickyFooter'
import ABoutU from '@/components/UAE-ads/AboutU'
import CategoryU from '@/components/UAE-ads/CategoryU'
import CTAU from '@/components/UAE-ads/CTAU'
import FooterU from '@/components/UAE-ads/FooterU'
import FormSectionU from '@/components/UAE-ads/FormSectionU'
import HeroU from '@/components/UAE-ads/HeroU'
import IndustryU from '@/components/UAE-ads/IndustryU'
import NavbarA from '@/components/UAE-ads/NavbarU'
import ProductsU from '@/components/UAE-ads/ProductsU'
import React from 'react'

const supplyCities = [
  { name: 'دبي', href: '/ball-bearing-in-dubai' },
  { name: 'أبوظبي', href: '/ball-bearing-in-abu-dhabi' },
  { name: 'الشارقة', href: '/ball-bearing-in-sharjah' },
  { name: 'عجمان', href: '/ball-bearing-in-ajman' },
]

export default function UAE() {
  return (
    <>
      <NavbarA />
      <HeroU />
      <CategoryU />
      <ABoutU />
      <ProductsU />
      <CTAU />
      <IndustryU />
      <section
        aria-labelledby="supply-network-heading"
        className="bg-[#EDF4FE] py-10"
        dir="rtl"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-0">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D9251C]">
            الإمارات العربية المتحدة
          </span>
          <h2
            id="supply-network-heading"
            className="mb-8 mt-3 text-3xl font-bold text-blue-700 md:text-4xl"
          >
            <span className="text-black">شبكة</span> التوريد لدينا
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supplyCities.map((city) => (
              <a
                key={city.href}
                href={city.href}
                className="group flex min-h-20 items-center justify-between rounded-xl border border-blue-100 bg-white px-6 py-5 font-semibold text-gray-900 shadow-sm transition hover:-translate-y-1 hover:border-[#D9251C] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9251C]"
              >
                <span>{city.name}</span>
                <span
                  aria-hidden="true"
                  className="text-xl text-[#D9251C] transition-transform group-hover:-translate-x-1"
                >
                  &larr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <FormSectionU />
      <FooterU />
      <StickyFooter whatsappNumber={"9968373086"} phoneNumber={"9968373086"} />
    </>
  )
}
