"use client"
import { useRouter } from "next/navigation";

import React from 'react'

function BackButton() {
  const router = useRouter();

  function handleBack(){
    router.back();
  }
  return (
    <>
    <button
  onClick={handleBack}
  className="
    absolute
    top-24 left-4
    md:top-24 md:left-6
    lg:top-24 lg:left-8
    z-50

    flex items-center justify-center

    bg-white/10 hover:bg-orange-500
    border border-white/20 hover:border-orange-500
    backdrop-blur-md

    w-11 h-11
    md:w-12 md:h-12

    rounded-full
    transition-all duration-300
    group
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-white transition-colors"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />
  </svg>
</button>
      
    </>
  )
}

export default BackButton
