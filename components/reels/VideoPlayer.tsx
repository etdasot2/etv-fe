
import { useState, useRef, useEffect, useCallback, memo, useMemo } from 'react'
import { Heart, MessageCircle, Share2, Play, Volume2, VolumeX, Rewind, FastForward, X, Clock } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from 'react-i18next'
import MuxPlayer, { MuxPlayerRefAttributes } from '@mux/mux-player-react'
import VideoDetails from './VideoDetails'
import SocialButtons from './SocialButtons'
import LinkInstagramPopup from '../popups/LinkInstagramPopup'
import { PLAY_STOP_ICON } from '../custom-icons'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

// Network speed detection hook
const useNetworkSpeed = () => {
  const [networkSpeed, setNetworkSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');

  useEffect(() => {
    const checkSpeed = async () => {
      if ('connection' in navigator && (navigator as any).connection) {
        const connection = (navigator as any).connection;
        if (connection.downlink <= 1) {
          setNetworkSpeed('slow');
        } else if (connection.downlink <= 5) {
          setNetworkSpeed('medium');
        } else {
          setNetworkSpeed('fast');
        }
        connection.addEventListener('change', checkSpeed);
        return () => connection.removeEventListener('change', checkSpeed);
      }
    };
    checkSpeed();
  }, []);

  return networkSpeed;
};

interface VideoQualityResult {
  videoSrc: string;
  thumbnail: string;
}

const selectVideoQuality = (videoUrl: any, networkSpeed: string): VideoQualityResult => {
  if (!videoUrl) return {
    videoSrc: '',
    thumbnail: ''
  };

  const quality = (() => {
    switch (networkSpeed) {
      case 'slow': return ['360p', '480p', '720p', '1080p'];
      case 'medium': return ['720p', '480p', '1080p', '360p'];
      case 'fast': return ['1080p', '720p', '480p', '360p'];
      default: return ['720p', '1080p', '480p', '360p'];
    }
  })();

  // Find first available quality
  const selectedQuality = quality.find(q => videoUrl[q]?.url) || quality[0];

  return {
    videoSrc: videoUrl[selectedQuality]?.url || '',
    thumbnail: videoUrl[selectedQuality]?.thumbnails?.original || ''
  };
};

interface VideoPlayerProps {
  video: any
  isCurrentVideo: boolean
  onLike: () => void
}

// Video Controls Component
const VideoControls = memo(({
  isPlaying,
  isMuted,
  progress,
  duration,
  onToggleMute,
  onTogglePlay,
  onSeek,
  onSkipForward,
  onSkipBackward,
  formatTime,
  currentTime
}: {
  isPlaying: boolean
  isMuted: boolean
  progress: number
  duration: number
  onToggleMute: () => void
  onTogglePlay: () => void
  onSeek: (value: number[]) => void
  onSkipForward: () => void
  onSkipBackward: () => void
  formatTime: (time: number) => string
  currentTime: number
}) => (
  <>
    {/* <button
      className="absolute top-4 right-4 text-white rounded-full filter drop-shadow-lg cursor-default"
      onClick={onToggleMute}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <svg aria-label="Audio is muted" fill="currentColor" height="20" role="img" viewBox="0 0 48 48" width="20">
          <title>Audio is muted</title>
          <path clipRule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fillRule="evenodd" />
        </svg>
      ) : (
        <svg aria-label="Audio is playing" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
          <title>Audio is playing</title>
          <path d="M16.636 7.028a1.5 1.5 0 10-2.395 1.807 5.365 5.365 0 011.103 3.17 5.378 5.378 0 01-1.105 3.176 1.5 1.5 0 102.395 1.806 8.396 8.396 0 001.71-4.981 8.39 8.39 0 00-1.708-4.978zm3.73-2.332A1.5 1.5 0 1018.04 6.59 8.823 8.823 0 0120 12.007a8.798 8.798 0 01-1.96 5.415 1.5 1.5 0 002.326 1.894 11.672 11.672 0 002.635-7.31 11.682 11.682 0 00-2.635-7.31zm-8.963-3.613a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917z" />
        </svg>
      )}
    </button> */}
    {!isPlaying && (
      <button
        className="absolute opacity-[.7] top-1/2 left-1/2 transform ml-[5px]   -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full  transition-colors flex items-center justify-center"
        onClick={onTogglePlay}
        aria-label="Play"
      >
         <img src={PLAY_STOP_ICON} className="w-[48px] h-[48px]"/>
      </button>
    )}
    <div className="absolute bottom-0 left-0 right-0  ">
      <div className="h-[3px] bg-white/30 rounded-full">
        <div
          className="h-full bg-[#f40208] transition-all duration-300 ease-linear relative rounded-full rounded-l-none"
          style={{ width: `${progress}%` }}
        >
          {/* <div className="w-[12px] h-[12px]  bg-[#f40208] rounded-full top-[-4px] absolute right-0 z-[9999]"></div> */}
        </div>
      </div>
    </div>
  </>
))

VideoControls.displayName = 'VideoControls'


const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, isCurrentVideo, onLike }) => {
  const videoRef = useRef<any>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [showLikeAnimation, setShowLikeAnimation] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [showCommingSoon, setShowCommingSoon] = useState(false)
  const [showCommingSoonFor, setShowCommingSoonFor] = useState('')
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const thumbnailRef = useRef<HTMLImageElement>(null)
  const { t } = useTranslation()
  const networkSpeed = useNetworkSpeed()

  const { videoSrc, thumbnail } = useMemo(() =>
    selectVideoQuality(video.videoUrl, networkSpeed),
    [video.videoUrl, networkSpeed]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.6 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible || !isCurrentVideo) {
      videoRef.current?.pause()
      setIsPlaying(false)
    }
  }, [isVisible, isCurrentVideo])

  useEffect(() => {
    setIsPlaying(false)
    setHasStartedPlaying(false)
    setProgress(0)
    setCurrentTime(0)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }, [video._id])

  const togglePlay = useCallback(() => {
    if (!hasStartedPlaying) {
      setHasStartedPlaying(true)
    }

    if (isPlaying) {
      videoRef.current?.pause()
    } else {
      videoRef.current?.play()
    }
    setIsPlaying(prev => !prev)
  }, [isPlaying, hasStartedPlaying])

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      if (videoRef.current) {
        videoRef.current.muted = !prev
      }
      return !prev
    })
  }, [])

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const duration = videoRef.current.duration
      setCurrentTime(current)
      setProgress((current / duration) * 100)
    }
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }, [])

  const handleSeek = useCallback((value: number[]) => {
    const newTime = (value[0] / 100) * duration
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }, [duration])

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }, [])

  const skipForward = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10
    }
  }, [])

  const skipBackward = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10
    }
  }, [])

  const handleClick = useCallback(() => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
      clickTimeoutRef.current = null
      handleDoubleClick()
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        togglePlay()
        clickTimeoutRef.current = null
      }, 300)
    }
  }, [togglePlay])

  const handleDoubleClick = useCallback(() => {
    // onLike()
    // setShowLikeAnimation(true)
    // setTimeout(() => setShowLikeAnimation(false), 1000)
  }, [onLike])

 
  const closePopup = () => setShowCommingSoon(false)

  return (
    <div className="relative h-full w-full bg-black">
      {/* <img
        ref={thumbnailRef}
        src={thumbnail}
        alt="Video thumbnail"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
          hasStartedPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      /> */}

      <div
        onClick={handleClick}
        className="w-full h-full"
      >
        <MuxPlayer
          ref={videoRef}
          playbackId={video.muxPlaybackId}
          streamType="on-demand"
          muted={isMuted}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          // onWaiting={() => setIsBuffering(true)}
          // onPlaying={() => setIsBuffering(false)}
          style={{
            height: '100%',
            width: '100%',
            '--controls': 'none',
            '--media-object-fit': 'cover',
          } as React.CSSProperties}
        />
      </div>
      {/* <video
        ref={videoRef}
        src={videoSrc}
        className="h-full w-full object-cover"
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={handleClick}
      /> */}

      {/* <div className="absolute bottom-20 left-4 right-12 z-10">
        <p className="text-white text-base font-sora mb-2 filter drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">
          {video.description}
        </p>
        <p className="text-white text-base font-sora mt-2 filter drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">
          {video.hashtags}
        </p>
      </div> */}

      <VideoDetails
        description={video.description}
        hashtags={video.hashtags}
        video={video}
      />

      <SocialButtons
        likes={video.likes}
        comments={video.comments}
        shares={video.shares}
        isLiked={video.isLiked}
        onLike={onLike}
        onCommentClick={() => setShowComments(true)}
        onFollowClick={()=>{
          setShowCommingSoon(true);
          setShowCommingSoonFor('follow');
        }}
        onShareClick={()=>{
          setShowCommingSoon(true);
          setShowCommingSoonFor('share');
        }}
        onSaveClick={()=>{
          setShowCommingSoon(true);
          setShowCommingSoonFor('save');
        }}
        t={t}
        isMuted={isMuted}
        influencer={video.influencer}
        onToggleMute={toggleMute}
        collect_count={video.collect_count}
      />

      <VideoControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        progress={progress}
        duration={duration}
        currentTime={currentTime}
        onToggleMute={toggleMute}
        onTogglePlay={togglePlay}
        onSeek={handleSeek}
        onSkipForward={skipForward}
        onSkipBackward={skipBackward}
        formatTime={formatTime}
      />

      {showLikeAnimation && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* <Heart className="w-24 h-24 text-red-500 animate-ping" /> */}
          <img src="/assets/pnghive.svg" className="w-[120px] h-[120px] animate-ping" />
        </div>
      )}

      <AnimatePresence>
        {showComments && (
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-black rounded-t-3xl z-50"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <div className="p-4 h-[70vh] flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[15px] font-semibold text-white font-sora">{t('reels.comments.label')}</h3>
                <button onClick={() => setShowComments(false)}>
                  <X className="w-5 h-5" color="white" />
                </button>
              </div>
              <div className="flex-1 relative overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-md flex flex-col items-center justify-center z-10">
                  <Clock className="w-16 h-16 text-white mb-4" />
                  <h4 className="text-xl font-bold text-white font-sora mb-2">
                    {t('reels.comments.stayTuned')}
                  </h4>
                  <p className="text-white font-sora text-[14px]">{t('reels.comments.stayTunedMsg')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LinkInstagramPopup
        isOpen={showCommingSoon}
        onClose={closePopup} 
        forCommingSoon={showCommingSoonFor}
      />
    </div>
  )
}

export default memo(VideoPlayer) 