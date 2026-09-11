import { useEffect, useRef, useState } from "react";
import "./Page5.css";

const mediaSequence = [
  {
    type: "image",
    src: "/media/photos/page5-photo-01.jpeg",
    duration: 5500,
    effect: "zoom",
  },
  {
    type: "image",
    src: "/media/photos/page5-photo-02.jpeg",
    duration: 5500,
    effect: "crossfade",
  },
  {
    type: "video",
    src: "/media/videos/page5-video-01.mp4",
    duration: 8000,
    effect: "cinematic",
  },
  {
    type: "image",
    src: "/media/photos/page5-photo-03.jpeg",
    duration: 5500,
    effect: "slide",
  },
  {
    type: "collage",
    images: [
      "/media/photos/page5-photo-04.jpeg",
      "/media/photos/page5-photo-05.jpeg",
      "/media/photos/page5-photo-06.jpeg",
    ],
    duration: 6500,
  },
  {
    type: "video",
    src: "/media/videos/page5-video-02.mp4",
    duration: 8000,
    effect: "cinematic",
  },
];

function Page5({ goToPage6 }) {
  const [current, setCurrent] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [showAudioButton, setShowAudioButton] = useState(false);

  const audioRef = useRef(null);

  // Start song when Page 5 opens
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.8;

    const playAudio = async () => {
      try {
        await audio.play();
        setAudioStarted(true);
      } catch (error) {
        setShowAudioButton(true);
      }
    };

    playAudio();
  }, []);

  // Move through photos/videos automatically
  useEffect(() => {
    const item = mediaSequence[current];

    const timer = setTimeout(() => {
      if (current < mediaSequence.length - 1) {
        setCurrent(current + 1);
      } else {
        setShowContinue(true);
      }
    }, item.duration);

    return () => clearTimeout(timer);
  }, [current]);

  const startAudio = async () => {
    try {
      await audioRef.current.play();
      setAudioStarted(true);
      setShowAudioButton(false);
    } catch (error) {
      console.log("Audio could not start.");
    }
  };

  const item = mediaSequence[current];

  return (
    <div className="page5">

      {/* TENU SANG AUDIO */}
      <audio
        ref={audioRef}
        src="/audio/tenu-sang.mp3"
        preload="auto"
      />

      <div className="cinematic-overlay"></div>

      <div className="page5-intro">
        <h2>Tenu Sang Rakhna!</h2>
      </div>

      {/* AUDIO START BUTTON - ONLY IF AUTOPLAY IS BLOCKED */}
      {showAudioButton && !audioStarted && (
        <button
          className="audio-start-button"
          onClick={startAudio}
        >
          ▶ TAP TO START
        </button>
      )}

      <div className="montage">

        {item.type === "image" && (
          <div className={`media-frame ${item.effect}`}>
            <img
              src={item.src}
              alt="Raza memory"
              className="media-image"
            />
          </div>
        )}

        {item.type === "video" && (
          <div className={`media-frame ${item.effect}`}>
            <video
              src={item.src}
              className="media-video"
              autoPlay
              muted
              playsInline
            />
          </div>
        )}

        {item.type === "collage" && (
          <div className="collage">
            {item.images.map((image, index) => (
              <div className="collage-item" key={image}>
                <img
                  src={image}
                  alt={`Raza memory ${index + 1}`}
                />
              </div>
            ))}
          </div>
        )}

      </div>

      <div className="film-number">
        {String(current + 1).padStart(2, "0")}
      </div>

      {showContinue && (
        <button
          className="page5-button"
          onClick={goToPage6}
        >
          CONTINUE →
        </button>
      )}

    </div>
  );
}

export default Page5;