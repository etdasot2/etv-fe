import { useInfoModal } from "@/context/InfoModalContext";
import { fetchVideoDetails } from "@/lib/api";
import { formatBigNumbers, getTimeAgo } from "@/utils/formatBigNumbers";
import MuxPlayer from "@mux/mux-player-react"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


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
            } finally{
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
                    <h1 className="font-sora text-white font-bold text-[16px] leading-[1.3]">{video.headline}</h1>

                    <div className="text-[12px] font-sora text-[#AAAAAA] mt-2 ">{formatBigNumbers(video.views)} {t('watch.views')} {getTimeAgo(video.published)}</div>

                    {/* subscribe section */}
                    <div className="flex items-center w-full mt-4">
                        <div className="flex items-center flex-1">
                            <img src={video.channel?.avatar} className="w-[33px] h-[33px] rounded-full" />
                            <span className="ml-2 text-[14px] font-semibold">{video.channel?.username}</span>
                            <div className="text-[14px] font-medium ml-2 text-[#AAAAAA]">{formatBigNumbers(video?.channel?.subscribers || 0)}</div>
                        </div>
                        {video.isLiked || subscribed === video._id ? <>
                            <div className="w-fit cursor-default rounded-full ml-2 bg-[#333333] font-sora text-white pl-3.5 pr-3.5 h-[33px] flex items-center justify-center font-medium text-[13px] disabled:opacity-1"
                            >{t('watch.subscribed')}</div>
                        </> :
                            <button className="w-fit cursor-default rounded-full ml-2 bg-white font-sora text-black pl-3.5 pr-3.5 h-[33px] flex items-center justify-center font-medium text-[13px] disabled:opacity-1"
                                onClick={() => { onSubscribe(video) }}
                                disabled={isSubscribing}
                            >{isSubscribing ? t('watch.subscribing')+"..." : t('watch.subscribe')}</button>}
                    </div>

                    {/* actions */}
                    <div className="mt-4 flex items-center gap-2">
                        <div className="flex rounded-full bg-[#1c1c1c] pl-4 pr-4 h-[38px]">
                            <div className="flex items-center">
                                <div
                                    onClick={() => { setInfoText(t('global.stayTuned')) }}
                                    className="flex items-center"
                                >
                                    <svg version="1.1" viewBox="0 0 1600 1600" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <path transform="translate(1016,111)" d="m0 0h12l23 5 10 6 10 9 9 12 8 9 8 14 9 20 6 16 8 17 13 21 5 15 1 5v8l-3 15-6 15-6 9-6 7-5 13-16 64-6 22-7 11-4 8-4 16-7 31-10 40-4 9-5 5-12 4-2 10-7 47-2 34v15l15 1 45 1 290 2 16 1 9 3 5 5 8 13 16 17 7 7 9 11 7 8 13 8 14 8 4 4 1 5v168l-2 79-5 3-15 2-9 4-3 40-4 56-4 36-1 11-3 5-4 2-13 2-9 5-1 32-1 20-2 33-2 20-5 24-4 11-4 4-12 7h-2v8l-6 29-4 13-6 10-9 10-22 22-8 6-16 4-24 3-52 3-11 1-2 5-1 14-3 10-5 5-5 1-15 1-714 2h-118l-244-1-2-2-1-5v-791l2-2 45-1h184l42-1 15-1 10-3 10-14 14-15 4-5h2l2-4 13-13 7-8 32-32 8-7 14-14 7-8 72-72 1-2h2v-2h2v-2l8-7 15-15 1-2h2l2-4 18-18h2v-2l8-7 47-47 7-8 11-12 1-2h2l2-4 26-26 5-10 1-8v-8l4-9 6-12 16-20 2-3h2l2-4 15-16 3-4h2l2-4 10-9 11-9 10-8 16-10 19-8 15-6 16-8 13-9 10-5 14-3 24-3 15-1zm-55 114-18 4-16 8-14 10-13 12-8 7-32 32-7 8-28 28v2l-3 1-12 12-7 8-7 7-9 11-10 11v2l-4 2-8 11-1 2v19l-6 12-14 17-7 7-7 8-31 33-11 11v2l-3 1-7 8-75 75-3 2v2l-4 2-51 51-8 7-5 4v2l-4 2-7 7-8 7-14 12-5 5-1 172v185l1 271 1 5 701-1 28-1 14-1 10-3 8-6 6-7 11-14 9-10 4-8 5-18 2-12 2-31 1-23 2-13 20-3 9-4 1-5 1-97 3-82 15-1 19-4 4-3 1-4 1-13 1-110 1-11 2-4 16-8 8-6 6-9-1-7-9-12-10-7-4-2-2-4-6-9-4-11-4-2-6-1-24-1-57-1-365-1-26-1-9-1-2-7 1-15 3-26 3-10 7-11 13-13 4-11 2-22 2-65 1-16 4-20 8-7 13-7 7-8 3-8 3-10 3-21v-10l-1-13 3-12 5-17 18-21 4-9 5-21 3-21 1-17 4-21 3-5 9-10 7-11 8-16 5-22-2-11-4-8-6-5-7-3-9-4-10-1zm-695 536-76 1-1 62v308l1 195 1 4 145 1h79l1-3v-52l1-121v-392l-1-1-18-1-65-1z" fill="#fff" />
                                    </svg>
                                    <span className="text-[13px] font-sora font-semibold ml-3">{formatBigNumbers(video?.likes || 0)}</span>
                                </div>
                                <div className="w-[1.5px] h-[17px] bg-white/20 ml-2.5 mr-2.5"></div>
                                <div className="rotate-[-180deg]"
                                    onClick={() => { setInfoText(t('watch.cantDislike')) }}

                                >
                                    <svg version="1.1" viewBox="0 0 1600 1600" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <path transform="translate(1016,111)" d="m0 0h12l23 5 10 6 10 9 9 12 8 9 8 14 9 20 6 16 8 17 13 21 5 15 1 5v8l-3 15-6 15-6 9-6 7-5 13-16 64-6 22-7 11-4 8-4 16-7 31-10 40-4 9-5 5-12 4-2 10-7 47-2 34v15l15 1 45 1 290 2 16 1 9 3 5 5 8 13 16 17 7 7 9 11 7 8 13 8 14 8 4 4 1 5v168l-2 79-5 3-15 2-9 4-3 40-4 56-4 36-1 11-3 5-4 2-13 2-9 5-1 32-1 20-2 33-2 20-5 24-4 11-4 4-12 7h-2v8l-6 29-4 13-6 10-9 10-22 22-8 6-16 4-24 3-52 3-11 1-2 5-1 14-3 10-5 5-5 1-15 1-714 2h-118l-244-1-2-2-1-5v-791l2-2 45-1h184l42-1 15-1 10-3 10-14 14-15 4-5h2l2-4 13-13 7-8 32-32 8-7 14-14 7-8 72-72 1-2h2v-2h2v-2l8-7 15-15 1-2h2l2-4 18-18h2v-2l8-7 47-47 7-8 11-12 1-2h2l2-4 26-26 5-10 1-8v-8l4-9 6-12 16-20 2-3h2l2-4 15-16 3-4h2l2-4 10-9 11-9 10-8 16-10 19-8 15-6 16-8 13-9 10-5 14-3 24-3 15-1zm-55 114-18 4-16 8-14 10-13 12-8 7-32 32-7 8-28 28v2l-3 1-12 12-7 8-7 7-9 11-10 11v2l-4 2-8 11-1 2v19l-6 12-14 17-7 7-7 8-31 33-11 11v2l-3 1-7 8-75 75-3 2v2l-4 2-51 51-8 7-5 4v2l-4 2-7 7-8 7-14 12-5 5-1 172v185l1 271 1 5 701-1 28-1 14-1 10-3 8-6 6-7 11-14 9-10 4-8 5-18 2-12 2-31 1-23 2-13 20-3 9-4 1-5 1-97 3-82 15-1 19-4 4-3 1-4 1-13 1-110 1-11 2-4 16-8 8-6 6-9-1-7-9-12-10-7-4-2-2-4-6-9-4-11-4-2-6-1-24-1-57-1-365-1-26-1-9-1-2-7 1-15 3-26 3-10 7-11 13-13 4-11 2-22 2-65 1-16 4-20 8-7 13-7 7-8 3-8 3-10 3-21v-10l-1-13 3-12 5-17 18-21 4-9 5-21 3-21 1-17 4-21 3-5 9-10 7-11 8-16 5-22-2-11-4-8-6-5-7-3-9-4-10-1zm-695 536-76 1-1 62v308l1 195 1 4 145 1h79l1-3v-52l1-121v-392l-1-1-18-1-65-1z" fill="#fff" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center  justify-center rounded-full bg-[#1c1c1c] pl-4 pr-4 h-[38px]"
                            onClick={() => { setInfoText(t('global.stayTuned')) }}
                        >
                            <svg version="1.1" viewBox="0 0 1600 1600" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                <path transform="translate(959)" d="m0 0h39l1 22 5 8 1 3 4 2 9 7 10 11 8 10 9 10 7 8 11 12 9 9 7 8 9 9 7 8 10 11 9 12 6 10 2 8-3 10v10l2 9 10 13 12 14 13 14 6 7v2h2l7 8 3 3v2h2l7 8 15 16 7 8 9 10 7 8 9 10 12 14 14 15 18 20 12 14 12 13v2h2l7 8 9 10 9 11 12 13 18 20 11 14 10 10 7 8 7 7 9 11 9 10 9 11 11 13 9 15 3 8v14l3 16 4 6 9 12 7 10 9 10 7 8 9 10 7 8 11 12 9 11 11 12 7 8 24 26 25 25 6 3 5-1 5-5h2v95l-6-2-12-1-7 2-9 8-5 5-4 3-2 7 4-1-1 4-5 5h-2l-2 5-3 3-15 6-12 5-1 7 1 7v10l-7 9-3 4-9 2-4 3h-2l-2-5h-4l-5 8v17l-7 13-12 9-4-2-4-1-6 5-5 3-1 2 4-1 3-2-2 4-8 4-3 3-1 2v12l2 15 1 8v21l-6 11-6 5-7-1-8-3h-7l-5 8 3 3v3h-4l1 10-1 9-4 10-10 7-5-1v-2l-9-1-2 4-3 4h-3l1-6h-4l-2 5h-1v8l3 12v7l-4 5h-2v2l-3 1-1 2-12 2-3 1-5-3v-2l-7 3-3 5-2 8 5 2-1 6-2 1-4 18-9 4-11 3-8-1v2l-4 3-2-7h-3l-2 7 3 10v11l-2 10-5 5-10 2-3-2-1 3-4 4h-3l-2-7-2-1-8 6-3 4 1 4 2 4v15l-6 11-2 2-5 2-1 1h-5l-4-3-4-1-2 4-3 3-5 1v-4h2v-2l-6 1-2 8 4 16v6l-8 11-7 6-10-3-4-2h-7l-3 6-1 10 1 1v11l-6 11-11 8-5 1-1-1h-7l-1 1-1 7-6 5-4 1 1-2h2l2-4 2-3-5-1-2 1-4 13 1 11 2 23v21l-5 8-11 4-16 4-5 15-11 17-5 6-17 9-5 4-9 17-14 14-6 4-8 1-5 3-4 11v12l2 15 2 4h-44l-1-12-1-109v-411l-1-1h-116v23l-1 18-5 3h-230l-4 1v21l-1 14-4 6-3 2h-57l-25 1h-17l-10 1-3 5-1 21-3 9-6 5-13 5-12-1-3-1-21-1-4-1-12 3-3 5 3 10-4 7-1 8-4 7-8 6-11 4-7-1h-6l-3-3-9 1h-11l-3-3-10 3-4 2-2 4h-2l2 6v8l-3 3 1 9-5 9-8 4-5 1h-7l-2-2h-5l-6 7-1 4-2 1 3 5-1 7-5 14-8 9-3 2-6-1-6-2-5 1-4-3-7 1-4-1-3 1-2 3h-5l-10-6-5-2-4 5v17l-4 1-1-4-1 13-4 12-8 7h-14l-7 7-3-3h-2v-3l8-1v-2l-6-1-3 4 1 6 2 5v3h-2v8l-3 10-7 8-6 1-4 2-1 3-4-1-3-5-6 1-3 3v11l2 6-1 7-7 6-4 8-8 10-4-2-4-3h-6l-5-1-5 1-2 7 1 7 1 5-3 8v8l2 4 1 10-2 17-4 10-5 5-7 5-5-1-8 3-4 4-3 10 2 1-1 1v14l-2 3 1 5 3 4v2h-46v-182l19 6h14l2-4 3-16 2-13v-54l4-15 4-13 6-14 13-19 4-8 5-15 8-34 10-17 10-8h2l2-4 2-2 4-13 2-11 1-2-3-1 1-6 2-5 1-4 4-11 7-15 7-8 5-6 9-6 4-6 3-10 1-19-2-1 1-6 2-3v-8l5-10 9-11 14-14 10-13 13-15 9-11 8-8 7-8 11-11 7-8 8-9 7-8 10-11 7-8 13-14 9-11 9-10 7-8 10-10 7-8 13-15 12-14 7-7 5-7h2v-2l6-5 9-12 7-9 2-3h2l2-4 8-7 11-10 6-5 8-11 5-10 7-7 1-2h2l2-4 6-3 9 1 15 5 8 1 4 1 10-3 3-3 3-7 3-12 2-3 1-8 4-6 10-6 8-3 6 1 21 5 16 1 5-2 4-13 2-12 9-15 8-7 6-1 16 1 11 3h20l5-3h2l2-14 1-16 6-9 10-5 103-1 2-10 2-26 2-7 3-1 101 1 52 1v-101l1-414zm83 255-2 48-2 174v144l-12 1-44-2-17-1-4 1-1 2-1 34-2 8-3 1-156 1v9l1 6v22l-1 4-7 2-11 1-74 1-19-1-5 3-2 4-1 17-4 11-5 6-8 4-4 1h-11l-15-2-6-2h-14l-7 3-2 4v11l1 4-6 11-5 7-12 6-12 2-4-2h-7l-10-2h-7l-8 3-6 7-6 15-4 2-6 9-3 4v2h-2l-5 5-15 10-2 2-2 7-6 9-3 3v2l-4 2-10 8v2l-4 2-9 10-8 11-10 11-7 9-8 7-8 8-5 6v2h-2l-9 11-9 10-14 14-4 6-9 12-8 10-7 8-36 36-9 10-8 12-4 8-1 3h-2l-2 6 1 7 2 8 3 4h2l1 5-4 1 1 15 6 8 5 8 6-2 3-3 1-3h2l3 3 7-4 1-2h-2l1-8 2-6-1-7 3-3h6l7-3 8-9 3-2 12-1 10 4 9 1 7-3 7-2 5-1 1-7-1-3 3-3v-2h2v-2l2-1-1-7-2-5 4-4 5-2 13-3 2-1 24-1h37l23 1 9-2 3-5 2-9v-10l-1-6v-9l2-1 21-1 90-2 3-1 2-6 3-20 1-17h398l1 1v27l-1 112v114l1 81 2 21 3 4 14 2 7-5 10-15 11-22 6-8 9-6 11-5 5-5 2-4v-13l-4-14v-7l2-5-2-5 1-6 4-7 7-6 9-4 12-6 5-4 3-6 4-17 4-4v-2l4-2 11-7 10-6 4-4 7-18 4-3v-2l4-2 15-10 8-7 1-3h2l6-14 3-9 5-5 12-4 7-4 9-16 4-10v-8l4-1 3-2 12-3 8-4 5-5 6-13 8-15 4-5 10-7 8-5 16-24 7-6 11-7 10-8 7-13 11-14 6-8 8-8 7-6 4-11v-12l1-11v-44l1-25v-23l1-12-9-15-9-8-6-8-11-12-11-14-6-7h-2l-2-4-22-22-7-8-12-14-10-10-7-8-13-16-11-12-16-17-13-15-16-17-8-8-9-11-12-14-10-10-1-2h-2l-2-4h-2l-2-4-14-14-9-11-7-7-7-8-11-12-9-11-11-14-10-11-14-16 1-7 3-6-1-8 2-4-3-8-7-12-12-16-20-25-9-11-7-7-13-10zm357 819m-1 1 1 3zm-998 10m-3 12m967 13m-1047 25 1 2z" fill="#fff" />
                                <path transform="translate(89,1472)" d="m0 0h5l-1 3-7 3-2 2-1-4h2v-3z" fill="#fff" />
                                <path transform="translate(1288,1205)" d="m0 0 2 1-1 3h-2z" fill="#fff" />
                                <path transform="translate(79,1475)" d="m0 0" fill="#fff" />
                                <path transform="translate(44,1568)" d="m0 0" fill="#fff" />
                                <path transform="translate(80,1479)" d="m0 0" fill="#fff" />
                                <path transform="translate(1128,1201)" d="m0 0" fill="#fff" />
                                <path transform="translate(394,1089)" d="m0 0" fill="#fff" />
                            </svg>
                            <span className="text-[13px] font-sora font-medium ml-1.5">Share</span>
                        </div>
                        <div className="flex items-center  justify-center rounded-full bg-[#1c1c1c] pl-4 pr-4 h-[38px]"
                            onClick={() => { setInfoText(t('global.stayTuned')) }}
                        >
                            <svg version="1.1" viewBox="0 0 1600 1600" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                <path transform="translate(305,226)" d="m0 0 912 1 2 6-1 27-1 691-1 179-1 262-1 21-1 6-4-2-13-10-8-7-9-10-12-13-35-35-11-9-9-8-14-11-10-7-9-6-8-2-17-7-17-10-18-13-16-11-25-17-17-12-18-13-19-14-16-13-19-14-15-12-13-8-16-8-21-9-19-10-16-10-15-10-15-7h-8l-10 8-11 10-4 3h-2v2l-7 6h-2v2l-11 9-8 8-8 7-11 10-13 9-28 12-10 4-10 6-17 13-11 8-14 14-6 8-5 5-8 7-9 4-18 1-16 5-13 11-14 12-17 17h-2v2l-8 7-14 14h-2l-1 3-8 7-23 23h-2v2l-10 7-10 4-5 1-18 1-9 2-8 7-11 14-8 8-14 8-7 2-4-10-1-7-1-76v-186l1-360v-547zm76 77-1 5v662l1 155 1 70 1 21 1 7 10-1 10-3 25-12 20-12 14-10 10-8 11-9 10-8 12-11 14-11 11-9 7-6v-2l4-2 8-9 4-5 4-2 10 1 5 2h5l16-12 11-9 17-17 8-7 15-14 5-4v-2l5-2 11-8 20-12 22-12 16-9 15-8 13-8 16-8 1 6h1l2-9 5-5v-2l11 7 10 8 15 10 13 11 15 14 5 5h2v2l8 7 10 9h2l2 4h2l1 3 8 6 19 9 21 8 17 9 22 14 14 8 16 8 18 11 12 9 13 10 10 8 9 7 11 9 13 11 16 13 29 29 8 6 7 6h2v-87l2-128 1-706-43-1z" fill="#fff" />
                                <path transform="translate(775,961)" d="m0 0 3 2-3 1z" fill="#fff" />
                            </svg>

                            <span className="text-[13px] font-sora font-medium ml-1">Save</span>
                        </div>
                    </div>

                    {/* comments */}

                    <div className="flex  flex-col  rounded-[14px] bg-[#1c1c1c] p-4  mt-4"
                        onClick={() => { setInfoText(t('global.stayTuned')) }}
                    >
                        <span className="text-[14px] font-semibold font-sora flex items-center">Comments <div className="ml-1.5 text-[#AAAAAA] font-normal">{formatBigNumbers(video?.comments || 0)}</div></span>
                        <div className="flex items-center mt-2">
                            <img src={video?.topOneComment?.user?.avatar} className="w-[33px] h-[33px] rounded-full" />
                            <p className=" line-clamp-2 text-[13px] font-sora ml-2 leading-[1.4] text-white/90">{video?.topOneComment?.comment}</p>
                        </div>
                    </div>




                </div>
            </div>}


        </>
    )
}

export default VideoPlayer;