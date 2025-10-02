/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CandleCake({ setOpenWish, setBalloonFlying }) {
    const [fireOpacity, setFireOpacity] = useState(1);
    const [canBlow, setCanBlow] = useState(false);
    const controls = useAnimation();

    const handleBlow = () => {
        if (!canBlow) return;

        controls.start({
            scaleY: [1, 1.5, 2, 0],   // intensify then vanish
            scaleX: [1, 1.2, 1.3, 0],
            opacity: [1, 1, 1, 0],
            y: [0, -3, -5, -10],
            transition: { duration: 0.7, ease: "easeOut" }
        });

        setFireOpacity(0);

        setBalloonFlying(true);
        setTimeout(() => setOpenWish(true), 5000);
    };


    useEffect(() => {
        const timer = setTimeout(() => setCanBlow(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    // Flame flicker animation
    useEffect(() => {
        controls.start({
            scaleY: [1, 1.5, 1],
            y: [0, -3, 0],
            opacity: [1, 0.8, 1],
            transition: { duration: 0.2, repeat: Infinity, repeatType: "loop" }
        });
    }, [controls]);

    return (
        <div className="absolute bottom-[80%] left-[-5rem] w-full z-30 flex justify-center">
            <motion.img
                src="/src/assets/cake-crop.png"
                alt=""
                className="z-30 max-w-[12rem] w-[30%]"
                animate={{
                    x: [0, -2, 0, 2, 0],       // vertical sway
                    rotate: [0, -2, 0, 2, 0]    // slight rotation
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            />

            {/* Blow button */}
            <button
                className={`absolute border-2 bottom-[-3rem] left-1/2 translate-x-[-50%] bg-gray-100 text-black font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 text-[1rem]
        ${canBlow ? "hover:bg-gray-200 hover:scale-105 cursor-pointer" : "opacity-50 cursor-not-allowed bg-red-200"}`}
                onClick={handleBlow}
                disabled={!canBlow}
                style={{
                    opacity: fireOpacity,
                    transform: `scale(${fireOpacity})`,
                    transition: "1.5s ease"
                }}
            >
                {canBlow ? "Bloww" : "Waitt"}
            </button>

            {/* Candles */}
            <div className="absolute z-30 bottom-[87%] h-fit left-1/2 translate-x-[-50%] flex justify-center items-center">
                {/* First Candle */}
                <div className="relative flex flex-col items-end">
                    {/* Flame */}
                    <motion.div
                        animate={controls}
                        style={{ opacity: fireOpacity }}
                        className="w-3 h-6 mr-1 rounded-full bg-gradient-to-t from-yellow-400 via-orange-500 to-red-500 shadow-lg"
                    />
                    <img src="/src/assets/1.png" alt="candle 1" className="max-w-10 w-[60%] mt-1" />
                </div>

                {/* Second Candle */}
                <div className="relative flex flex-col items-start">
                    {/* Flame */}
                    <motion.div
                        animate={controls}
                        style={{ opacity: fireOpacity }}
                        className="w-3 h-6 ml-2 rounded-full bg-gradient-to-t from-yellow-400 via-orange-500 to-red-500 shadow-lg"
                    />
                    <img src="/src/assets/7.png" alt="candle 7" className="max-w-11 w-[65%] mt-1" />
                </div>
            </div>
        </div>
    );
}
