import React, { useEffect, useRef } from "react";

export default function Face() {
    const videoRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            })
            .catch((err) => {
                console.error("Error accessing camera:", err);
            });
    }, []);

    return (
        <div className="relative w-[12%] flex justify-center items-center z-30" style={{ aspectRatio:1/2}}>
            {/* Video container cropped inside phone */}
            <div className="absolute left-1/2 top-1/2 translate-x-[-49%] translate-y-[-50%] inset-0 z-30 overflow-hidden rounded-[0.1rem] w-[85%]" style={{aspectRatio:1/1.7}}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    muted
                    style={{
                        transform: "scaleX(-1)", // mirror like selfie
                    }}
                />
            </div>

            {/* Phone frame above video */}
            <img
                src="/assets/phone.png"
                alt="phone frame"
                className="absolute inset-0 z-20 w-full h-full pointer-events-none"
            />
        </div>
    );
}
