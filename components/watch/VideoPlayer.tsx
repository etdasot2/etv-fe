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

                <div className="mt-2">
                    <MuxPlayer
                        playbackId={video.muxPlaybackId}
                        streamType="on-demand"
                        muted={false}
                        //   onPlay={() => setIsPlaying(true)}
                        //   onPause={() => setIsPlaying(false)}
                        //   onTimeUpdate={handleTimeUpdate}
                        // onWaiting={() => setIsBuffering(true)}
                        // onPlaying={() => setIsBuffering(false)}
                        style={{
                            height: '270px',
                            width: '100%',
                            // '--controls': 'none',
                            '--media-object-fit': 'contain',
                        } as React.CSSProperties}
                    />

                    <div className="mt-3 p-5 pt-0">
                        {/* title and views */}
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">

                                <h1 className="font-sora text-white font-bold text-[16px] leading-[1.3]">{video.headline}</h1>

                                <div className="text-[12px] font-sora text-[#AAAAAA] mt-2 ">{formatBigNumbers(video.views)} {t('watch.views')} {getTimeAgo(video.published)}</div>
                            </div>

                            {/* subscribe section */}
                            <div className="flex items-center w-[45px] h-[45px]">
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






                    </div>
                </div>}


        </>
    )
}

export default VideoPlayer;