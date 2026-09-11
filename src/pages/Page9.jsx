import { useEffect, useState } from "react";
import "./Page9.css";

function Page9({ goToPage10 }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3000),
      setTimeout(() => setStep(2), 5500),
      setTimeout(() => setStep(3), 8000),
      setTimeout(() => setStep(4), 11500),
      setTimeout(() => setStep(5), 16000),
      setTimeout(() => setStep(6), 21500),
      setTimeout(() => setStep(7), 27000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="page9">

      {/* STEP 1 */}

      {step === 0 && (
        <div className="page9-slide">
          <p>After all the teasing… 😂</p>
        </div>
      )}

      {/* STEP 2 */}

      {step === 1 && (
        <div className="page9-slide">
          <p>all the pagalpan…</p>
        </div>
      )}

      {/* STEP 3 */}

      {step === 2 && (
        <div className="page9-slide">
          <p>all the memories… ❤️</p>
        </div>
      )}

      {/* STEP 4 */}

      {step === 3 && (
        <div className="page9-slide">
          <p>There’s just one thing left to say.</p>
        </div>
      )}

      {/* BIRTHDAY REVEAL */}

      {step === 4 && (
        <div className="birthday-reveal">
          <div className="birthday-glow"></div>

          <p className="birthday-small">
            TODAY IS YOUR DAY
          </p>

          <h1>
            HAPPY BIRTHDAY,
            <br />
            RAZA! 🎂❤️
          </h1>

          <div className="birthday-line"></div>
        </div>
      )}

      {/* MESSAGE */}

      {step === 5 && (
        <div className="birthday-message">

          <p>
            I hope you always stay exactly
            the person you are…
          </p>

          <div className="qualities">
            <span>Funny. 😂</span>
            <span>Caring. ❤️</span>
            <span>Green Flag. 😂</span>
            <span>And always my brother. ❤️</span>
          </div>

        </div>
      )}

      {/* PHOTO / VIDEO */}

      {step === 6 && (
        <div className="together-memory">

          <div className="memory-frame">
            <div className="memory-placeholder">
              <img
                src="/media/photos/page9-together-photo.jpeg"
                alt="Our memory"
              />
            </div>
          </div>

          <p className="memory-caption">
            I wish you an abundance of happiness and success❤️
          </p>

        </div>
      )}

      {/* FINAL */}

      {step === 7 && (
        <div className="page9-final">

          <p className="emotional-line">
            8 years later…
            <br />
            and I’d still choose you as my brother
            <br />
            and will always. 🥹❤️
          </p>

          <p className="funny-line">
            Unfortunately, you're stuck with me forever. 😂
          </p>

          <button
            className="page9-button"
            onClick={goToPage10}
          >
            CONTINUE →
          </button>

        </div>
      )}

    </div>
  );
}

export default Page9;