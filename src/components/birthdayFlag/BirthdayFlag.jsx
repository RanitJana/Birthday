import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function BirthdayFlag() {
    return (
        <motion.div
            className="top-[16%] left-1/2 w-[90%] max-w-[28rem] relative"
            initial={{ y: -200, x: "-50%" }}   // start above
            animate={{ y: 0, x: "-50%" }}      // settle to position
            transition={{
                duration: 3,
                ease: "easeOut",
                type: "spring",   // makes it bounce
                stiffness: 100,
                damping: 12,
            }}
        >
            <img src="/src/assets/birthday.png" alt="birthday flag" className='z-20' />
        </motion.div>
    )
}

export default BirthdayFlag
