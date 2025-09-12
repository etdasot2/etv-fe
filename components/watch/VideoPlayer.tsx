import { useInfoModal } from "@/context/InfoModalContext";
import { fetchVideoDetails } from "@/lib/api";
import { formatBigNumbers, getTimeAgo } from "@/utils/formatBigNumbers";
import MuxPlayer from "@mux/mux-player-react"
import { useEffect, useState, useRef } from "react";
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
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [hasEverPlayed, setHasEverPlayed] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [showPoster, setShowPoster] = useState(true);
    const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);
    const videoRef = useRef<any>(null);



    useEffect(() => {
        async function loadVideoDetails() {
            setLoading(true);
            // Reset play state when loading new video
            setIsPlaying(false);
            setShowPlayButton(true);
            setCurrentTime(0);
            setDuration(0);
            setIsMuted(false);
            setHasEverPlayed(false);
            setShowControls(false);
            setShowPoster(true);
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

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
                setShowPlayButton(true);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
                setShowPlayButton(false);
            }
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
        setShowPlayButton(false);
        setHasEverPlayed(true); // Mark that video has been played at least once
        setShowPoster(false); // Hide poster when video starts playing
    };

    const handlePause = () => {
        setIsPlaying(false);
        setShowPlayButton(true);
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current && duration > 0) {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const newTime = (clickX / rect.width) * duration;
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const showControlsTemporarily = () => {
        if (hasEverPlayed) {
            setShowControls(true);
            
            // Clear existing timeout
            if (controlsTimeout) {
                clearTimeout(controlsTimeout);
            }
            
            // Hide controls after 3 seconds
            const timeout = setTimeout(() => {
                setShowControls(false);
            }, 3000);
            
            setControlsTimeout(timeout);
        }
    };

    const handleMouseEnter = () => {
        showControlsTemporarily();
    };

    const handleMouseMove = () => {
        showControlsTemporarily();
    };

    const handleMouseLeave = () => {
        if (controlsTimeout) {
            clearTimeout(controlsTimeout);
        }
        setShowControls(false);
    };

    const handleTouchStart = () => {
        showControlsTemporarily();
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (controlsTimeout) {
                clearTimeout(controlsTimeout);
            }
        };
    }, [controlsTimeout]);


    if (!video) {
        return <div></div>; // Or a better loading indicator
    }

    return (
        <>
            {!loading &&

                <div className="mt-2 ">
                    <div 
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                    >

                        <MuxPlayer
                            ref={videoRef}
                            playbackId={video.muxPlaybackId}
                            streamType="on-demand"
                            muted={isMuted}
                            onPlay={handlePlay}
                            onPause={handlePause}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            style={{
                                height: '320px',
                                width: '100%',
                                '--controls': 'none',
                                '--media-object-fit': 'cover',

                            } as React.CSSProperties}

                        />

                        {/* Custom Poster - Only shown before first play */}
                        {showPoster && (
                            <img 
                                src={video.youtube.thumbnail} 
                                className="absolute inset-0 h-full w-full  z-10" 
                                alt="Video thumbnail"
                            />
                        )}

                        {/* Custom Play/Pause Button Overlay */}
                        <div
                            className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                            onClick={handleVideoClick}
                        >
                            <div 
                                className={`bg-black/60 rounded-full p-4 hover:bg-black/80 transition-all duration-300 ease-in-out shadow-2xl ${
                                    showPlayButton 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-95 pointer-events-none'
                                }`}
                            >
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="ml-1 transition-transform duration-200"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Progress Bar and Controls - Absolute positioned at bottom */}
                        <div 
                            className={`absolute bottom-[6px] left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 transition-all duration-300 ease-in-out z-30 ${
                                hasEverPlayed && (showControls || !isPlaying) 
                                    ? 'opacity-100 ' 
                                    : 'opacity-0 pointer-events-none'
                            }`}
                        >
                            {/* Progress Bar */}
                            <div 
                                className="w-full h-1 bg-[#4d4d4d5c] rounded-full cursor-pointer relative mb-1 shadow-lg"
                                onClick={handleProgressClick}
                            >
                                <div 
                                    className="h-full bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] rounded-full transition-all duration-100 shadow-md"
                                    style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                                />
                                
                                {/* Progress Bar Thumb */}
                                <div 
                                    className="absolute top-1/2 w-3 h-3 bg-gradient-to-r from-[#7c4804]  to-[#b37106] rounded-full shadow-lg transform -translate-y-1/2 transition-all duration-100 hover:scale-110"
                                    style={{ 
                                        left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                />
                            </div>

                            {/* Time Display and Mute Button */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    {/* Play/Pause Button */}
                                    {/* <button 
                                        onClick={handleVideoClick}
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700/80 hover:bg-gray-600/80 transition-colors duration-200"
                                    >
                                        <div className="relative w-4 h-4">
                                            <svg 
                                                width="16" 
                                                height="16" 
                                                viewBox="0 0 24 24" 
                                                fill="white"
                                                className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                                                    isPlaying ? 'opacity-0' : 'opacity-100'
                                                }`}
                                            >
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                            
                                            <svg 
                                                width="16" 
                                                height="16" 
                                                viewBox="0 0 24 24" 
                                                fill="white"
                                                className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                                                    isPlaying ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            >
                                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                            </svg>
                                        </div>
                                    </button> */}
                                    
                                    <span className="text-white text-[12px] font-sora pl-1">
                                        {formatTime(currentTime)} / {formatTime(duration)}
                                    </span>
                                </div>
                                
                                {/* Mute/Unmute Button */}
                                <button 
                                    onClick={handleMuteToggle}
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4d4d4d5c] shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                    {isMuted ? (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                                        </svg>
                                    ) : (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
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