import React from 'react'

interface GenFilterProps {
  selectedGen: number;
  onSelectGen: (gen: number) => void;
}

const generations = [
  { name: 'First Gen', value: 1 },
  { name: 'Second Gen', value: 2 },
  { name: 'Third Gen', value: 3 }
];

export default function GenFilter({ selectedGen, onSelectGen }: GenFilterProps) {
  return (
    <div className="pl-5 pr-5 pt-6 pb-5 ">
      <div className="flex bg-[#1c1c1c] h-[40px] rounded-full">
        {generations.map((gen) => (
          <div 
            key={gen.value}
            className="w-[50%] flex items-center justify-center font-sora text-[14px] cursor-pointer"
            onClick={() => onSelectGen(gen.value)}
            style={selectedGen === gen.value ? {
              background: 'linear-gradient(-40deg, #f40208, #ff464b)',
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