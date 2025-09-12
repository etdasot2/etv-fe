import { useInfoModal } from "@/context/InfoModalContext";
import { fetchVideoDetails } from "@/lib/api";
import { formatBigNumbers, getTimeAgo } from "@/utils/formatBigNumbers";
import MuxPlayer from "@mux/mux-player-react"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LIKE_ICON, LIKED_ICON } from "@/components/custom-icons";

interface VideoPlayerProps {
    onSubscribe: (video: any) => void
    videoId: string;
    isSubscribing: boolean;
    subscribed: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, onSubscribe, isSubscribing, subscribed }) => {
    const [video, setVideo] = useState<any>(null); // Use a more specific type if possible
    const { t } = useTranslation();
    const { setInfoText } = useInfoModal();
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        async function loadVideoDetails() {
            setLoading(true);
            try {
                const videoData = await fetchVideoDetails(videoId);
                setVideo(videoData);
            } catch (error) {
                console.error('Failed to load video details:', error);
            } finally {
                setLoading(false)
            }
        }

        if (videoId) { // Only fetch if videoId is provided
            loadVideoDetails();
        }
    }, [videoId]);


    if (!video) {
        return <div></div>; // Or a better loading indicator
    }

    return (
        <>
            {!loading &&

                <div className="mt-2 ">
                    <div className="relative">

                    <MuxPlayer
                        playbackId={video.muxPlaybackId}
                        streamType="on-demand"
                        muted={false}
                        poster={video.youtube.thumbnail}
                        //   onPlay={() => setIsPlaying(true)}
                        //   onPause={() => setIsPlaying(false)}
                        //   onTimeUpdate={handleTimeUpdate}
                        // onWaiting={() => setIsBuffering(true)}
                        // onPlaying={() => setIsBuffering(false)}
                        style={{
                            height: '320px',
                            width: '100%',
                            // '--controls': 'none',
                            '--media-object-fit': 'cover',
                            '--media-object-position': 'bottom',
                            
                        } as React.CSSProperties}

                    /> 
                    
                    {/* <img src={video.youtube.thumbnail} className="absolute inset-0 h-full w-full " /> */}
 </div>

                    <div className="mt-3 p-5 pt-0">
                        {/* title and views */}
                        <h1 className="font-sora text-white font-semibold text-[20px] leading-[1.3]">{video.headline}</h1>


{/* <div className="text-[12px] font-sora text-[#AAAAAA] mt-2 ">{formatBigNumbers(video.views)} {t('watch.views')} {getTimeAgo(video.published)}</div> */}


                        <div className="flex items-start justify-between mt-[20px]">
                            <div className="flex flex-col">
                            <p className="font-sora text-white/70  text-[12px] mt-1 ">Type: {video.category}</p>
                            <p className="font-sora text-white/70  text-[12px] mt-1 ">Director: {video.director}</p>

                               </div>

                            {/* subscribe section */}
                            <div className="flex items-center w-[45px] h-[45px] flex-shrink-0">
                                <div className=" w-full mt-4 bg-[#272727] rounded-full p-3 flex items-center justify-center">

                                    {video.isLiked || subscribed === video._id ? <>
                                        <img src={LIKED_ICON} className="w-full h-full pointer-events-none" />
                                    </> :
                                        <button className="w-fit cursor-default  disabled:opacity-1"
                                            onClick={() => { onSubscribe(video) }}
                                            disabled={isSubscribing}
                                        >
                                            <img src={LIKE_ICON} className="w-full h-full pointer-events-none" />

                                        </button>}
                                </div>
                            </div>

                            

                        </div>
                        <div className="mt-5">
                            <span className="font-sora text-white font-semibold  text-[14px] ">Introduction:</span>
                        <p className="font-sora text-white/70  text-[12px] mt-1 ">{video.description}</p>

                        </div>






                    </div>
                </div>}


        </>
    )
}

export default VideoPlayer;