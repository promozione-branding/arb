"use client";

import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { getCategoryTree } from "@/data";

export default function LayoutWrapper({ children }) {
  const categories = getCategoryTree();

  const pathname = usePathname();

  // Routes where Navbar + Footer should be hidden
  const hideLayoutRoutes = ["/ball-bearing-in-russia"];

  const shouldHideLayout = hideLayoutRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  return (
    <>
      {!shouldHideLayout && <Navbar categories={categories} />}

      <main>{children}</main>

      {!shouldHideLayout && <Footer />}
    </>
  );
}
