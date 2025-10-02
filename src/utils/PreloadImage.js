import { useEffect } from "react";

const images = [
    "/assets/modern-empty-room.jpg",
    "/assets/ballon.gif",
    "/assets/cake.png",
    "/assets/ballon.png",
    "/assets/birthday.png",
    "/assets/1.png",
    "/assets/7.png",
    "/assets/phone.png",
    "/assets/gf.jpg",
    "/assets/cat-dancing.gif",
    "/assets/fat-cat-birthday.gif",
    "/assets/light2.png",
];

function usePreloadImages() {
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);
}

export default usePreloadImages;
