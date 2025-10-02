import { useState, useEffect } from 'react'
import Confetti from 'react-confetti-boom';

function Spray({ durationEnded }) {

    const [confettiKey, setConfettiKey] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (durationEnded) {
            // Delay 2s before showing confetti
            const timeout = setTimeout(() => {
                setShowConfetti(true);

                // After confetti starts, keep spraying
                const interval = setInterval(() => {
                    setConfettiKey((prev) => prev + 1);
                }, 2500);

                return () => clearInterval(interval);
            }, 2500);

            return () => clearTimeout(timeout);
        }
    }, [durationEnded]);

    return (
        <div>
            {/* Spray starts after 2s */}
            {showConfetti && <>
                {/* Left side spray */}
                <Confetti
                    key={`left-${confettiKey}`}
                    x={0}
                    y={0.5}
                    angle={0}
                    spread={100}
                    particleCount={150}
                />

                {/* Right side spray */}
                <Confetti
                    key={`right-${confettiKey}`}
                    x={1}
                    y={0.5}
                    angle={180}
                    spread={100}
                    particleCount={150}
                />
            </>}
        </div>
    )
}

export default Spray