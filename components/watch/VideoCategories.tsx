"use client"

import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"
import { TOP_SELECT_ICON } from "../custom-icons"



export default function VideoCategories({ onCategoryChange }: { onCategoryChange: (slug: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const categories = [
    { name: "All", slug: 'all' },
    { name: "Travel", slug: 'travel' }, 
    { name: "Gaming", slug: 'gaming' },
    { name: "Comedy", slug: 'comedy' },
    { name: "AI", slug: 'ai' },
    { name: "Skills", slug: 'skills' },
  ]

  const handleItemClick = (slug: string, index: number) => {
    setActiveIndex(index)
    scrollToItem(index)
    onCategoryChange(slug)
  }

  const scrollToItem = (index: number) => {
    if (scrollContainerRef.current && itemRefs.current[index]) {
      const container = scrollContainerRef.current
      const item = itemRefs.current[index]
      const containerWidth = container.offsetWidth
      const itemWidth = item!.offsetWidth
      const scrollLeft = item!.offsetLeft - containerWidth / 2 + itemWidth / 2

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      scrollToItem(activeIndex)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeIndex]) // Removed scrollToItem from dependencies

  return (
    <div
      ref={scrollContainerRef}
      className="flex items-center overflow-x-auto overflow-y-hidden pl-5 relative z-10 gap-1.5 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {categories.map((cat, index) => (
        <div
          key={index}
          ref={(el: any) => (itemRefs.current[index] = el)}
          className={cn(
            "flex-none relative inline-flex items-center whitespace-nowrap p-1.5 px-3 bg-[#2d2d2d]   rounded-[7px] font-sora text-[13px] cursor-pointer select-none",
            activeIndex === index ? "bg-[white] text-black" : "",
            "last:mr-5",
          )}
          style={{
            // background: activeIndex === index ? "linear-gradient(180deg, #1c1c1c, rgb(253 113 113 / 10%))" : "",
          }}
          onClick={() => handleItemClick(cat.slug, index)}
        >
          {cat.name}
          {/* {activeIndex === index && (
            <img
              src={TOP_SELECT_ICON || "/placeholder.svg"}
              className="absolute top-[-1px] right-[-1px] w-[20px]"
              alt="Selected"
            />
          )} */}
        </div>
      ))}
    </div>
  )
}

