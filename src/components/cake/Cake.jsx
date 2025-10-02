import Face from '../Face/Face.jsx'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import Balloons from '../Balloons/Ballons.jsx'
import CandleCake from './CandleCake.jsx'

function Cake({ setOpenWish, setBalloonFlying, balloonFlying }) {
    return (
        <motion.div
            className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[20%] w-full'
            initial={{ x: "-100vw", opacity: 0 }}   // start off-screen left
            animate={{ x: 0, opacity: 1 }}          // move to center
            transition={{
                duration: 3,
                ease: "linear",
                type: "spring",
                stiffness: 80,
                damping: 15
            }}
        >
            <div className='relative flex justify-center w-full'>
                <div className='w-fit relative'>
                    {<Balloons />}
                    <img src="/assets/table.png" alt="" className='max-w-[40rem] w-full' style={{
                        zIndex: 10
                    }} />

                    <div className='absolute bottom-[40%] left-20 flex justify-center right-0 w-full'>
                        <Face />
                        <div className='absolute bottom-[-0.5rem] max-w-[8rem] w-[23%] left-[27%]'>
                            <span className='bg-white absolute left-0 bottom-[50%] translate-x-[-100%] rounded-2xl px-1 text-sm border-2 py-1 ml-5'
                                style={{
                                    opacity: balloonFlying ? 1 : 0,
                                    scale: balloonFlying ? 1 : 0,
                                    transition: "1s ease",
                                    zIndex: 50
                                }}
                            >Maw birthdayy!!</span>
                            <img src="/assets/cat-dancing.gif" alt="" className='' />
                        </div>
                    </div>

                    <CandleCake setOpenWish={setOpenWish} setBalloonFlying={setBalloonFlying} />
                </div>
            </div>
        </motion.div>
    )
}

export default Cake
