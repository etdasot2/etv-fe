'use client'
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface BackTitleProps {
  title: string;
  back?: boolean;
  border?: boolean;
  right?: ReactNode;
  isScore?: boolean;
}

const BackTitle: React.FC<BackTitleProps> = ({ title, back, right, isScore }) => {
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAYAAADuSnCvAAAAAXNSR0IArs4c6QAAAzpJREFUeF7tmruKFUEQhr/yFRQDQQVBFBUzMfC2XlFQEQx8AWM1MRAUxMu6K+rKKt5vYOILmBkJYii+ggaaCN6vaElDH5gd5pzpntMz23uoSU5yZqbqm/qrqqtbsGsGATEeMwkYkFJEGBADMjhJWIRYhFiERBVSk4xJxiRjkokiMNuSUdV5zgYR+TeM4W3d22lSVdV1wH7gA/BYRNxvVldnQFR1DLgHLAN+A8+AQyLyLScinQBR1fXAfWB1yfmnwGEReZ8LlNaBqOpm4BqwtsLpP8AT4IiIfMwBSqtAVHU78ABYMsBZJ58xEXk50kBUdYPPGStrHP0KbBSR1yMLxCdQJ5M1NU66hHoZmBSR7yMJRFV3AQ+BRQEOTgDnRcRFSRZX0hyiqluAu8DyGu9cNEyLyIksKBSMSAZEVbcC14FVATljCpjIRSZFe5MAUdU9wCNgYcAXHwfGc2vIenYPDcSX1ju+Ax3EwyXQqyJyMgDarP1lKCCqusM3XXWl9TNwxcvk16x5G/DixkBUdZ9vuhYEvOdMTqV1kL3RQFTV3bMTcDJZGtBnTInIqQBoWfylCZDdLhcAK2o8+ARc8pHh1ixz4ooCoqoHfJ8RIhO3RnkL/MiEhALPfSP4rp9NQUD8lMuV1pvA4kwcbGKGm9K5KndRRP5WPSAUyF5fJeo60CZGdn3PLeCYiFRWu1ogqnoQuA3M79rylt7nisFREfnZKEIMSAU2VTXJFLlYUu0j3siy63qPN0CKwU9trgvIN+nKbilaYhqz3jTM9SRz4oom36B1z36FW/xS0UB6N0cu7s75lW5Wm1KNyu6gOI9Y/n8B3JTsQr/6n4ueGkdIIVLc3kvIgCjbOWoSyZQSbcwIcRI4O7IjxEKkxAyZp/2qM0VJTqq2oSVTipSYbYgbInI8qTcJHpYUiLMncqPK9SmnR3ajqiAfdxYkZCvTSaZXfbIoyckjpAAldLPbgdgkIq8SRPzQj2gNiJdP6HGIbSLyYmhvEjygVSAeih2YKX8oO1JVPWSyQ3cVkWLHMiug2MHdBMm/s0e0XmU68yTRiwxICaQBMSCDtWURYhFiERJVf0wyJhmTjEkmikDpz/8BE3MOUpH7xFsAAAAASUVORK5CYII="

                // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABJQTFRFAAAA////////////////////PlKtOgAAAAZ0Uk5TAEAQv//PMLGTOQAAAKFJREFUeJxjZMADGEclSZYUfI9bUlnxzQVckkxBH/7uxyWpKs+AUxKokYFnAw5JoEbG2w+wS4I08q3D4VpUjaiSaBpRJdE0okiia0SRRNeILImhEVkSQyOSJKZGJElWe3SNSJIiBugaiZVkdsRjLF4H4fUK/kDAG3z4Ax5vlOGPbLzJBH8Cw5s0wVpx5xV82QF/RgJqxW0s/syLDEYlCUkCAFLzQzmZtLZhAAAAAElFTkSuQmCC"
              className="w-[24px] h-[24px] "
            />
          </div>
        )}
        <span className={cn("font-sora text-base font-medium text-white", back && "pl-[26px] pr-[26px]")} 
        style={{
          opacity: isScore ? "0" : "1"
        }}
        >{title}</span>

        <div className="absolute right-0 top-0 flex items-center h-full">
          {right}
        </div>
      </div>
    </div>
    </>

  );
};

export default BackTitle;
