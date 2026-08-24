import Hero from "@/components/Hero";
import ProductsSlider from "@/components/ProductsSlider";
// import Image from "next/image";
// import Process from "@/components/Process";
import IndustriesSection from "@/components/IndustriesSection";
import Count from "@/components/Count";
import About from "@/components/About";
import Category from "@/components/Category";
// import Timeline from "@/components/Timeline";-
import Excellence from "@/components/Excellence";
// import Manufacturing from "@/components/Manufacture";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonial";
import AboutRussia from "@/components/AboutRussia";
// import Popup from "@/components/Popup";
import Cta from "@/components/Cta";
import Whychoose from "@/components/Whychoose";
export default function Home() {
  return (
    <>
      {/* <Popup/> */}
      <Hero />
      <ProductsSlider />
      <Clients />

      {/* <Process/> */}
      <IndustriesSection />
      <AboutRussia />
      <Cta />
      <Category />
      <Whychoose />
      <About />
      <Count />
      <Excellence />
      {/* <Manufacturing/> */}
      <Testimonials />
</>  );
}
