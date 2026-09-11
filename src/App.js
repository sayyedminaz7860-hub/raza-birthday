import { useEffect, useRef, useState } from "react";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";

function App() {
  const [page, setPage] = useState(1);

  const backgroundMusicRef = useRef(null);

  useEffect(() => {
    const audio = backgroundMusicRef.current;

    if (!audio) return;

    audio.volume = 0.09;

    // Special pages already have their own music
    const specialAudioPages = [5, 6, 8];

    if (specialAudioPages.includes(page)) {
      audio.pause();
      return;
    }

    const playBackgroundMusic = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Background music autoplay blocked:", error);
      }
    };

    playBackgroundMusic();
  }, [page]);

  return (
    <>
      <audio
        ref={backgroundMusicRef}
        src="/audio/background-music.mp3"
        loop
        preload="auto"
      />

      {page === 1 && (
        <Page1 goToPage2={() => setPage(2)} />
      )}

      {page === 2 && (
        <Page2 goToPage3={() => setPage(3)} />
      )}

      {page === 3 && (
        <Page3 goToPage4={() => setPage(4)} />
      )}

      {page === 4 && (
        <Page4 goToPage5={() => setPage(5)} />
      )}

      {page === 5 && (
        <Page5 goToPage6={() => setPage(6)} />
      )}

      {page === 6 && (
        <Page6 goToPage7={() => setPage(7)} />
      )}

      {page === 7 && (
        <Page7 goToPage8={() => setPage(8)} />
      )}

      {page === 8 && (
        <Page8 goToPage9={() => setPage(9)} />
      )}

      {page === 9 && (
        <Page9 goToPage10={() => setPage(10)} />
      )}

      {page === 10 && <Page10 />}
    </>
  );
}

export default App;