'use client';
import ServiceCard from "./ServiceCard";
import React from "react";

const services = [
  {
    imageSrc: "/pexels-mikechie-esparagoza-749296-1601773.jpg",
    title: "Shopify eCommerce",
    services: [
      "Shopify Hydrogen Development",
      "eCommerce migration",
      "Conversion rate optimisation",
    ],
    bgColor: "bg-neutral-900",
    number: "02",
  },
  {
    imageSrc: "/pexels-kevin-ku-92347-577585.jpg",
    title: "Digital Product Development",
    services: [
      "eCommerce development",
      "Website development",
      "AI Development",
    ],
    bgColor: "bg-green-800",
    number: "03",
  },
  {
    imageSrc: "/pexels-3motional-studio-407102-1081685.jpg",
    title: "Branding Services",
    services: ["Brand strategy", "Visual language", "Brand messaging"],
    bgColor: "bg-red-700",
    number: "04",
  },
  {
    imageSrc: "/pexels-kevin-ku-92347-577585.jpg",
    title: "UI/UX Design",
    services: ["Wireframing", "Prototyping", "User research"],
    bgColor: "bg-purple-700",
    number: "05",
  },
  {
    imageSrc: "/pexels-kevin-ku-92347-577585.jpg",
    title: "Logo Design",
    services: ["Modern Logos", "Brand Identity", "Iconography"],
    bgColor: "bg-yellow-700",
    number: "06",
  },
  {
    imageSrc: "/pexels-3motional-studio-407102-1081685.jpg",
    title: "Graphic Design",
    services: ["Social Media Graphics", "Posters", "Brochures"],
    bgColor: "bg-pink-700",
    number: "07",
  },
  {
    imageSrc: "/pexels-mikechie-esparagoza-749296-1601773.jpg",
    title: "Mobile App Development",
    services: ["iOS/Android Apps", "React Native", "Flutter"],
    bgColor: "bg-blue-800",
    number: "08",
  },
  {
    imageSrc: "/pexels-kevin-ku-92347-577585.jpg",
    title: "Web Development",
    services: ["Frontend Dev", "Backend Dev", "API Integration"],
    bgColor: "bg-cyan-800",
    number: "09",
  },
];

function ServiceSection() {
  return (
    <div className="relative overflow-hidden bg-[#f4f4f4] h-[90vh] w-full">
      <div className="absolute inset-0 group">
        <div className="flex h-full w-max animate-scroll group-hover:[animation-play-state:paused] gap-10 px-10 items-center">
          {services.map((card, index) => (
            <div key={index} className="flex-shrink-0">
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
