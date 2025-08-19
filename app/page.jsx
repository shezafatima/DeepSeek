"use client"
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";
import { RiMenu2Line ,RiChatNewLine } from "react-icons/ri";


export default function Home() {
  const [expand,setExpand]=useState(false)
  const [messages,setMessages]=useState([])
const [isLoading,setIsLoading]=useState(false)
  return (
   <div>
  <div className="flex h-screen">
  <Sidebar expand={expand} setExpand={setExpand}/>
    <div className="flex flex-col flex-1 items-center justify-center px-4 bg-[#292a2d] text-white relative pb-8">
      <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
      
<RiMenu2Line  size={24} onClick={()=>(expand ? setExpand(false) : setExpand(true))} className=" text-gray-400"/>
  <RiChatNewLine size={24} className="opacity-70 text-gray-400"/>
       
        {/* <Image  onClick={()=>(expand ? setExpand(false) : setExpand(true))} className="rotate-180 " src={assests.menu_icon} alt="menu-icon"/>
         <Image className="opacity-70 " src={assests.chat_icon} alt="chat-icon"/> */}
      </div>
      {messages.length === 0 ? (
        <>
        <div className="flex items-center gap-3">
        
          <Image src={"/assests/logo.png"} width={"37"} height={"35"} alt="" />
        <p className="text-2xl font-medium">Hi, I'm DeepSeek</p>
        </div>
        <p className="text-sm mt-2">How can I help you today?</p>
        </>
      ):(
        <div> 
<Message role='user' content='What is next js'/>
        </div>
      )}
     <PromptBox isLoading={isLoading} setIsLoading={setIsLoading}/>
      <p className="text-xs absolute bottom-1 text-gray-500">AI-generated for refrence only.</p>
    </div>

  </div>
   </div>
  );
}
