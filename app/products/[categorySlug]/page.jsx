
import Link from "next/link";
import { getCategoryTree } from "../../../data";
import Cta from "@/components/Cta";
import CursorZoomImage from "@/components/CursorZoomImage";
export function generateStaticParams() {
  return getCategoryTree().map((category) => ({
    categorySlug: category.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const { categorySlug } = await params;

  const category = getCategoryTree().find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        Category not found.
      </div>
    );
  }

  const content = category.pageContent;

  return (
    <>
  

      <section className="relative h-[380px] w-full overflow-hidden sm:h-[420px]">
     
        <img
          src="/fbc-bearings2.png"
          alt="Industrial Machinery"
          className="absolute inset-0 h-full w-full object-cover"
        />

  
        <div
          className="
            absolute
            left-4
            right-4
            top-1/2
            -translate-y-1/2
            sm:left-8
            sm:right-auto
            md:left-12
            lg:left-20
          "
        >
          <div
            className="
              relative
              w-full
              bg-black/45
              px-5
              py-7
              backdrop-blur-sm
              sm:w-[520px]
              sm:px-8
              sm:py-9
              md:w-[580px]
              md:px-10
              md:py-10
              lg:w-[620px]
              lg:py-12
            "
          >
            {/* Red Line */}
            <div className="absolute right-0 top-0 h-full w-1 bg-red-600" />

            <h2
              className="
                text-3xl
                font-bold
                leading-tight
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              {content.hero.title}
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-white
                sm:mt-5
                sm:text-base
                md:text-md
              "
            >
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT COLLECTION
      ========================================================== */}

      <div className="bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="
              mb-6
              flex
              flex-wrap
              items-center
              gap-2
              text-xs
              text-gray-500
              sm:mb-8
              sm:text-sm
            "
          >
            <Link
              href="/"
              className="transition hover:text-[#DA2416]"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-medium text-gray-900">
              {category.name}
            </span>
          </nav>

          {/* Heading */}
          <div className="mb-9 max-w-3xl sm:mb-14">
            <span
              className="
                inline-flex
                rounded-full
                bg-blue-100
                px-3
                py-1
                text-xs
                font-medium
                text-[#DA2416]
                sm:px-4
                sm:text-sm
              "
            >
              Our Product Collection
            </span>

            <h1
              className="
                mt-4
                break-words
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
                sm:mt-5
                sm:text-4xl
                md:text-5xl
              "
            >
              {category.name}
            </h1>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-gray-600
                sm:mt-5
                sm:text-lg
                sm:leading-8
              "
            >
              Browse our premium range of{" "}
              <span className="font-semibold text-gray-900">
                {category.name.toLowerCase()}
              </span>{" "}
              products with detailed specifications and technical
              information.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              grid
              grid-cols-1
              gap-5
              min-[480px]:grid-cols-2
              md:gap-7
              xl:grid-cols-3
              xl:gap-8
            "
          >
            {category.subCategories.map((subCategory) => (
              <Link
                key={subCategory.slug}
                href={`/products/${category.slug}/${subCategory.slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-lg
                  shadow-gray-100
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  sm:rounded-3xl
                "
              >
                {/* Image */}
           <div
  className="
    relative
    h-52
    overflow-hidden
    sm:h-56
    md:h-60
  "
>
  <CursorZoomImage
    src={subCategory.image}
    alt={subCategory.name}
    zoom={1.25}
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

  {/* Zoom indicator */}
  <div
    className="
      pointer-events-none
      absolute
      right-4
      top-4
      flex
      h-9
      w-9
      items-center
      justify-center
      rounded-full
      border
      border-white/40
      bg-black/20
      text-white
      opacity-0
      backdrop-blur-md
      transition-all
      duration-300
      group-hover:opacity-100
    "
  >
    +
  </div>
</div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="mb-3 break-words text-lg font-bold text-slate-900 sm:text-xl">
                    {subCategory.name}
                  </h3>

                  <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                    {subCategory.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-[#DA2416] sm:text-base">
                      Explore Collection
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                        text-[#DA2416]
                        transition
                        group-hover:bg-[#DA2416]
                        group-hover:text-white
                        sm:h-11
                        sm:w-11
                      "
                    >
                      →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 1
      ========================================================== */}

      <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
        {/* Background Decorations */}
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-slate-100 blur-3xl sm:h-80 sm:w-80" />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-center
            gap-12
            px-4
            sm:px-6
            md:gap-14
            lg:grid-cols-2
            lg:gap-16
            lg:px-8
          "
        >
          {/* LEFT */}
          <div>
            <span
              className="
                inline-flex
                rounded-full
                bg-blue-50
                px-3
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-[#DA2416]
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              {content.section1.badge}
            </span>

            <h2
              className="
                mt-5
                break-words
                text-3xl
                font-bold
                leading-tight
                text-slate-900
                sm:mt-6
                sm:text-4xl
              "
            >
              {content.section1.title}
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-800
                sm:mt-5
                sm:text-lg
                sm:leading-8
              "
            >
              {content.section1.description}
            </p>

            {/* Features */}
            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-4
                min-[500px]:grid-cols-2
                sm:gap-5
              "
            >
              {content.section1.features.map((item) => (
                <div
                  key={item}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#DA2416]
                    hover:shadow-lg
                    sm:gap-4
                    sm:p-5
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#DA2416]/10
                      text-[#DA2416]
                      transition-all
                      duration-300
                      group-hover:bg-[#DA2416]
                      group-hover:text-white
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
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

                  {/* Text */}
                  <div className="min-w-0">
                    <h4 className="break-words text-sm font-semibold text-slate-900 sm:text-md">
                      {item}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-700 sm:text-sm">
                      Engineered for reliable performance and long service
                      life.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="
                mt-8
                flex
                w-full
                flex-col
                gap-3
                sm:mt-12
                sm:flex-row
                sm:flex-wrap
                sm:gap-5
              "
            >
              <button
                className="
                  w-full
                  rounded-xl
                  bg-[#DA2416]
                  px-8
                  py-3.5
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#DA2416]
                  sm:w-auto
                  sm:py-4
                "
              >
                Explore Product
              </button>

              <button
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  px-8
                  py-3.5
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  sm:w-auto
                  sm:py-4
                "
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto w-full max-w-[650px]">
            {/* Background Card */}
            <div
              className="
                absolute
                inset-5
                rounded-[30px]
                bg-gradient-to-br
                from-[#DA2416]
                to-slate-800
                sm:inset-8
                sm:rounded-[40px]
                lg:inset-10
              "
            />

            {/* Image Card */}
          <div
  className="
    relative
    overflow-hidden
    rounded-[30px]
    bg-white
    p-5
    shadow-2xl
    sm:rounded-[40px]
    sm:p-8
    md:p-10
  "
>
  <CursorZoomImage
    src={content.section1.image}
    alt=""
    zoom={1.18}
  />
</div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                -bottom-5
                left-4
                rounded-2xl
                bg-white
                px-4
                py-3
                shadow-xl
                sm:-bottom-6
                sm:left-8
                sm:px-6
                sm:py-4
              "
            >
              <p className="text-xs text-slate-500 sm:text-sm">
                Trusted Worldwide
              </p>

              <p className="text-xl font-bold text-slate-900 sm:text-3xl">
                50+ Countries
              </p>
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                -top-4
                right-2
                rounded-2xl
                bg-[#DA2416]
                px-4
                py-3
                text-white
                shadow-xl
                sm:-top-5
                sm:right-5
                sm:px-6
                sm:py-4
              "
            >
              <p className="text-xs opacity-80 sm:text-sm">
                Service Life
              </p>

              <p className="text-2xl font-bold sm:text-3xl">
                +35%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2
      ========================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-14 lg:py-16">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_45%)]" />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-center
            gap-12
            px-4
            sm:px-6
            md:gap-16
            lg:grid-cols-2
            lg:gap-20
            lg:px-8
          "
        >
          {/* LEFT IMAGE */}
          <div className="relative mx-auto w-full max-w-[650px]">
            {/* Decorative Box */}
            <div
              className="
                absolute
                -left-3
                top-8
                h-[85%]
                w-[85%]
                rounded-[30px]
                bg-gradient-to-br
                from-[#DA2416]
                to-[#281770]
                sm:-left-6
                sm:top-10
                sm:rounded-[40px]
                lg:-left-8
                lg:top-12
              "
            />

            {/* Main Image */}
            <div
             className="
  group
  relative
  overflow-hidden
  rounded-2xl
  border
  border-slate-200/70
  bg-white
  shadow-[0_10px_40px_rgba(15,23,42,0.06)]
  transition-all
  duration-500
  ease-out
  hover:-translate-y-2
  hover:border-[#DA2416]/30
  hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]
  sm:rounded-3xl
"
            >
           <CursorZoomImage
  src={content.section2.image}
  alt=""
  zoom={1.18}
/>
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -bottom-5
                right-3
                max-w-[220px]
                rounded-2xl
                bg-white
                p-4
                shadow-xl
                sm:-bottom-8
                sm:right-8
                sm:max-w-none
                sm:rounded-3xl
                sm:p-6
              "
            >
              <h3 className="mt-1 text-2xl font-bold text-[#DA2416] sm:text-3xl">
                {content.section2.stats.title}
              </h3>

              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                {content.section2.stats.text}
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span
              className="
                inline-flex
                rounded-full
                bg-blue-100
                px-3
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-[#DA2416]
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              {content.section2.badge}
            </span>

            <h2
              className="
                mt-5
                break-words
                text-3xl
                font-bold
                leading-tight
                text-slate-900
                sm:mt-6
                sm:text-4xl
              "
            >
              {content.section2.title}
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-800
                sm:text-lg
                sm:leading-8
              "
            >
              {content.section2.description}
            </p>

            {/* CTA */}
            <div
              className="
                mt-8
                flex
                w-full
                flex-col
                gap-3
                sm:mt-12
                sm:flex-row
                sm:flex-wrap
                sm:gap-5
              "
            >
              <button
                className="
                  w-full
                  rounded-xl
                  bg-[#DA2416]
                  px-8
                  py-3.5
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#DA2416]
                  sm:w-auto
                  sm:py-4
                "
              >
                View Product
              </button>

              <button
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  px-8
                  py-3.5
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-white
                  sm:w-auto
                  sm:py-4
                "
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <Cta />
    </>
  );
}

