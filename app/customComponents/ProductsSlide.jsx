"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard"; // Assuming it exists
const projects = [
  {
    name: "Agera Capital",
    projectImg: "/agera-cap.png",
    projectType: "Financial Management Platform",
    shortDescription: "Modern financial blog and tools with secure backend.",
    longDescription:
      "Agera Capital is a financial management web app built with the MERN stack and Next.js. It includes a blogging system, financial calculators, dynamic data fetching, and a clean UI for financial insights. Hosted with image management via Cloudinary.",
    technologyUsed: [
      "MongoDB",
      "Express",
      "NextJS",
      "Node.js",
      "Tailwind",
      "Cloudinary",
    ],
    siteUrl: "https://ageracapital.co.in",
    clientReview: "Professional work, secure backend, and beautiful design!",
    backgroundImage:
      "https://www.vhv.rs/dpng/d/480-4802367_paint-clip-art-blue-paint-splatter-clip-art.png",
  },
  {
    name: "Noida Sofa Maker",
    projectImg: "/noida-sofa.png",
    projectType: "Furniture and Sofa Services Website",
    shortDescription: "Dynamic service portfolio with email integration.",
    longDescription:
      "Noida Sofa Maker is a custom website for showcasing sofa and furniture repair and manufacturing services. Built with NextJS, Express, and Nodemailer for seamless inquiry handling. Tailwind CSS ensures a clean and modern UI.",
    technologyUsed: ["NextJS", "Tailwind", "NodeJs", "ExpressJs", "Nodemailer"],
    siteUrl: "https://noidasofamaker.com",
    clientReview:
      "Responsive design and quick delivery. Very happy with the service!",
    backgroundImage:
      "https://www.pngfind.com/pngs/m/0-5104_paint-splatter-rainbow-colors-rainbow-paint-splatter-clip.png",
  },
  {
    name: "K.R Furniture",
    projectImg: "/kr-furniture.png",
    projectType: "Interior & Furniture Service Platform",
    shortDescription: "Interior solutions with real-time management dashboard.",
    longDescription:
      "K.R Furniture is a service website for interior design and furniture solutions in Gurugram. It includes dynamic service listings, image gallery support, and admin management panel using the full MERN stack with Cloudinary integration.",
    technologyUsed: [
      "MongoDB",
      "Express",
      "NextJS",
      "Node.js",
      "Tailwind",
      "Cloudinary",
    ],
    siteUrl: "https://krfurniture.com",
    clientReview:
      "Clean, scalable, and user-friendly interface. Loved the work!",
    backgroundImage:
      "https://www.vhv.rs/dpng/d/480-4802367_paint-clip-art-blue-paint-splatter-clip-art.png",
  },
  {
    name: "Aishwarya Foods and Exports",
    projectImg: "/aishwarya.png",
    projectType: "Food Export Business Management System",
    shortDescription: "A powerful MERN app to manage food product exports.",
    longDescription:
      "Aishwarya Foods and Exports is a scalable full-stack MERN application that handles product listing, cart system, wishlist, authentication, reviews, and admin dashboard. Built for managing the food export business end-to-end with a responsive UI and backend hosted on MongoDB Atlas.",
    technologyUsed: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind",
      "Cloudinary",
    ],
    siteUrl: "https://aishwaryafoodsandexports.com",
    clientReview:
      "Outstanding backend integration and pixel-perfect frontend. Highly recommended!",
    backgroundImage:
      "https://www.vhv.rs/dpng/d/480-4802367_paint-clip-art-blue-paint-splatter-clip-art.png",
  },
];

function ProductsSlide() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const tl = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current.scrollWidth;

      tl.current = gsap.to(trackRef.current, {
        x: `-=${totalWidth / 2}`, // move half, because we'll duplicate slides
        duration: 15, // reduced duration
        ease: "linear",
        repeat: -1,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  const handlePause = () => {
    tl.current?.pause();
    setPaused(true);
  };

  const handleResume = () => {
    tl.current?.resume();
    setPaused(false);
  };

  const handlePrev = () => {
    tl.current?.time(tl.current.time() - 1);
  };

  const handleNext = () => {
    tl.current?.time(tl.current.time() + 1);
  };

  return (
    <section className="px-6 py-12 bg-white text-black w-full">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          Our Successfully Delivered Projects
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Projects built with passion and precision to meet client needs.
        </p>
      </div>

      <div
        ref={sliderRef}
        className="overflow-hidden relative w-full"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        <div ref={trackRef} className="flex slide-track space-x-6 w-max p-8">
          {[...projects, ...projects].map((project, idx) => (
            <div key={idx} className="min-w-[320px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handleNext}
            className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductsSlide;
