import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface CategoryFilterProps {
  onFilterChange: (filter: string) => void;
}

export default function CategoryFilterDown({ onFilterChange }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemKey, setSelectedItemKey] = useState('all');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectItem = (key: string) => {
    setSelectedItemKey(key);
    setIsOpen(false);
    onFilterChange(key);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filters = [
    'all',
    'recharge',
    'transfer',
    'withdraw',
    'levelPurchase',
    'taskReward',
    'teamCommission',
    'bonus',
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="text-[12px] font-sora text-white flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {t(`wallet.filters.${selectedItemKey}`)}
        <div
          className="w-[8px] h-[8px] ml-2"
          style={{
            background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAuUlEQVQoU5XQMQ4BURSF4f9IqGhZACug1Gio2IDEIlR2INHMJiQ2QEWjUbICFkBLpXBlJteEMRPmle/d8+XdIzObAhOgQL7zAGYyswAY58vG00EIFIEV0MuJrIG+wpCZlYEt0PoT2QMdSbcIcKQK7IDGD+QItCVdwrkYcKTuSC0DOXv49Hr/ABxp+jqVBHL1bx/e778AR7pebMmH71Fh0ib5s1TAkSEw98BI0iJtrUzAkUFUlLTMKvYJBfg2Gqq9HMQAAAAASUVORK5CYII=) no-repeat 100%',
            backgroundSize: '8px auto'
          }}
        />
      </div>

      {isOpen && (
        <div className="absolute w-auto p-[.625rem_.9375rem] pt-1 mt-[10px] rounded-[0.5rem] bg-[#2a2a2a] shadow-lg text-left z-[1013] right-0">
          {filters.map((key) => (
            <div
              key={key}
              onClick={() => handleSelectItem(key)}
              className="h-[40px] w-full flex flex-row justify-start items-center text-left border-b-[0.0625rem] border-[#434343] cursor-pointer text-white font-sora text-[14px] font-medium leading-[1.0625rem] whitespace-nowrap"
            >
              {t(`wallet.filters.${key}`)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}