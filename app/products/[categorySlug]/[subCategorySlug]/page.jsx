import React from 'react'
import SubCategoryPage from './SubCategory';
import { getSubCategoryEntry } from '@/data';

export async function generateMetadata({ params }) {
  const { categorySlug, subCategorySlug } = await params;

  const entry = getSubCategoryEntry(categorySlug, subCategorySlug);

  if (!entry) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    };
  }
  // console.log(entry)

  const { subCategory } = entry;

  return {
    title: subCategory?.metaTitle || "Category",
    description:
      subCategory?.metaDescription || `Explore ${subCategory?.title || "this category"}.`,
  };
}

export default function page() {
  return (
    <SubCategoryPage />
  )
}
