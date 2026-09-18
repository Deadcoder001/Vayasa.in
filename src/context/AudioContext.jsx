import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const AudioContext = createContext(null);

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Check if user already interacted in this session
    const hasSeenModal = sessionStorage.getItem('vayasa_audio_entered');
    if (hasSeenModal) {
      setIsModalOpen(false);
    }

    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    }

    function initPlayer() {
      if (playerRef.current) return;
      playerRef.current = new window.YT.Player('vayasa-bg-audio-player', {
        height: '1',
        width: '1',
        videoId: 'Q5u2Ddbvocc',
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: 'Q5u2Ddbvocc',
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0
        },
        events: {
          onReady: (event) => {
            setIsReady(true);
            event.target.setVolume(50);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    }
  }, []);

  const enterWithSound = () => {
    sessionStorage.setItem('vayasa_audio_entered', 'true');
    setIsModalOpen(false);
    setIsPlaying(true);
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      try {
        playerRef.current.unMute();
        playerRef.current.setVolume(50);
        playerRef.current.playVideo();
      } catch (err) {
        console.warn('Audio autoplay prevented:', err);
      }
    }
  };

  const enterWithoutSound = () => {
    sessionStorage.setItem('vayasa_audio_entered', 'true');
    setIsModalOpen(false);
    setIsPlaying(false);
    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      try {
        playerRef.current.pauseVideo();
      } catch (err) {
        console.warn('Audio pause error:', err);
      }
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
        playerRef.current.pauseVideo();
      }
    } else {
      setIsPlaying(true);
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.unMute();
        playerRef.current.setVolume(50);
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isModalOpen,
        isReady,
        enterWithSound,
        enterWithoutSound,
        toggleAudio
      }}
    >
      {/* Hidden YouTube Audio IFrame */}
      <div className="fixed -top-[9999px] -left-[9999px] opacity-0 pointer-events-none w-1 h-1 overflow-hidden" aria-hidden="true">
        <div id="vayasa-bg-audio-player"></div>
      </div>
      {children}
    </AudioContext.Provider>
  );
};
