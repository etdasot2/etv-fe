'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function useSmoothScroll(offset: number = 0) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollTo = searchParams.get('view')
    if (scrollTo) {
      const element = document.getElementById(scrollTo)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [searchParams, offset])
}
