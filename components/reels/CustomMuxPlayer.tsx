"use client"

import { useState, useRef, useCallback, memo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MuxPlayer from "@mux/mux-player-react"
import { Loader2, Heart, Volume2, VolumeX } from "lucide-react"

// Memoized controls to prevent re-renders
const VideoControls = memo(function VideoControls({ 
  isPlaying, 
  isMuted, 
  progress, 
  onPlayPause, 
  onMute 
}: {
  isPlaying: boolean
  isMuted: boolean
  progress: number
  onPlayPause: () => void
  onMute: (e: React.MouseEvent) => void
}) {
  return (
    <>
      {!isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center bg-black/20"
          onClick={onPlayPause}
        >
          <div className="rounded-full bg-black/50 p-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      <button
        onClick={onMute}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-200" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
    </>
  )
})

// Memoized video player component
const OptimizedVideoPlayer = memo(function OptimizedVideoPlayer({
  playbackId,
  isVisible,
  onLike
}: {
  playbackId: string
  isVisible?: boolean
  onLike: () => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isBuffering, setIsBuffering] = useState(false)
  const [showLikeAnimation, setShowLikeAnimation] = useState(false)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    if (!isVisible && playerRef.current) {
      playerRef.current.pause()
      setIsPlaying(false)
    }
    // Important: Clean up when component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.pause()
      }
    }
  }, [isVisible])



  // Memoized handlers
  const handlePlayPause = useCallback(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause()
      } else {
        playerRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }, [isPlaying])

  const handleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }, [isMuted])

  const handleTimeUpdate = useCallback(() => {
    if (playerRef.current) {
      const currentTime = playerRef.current.currentTime
      const duration = playerRef.current.duration
      setProgress((currentTime / duration) * 100)
    }
  }, [])

  const handleLike = useCallback(() => {
    setShowLikeAnimation(true)
    onLike()
    setTimeout(() => setShowLikeAnimation(false), 1000)
  }, [onLike])

  // Reset playback when visibility changes
  const handleVisibilityChange = useCallback(() => {
    if (!isVisible && playerRef.current) {
      playerRef.current.pause()
      setIsPlaying(false)
    }
  }, [isVisible])

  // Effect to handle visibility changes
  useEffect(() => {
    handleVisibilityChange()
  }, [handleVisibilityChange])

  console.log(isVisible)



  return (
    <div className="relative w-full h-full bg-black" onClick={handlePlayPause}>
      <MuxPlayer
        ref={playerRef}
        playbackId={playbackId}
        streamType="on-demand"
        muted={isMuted}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        style={{
          height: '100%',
          width: '100%',
          '--controls': 'none',
          '--media-object-fit': 'cover',
        } as React.CSSProperties}
      />

      <VideoControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        progress={progress}
        onPlayPause={handlePlayPause}
        onMute={handleMute}
      />

      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        </div>
      )}

      <button
        onClick={handleLike}
        className="absolute bottom-4 right-4 p-3 rounded-full bg-black/50 text-white"
      >
        <Heart className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {showLikeAnimation && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Heart className="w-24 h-24 text-red-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export default OptimizedVideoPlayer