import Image from "next/image"
import React from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { FlipWords } from "@/components/ui/flip-words"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { HeroParallax } from "@/components/ui/hero-parallax"

function HeroText() {
  const words = ["new, key insights", "sources of alpha", "your next trade"]
 
  return (
    <div className="flex justify-center items-center px-4">
      <div className="relative z-10 text-lg md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Discover <FlipWords words={words} duration={5000} className="bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 "/>
        with 
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 scale-75">
          <TextHoverEffect text="Temeer"></TextHoverEffect>
        </div>
      </div>
    </div>
  )
}

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/tt.png",
  },
  {
    title: "Madara",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/tt.png",
  }, 
]

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="h-full w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <HeroText/>
        </div>
        <a href="/#product">
          <div className="relative mt-10 z-10">
            <button className="relative group hover:scale-125 hover:duration-300 duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"/>
              <div className="relative px-8 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-700 to-purple-700">
                Demo
              </div>
            </button>
          </div>
        </a>
        <BackgroundBeams />
      </div>
      <HeroParallax products={products}></HeroParallax>
    </div>
  )
}