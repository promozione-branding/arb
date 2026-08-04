import {
  getProductEntry,
  getAllProductParams,
} from "../../../../../data";

import ProductClient from "./ProductClient";

export function generateStaticParams() {
  return getAllProductParams();
}

export default async function ProductPage({ params }) {
  const { categorySlug, subCategorySlug, productSlug } = await params;

  const result = getProductEntry(
    categorySlug,
    subCategorySlug,
    productSlug
  );

  if (!result) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        Product not found.
      </div>
    );
  }

  return <ProductClient result={result} />;
}