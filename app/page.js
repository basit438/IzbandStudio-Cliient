import Image from "next/image";
import Navbar from "./customComponents/Navbar";
import Hero from "./customComponents/Hero";
import Quote from "./customComponents/Quote";

import ServiceSection from "./customComponents/ServiceSection";
import TechSection from "./customComponents/TechSection";
import Footer from "./customComponents/Footer";
import ProductsSlide from "./customComponents/ProductsSlide"
export default function Home() {
  return (
    <>
  <Hero/>
  <Quote/>
  <ServiceSection/>
  <TechSection/>
 <ProductsSlide></ProductsSlide>
  <Footer/>
 
    </>
  );
}
