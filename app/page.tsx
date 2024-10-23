import Image from "next/image";
import React from "react"
import { BackgroundBeams } from "../components/ui/background-beams"
import { FlipWords } from "../components/ui/flip-words"

export function HeroText() {
  const words = ["new key insights", "sources of alpha", "your next move"]
 
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Discover <FlipWords words={words} duration={5000}/>
      </div>
    </div>
  )
}

export function Background() {
  return (
    <div className="h-[30rem] rounded-md w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <HeroText></HeroText>
      </div>
      <BackgroundBeams />
    </div>
  )
}




export default function Home() {
  return (
    <Background></Background>
  )
}
