import React, { useEffect, useState } from 'react'

const Theme = () => {
  const [light, setLight] = useState(true);

  return (
    <div className={`flex ${light?'flex-row':'flex-row-reverse'} w-16 bg-gray-200 rounded-2xl p-1 shadow-sm`}>
        <button 
        className='flex justify-center items-center bg-white p-1 w-[60%] rounded-2xl shadow-lg ease-in-out'
        onClick={()=>{setLight(!light)}}
        >
            <span class="material-symbols-outlined">
                {light ? 'light_mode':'dark_mode'}
            </span>
        </button>
    </div>
  )
}

export default Theme