'use client'

import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import { cn } from '@/lib/utils'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface BannerSliderProps {
  images: string[] // Array of image URLs
  className?: string
  autoplaySpeed?: number
}

export default function BannerSlider({ images, className, autoplaySpeed = 5000 }: BannerSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const sliderRef = useRef<Slider>(null) // Reference to the slider

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    afterChange: (current: number) => setActiveSlide(current),
    arrows: false, // Disables the arrows
  }

  const handleSlideClick = (index: number) => {
    setActiveSlide(index)
    sliderRef.current?.slickGoTo(index) // Go to the clicked slide
  }

  return (
    <div className={cn("relative   ", className)}>
      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className=' '>
        {images.map((imageUrl, index) => (
          <div key={index} className="w-full outline-none  ">
            <img
              src={imageUrl}
              alt={`Banner Slide ${index + 1}`}
              className="w-full   "
            />
          </div>
        ))}
      </Slider>

      {/* Custom Paging */}
      <div className="flex justify-center mt-1 rounded-full">
        <div className="bg-[#4B4A48] flex rounded-full">

        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideClick(index)} // Handle slide click
            style={{
              width: '12px',
              height: '4px',
              backgroundColor: index === activeSlide ? '#fff' : '',
              margin: '0 0',
              cursor: 'pointer',
              borderRadius: 10,
            }}
          />
        ))}
        </div>

      </div>
    </div>
  )
}
