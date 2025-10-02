import React, { useEffect, useState, useRef, useCallback } from "react";

export default function Countdown({ initialSeconds = 5, onFinish }) {
    const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
    const [invisible, setInvisible] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSecondsLeft((s) => {
                if (s <= 1) {
                    clearInterval(intervalRef.current);

                    return 0;
                }
                return s - 1;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [onFinish]);

    const handleForward = useCallback(() => {
        setInvisible(1);
        setTimeout(() => {
            onFinish(true)
        }, 100);
    }, [onFinish])

    const pad = (n) => String(n).padStart(2, "0");

    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    return (
        <div aria-live="polite" className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[4rem] transition-opacity font-extrabold text-white"
            style={{
                opacity: (1 - invisible)
            }}
        >

            {secondsLeft < 1 ?
                <button onClick={handleForward} className="w-dvw h-dvh  text-[2rem]">Tap to continue</button> :
                <div>{pad(minutes)}:{pad(seconds)}</div>
            }
        </div>
    );
}