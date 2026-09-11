import { useEffect, useRef, useState } from "react";
import "./Page8.css";

const lyrics = [
  {
    start: 11,
    end: 31,
    text: `Door hoon aaj, phir bhi paas hoon main,
Tere is khaas din ka ehsaas hoon main,
Baarah Sitambar, khushiyon se saja,
Happy Birthday mere bhai Raza. ❤️`,
  },
  {
    start: 41,
    end: 60,
    text: `Yaad hai pehle kitna khadoos tha tu,
Chup-chup rehta, bada akaddu tha tu,
Phir thodi baatein, phir hansi jud gayi,
Dheere-dheere apni duniya ban gayi.`,
  },
  {
    start: 61,
    end: 79,
    text: `Aath saal lage ye rishta sajaane mein,
Masti, jhagde, phir ek-dooje ko manaane mein,
Kab cousin se mera saga bhai bana,
Pata hi na chala, ye safar kitna apna bana.`,
  },
  {
    start: 80,
    end: 100,
    text: `Tu mera bhai, mera partner in crime,
Door hokar bhi tu saath all the time,
Angel main, aur Devil mera yaar,
Apna ye combo hai sabse mazedaar.`,
  },
  {
    start: 100,
    end: 110,
    text: `Cousin kahe duniya, main maanu na zara,
Sage bhai se badhkar hai rishta humaara,
Laakh dooriyaan aayein, badle saara jahaan,
Tu mera chhota bhai hai aur rahega sada.`,
  },
  {
    start: 118,
    end: 130,
    text: `Kabhi mera bag uthaaye, kabhi mehendi lagaaye,
Bina bole bhi mera khayaal rakh jaaye,
Proper green flag, par tareef bas itni,
Varna teri akad badh jaayegi phir kitni! 😂`,
  },
  {
    start: 130,
    end: 140,
    text: `Mujhse lamba, curly hair, handsome janaab,
Shawarma aur biryani ke tu sabse bade nawaab,
Videos, photos, woh pagal-si raatein,
Horror movie, night walks, long drive ki baatein.`,
  },
  {
    start: 140,
    end: 157,
    text: `Aaj tere paas main aa nahi paaungi,
Par is gaane mein tere paas chali aaungi,
Problem ho, gossip ho, ya koi bhi baat,
Tere liye hamesha hai teri behen ka saath.`,
  },
  {
    start: 158,
    end: 177,
    text: `Happy Birthday mere pyaare Raza,
Tu hansta rahe, bas hai meri ye dua,
Apni ye masti kabhi kam na ho,
Apna ye pagalpan kabhi khatam na ho.`,
  },
  {
    start: 178,
    end: 197,
    text: `Angel main, aur Devil mera yaar,
Yahi toh hai apni kahaani ka saar,
Aath saalon ne jo rishta hai likha—
Usse khoobsurat tohfa mujhe na mila.`,
  },
  {
    start: 198,
    end: 219,
    text: `Baarah Sitambar phir har saal aaye,
Apna rishta aur gehra hota jaaye,
Doori bas nakshon par rahe har dafa,
Mere liye hamesha mera chhota bhai—Raza. ❤️`,
  },
];

function Page8({ goToPage9 }) {
  const audioRef = useRef(null);

  const [currentLyric, setCurrentLyric] = useState(null);
  const [ setAudioStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 10000);

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = 0;
    audio.volume = 1;

    const startSong = async () => {
      try {
        await audio.play();
        setAudioStarted(true);
      } catch (error) {
        console.log("Autoplay blocked:", error);
      }
    };

    startSong();

    const updateLyrics = () => {
      const time = audio.currentTime;

      const activeLyric = lyrics.find(
        (lyric) =>
          time >= lyric.start &&
          time < lyric.end
      );

      setCurrentLyric(activeLyric || null);

      if (time >= 219) {
        setShowContinue(true);
      }
    };

    const handleEnded = () => {
      setCurrentLyric(null);
      setShowContinue(true);
    };

    audio.addEventListener("timeupdate", updateLyrics);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateLyrics);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="page8">

      <audio
        ref={audioRef}
        src="/audio/raza-birthday-song.mp3"
        preload="auto"
      />

      {/* INTRO */}
      {showIntro && !currentLyric && (
        <div className="page8-intro">
          <p>Okay… one more thing. 👀</p>
          <p>This one is a little different.</p>
          <span>I made something especially for you… ❤️</span>
        </div>
      )}

      {/* LYRICS */}
      {currentLyric && (
        <div className="lyrics-container">
          <div className="lyrics-card" key={currentLyric.start}>
            <div className="lyrics-line"></div>

            {currentLyric.text.split("\n").map((line, index) => (
              <p key={index}>
                {line}
              </p>
            ))}

            <div className="lyrics-line"></div>
          </div>
        </div>
      )}

      {/* END */}
      {showContinue && (
        <div className="page8-ending">

          <p>
            Made especially for you. ❤️
          </p>

          <button
            className="page8-button"
            onClick={goToPage9}
          >
            CONTINUE →
          </button>

        </div>
      )}

    </div>
  );
}

export default Page8;