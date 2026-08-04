import Link from "next/link";
import { getCategoryTree } from "../../../data";
import { ArrowRight, PhoneCall } from "lucide-react";
import Cta from "@/components/Cta";

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
      <div className="max-w-6xl mx-auto px-6 py-12">Category not found.</div>
    );
  }

   const content = category.pageContent;

  return (
<>

<section className="relative w-full h-[420px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/fbc-bearings2.jpg"
        alt="Industrial Machinery"
        className="absolute inset-0 h-full w-full object-cover"
      />

   

      {/* Left Content Box */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2">
        <div className="relative bg-black/45 backdrop-blur-sm px-10 py-12 w-[620px]">
          {/* Red Line */}
          <div className="absolute top-0 right-0 h-full w-1 bg-red-600"></div>

          <h2 className="text-5xl font-bold text-white leading-tight">
    {content.hero.title}
          </h2>

          <p className="mt-5 text-md text-white leading-6 max-w-xl">
     {content.hero.description}
          </p>

    
        </div>
      </div>
    </section>


<div className="bg-gradient-to-b from-slate-50 via-white to-white">
  <div className="max-w-7xl mx-auto px-6 py-14">

    {/* Breadcrumb */}
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-[#DA2416] transition">
        Home
      </Link>

      <span>/</span>

      <span className="font-medium text-gray-900">
        {category.name}
      </span>
    </nav>

    {/* Heading */}
    <div className="max-w-3xl mb-14">
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-[#DA2416]">
       Our Product Collection
      </span>

      <h1 className="mt-5 text-5xl font-bold tracking-tight text-gray-900">
        {category.name}
      </h1>

      <p className="mt-5 text-lg text-gray-600 leading-8">
        Browse our premium range of{" "}
        <span className="font-semibold text-gray-900">
          {category.name.toLowerCase()}
        </span>{" "}
        products with detailed specifications and technical information.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {category.subCategories.map((subCategory) => (
        <Link
          key={subCategory.slug}
          href={`/products/${category.slug}/${subCategory.slug}`}
          className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative h-60 overflow-hidden">
            <img
              src={
                subCategory.image 
              }
              alt={subCategory.name}
              className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        
            
          </div>

          {/* Content */}
          <div className="p-3">
          <div className="">

  <h3 className="text-xl font-bold mb-3 text-slate-900">
    {subCategory.name}
  </h3>

<p className="text-gray-600 leading-7">
  {subCategory.description}
</p>

</div>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-[#DA2416]">
                Explore Collection
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#DA2416] transition group-hover:bg-[#DA2416] group-hover:text-white">
                →
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>

  </div>
</div>










   <section className="relative overflow-hidden bg-white py-12">
      {/* Background Decorations */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16  lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DA2416]">
          {content.section1.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
         {content.section1.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-800">
           {content.section1.description}
          </p>

      {/* Features */}
<div className="mt-5 grid gap-5 sm:grid-cols-2">
  {content.section1.features.map((item) => (
    <div
      key={item}
      className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DA2416] hover:shadow-lg"
    >
      {/* Icon */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#DA2416]/10 text-[#DA2416] transition-all duration-300 group-hover:bg-[#DA2416] group-hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      <div>
        <h4 className="text-md font-semibold text-slate-900">
          {item}
        </h4>

        <p className="mt-1 text-sm text-slate-700">
          Engineered for reliable performance and long service life.
        </p>
      </div>
    </div>
  ))}
</div>
          {/* Buttons */}
          <div className="mt-12 flex gap-5">
            <button className="rounded-xl bg-[#DA2416] px-8 py-4 font-semibold text-white transition hover:bg-[#DA2416]">
              Explore Product
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
              Download Brochure
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-10 rounded-[40px] bg-gradient-to-br from-[#DA2416] to-slate-800" />

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[40px] bg-white p-10 shadow-2xl">
            <img
              src={content.section1.image}
              className="mx-auto w-full object-contain transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-10 rounded-2xl bg-white px-6 py-4 shadow-xl">
            <p className="text-sm text-slate-500">
              Trusted Worldwide
            </p>

            <p className="text-3xl font-bold text-slate-900">
              50+ Countries
            </p>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-5 right-5 rounded-2xl bg-[#DA2416] px-6 py-4 text-white shadow-xl">
            <p className="text-sm opacity-80">
              Service Life
            </p>

            <p className="text-3xl font-bold">
              +35%
            </p>
          </div>
        </div>
      </div>
    </section>




     <section className="relative overflow-hidden bg-slate-50 py-14">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20  lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative">

          {/* Decorative Box */}
          <div className="absolute -left-8 top-12 h-[85%] w-[85%] rounded-[40px] bg-gradient-to-br from-[#DA2416] to-[#281770]" />

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[40px] bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <img
              src={content.section2.image}
              className="w-full transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 right-8 rounded-3xl bg-white p-6 shadow-xl">
        

            <h3 className="mt-1 text-3xl font-bold text-[#DA2416]">
            {content.section2.stats.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
             {content.section2.stats.text}
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#DA2416]">
     {content.section2.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
         {content.section2.title}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-800">
         {content.section2.description}
          </p>


          {/* CTA */}
          <div className="mt-12 flex gap-5">
            <button className="rounded-xl bg-[#DA2416] px-8 py-4 font-semibold text-white transition hover:bg-[#DA2416]">
              View Product
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-white">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>



<Cta/>



</>


  );
}
