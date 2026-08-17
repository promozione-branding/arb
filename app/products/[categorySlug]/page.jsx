import CategoryPage from "./CategoryPage";
import { getCategoryTree } from "../../../data";

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;

  const category = getCategoryTree().find(
    (item) => item?.slug === categorySlug
  );

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    };
  }
  // console.log(category)

  const content = category;

  return {
    title: content?.metaTitle || category?.title || "Category",
    description:
      content?.metaDescription ||
      `Explore ${category?.title || "this category"}.`,
  };
}

export default function Page() {
  return <CategoryPage />;
}