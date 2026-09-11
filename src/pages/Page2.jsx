import { useEffect, useState } from "react";
import "./Page2.css";

function Page2({ goToPage3 }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 4000),
            setTimeout(() => setStep(2), 8500),
            setTimeout(() => setStep(3), 11500),
            setTimeout(() => setStep(4), 27000),
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    const years = [
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
    ];

    return (
        <div className="page2">
            <div className="page2-content">

                {/* SLIDE 1 */}
                {step === 0 && (
                    <div className="slide cinematic">
                        <p className="verification-title">
                            RELATIONSHIP VERIFICATION
                        </p>
                    </div>
                )}

                {/* SLIDE 2 */}
                {step === 1 && (
                    <div className="slide cinematic">
                        <p className="status-label">
                            CURRENT STATUS:
                        </p>

                        <h1 className="status">
                            COUSIN
                        </h1>
                    </div>
                )}

                {/* SLIDE 3 */}
                {step === 2 && (
                    <div className="slide cinematic">
                        <p className="transition-text">
                            But something happened between then and now…
                        </p>
                    </div>
                )}

                {/* TIMELINE */}
                {step === 3 && (
                    <div className="timeline-section cinematic">

                        <p className="timeline-label">
                            A JOURNEY THROUGH TIME
                        </p>

                        <div className="timeline">

                            <div className="timeline-line"></div>

                            {years.map((year, index) => (
                                <div
                                    className="year-wrapper"
                                    key={year}
                                    style={{
                                        animationDelay: `${index * 1.3}s`,
                                    }}
                                >
                                    <div className="year-dot"></div>

                                    <span className="year">
                                        {year}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <div className="timeline-caption">
                            <span>2019</span>
                            <span>2026</span>
                        </div>

                    </div>
                )}

                {/* UPGRADE COMPLETE */}
                {step === 4 && (
                    <div className="upgrade-section cinematic">

                        <p className="upgrade-text">
                            UPGRADE COMPLETE ✨
                        </p>

                        <h1 className="saga-bhai">
                            SAGE BHAI BEHEN❤️
                        </h1>

                        <p className="stuck-text">
                            No upgrade. No downgrade.
                            <br />
                            You’re stuck with me. 😂
                        </p>

                        <button
                            className="continue-button"
                            onClick={goToPage3}
                        >
                            CONTINUE →
                        </button>

                    </div>
                )}

            </div>
        </div>
    );
}

export default Page2;