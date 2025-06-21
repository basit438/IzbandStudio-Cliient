"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

function ProjectCard({ project }) {
  const {
    name,
    shortDescription,
    longDescription,
    technologyUsed,
    siteUrl,
    backgroundImage,
    projectImg,
  } = project;

  const overlayRef = useRef(null);
  const bgRef = useRef(null);
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(bgRef.current, {
        opacity: 0.25,
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(cardRef.current, {
        rotateY: 5,
        rotateX: 5,
        scale: 1.03,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(bgRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(cardRef.current, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [hovered]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-[360px] cursor-pointer rounded-3xl overflow-hidden shadow-2xl bg-white transition-transform duration-300 transform perspective-1000 group"
    >
      

      <div
        ref={bgRef}
        className="absolute -inset-12 z-0 rounded-3xl blur-xl opacity-0 scale-100 transition-all duration-500"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative w-full h-[230px] overflow-hidden">
        <img
          src={projectImg}
          alt={name}
          className="w-full h-full object-cover rounded-t-3xl"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md text-white text-sm px-6 opacity-0 scale-95 transition-all rounded-t-3xl"
        >
          <p>{longDescription || "No description available."}</p>{" "}
        </div>
      </div>
      <div className="p-5 bg-white rounded-b-3xl space-y-4 z-10 relative">
        <h2 className="text-2xl font-extrabold text-gray-800 text-center">
          {name}
        </h2>
        <p className="text-sm text-gray-600 text-center">{shortDescription}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {technologyUsed.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold text-white rounded-full animate-pulse"
              style={{
                backgroundColor: getRandomColor(index),
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-2 text-sm font-semibold rounded-full shadow transition-all duration-300"
          >
            View Live Site
          </a>

          <button className="border border-gray-300 hover:bg-gray-100 px-5 py-2 text-sm font-medium rounded-full transition">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}

function getRandomColor(index) {
  const colors = [
    "#6366F1", 
    "#10B981",
    "#F59E0B", 
    "#EC4899",
    "#0EA5E9",
    "#EF4444", 
  ];
  return colors[index % colors.length];
}

export default ProjectCard;
