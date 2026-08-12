import Link from "next/link";
import {
  getSubCategoryEntry,
  getAllSubCategoryParams,
} from "../../../../data";
import SubCategoryTable from "../../../../components/SubCategoryTable";
import CursorZoomImage from "../../../../components/CursorZoomImage";

export function generateStaticParams() {
  return getAllSubCategoryParams();
}

export default async function SubCategoryPage({ params }) {
  const { categorySlug, subCategorySlug } = await params;

  const entry = getSubCategoryEntry(categorySlug, subCategorySlug);

  if (!entry) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-12">
        Subcategory not found.
      </div>
    );
  }

  const { category, subCategory, products } = entry;
  const content = category.pageContent;

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden border-b bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
        {/* Background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-20
            h-72
            w-72
            rounded-full
            bg-blue-100/50
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-0
            h-96
            w-96
            rounded-full
            bg-red-100/30
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            px-6
            pt-8
            md:gap-16
            md:py-16
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div>
            {/* Breadcrumb */}

            <nav
              className="
                mb-6
                flex
                flex-wrap
                items-center
                gap-2
                text-sm
                text-slate-500
              "
            >
              <Link
                href="/"
                className="transition-colors hover:text-[#DA2416]"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href={`/products/${category.slug}`}
                className="transition-colors hover:text-[#DA2416]"
              >
                {category.name}
              </Link>

              <span>/</span>

              <span className="font-medium text-slate-900">
                {subCategory.name}
              </span>
            </nav>

            {/* Badge */}

            <span
              className="
                inline-flex
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-sm
                font-semibold
                text-[#DA2416]
              "
            >
              Industrial Bearings
            </span>

            {/* Heading */}

            <h1
              className="
                mt-6
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                md:text-5xl
                lg:text-6xl
              "
            >
              {subCategory.name}
            </h1>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-3xl
                text-base
                leading-7
                text-slate-600
                md:text-lg
                md:leading-8
              "
            >
              {subCategory.description}
            </p>

            {/* =================================================
                FEATURES
            ================================================== */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {subCategory.features.map((item) => (
                <div
                  key={item}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#DA2416]
                    hover:shadow-lg
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#DA2416]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span className="text-base font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT PRODUCT IMAGE
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-[600px]">
            {/* Decorative background */}

            <div
              className="
                absolute
                inset-5
                rounded-[35px]
                bg-gradient-to-br
                from-[#DA2416]
                via-[#281770]
                to-slate-900
                opacity-90
                blur-[1px]
                transition-transform
                duration-700
                hover:scale-[1.02]
                sm:inset-8
                sm:rounded-[45px]
              "
            />

            {/* Image container */}

            <div
              className="
                group
                relative
                aspect-square
                overflow-hidden
                rounded-[30px]
                border
                border-white/70
                bg-white
                p-5
                shadow-[0_30px_80px_rgba(15,23,42,0.15)]
                sm:rounded-[40px]
                sm:p-8
                md:p-10
              "
            >
              <CursorZoomImage
                src={subCategory.image}
                alt={subCategory.name}
                zoom={1.3}
              />

              {/* Top-right zoom badge */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-5
                  rounded-full
                  border
                  border-slate-200
                  bg-white/80
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-600
                  opacity-0
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  sm:right-7
                  sm:top-7
                "
              >
                Move cursor to zoom
              </div>

              {/* Bottom product label */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-5
                  left-5
                  rounded-xl
                  bg-slate-900/80
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  sm:bottom-7
                  sm:left-7
                "
              >
                {subCategory.name}
              </div>
            </div>

            {/* Floating experience badge */}

            <div
              className="
                absolute
                -bottom-5
                left-4
                rounded-2xl
                bg-white
                px-5
                py-3
                shadow-xl
                sm:-bottom-6
                sm:left-8
                sm:px-6
                sm:py-4
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-slate-400 sm:text-xs">
                Engineered For
              </p>

              <p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                Precision & Reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <SubCategoryTable entry={entry} />
    </>
  );
}