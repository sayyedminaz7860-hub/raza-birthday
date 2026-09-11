import { useEffect, useState } from "react";
import "./Page1.css";

function Page1({ goToPage2 }) {
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 3000),
            setTimeout(() => setStep(2), 6500),
            setTimeout(() => setStep(3), 9000),
            setTimeout(() => setStep(4), 13000),
            setTimeout(() => setStep(5), 17000),
            setTimeout(() => setStep(6), 22000),
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    useEffect(() => {
        if (step < 6) return;

        let value = 0;

        const interval = setInterval(() => {
            value += 2;
            setProgress(value);

            if (value >= 100) {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [step]);

    return (
        <div className="page1">
            <div className="content">

                {step === 0 && (
                    <p className="notification cinematic">
                        IMPORTANT NOTIFICATION
                    </p>
                )}

                {step === 1 && (
                    <h1 className="cinematic">
                        RAZA HAS BEEN SELECTED.
                    </h1>
                )}

                {step === 2 && (
                    <p className="message cinematic">
                        For something completely unnecessary…
                    </p>
                )}

                {step === 3 && (
                    <p className="message cinematic">
                        …but absolutely worth it. 😂
                    </p>
                )}

                {step === 4 && (
                    <h2 className="second-title cinematic">
                        Okay… this is unexpected.
                    </h2>
                )}

                {step === 5 && (
                    <p className="second-message cinematic">
                        Apparently, someone decided to make your birthday
                        <br />
                        a little extra. 😂
                    </p>
                )}

                {step === 6 && (
                    <div className="loading-screen cinematic">

                        <p className="loading-text">
                            SURPRISE LOADING...
                        </p>

                        <div className="progress-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        <p className="percentage">
                            {progress}%
                        </p>

                        {progress >= 100 && (
                            <div className="ready-section cinematic">

                                <p className="ready-text">
                                    ✓ SURPRISE READY
                                </p>

                                <p className="main-character">
                                    And yes… you're the main character today.
                                </p>

                                <button className="go-button" onClick={goToPage2}>
                                    LET'S GO →
                                </button>

                            </div>
                        )}

                    </div>
                )}

            </div>
        </div>
    );
}

export default Page1;