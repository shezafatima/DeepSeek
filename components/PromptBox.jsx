'use client'
import React, { useState } from 'react'
import { LuAtom, LuGlobe } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";
function PromptBox({setIsLoading,isLoading}) {
    const [prompt,setPrompt]=useState('')
  return (
<form className={`w-full  ${false ? 'max-w-3xl':'max-w-2xl'} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
    <textarea required onChange={(e)=>setPrompt(e.target.value)} value={prompt} className=' outline-none w-full resize-none overflow-hidden break-words bg-transparent' rows={2} placeholder='Message DeepSeek'/>
<div className='flex items-center justify-between text-sm'>
    <div className='flex items-center gap-2'>
        <p className='flex items-center gap-1 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
<div>
    <LuAtom className='h-5' size={24}/>
</div>
DeepThink (R1)
        </p>
                <p className='flex items-center gap-1 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
<div>
    <LuGlobe className='h-5' size={24}/>
</div>
Search
        </p>
    </div>
    <div className='flex items-center gap-[10px]'>
        <div className='w-4 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20" fill="none"><path d="M7 20c-1.856-.002-3.635-.7-4.947-1.94C.74 16.819.003 15.137 0 13.383V4.828a4.536 4.536 0 0 1 .365-1.843 4.75 4.75 0 0 1 1.087-1.567A5.065 5.065 0 0 1 3.096.368a5.293 5.293 0 0 1 3.888 0c.616.244 1.174.6 1.643 1.05.469.45.839.982 1.088 1.567.25.586.373 1.212.364 1.843v8.555a2.837 2.837 0 0 1-.92 2.027A3.174 3.174 0 0 1 7 16.245c-.807 0-1.582-.3-2.158-.835a2.837 2.837 0 0 1-.92-2.027v-6.22a1.119 1.119 0 1 1 2.237 0v6.22a.777.777 0 0 0 .256.547.868.868 0 0 0 .585.224c.219 0 .429-.08.586-.224a.777.777 0 0 0 .256-.546V4.828A2.522 2.522 0 0 0 7.643 3.8a2.64 2.64 0 0 0-.604-.876 2.816 2.816 0 0 0-.915-.587 2.943 2.943 0 0 0-2.168 0 2.816 2.816 0 0 0-.916.587 2.64 2.64 0 0 0-.604.876 2.522 2.522 0 0 0-.198 1.028v8.555c0 1.194.501 2.339 1.394 3.183A4.906 4.906 0 0 0 7 17.885a4.906 4.906 0 0 0 3.367-1.319 4.382 4.382 0 0 0 1.395-3.183v-6.22a1.119 1.119 0 0 1 2.237 0v6.22c-.002 1.754-.74 3.436-2.052 4.677C10.635 19.3 8.856 19.998 7 20z" fill="currentColor"></path></svg></div>
    <button  className={`${prompt ? 'bg-primary':'bg-[#71717a]'} rounded-full p-2 cursor-pointer`}>
        <div className='w-3.5 aspect-square'>{prompt ? <FaArrowUp className='text-white'/>:<FaArrowUp className='text-[#404045] '/>}</div>
        </button>
    </div>
</div>
</form>
  )
}

export default PromptBox