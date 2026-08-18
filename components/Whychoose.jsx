import {
  Award,
  Factory,
  Globe2,
  Lightbulb,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const whyChooseData = [
  {
    number: "01",
    label: "Experience",
    title: "60+ Years of Bearings Expertise",
    description:
      "With decades of experience in the bearing industry, ARB Bearings delivers dependable solutions backed by deep technical knowledge and manufacturing expertise.",
    icon: Award,
  },
  {
    number: "02",
    label: "Quality",
    title: "Precision & Consistent Quality",
    description:
      "Every bearing is manufactured with a strong focus on precision, durability, and consistent performance to meet demanding application requirements.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    label: "Manufacturing",
    title: "Advanced Manufacturing Capabilities",
    description:
      "Our modern manufacturing processes combine advanced technology, precision engineering, and stringent quality control to deliver reliable bearings.",
    icon: Factory,
  },
  {
    number: "04",
    label: "Reliability",
    title: "Built for Demanding Applications",
    description:
      "ARB Bearings are designed to perform reliably across challenging applications in automotive, agriculture, industrial, railway, mining, power, construction, and earthmoving sectors.",
    icon: Wrench,
  },
  {
    number: "05",
    label: "Global Reach",
    title: "Trusted Worldwide",
    description:
      "With bearing solutions supplied to customers across 50+ countries, ARB Bearings supports businesses with reliable products and responsive service.",
    icon: Globe2,
  },
  {
    number: "06",
    label: "Innovation",
    title: "Driven by Continuous Improvement",
    description:
      "We continuously improve our products, processes, and technology to deliver bearing solutions that meet evolving industry requirements.",
    icon: Lightbulb,
  },
];

export default function WhyChooseARB() {
  return (
    <section className="relative bg-gray-50 sm:py-24 lg:py-32">

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(31,15,89,1)_1px,transparent_1px),linear-gradient(90deg,rgba(31,15,89,1)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-start gap-12 lg:grid-cols-[1.28fr_0.72fr] lg:gap-20">

          {/* Features */}
          <div className="grid border-t border-gray-300 sm:grid-cols-2 sm:gap-x-10">
            {whyChooseData.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="
                    group
                    relative
                    border-b
                    border-gray-300
                    py-5
                    sm:py-10
                  "
                >
                  {/* Icon + Number */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        text-red-500
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:border-red-500
                        group-hover:bg-red-500
                        group-hover:text-white
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className="
                        text-sm
                        font-semibold
                        tracking-wider
                        text-gray-400
                        transition-colors
                        duration-300
                        group-hover:text-red-500
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-red-500">
                    {item.label}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-xl font-bold leading-7 text-[#1f0f59] sm:text-[22px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-black">
                    {item.description}
                  </p>

                  {/* Hover Line */}
                  <div className="md:mt-6 h-px w-0 bg-red-500 transition-all duration-500 group-hover:w-12" />
                </article>
              );
            })}
          </div>

          {/* Right Content */}
          <div className="lg:sticky lg:top-40 lg:self-start">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-red-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-red-500">
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#1f0f59] sm:text-5xl">
              Why Choose ARB Bearings?
            </h2>

            {/* Paragraph */}
            <p className="mt-7 max-w-md text-base leading-8 text-black">
              Decades of expertise, advanced manufacturing, and a commitment
              to quality make ARB Bearings a dependable partner for demanding
              bearing applications worldwide.
            </p>

            {/* Experience Highlight */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-l-2 border-red-500 pl-5">

              {/* 1 */}
              <div>
                <p className="text-3xl font-bold text-[#1f0f59] sm:text-4xl">
                  60+
                </p>
                <p className="mt-1 text-sm text-black">
                  Years of expertise
                </p>
              </div>

              {/* 2 */}
              <div>
                <p className="text-3xl font-bold text-[#1f0f59] sm:text-4xl">
                  50+
                </p>
                <p className="mt-1 text-sm text-black">
                  Countries served
                </p>
              </div>

              {/* 3 */}
              <div>
                <p className="text-3xl font-bold text-[#1f0f59] sm:text-4xl">
                  2,500+
                </p>
                <p className="mt-1 text-sm text-black">
                  Products
                </p>
              </div>

              {/* 4 */}
              <div>
                <p className="text-3xl font-bold text-[#1f0f59] sm:text-4xl">
                  24/7
                </p>
                <p className="mt-1 text-sm text-black">
                  Technical Support
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}