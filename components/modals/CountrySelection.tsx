"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { X, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

interface Country {
  name: string
  code: string
  dialCode: string
  flag: string
}

interface CountrySelectorModalProps {
  isOpen: boolean
  onClose: () => void
  selectedCountry: Country
  onSelectCountry: (country: Country) => void
}

const CountrySelectorModal: React.FC<CountrySelectorModalProps> = ({ isOpen, onClose, onSelectCountry }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [allCountries, setAllCountries] = useState<Country[]>([])
  const [displayedCountries, setDisplayedCountries] = useState<Country[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const countriesPerPage = 30
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  // Fetch all countries on component mount
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedCountries = data
          .map((country: any) => {
            let dialCode = ""
            if (country.idd && country.idd.root) {
              dialCode =
                country.idd.root +
                (country.idd.suffixes && country.idd.suffixes.length > 0 ? country.idd.suffixes[0] : "")
            }

            return {
              name: country.name.common || country.name.official,
              code: country.cca2,
              dialCode,
              flag: country.flag || getFlagEmoji(country.cca2),
            }
          })
          .filter((country: Country) => country.dialCode) // Only include countries with dial codes
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name))

        setAllCountries(formattedCountries)
        // Initially load the first page of countries
        setDisplayedCountries(formattedCountries.slice(0, countriesPerPage))
      })
      .catch((error) => {
        console.error("Error fetching countries:", error)
        const fallbackCountries = [
          { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
          { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
          { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
          { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
          { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
        ]
        setAllCountries(fallbackCountries)
        setDisplayedCountries(fallbackCountries)
      })
  }, [])

  // Filter countries based on search query
  const filteredCountries = searchQuery
    ? allCountries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchQuery.toLowerCase()) || country.dialCode.includes(searchQuery),
      )
    : displayedCountries

  // Load more countries when user scrolls to bottom
  const loadMoreCountries = useCallback(() => {
    if (isLoading || displayedCountries.length >= allCountries.length) return

    setIsLoading(true)
    const nextPage = page + 1
    const startIndex = (nextPage - 1) * countriesPerPage
    const endIndex = startIndex + countriesPerPage
    const newCountries = allCountries.slice(0, endIndex)

    // Simulate network delay for smoother UX
    setTimeout(() => {
      setDisplayedCountries(newCountries)
      setPage(nextPage)
      setIsLoading(false)
    }, 300)
  }, [allCountries, displayedCountries.length, isLoading, page])

  // Handle scroll event to detect when user reaches bottom
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current
    // Load more when user scrolls to within 100px of the bottom
    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading && !searchQuery) {
      loadMoreCountries()
    }
  }, [isLoading, loadMoreCountries, searchQuery])

  // Attach scroll event listener
  useEffect(() => {
    const currentContainer = containerRef.current
    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [handleScroll])

  // Reset displayed countries when search query changes
  useEffect(() => {
    if (searchQuery) {
      // When searching, we don't paginate the results
      return
    } else {
      // When clearing search, reset to first page
      setDisplayedCountries(allCountries.slice(0, page * countriesPerPage))
    }
  }, [searchQuery, allCountries, page])

  // Function to get flag emoji from country code
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-end top-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#191919] rounded-t-xl w-full max-w-md"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 pt-2 pb-2 bg-[#252525] rounded-t-xl border-b border-white/5">
              <h2 className="font-semibold font-sora text-[16px]">{t("areaCode.label")}</h2>
              <button onClick={onClose}>
                <X className="w-5 h-5 text-[#eebc7a]   transition-colors duration-300" />
              </button>
            </div>
            <div className="p-3 h-[400px] ">
              <div className="relative mb-4 flex items-center ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Area Code Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#1f1f1f] rounded-lg pl-[35px] pr-3 py-1.5 text-white font-sora text-[12px] border border-[#303030] focus:outline-none"
                />
              </div>
              <div ref={containerRef} className="max-h-96 overflow-y-auto">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    className="w-full text-left p-2 flex items-center font-sora text-[14px]   rounded transition-colors duration-300"
                    onClick={() => onSelectCountry(country)}
                  >
                    <span className="text-white">{country.name}</span>
                    <span className="ml-auto text-gray-400">{country.dialCode}</span>
                  </button>
                ))}
                {isLoading && !searchQuery && (
                  <div className="text-center py-2 text-gray-400">Loading more countries...</div>
                )}
                {!isLoading && !searchQuery && displayedCountries.length < allCountries.length && (
                  <div className="text-center py-2 text-gray-400 text-sm">Scroll for more countries</div>
                )}
                {!isLoading && displayedCountries.length >= allCountries.length && !searchQuery && (
                  <div className="text-center py-2 text-gray-400 text-sm">All countries loaded</div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CountrySelectorModal

