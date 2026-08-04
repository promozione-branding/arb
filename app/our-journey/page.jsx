"use client";

import { CalendarDays } from "lucide-react";

export default function OurHistory() {
  const history = [
    {
      year: "1990",
      text: "Founded by Goel Family with a Small Corporate Office in New Delhi & Started Production of Taper Roller Bearings.",
    },
    {
      year: "1991",
      text: "Imported equipped Machinery & Precision testing equipment from Europe.",
    },

    {
      year: "1996",
      text: "Ventured into export Market",
    },
    {
      year: "1997",
      text: "Product range expanded by the government of Spherical & Cylindrical Roller Bearings & Ball Bearings. ARB was awarded IATF-9002 certified by KPMG (Peat Marvick - USA)",
    },
    {
      year: "1998",
      text: "Commencement of Ball Bearings production at a new plant in ARB units – Badli.",
    },
    {
      year: "1999",
      text: "Added Pillow Block Bearings & Angular Contact Ball Bearings to the product range.",
    },
    {
      year: "2000",
      text: "Acquired New Delhi based NYK Bearing having a capacity of 2 million bearings/annum.",
    },
    {
      year: "2003",
      text: "Established a new plant for manufacturing Big-Dia Bearings for Heavy Industries.",
    },
    {
      year: "2005",
      text: "Received “Star Export House” from Ministry of Commerce.",
    },
    {
      year: "2007",
      text: "A new plant started in Himachal Pradesh",
    },
    {
      year: "2009",
      text: "Earned Quality Management System IATF TS 16949:2009 certification and implemented it on company-wide scale. Launched Multi – Purpose Grease for Automotive and Industrial application and shifted ARB Plant – II to Kundli.",
    },
    {
      year: "2010",
      text: "Launched Universal Joints Cross for Automotive & Agriculture applications.",
    },
    {
      year: "2011",
      text: "Started a new plant in Kundli (Sonipat) exclusively for Taper Roller Bearings with a capacity of 2.5 million per annum.",
    },
    {
      year: "2012",
      text: "Awarded IMS (QMS, OHSAS & EMS) for health & safety management system. Started atmospheric controlled H.T. Furnace to enchane the quality of bearings.",
    },
    {
      year: "2014",
      text: "Introduced PRO clutch in Indian Market.",
    },
    {
      year: "2015",
      text: "The Company achieved the milestone of 25 years (Silver Julbilee) Installation of automatic transfer line for TRB.",
    },
    {
      year: "2017",
      text: "Company upgraded its QMS & received IATF 16949:2016 Certification.",
    },
    {
      year: "2018",
      text: "Added one more TRB line to increase plant capacity to 3 million bearings per annum.",
    },
    {
      year: "2021",
      text: "Added products for Electrical Vehicles.",
    },
    {
      year: "2022",
      text: "Added one more TRB Line to increase plant capacity to 3.5 million bearings per annum.",
    },

    {
      year: "2023",
      text: "Under Installation - One double capacity of Heat Treatment Plant , Two Lines of Ball Bearing - Small and medium Dia and one line for DRACBB- WB.",
    },
  ];

  return (
    <section className="relative py-15 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-[140px] opacity-50" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-100 blur-[140px] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-15">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm tracking-wide">
            OUR HISTORY
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Our Journey Through the Years
          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-[#D72412] rounded-full"></div>

          <div className="space-y-7">
            {history.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2 px-0 lg:px-10">
                  <div className="bg-white rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#D72412] to-[#28186E] text-white flex items-center justify-center">
                        <CalendarDays size={26} />
                      </div>

                      <div>
                        <span className="text-sm uppercase tracking-widest text-slate-500">
                          Year
                        </span>

                        <h3 className="text-3xl font-bold text-slate-900">
                          {item.year}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-8 text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-[6px] border-[#28186E] shadow-xl z-20"></div>

                {/* Spacer */}
                <div className="hidden lg:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
