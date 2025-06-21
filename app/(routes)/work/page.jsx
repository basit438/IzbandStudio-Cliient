"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Navbar from "../../customComponents/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

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

function ProjectShowcasePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 80%",
        },
      });

      gsap.utils.toArray(".project-block").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-white min-h-screen w-full px-4 md:px-12 py-20"
    >
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-20 section-heading">
          Build Your Online Presence with Our{" "}
          <span className="text-indigo-600">Projects</span>
        </h1>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-block flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-8 mb-24`}
          >
            <div className="flex-1 overflow-hidden rounded-3xl shadow-xl">
              <img
                src={project.projectImg}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {project.name}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                {project.projectType}
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologyUsed.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <blockquote className="italic text-gray-600 border-l-4 border-indigo-400 pl-4 mb-4">
                "{project.clientReview}"
              </blockquote>

              <div className="flex gap-4">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
                >
                  Visit Site
                </a>

                <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
                  More Info
                </button>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  Why You Should Start Your Online Business:
                </h4>

                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Reach global customers</li>
                  <li>Automate your sales process</li>
                  <li>Enhance brand value through design</li>
                  <li>Monitor your growth with real-time analytics</li>
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center my-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Need a custom website or app for your business?{" "}
          </h3>

          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            We help startups and enterprises take their ideas online with
            powerful digital products. Our team specializes in ReactJS, NextJS,
            MERN Stack, and custom CMS platforms.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              <MdOutlineEmail /> Enquiry Now
            </a>
          </div>
        </div>

        <footer className="border-t pt-12 text-center text-gray-500 text-sm">
          <p>© 2025 YourCompany. Designed with love and code.</p>
          <p>
            Search Keywords: web developer, app developer, react portfolio,
            online business developer, full-stack engineer, website for startup
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ProjectShowcasePage;
