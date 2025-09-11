import { useInfoModal } from "@/context/InfoModalContext"
import { useState } from "react"
import Marquee from "react-fast-marquee"
import { useTranslation } from "react-i18next"

interface VideoDetailsProps {
    description: string
    hashtags: string
    video: any
}

const VideoDetails = ({ description, hashtags, video }: VideoDetailsProps) => {
    const { t } = useTranslation()

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    // Define maximum character limit for truncation
    const charLimit = 25;

    // Check if description or hashtags exceed the character limit
    const isDescriptionLong = description.length > charLimit;
    const isHashtagsLong = hashtags.length > charLimit;

    // Conditionally truncate text if not expanded
    const displayedDescription = isExpanded || !isDescriptionLong
        ? description
        : `${description.slice(0, charLimit)}`;

    const displayedHashtags = isExpanded || !isHashtagsLong
        ? hashtags
        : `${hashtags.slice(0, charLimit)}`;


    const { setInfoText } = useInfoModal();
 


  const stayTunedClick = () => {
    setInfoText(t('global.stayTuned'));
  };


    return (
        <div className="absolute bottom-[20px] z-9 w-full pl-4 pr-4">
            <div className="flex items-center mb-[13px]">
                <img src={video?.influencer?.profileImage}
                    className="w-[32px] h-[32px] drop-shadow-xl rounded-full mr-1.5"
                />
                <div className=" flex items-center">
                    <span className="font-sora text-[14px] text-white filter drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">@{video?.influencer?.username}</span>
                    <div className="w-fit rounded-full ml-2 bg-white font-sora text-black pl-3.5 pr-3.5 h-[30px] flex items-center justify-center font-medium text-[13px]"
                        onClick={stayTunedClick}
                    >{t('watch.subscribe')}</div>
                </div>
            </div>
            <div className="w-[85%]  mb-[-30px]">
                <div className="overflow-scroll max-h-[10dvh]">
                    <p className="text-white text-[15px] font-sora mb-2 filter drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">
                        {displayedDescription}
                    </p>
                    <p className="text-white text-[13px] font-sora mt-2 filter drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">
                        {displayedHashtags}
                    </p>
                </div>
                {(isDescriptionLong || isHashtagsLong) && (
                    <button
                        onClick={toggleExpand}
                        className="text-white mt-0 font-sora filter drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)] text-[14px]"
                    >
                        {isExpanded ? "...less" : "...more"}
                    </button>
                )}
            </div>
            <div className="flex justify-between mt-0">
                <div className="  w-[200px] h-fit rounded-full backdrop-blur-custom text-white flex items-center  pl-3 pr-3">
                   
                </div>

                <div className="flex items-center mt-[-5px] mr-[-4px]">
                    <div className="w-[35px] h-[35px] rounded-[6px] relative">
                        <img
                            src={video?.audio?.image}
                            className="w-full h-full rounded-[6px]"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails