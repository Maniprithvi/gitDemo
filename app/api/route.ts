import { NextRequest, NextResponse } from "next/server"

export const GET =async (req:NextRequest)=>{
  
    return new NextResponse("hi this response from Maasta V3")
}