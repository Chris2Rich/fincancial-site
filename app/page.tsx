import Image from "next/image"
import React from "react"
import Link from "next/link"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { FlipWords } from "@/components/ui/flip-words"
import { GlowText } from "@/components/ui/glow-text"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { MacbookScroll } from "@/components/ui/macbook-scroll"

function HeroText() {
  const words = ["new, key insights", "sources of returns", "your next trade"]
 
  return (
    <div className="flex justify-center items-center px-4 select-none">
      <div className="relative z-10 text-lg md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Discover <FlipWords words={words} duration={5000} className="bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"/>
        with 
        <div className="scale-75">
          <GlowText text="Temeer"></GlowText>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden scrollbar-none">
      <div className="h-full w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased mb-10 pb-10">
        <div className="max-w-2xl mx-auto p-4">
          <HeroText/>
        </div>
        <a href="/#product">
          <div className="relative mt-10 z-10">
            <button className="relative group hover:scale-125 hover:duration-300 duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"/>
              <div className="relative px-8 p-2 rounded-lg text-white bg-gradient-to-r from-indigo-700 to-purple-700">
                Go To Demo
              </div>
            </button>
          </div>
        </a>
        <BackgroundBeams />
      </div>
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <MacbookScroll
        title={
          <p className="text-2xl md:text-7xl font-bold dark:text-white">
          Find <span className="bg-clip-text text-transparent text-shadow shadow-purple-500 bg-gradient-to-r from-indigo-500 to-purple-500 text-center font-sans font-bold">that</span> insight<br />
          that will <span className="bg-clip-text text-transparent text-shadow shadow-purple-500 bg-gradient-to-r from-indigo-500 to-purple-500 text-center font-sans font-bold">shock</span><br /> your meeting
        </p>
        }
        badge={
          <Link href="http://localhost:3000">
            <img className="h-10 w-10 transform -rotate-12" src="/favicon.ico"/>
          </Link>
        }
        src={`/tt.png`}
        showGradient={false}
      />
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Use Temeer to provide the insight you need to excel. We provide powerfully collated and processed financial datasets that enable anybody to understand markets. 
        </p>
      </div>
      <div className="w-full rounded-md flex flex-col antialiased items-center justify-center">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow"/>
      </div>
    </div>
  )
}