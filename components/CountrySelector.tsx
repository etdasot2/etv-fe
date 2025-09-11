'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

interface CountrySelectorProps {
  selectedCountry: Country;
  onSelectCountry: (country: Country) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ selectedCountry, onSelectCountry }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    // Fetch countries from the external API
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const formattedCountries = data
          .map((country: any) => ({
            name: country.name.common,
            code: country.cca2,
            dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
            flag: country.flag,
          }))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
        setCountries(formattedCountries);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery)
  );

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowSelector(!showSelector)}
        className="flex items-center text-white bg-gray-700 rounded px-4 py-2 focus:outline-none"
      >
        <span className="mr-2">{selectedCountry.dialCode}</span>
        <span>{selectedCountry.flag}</span>
        <ChevronDown className="ml-2 w-4 h-4" />
      </button>

      {showSelector && (
        <div className="absolute left-0 top-12 z-50 w-full bg-gray-900 rounded shadow-lg max-w-md">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="text-lg font-semibold">Choose the international area code</h2>
            <button onClick={() => setShowSelector(false)}>
              <X className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors duration-300" />
            </button>
          </div>
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Area Code Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/50 rounded-lg pl-10 pr-3 py-2 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  className="w-full text-left p-2 hover:bg-red-500/20 flex items-center transition-colors duration-300"
                  onClick={() => {
                    onSelectCountry(country);
                    setShowSelector(false);
                  }}
                >
                  <span className="mr-2">{country.flag}</span>
                  <span>{country.name}</span>
                  <span className="ml-auto">{country.dialCode}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
