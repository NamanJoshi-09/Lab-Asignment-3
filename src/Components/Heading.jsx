import React from 'react'

function Heading(){
    return(
        <div className='flex w-200 justify-center items-center py-10 pb-15 h-10 border border-b-[#00FFE0] border-t-0 border-x-0'>
            <h1 className="text-5xl font-extrabold text-white tracking-wide">
                STUDENT <span className="text-cyan-400 drop-shadow-[0_0_20px_#00ffff]">SCOREBOARD</span>
            </h1>
        </div>
    )
}

export default Heading;