import Link from "next/link";
import {
  getSubCategoryEntry,
  getAllSubCategoryParams,
} from "../../../../data";
import SubCategoryTable from "../../../../components/SubCategoryTable";
import Image from "next/image";
export function generateStaticParams() {
  return getAllSubCategoryParams();
}

export default async function SubCategoryPage({ params }) {

  const { categorySlug, subCategorySlug } = await params;

  const entry = getSubCategoryEntry(categorySlug, subCategorySlug);

  if (!entry) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        Subcategory not found.
      </div>
    );
  }


  
  const { category, subCategory, products } = entry;
   const content = category.pageContent;
  return (
    <>
     
      <section className="border-b bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-8 md:py-16 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-[#DA2416]">
                Home
              </Link>

              <span>/</span>

              <Link
                href={`/products/${category.slug}`}
                className="hover:text-[#DA2416]"
              >
                {category.name}
              </Link>
              

              <span>/</span>

              <span className="font-medium text-slate-900">
                {subCategory.name}
              </span>
            </nav>

            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#DA2416]">
              Industrial Bearings
              
            </span>

            <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              {subCategory.name}
            </h1> 
            



            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">

          
                 {subCategory.description} 


            </p>

             {/* Features */}
<div className="mt-8 grid gap-4 sm:grid-cols-2">
  {subCategory.features.map((item) => (
    <div
      key={item}
      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-[#DA2416] hover:shadow-md"
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#DA2416] text-white">
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

          <div className="relative flex justify-center">
            <Image
              src={subCategory.image}
              alt={subCategory.name}
              width={1200}
              height={1200}
              className="h-full w-full object-cover "
            />

           

           
          </div>
        </div>
      </section>

     
      <SubCategoryTable entry={entry} />
    </>
  );
}