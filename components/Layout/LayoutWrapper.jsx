"use client";

import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { getCategoryTree } from "@/data";

export default function LayoutWrapper({ children }) {
  const categories = getCategoryTree();

  const pathname = usePathname();

  // Routes where Navbar + Footer should be hidden
  const hideLayoutRoutes = ["/ball-bearing-in-russia", "bearing-supplier-in-uae",
  "/bearing-supplier-in-dubai",
  "/bearing-supplier-in-abu-dhabi",
  "/bearing-supplier-in-sharjah",
  "/bearing-supplier-in-ajman",

  "/ball-bearing-in-argentina",
  "/ball-bearing-in-mexico",
  "/ball-bearing-in-paraguay",
  "/ball-bearing-in-chile",
  "/ball-bearing-in-brazil",
  "/ball-bearing-in-bolivia",
  "/ball-bearing-in-peru",
  "/ball-bearing-in-ecuador",


  "/bearing-supplier-in-argentina",
  "/bearing-supplier-in-mexico",
  "/bearing-supplier-in-paraguay",
  "/bearing-supplier-in-chile",
  "/bearing-supplier-in-brazil",
  "/bearing-supplier-in-bolivia",
  "/bearing-supplier-in-peru",
  "/bearing-supplier-in-ecuador",

  
  "/ball-bearing-in-dubai",
  "/ball-bearing-in-abu-dhabi",
  "/ball-bearing-in-sharjah",
  "/ball-bearing-in-ajman",
  "/ball-bearing-in-latin-america",
  "/ball-bearing-in-latin-countries",
  "/ball-bearing-in-uae"];

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
