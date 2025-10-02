import React from 'react'

function Frame() {
    return (
        <div className='absolute bottom-2 right-0 w-[6rem] h-auto aspect-square 
                    p-1 bg-yellow-800 rounded-lg shadow-lg z-10'>
            {/* Inner div for “glass” / photo */}
            <div className='w-full h-full bg-white rounded-sm overflow-hidden'>
                <img
                    src="/src/assets/gf.jpg"
                    alt=""
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}

export default Frame
