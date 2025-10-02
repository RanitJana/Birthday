import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function CatWishing() {
  return (
    <div>
      {/* Cat coming up from bottom */}
      <motion.div
        className='fixed bottom-0 left-0'
        initial={{ y: 200, opacity: 0 }} // start below the screen
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1.5 }}
      >
        <img
          src="/assets/fat-cat-birthday.gif"
          className='w-[20%] min-w-[8rem] mb-5'
          alt="birthday cat"
        />
      </motion.div>

      {/* Image sliding in from right */}
      <motion.div
        className='fixed right-2 bottom-5 flex justify-end'
        initial={{ x: 300, opacity: 0 }} // start off-screen to the right
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1.5 }}
      >
        <img
          src="/assets/happy-birthday-animals.gif"
          className='w-[50%] min-w-[8rem]'
          alt="birthday animals"
        />
      </motion.div>
    </div>
  );
}

export default CatWishing;
