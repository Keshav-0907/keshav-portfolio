import React from 'react'
import Avtar from '../assets/avtar.png'
import { Link } from 'react-router-dom'
import { RoughNotation } from "react-rough-notation";


const Hero = () => {

  return (
    <div className='h-96  md:flex justify-around items-center w-full md:px-20 px-5 py-10 md:my-10'>

      <div className='w-1/2 md:flex hidden '>
        <img src={Avtar} alt='err' />
      </div>

      <div className='md:w-1/2 flex flex-col gap-5'>
        <div className='md:text-4xl text-2xl font-inika flex items-center'>
          <div className='flex md:hidden'>
            <img src={Avtar} className='w-20' alt='err' />
          </div>
          <div>
            Hey, I am <RoughNotation
              show={true}
              type='underline'
              animationDelay={600}
              color="red" padding={4}
              strokeWidth={2}>
              Keshav Malik
            </RoughNotation>
          </div>
        </div>
        <div className='md:text-base text-sm md:px-0 pr-3'>
          👋 Hey there! I'm Keshav Malik, a Software Dev 💻. I thrive in the world of freelancing and am open to internships and full-time roles! 🚀 Let's build something awesome together! 🌟
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-green-200 rounded-full px-3 py-1 flex items-center gap-2 relative'>
            <span class="animate-ping 2s absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-70 transform"></span>
            <div className='h-3 w-3 bg-green-600 rounded-full'></div>
            <div className='text-[#12A150]'> Open for freelance or full-time roles </div>
          </div>
        </div>

        <div className='flex gap-6'>
          <div className='flex gap-2 items-center bg-black text-white px-4 py-2 rounded-lg hover:cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4.93367 12L3.08987 5.73239C2.60867 4.09667 4.14094 2.58539 5.75514 3.10362C10.2067 4.53274 14.4553 6.53713 18.3948 9.06662C19.5259 9.79292 21 10.4417 21 12C21 13.5583 19.5259 14.2071 18.3948 14.9334C14.4553 17.4629 10.2067 19.4673 5.75514 20.8964C4.14094 21.4146 2.60867 19.9033 3.08987 18.2676L4.93367 12ZM4.93367 12H9.83493" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Link to={'mailto://kmaik0907@gmail.com'}>
              Get in Touch
            </Link>
          </div>
          <div className='flex gap-2 items-center bg-gray-200 text-black px-4 py-2 rounded-lg hover:cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
              <path d="M24 17.3333V25.3333C24 26.0406 23.719 26.7189 23.219 27.219C22.7189 27.719 22.0406 28 21.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V10.6667C4 9.95942 4.28095 9.28115 4.78105 8.78105C5.28115 8.28095 5.95942 8 6.66667 8H14.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 4H28V12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.3334 18.6667L28 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Link to={'https://drive.google.com/file/d/1WSV5buASrj1K6iz_-31DksX-N3wwV8Qg/view?usp=sharing'} target='_blank'>
              My Resume
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero