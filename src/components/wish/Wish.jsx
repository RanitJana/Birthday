import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const fullText = [
    "Today is all about YOU!💖May your birthday sparkle with joy, laughter, and love. May every wish you make today come true, and may your heart be filled with happiness that lasts the whole year!🥳",
    "You deserve all the sweet moments and magical memories today. ✨ Thank you for being such an amazing person and bringing so much light into my life. 🌸",
    "Here's to another year of smiles, adventures, and dreams coming true! 🎂🎈🎁"
];

function Wish() {

    const [displayedText, setDisplayedText] = useState(["", "", ""]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= fullText.length) return;

        const interval = setInterval(() => {
            setDisplayedText(prev => {
                const newText = [...prev];
                newText[lineIndex] += fullText[lineIndex][charIndex];
                return newText;
            });
            setCharIndex(prev => prev + 1);
        }, 40);

        return () => clearInterval(interval);
    }, [charIndex, lineIndex]);

    useEffect(() => {
        if (lineIndex < fullText.length && charIndex === fullText[lineIndex].length) {
            setLineIndex(prev => prev + 1);
            setCharIndex(0);
        }
    }, [charIndex, lineIndex]);

    return (
        <motion.div
            className='fixed top-0 left-0 z-50 h-dvh w-dvw 
                       bg-[url("/assets/paper.jpg")] 
                       bg-cover bg-center flex flex-col items-center justify-center text-center p-6 min-h-[50rem]'
            initial={{ x: "100%", opacity: 0 }}   // start off-screen to the right
            animate={{ x: 0, opacity: 1 }}        // slide in to position
            transition={{ type: "spring", stiffness: 120, damping: 20, duration: 1.5 }}
        >

            {/* Heading */}
            <motion.h2
                className='text-5xl font-extrabold text-pink-800 mb-6 drop-shadow-lg'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
            >
                🎉Happy Birthday, My dear Neha!🎉
            </motion.h2>

            {/* Image */}
            <motion.img
                src="/assets/gf.jpg"
                alt="Neha"
                className='w-44 h-44 rounded-full object-cover mb-6 shadow-2xl border-4 border-b-rose-800'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 120 }}
            />

            {/* Typing Message */}
            {displayedText.map((line, idx) => (
                <motion.p
                    key={idx}
                    className='text-lg sm:text-xl text-gray-900 max-w-lg mb-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: line.length > 0 ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {line}
                    {lineIndex === idx && charIndex < fullText[idx].length && <span className='animate-pulse'>|</span>}
                </motion.p>
            ))}

        </motion.div>
    );
}

export default Wish;
