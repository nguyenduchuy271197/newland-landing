"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: React.ReactNode[];
  itemsToShow?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  gap?: number; // Add gap prop for space between items
}

const MultiItemCarousel: React.FC<CarouselProps> = ({
  items,
  itemsToShow = 3,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  gap = 24, // Default gap of 24px
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const totalSlides = items.length - itemsToShow + 1;

  // Calculate item width based on container width, items to show, and gap
  const getItemWidth = useCallback(() => {
    if (containerWidth === 0) return `${100 / itemsToShow}%`;
    const totalGapWidth = gap * (itemsToShow - 1);
    const availableWidth = containerWidth - totalGapWidth;
    const itemWidth = availableWidth / itemsToShow;
    return `${itemWidth}px`;
  }, [containerWidth, itemsToShow, gap]);

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector(".carousel-container");
      if (container) {
        setContainerWidth(container.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev < items.length - itemsToShow ? prev + 1 : prev
    );
  }, [items.length, itemsToShow]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      handleNext();
      setTouchStart(null);
    }
    if (diff < -50) {
      handlePrevious();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, handleNext]);

  // Calculate translation amount considering gaps
  const getTranslateX = () => {
    const itemWidth = containerWidth / itemsToShow;
    const gapOffset = currentIndex * (gap * (itemsToShow / items.length));
    return `${currentIndex * itemWidth + gapOffset}px`;
  };

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${getTranslateX()})`,
            gap: `${gap}px`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: getItemWidth(),
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {showArrows && (
          <>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded 
                ${
                  currentIndex === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white/80 hover:bg-white text-gray-800"
                } 
                transition-colors shadow-lg z-10`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= items.length - itemsToShow}
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-l-lg 
                ${
                  currentIndex >= items.length - itemsToShow
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white/80 hover:bg-white text-gray-800"
                } 
                transition-colors shadow-lg z-10`}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                ${
                  currentIndex === index ? "bg-neutral-600" : "bg-neutral-200"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiItemCarousel;
