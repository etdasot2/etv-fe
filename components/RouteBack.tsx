'use client'
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface BackTitleProps {
  title: string;
  back?: boolean;
  border?: boolean;
  right?: ReactNode;
}

const BackTitle: React.FC<BackTitleProps> = ({ title, back, right }) => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 0);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="w-full h-[40px]"></div>
    <div
      className={`w-full max-w-[435px] px-4   flex justify-center items-center pt-1 pb-3 fixed top-0 z-50 transition-all ${
        isSticky ? "bg-[#101010] shadow-md" : "bg-transparent"
      }`}
    >
      <div className={cn("w-full flex items-center relative  mt-2", !right && "justify-center" )}>
        {back && (
          <div
            className="absolute left-0 top-0 cursor-pointer "
            onClick={() => {
              router.back();
            }}
          >
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABJQTFRFAAAA////////////////////PlKtOgAAAAZ0Uk5TAEAQv//PMLGTOQAAAKFJREFUeJxjZMADGEclSZYUfI9bUlnxzQVckkxBH/7uxyWpKs+AUxKokYFnAw5JoEbG2w+wS4I08q3D4VpUjaiSaBpRJdE0okiia0SRRNeILImhEVkSQyOSJKZGJElWe3SNSJIiBugaiZVkdsRjLF4H4fUK/kDAG3z4Ax5vlOGPbLzJBH8Cw5s0wVpx5xV82QF/RgJqxW0s/syLDEYlCUkCAFLzQzmZtLZhAAAAAElFTkSuQmCC"
              className="w-[24px] h-[24px]   opacity-[.5] "
            />
          </div>
        )}
        <span className={cn("font-sora text-base font-medium text-white", back && "pl-[26px] pr-[26px]")}>{title}</span>

        <div className="absolute right-0 top-0 flex items-center h-full">
          {right}
        </div>
      </div>
    </div>
    </>

  );
};

export default BackTitle;
