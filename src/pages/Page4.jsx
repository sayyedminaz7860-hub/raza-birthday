import { useEffect, useState } from "react";
import "./Page4.css";

function Page4({ goToPage5 }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3000),
      setTimeout(() => setStep(2), 6000),
      setTimeout(() => setStep(3), 9000),
      setTimeout(() => setStep(4), 12500),
      setTimeout(() => setStep(5), 16000),
      setTimeout(() => setStep(6), 20500),
      setTimeout(() => setStep(7), 24500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="page4">
      <div className="page4-content">

        {/* OPENING 1
        {step === 0 && (
          <div className="page4-slide">
            <h2>Okay, enough about the timeline…</h2>
          </div>
        )} */}

        {/* OPENING 2 */}
        {step === 1 && (
          <div className="page4-slide">
            <h2>
              Let’s talk about the person who made it this far. 😂
            </h2>
          </div>
        )}

        {/* RAZA REVEAL */}
        {step === 2 && (
          <div className="page4-slide raza-reveal">
            <h1>RAZA</h1>

            <div className="raza-description">
              <span>The tall one.</span>
              <span>The curly-haired one.</span>
              <span>The handsome one. 😂</span>
            </div>
          </div>
        )}

        {/* CARD 1 */}
        {step === 3 && (
          <div className="page4-slide">
            <div className="personality-card">
              <div className="card-emoji">😂</div>

              <h2>PROFESSIONAL KHADUS</h2>

              <p>
                Initially, communication skills were…
                questionable. 😐
              </p>
            </div>
          </div>
        )}

        {/* CARD 2 */}
        {step === 4 && (
          <div className="page4-slide">
            <div className="personality-card">
              <div className="card-emoji">💚</div>

              <h2>CERTIFIED GREEN FLAG</h2>

              {/* <p>
                But once he started talking,
                there was no going back.
              </p> */}
            </div>
          </div>
        )}

        {/* CARD 3 */}
        {step === 5 && (
          <div className="page4-slide">
            <div className="personality-card brother-card">
              <div className="card-emoji">🤝</div>

              <h2>BROTHER MATERIAL</h2>

              <div className="support-list">
                <span>Bag carrier ✓</span>
                <span>Mehendi artist ✓</span>
                <span>Personal support system ✓</span>
                <span>Partner in unlimited pagalpan ✓</span>
              </div>
            </div>
          </div>
        )}

        {/* BASICALLY */}
        {step === 6 && (
          <div className="page4-slide basically-slide">
            <h2>Basically…</h2>
          </div>
        )}

        {/* FINAL */}
        {step === 7 && (
          <div className="page4-slide final-slide">

            <p>
              Every sister deserves a brother like this. ❤️
            </p>

            <button
              className="page4-button"
              onClick={goToPage5}
            >
              CONTINUE →
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Page4;