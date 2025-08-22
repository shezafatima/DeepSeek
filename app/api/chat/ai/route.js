import connectDB from "@/context/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
  apiKey: process.env.GEMINI_API_KEY, 
});

export async function POST(req) {
  try {
    const { userId } = getAuth(req);
    

    const { chatId, prompt } = await req.json();

    if (!userId) {
      return NextResponse.json({ success: false, message: "User not authenticated" });
    }

    await connectDB();
    const data = await Chat.findOne({ userId, _id: chatId });
    
    const userPrompt = {
      role: "user",
      content: prompt,
      timestamp: Date.now()
    };

    data.messages.push(userPrompt);


    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gemini-1.5-flash",
    });

    const message = completion.choices[0].message;
    message.timestamp = Date.now();
    data.messages.push(message);
    

    await data.save();

    return NextResponse.json({ success: true, data: message });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}