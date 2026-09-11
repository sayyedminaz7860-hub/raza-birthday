import { useEffect, useState } from "react";
import "./Page7.css";

function Page7({ goToPage8 }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3500),
      setTimeout(() => setStep(2), 7000),
      setTimeout(() => setStep(3), 10500),
      setTimeout(() => setStep(4), 14000),
      setTimeout(() => setStep(5), 18000),
      setTimeout(() => setStep(6), 22000),
      setTimeout(() => setStep(7), 26500),
      setTimeout(() => setStep(8), 32500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="page7">

      {/* STEP 1 */}

      {step === 0 && (
        <div className="page7-slide">
          <p>Somewhere along the way…</p>
        </div>
      )}

      {/* STEP 2 */}

      {step === 1 && (
        <div className="page7-slide main-message">
          <p>
            You became the person I tell
            everything to. ❤️
          </p>
        </div>
      )}

      {/* STEP 3 */}

      {step === 2 && (
        <div className="message-card">
          <span>Good news?</span>
          <p>
            You’re one of the first people I tell.
          </p>
        </div>
      )}

      {/* STEP 4 */}

      {step === 3 && (
        <div className="message-card">
          <span>Bad day?</span>
          <p>
            You’re getting the call. 😂
          </p>
        </div>
      )}

      {/* STEP 5 */}

      {step === 4 && (
        <div className="message-card">
          <span>Random thought at 2 AM?</span>
          <p>
            Obviously you’re hearing it. 😭
          </p>
        </div>
      )}

      {/* STEP 6 */}

      {step === 5 && (
        <div className="message-card special-message">
          <span>Something happened?</span>
          <p>
            “Raza ko batai thi.” ❤️
          </p>
        </div>
      )}

      {/* STEP 7 */}

      {step === 6 && (
        <div className="distance-intro">
          <p>
            Distance never really changed that.
          </p>
        </div>
      )}

      {/* MAP */}

      {step === 7 && (
        <div className="map-scene">

          <div className="map-title">
            <span>NO MATTER THE DISTANCE</span>
          </div>

          <div className="map">

            <div className="map-grid"></div>

            <div className="map-road road-one"></div>
            <div className="map-road road-two"></div>
            <div className="map-road road-three"></div>

            <div className="location you">
              <div className="pin"></div>
              <span>MINAZ</span>
            </div>

            <div className="location raza">
              <div className="pin"></div>
              <span>RAZA</span>
            </div>

            <div className="connection-line">
              <div className="moving-light"></div>
            </div>

            <div className="connected-text">
              Still connected. ❤️
            </div>

          </div>

        </div>
      )}

      {/* FINAL */}

      {step === 8 && (
        <div className="page7-final">

          <p>
            Because some people are close to your heart…
          </p>

          <p>
            even when they’re far away. ❤️
          </p>

          <button
            className="page7-button"
            onClick={goToPage8}
          >
            CONTINUE →
          </button>

        </div>
      )}

    </div>
  );
}

export default Page7;