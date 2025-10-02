/* eslint-disable no-unused-vars */
import Countdown from './components/countdown/Countdown.jsx'
import CatGoing from './components/Cat/CatGoing.jsx'
import TopLight from './components/light/TopLight.jsx';
import Cake from './components/cake/Cake.jsx';
import { useEffect, useState } from 'react';
import CatWishing from './components/Cat/CatWishing.jsx';
import BirthdayFlag from './components/birthdayFlag/BirthdayFlag.jsx';
import Spray from './components/spray/Spray.jsx';
import usePreloadImages from './utils/PreloadImage.js';
import Wish from './components/wish/Wish.jsx';
import { motion } from "framer-motion";


export default function App() {

  const duration = (2 + Math.floor(Math.random() * 3));
  const [durationEnded, setDurationEnded] = useState(false);
  const [openWish, setOpenWish] = useState(false);
  const [balloonFlying, setBalloonFlying] = useState(false);

  usePreloadImages()

  useEffect(() => {
    const music = new Audio("/assets/happy-birthday.mp3");
    music.volume = 0.8;

    // Loop the music
    music.loop = true;

    if (durationEnded) {

      const playPromise = music.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Music playing"))
          .catch((error) => console.log("Autoplay prevented", error));
      }
    }

    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, [durationEnded]);


  return (
    <div className='w-dvw h-dvh bg-[url("/assets/modern-empty-room2.jpg")] bg-cover bg-center font-[custom] text-[1.5rem]'>
      <Countdown initialSeconds={duration} onFinish={setDurationEnded} />
      <CatGoing duration={duration} />
      {durationEnded && <>
        <TopLight />
        <Cake setOpenWish={setOpenWish} setBalloonFlying={setBalloonFlying} balloonFlying={balloonFlying} />
        <CatWishing balloonFlying={balloonFlying} />
        <BirthdayFlag />
        <Spray durationEnded={durationEnded} />
        {openWish && <Wish />}
        {/* flying balloon */}
        {balloonFlying && (
          <>
            <motion.img
              src="/assets/Balloon-Border.png"
              alt="balloon"
              className="fixed left-0 w-dvw h-auto"
              style={{
                zIndex: 200,
                scale: 5
              }}
              initial={{ y: window.innerHeight }} // start at bottom
              animate={{ y: -window.innerHeight, opacity: 0 }} // move off top
              transition={{ duration: 5, ease: "linear" }}
            />
            <motion.img
              src="/assets/Balloon-Border.png"
              alt="balloon"
              className="fixed left-0 w-dvw h-auto"
              style={{
                zIndex: 200,
                scale: 3
              }}
              initial={{ y: window.innerHeight }} // start at bottom
              animate={{ y: -window.innerHeight, opacity: 0 }} // move off top
              transition={{ duration: 5, ease: "linear", delay: 0.8 }}
            />
          </>
        )}
      </>}
    </div>
  )
}
