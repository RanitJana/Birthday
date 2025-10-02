import React, { useEffect, useState } from 'react';
import "./CatGoing.css"

export default function CatGoing({ duration = 10 }) {
    const [quote, setQuote] = useState('...');

    useEffect(() => {
        const waitQuotes = [
            "maww wait!!",
            "wait maww!!",
            "maww pls waittt",
            "hold on maww~~",
            "maww waitinggg...",
            "don't rush maww!!",
            "maww pauseeeee",
            "wait for maww!!!",
            "just a sec maww~",
            "maww patience plzzz"
        ];
        const randomQuote = waitQuotes[Math.floor(Math.random() * waitQuotes.length)];
        setQuote(randomQuote);
    }, []);

    return (
        <div className='fixed bottom-0 w-full overflow-hidden'> {/* overflow-hidden keeps cat inside */}
            <div
                className='relative'
                style={{
                    display: 'inline-block',
                    animation: `catMove ${duration}s linear forwards`
                }}
            >
                <div className='relative mb-8 top-10 left-0 text-[17px] border-2 rounded-2xl px-3 py-1 bg-white shadow-lg'>
                    {quote}
                </div>
                <img src='/assets/cat-running.gif' className='w-[10rem]' alt='running cat' />
            </div>
        </div>
    );
}
