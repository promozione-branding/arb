
"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Enquiry from './Enquiry'
import { useState } from 'react'
const Cta = () => {

   const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div>
       <section style={{backgroundImage:"url(/ctabg.jpg)"}} className="relative mb-5 md:mb-10 py-10 md:py-15 bg-center bg-cover  overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/55" />


      {/* Accent */}
      <div className="absolute left-0 top-0 h-full w-2 bg-[#DA2416]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px]">

          {/* Left */}
          <div>
            <span className="text-white uppercase tracking-[0.35em] text-sm font-semibold">
              ENGINEERED SOLUTIONS
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-white">
              Need Help Choosing the
          
              Right Industrial Product?
            </h2>

            <p className="mt-4 max-w-5xl text-lg leading-8 text-white">
              From bearings and power transmission components to complete
              industrial solutions, our technical team will help you select the
              right product for your application.
            </p>
          </div>

          {/* Right */}
       <div className="space-y-5">
  <button
    onClick={() => setIsFormOpen(true)}
    className="flex w-full items-center justify-between rounded-xl bg-[#DA2416] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#c91f13]"
  >
    <span>Request Quote</span>
    <ArrowRight className="h-5 w-5" />
  </button>

  <Link
    href="/products/ball-bearing"
    className="flex w-full items-center justify-between rounded-xl border border-white px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/5"
  >
    <span>Browse Products</span>
    <ArrowRight className="h-5 w-5" />
  </Link>
</div>
        </div>
      </div>
    </section>





 {isFormOpen && (
        <Enquiry IATFpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}


    
    </div>
  )
}

export default Cta
