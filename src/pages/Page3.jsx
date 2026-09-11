import { useEffect, useState } from "react";
import "./Page3.css";

function Page3({ goToPage4 }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      // Opening
      setTimeout(() => setStep(1), 3000),

      // 2019
      setTimeout(() => setStep(2), 6500),

      // 2019 photo
      setTimeout(() => setStep(3), 8500),

      // Timeline
      setTimeout(() => setStep(4), 15000),

      // 2026
      setTimeout(() => setStep(5), 21000),

      // Current photo
      setTimeout(() => setStep(6), 23000),

      // Funny comparison 2019
      setTimeout(() => setStep(7), 27000),

      // Funny comparison 2026
      setTimeout(() => setStep(8), 29500),

      // Emotional line
      setTimeout(() => setStep(9), 32000),

      // Final line + button
      setTimeout(() => setStep(10), 36500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="page3">
      <div className="page3-content">

        {/* OPENING */}
        {step === 0 && (
          <div className="page3-slide opening-slide">
            <h1>So… how did we get here?</h1>
          </div>
        )}

        {step === 1 && (
          <div className="page3-slide opening-slide">
            <h1>
              Well… it definitely wasn't planned. 😂
            </h1>
          </div>
        )}

        {/* 2019 */}
        {step === 2 && (
          <div className="page3-slide year-slide">
            <h2>2019</h2>
            <p>The beginning…</p>
          </div>
        )}

        {/* 2019 PHOTO */}
        {step === 3 && (
          <div className="page3-slide photo-slide">
            <div className="photo-card">
              <div className="photo-placeholder">
                <img src="/media/photos/2019.jpeg" alt="2019 memory" />
              </div>
            </div>

            <p className="photo-caption">
              Where it all quietly started.
            </p>
          </div>
        )}

        {/* TIMELINE */}
        {step === 4 && (
          <div className="page3-slide journey-slide">

            <div className="journey-timeline">

              <div className="journey-line"></div>

              <div className="journey-start">
                <span>2019</span>
              </div>

              <div className="journey-marker"></div>

              <div className="journey-end">
                <span>2026</span>
              </div>

            </div>

          </div>
        )}

        {/* 2026 */}
        {step === 5 && (
          <div className="page3-slide year-slide">
            <h2>2026</h2>
            <p>A lot has changed.</p>
          </div>
        )}

        {/* CURRENT PHOTO */}
        {step === 6 && (
          <div className="page3-slide photo-slide">
            <div className="photo-card">
              <div className="photo-placeholder">
                <img src="/media/photos/2020.jpeg" alt="Current memory" />
              </div>
            </div>

            <p className="photo-caption">
              And somehow… here we are.
            </p>
          </div>
        )}

        {/* FUNNY COMPARISON - 2019 */}
        {step === 7 && (
          <div className="page3-slide comparison-slide">
            <h2>2019</h2>

            <p className="comparison-text">
              Conversation unavailable. 😐
            </p>
          </div>
        )}

        {/* FUNNY COMPARISON - 2026 */}
        {step === 8 && (
          <div className="page3-slide comparison-slide">
            <h2>2026</h2>

            <p className="comparison-text">
              24/7 customer support available. 😂
            </p>
          </div>
        )}

        {/* EMOTIONAL REVEAL */}
        {step === 9 && (
          <div className="page3-slide emotional-slide">
            <p>
              Somehow, the silent cousin became the person I tell
              literally everything to. ❤️
            </p>
          </div>
        )}

        {/* FINAL */}
        {step === 10 && (
          <div className="page3-slide final-slide">

            <p className="final-line">
              Honestly… who approved this upgrade? 😂
            </p>

            <button
              className="page3-button"
              onClick={goToPage4}
            >
              CONTINUE →
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Page3;