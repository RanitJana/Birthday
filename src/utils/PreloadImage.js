import { useEffect } from "react";

const images = [
    "/src/assets/modern-empty-room.jpg",
    "/src/assets/ballon.gif",
    "/src/assets/cake.png",
    "/src/assets/ballon.png",
    "/src/assets/birthday.png",
    "/src/assets/1.png",
    "/src/assets/7.png",
    "/src/assets/phone.png",
    "/src/assets/gf.jpg",
    "/src/assets/cat-dancing.gif",
    "/src/assets/fat-cat-birthday.gif",
    "/src/assets/light2.png",
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
