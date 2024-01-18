import React from 'react'
import QR from '../assets/qrcode.png'
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div className='md:px-20 px-5 pb-5 md:my-10'>
            <div className='flex justify-center flex-col gap-3'>
                <div className='flex justify-center'>
                    <div className='bg-green-200 rounded-full px-3 py-1 flex items-center gap-2 relative'>
                        <span class="animate-ping 2s absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-70 transform"></span>
                        <div className='h-3 w-3 bg-green-600 rounded-full'></div>
                        <div className='text-[#12A150]'> Open for freelance or full-time roles </div>
                    </div>
                </div>

                <div className='flex justify-center text-center md:text-4xl text-2xl font-inika'>
                    Do you think I could be a good fit <br /> for your next project ?
                </div>

                <div className='font-inika md:text-sm text-xs text-center'>
                    I'm currently looking for new opportunities to grow my <br /> skills. Let's chat if you are interseted!
                </div>

                <div className='flex justify-center flex-wrap'>

                    <Link to={'mailto://kmalik0907@gmail.com'} className='bg-gray-200 font-inika px-3 py-1 rounded-2xl flex items-center gap-2 '>
                        <MdOutlineEmail />
                        Get In Touch
                    </Link>
                </div>
            </div>


            <div className='md:mt-14 mt-10 flex justify-between'>
                <div>
                    <div className='flex gap-2'>
                        <Link className='cursor-pointer' to={'https://twitter.com/_keshav_malik'} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="#11181C" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Link>
                        <Link className='cursor-pointer' to={'https://www.linkedin.com/in/keshavmalik/'} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#11181C" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 9H2V21H6V9Z" stroke="#11181C" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#11181C" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Link>

                        <Link className='cursor-pointer' to={'https://github.com/keshav-0907'} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00001 3.5C6.00001 2 5.00001 2 5.00001 2C4.70001 3.15 4.70001 4.35 5.00001 5.5C4.27188 6.51588 3.91848 7.75279 4.00001 9C4.00001 12.5 7.00001 14.5 10 14.5C9.61001 14.99 9.32001 15.55 9.15001 16.15C8.98001 16.75 8.93001 17.38 9.00001 18V22" stroke="#11181C" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 18C4.49 20 4 16 2 16" stroke="#11181C" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Link>

                    </div>
                    <div className='md:text-sm text-xs font-thin font-inika'>
                        Design & Developed by @_keshav_malik
                    </div>
                    <div className='md:text-sm text-xs font-thin font-inika'>
                        ©2023. All rights reserved.
                    </div>
                </div>

                <Link to={'https://bio.link/_keshav_malik'} target='_blank'>
                    <img src={QR} className='md:w-24 md:h-24 h-16 w-16' alt='qr' />
                </Link>
            </div>
        </div>

    )
}

export default Footer