import { useEffect, useState } from "react";
import "./Page10.css";

function Page10() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3000),
      setTimeout(() => setStep(2), 6000),
      setTimeout(() => setStep(3), 9000),
      setTimeout(() => setStep(4), 12500),
      setTimeout(() => setStep(5), 16500),
      setTimeout(() => setStep(6), 20500),
      setTimeout(() => setStep(7), 24500),
      setTimeout(() => setStep(8), 28500),
      setTimeout(() => setStep(9), 33000),
      setTimeout(() => setStep(10), 38000),
      setTimeout(() => setStep(11), 45000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={`page10 ${step === 11 ? "fade-screen" : ""}`}>

      {/* STEP 1 */}

      {step === 0 && (
        <div className="page10-slide">
          <p>Before you go… 👀</p>
        </div>
      )}

      {/* STEP 2 */}

      {step === 1 && (
        <div className="page10-slide">
          <p>
            There are a few things you should know
            <br />
            about being my brother. 😂
          </p>
        </div>
      )}

      {/* CLAUSE 1 */}

      {step === 2 && (
        <div className="clause-card">
          <span>CLAUSE #01</span>

          <h2>
            You are required to tolerate
            <br />
            my nonsense. 😂
          </h2>
        </div>
      )}

      {/* CLAUSE 2 */}

      {step === 3 && (
        <div className="clause-card">
          <span>CLAUSE #02</span>

          <h2>
            You cannot escape my calls,
            <br />
            random updates or unnecessary
            <br />
            conversations. 😭
          </h2>
        </div>
      )}

      {/* CLAUSE 3 */}

      {step === 4 && (
        <div className="clause-card important-clause">
          <span>CLAUSE #03</span>

          <h2>
            Distance is NOT an excuse. ❤️
          </h2>
        </div>
      )}

      {/* EMOTIONAL SHIFT */}

      {step === 5 && (
        <div className="emotional-section">
          <p>But most importantly…</p>
        </div>
      )}

      {/* THANK YOU */}

      {step === 6 && (
        <div className="emotional-section thank-you">
          <p>
            Thank you for becoming the brother
            <br />
            I never knew I needed. 🥹❤️
          </p>
        </div>
      )}

      {/* 8 YEARS */}

      {step === 7 && (
        <div className="history-section">
          <p>
            8 years ago, you were just my cousin.
          </p>

          <p className="second-history">
            Today, calling you my cousin
            <br />
            feels completely wrong.
          </p>
        </div>
      )}

      {/* BROTHER REVEAL */}

      {step === 8 && (
        <div className="brother-reveal">
          <span>AND THEN IT HIT ME…</span>

          <h1>
            YOU'RE MY
            <br />
            BROTHER. ❤️
          </h1>
        </div>
      )}

      {/* PHOTO / VIDEO */}

      {step === 9 && (
        <div className="final-memory">

          <div className="memory-frame">
            <div className="memory-placeholder">
              <img
                src="/media/photos/page10-together-photo.jpeg"
                alt="Our memory"
              />
            </div>
          </div>

        </div>
      )}

      {/* FUNNY PUNCH */}

      {step === 10 && (
        <div className="fine-print-ending">

          <p>
            And unfortunately for you… 😂
          </p>

          <p className="pause-line">
            There are no returns,
            <br />
            exchanges or cancellations. 😂
          </p>

          <h1>
            STUCK WITH ME.
            <br />
            ♾️❤️
          </h1>

          <p className="birthday-final">
            Once again....Happy Birthday Raza ❤️
          </p>

        </div>
      )}

      {/* LAST 3 SECONDS */}

      {step === 11 && (
        <div className="last-screen">
          <p>See you soon, idiot. ❤️ 😂</p>
        </div>
      )}

    </div>
  );
}

export default Page10;