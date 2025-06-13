import Image from "next/image";
import Navbar from "./customComponents/Navbar";
import Hero from "./customComponents/Hero";
import Quote from "./customComponents/Quote";
import ServiceCard from "./customComponents/ServiceCard";
import ServiceSection from "./customComponents/ServiceSection";

export default function Home() {
  return (
    <>
  <Hero/>
  <Quote/>
  <ServiceSection/>
 
    </>
  );
}
