import { useEffect, useRef, useState } from "react";
import "./Page6.css";

function Page6({ goToPage7 }) {
  const [step, setStep] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3500),
      setTimeout(() => setStep(2), 7000),
      setTimeout(() => setStep(3), 10500),
      setTimeout(() => setStep(4), 14500),
      setTimeout(() => setStep(5), 18000),
      setTimeout(() => setStep(6), 22000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Together photo + audio
  useEffect(() => {
    if (step !== 6) return;

    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = 0;
    audio.volume = 1;

    const playAudio = async () => {
      try {
        await audio.play();
        setAudioPlaying(true);
      } catch (error) {
        console.log("Browser blocked autoplay:", error);
      }
    };

    playAudio();

    const handleEnded = () => {
      setAudioPlaying(false);
      setStep(7);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [step]);

  return (
    <div className="page6">

      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/audio/angel-devil.mp3"
        preload="auto"
      />

      {/* 1 */}
      {step === 0 && (
        <div className="page6-opening">
          <p>Take one soft-hearted person… ❤️😇</p>
        </div>
      )}

      {/* 2 - YOUR PHOTO */}
      {step === 1 && (
        <div className="person-reveal">
          <div className="portrait-frame">
            <div className="photo-placeholder">
              <img
                src="/media/photos/page6-your-photo.jpeg"
                alt="My photo"
              />
            </div>
          </div>

          <p className="person-label">
            Soft-hearted ❤️
          </p>
        </div>
      )}

      {/* 3 */}
      {step === 2 && (
        <div className="page6-opening">
          <p>Add one certified masti-khor… 😈😂</p>
        </div>
      )}

      {/* 4 - RAZA PHOTO */}
      {step === 3 && (
        <div className="person-reveal">
          <div className="portrait-frame">
            <div className="photo-placeholder">
              <img
                src="/media/photos/page6-raza-photo.jpeg"
                alt="Raza"
              />
            </div>
          </div>

          <p className="person-label">
            Masti-khor 😈😂
          </p>
        </div>
      )}

      {/* 5 */}
      {step === 4 && (
        <div className="mix-section">
          <p>Mix them together for</p>

          <div className="years">
            8 years
          </div>
        </div>
      )}

      {/* 6 */}
      {step === 5 && (
        <div className="happened-section">
          <p>
            And somehow… this happened. 😂❤️
          </p>
        </div>
      )}

      {/* 7 - TOGETHER PHOTO + AUDIO */}
      {step === 6 && (
        <div className="together-section">

          <div className="together-photo">
            <div className="together-placeholder">
              <img
                src="/media/photos/page6-together-photo.jpeg"
                alt="Together"
              />
            </div>
          </div>

          <p className="song-line">
            Main hoon ek angel aur devil mera yaar
          </p>

        </div>
      )}

      {/* 8 - FINAL */}
      {step === 7 && (
        <div className="final-message">

          <p>
            Different personalities.
          </p>

          <p>
            One completely crazy bond. ❤️
          </p>

          <h2>
            Maybe that's why we work. ❤️
          </h2>

          <button
            className="page6-button"
            onClick={goToPage7}
          >
            CONTINUE →
          </button>

        </div>
      )}

    </div>
  );
}

export default Page6;