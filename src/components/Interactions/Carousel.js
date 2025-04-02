"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Carousel({
  banners,
  autoPlay = false,
  autoPlayInterval = 5000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigate to previous slide
  const previousSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // Navigate to next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  // Auto-play functionality
  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoPlay, autoPlayInterval, banners.length]);

  return (
    <div className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-56 overflow-hidden md:h-96 z-10">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href={banner.redirect_url}>
              <div className="relative w-full h-full">
                <Image
                  src={banner.image_url}
                  alt={`Banner ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      {/* <button
        type="button"
        onClick={previousSlide}
        className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button> */}

      {/* Next Button */}
      {/* <button
        type="button"
        onClick={nextSlide}
        className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  );
}
