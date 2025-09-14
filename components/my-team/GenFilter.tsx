import React from 'react'

interface GenFilterProps {
  selectedGen: number;
  onSelectGen: (gen: number) => void;
}

const generations = [
  { name: 'Lv.1', value: 1 },
  { name: 'Lv.2', value: 2 },
  { name: 'Lv.3', value: 3 },
  { name: 'Lv.4', value: 4 },
  { name: 'Lv.5', value: 5 },
];

export default function GenFilter({ selectedGen, onSelectGen }: GenFilterProps) {
  return (
    <div className="pl-4 pr-4 pt-6 pb-5 ">
      <div className="flex bg-[#1c1c1c] h-[40px] rounded-full">
        {generations.map((gen) => (
          <div 
            key={gen.value}
            className="w-[50%] flex items-center justify-center font-sora text-[14px] cursor-pointer"
            onClick={() => onSelectGen(gen.value)}
            style={selectedGen === gen.value ? {
              background: 'linear-gradient(to right, #b37106, #c18610, #7c4804)',
              borderRadius: '50px'
            } : {}}
          >
            {gen.name}
          </div>
        ))}
      </div>
    </div>
  )
}