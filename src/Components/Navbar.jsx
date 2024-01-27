import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoDocumentTextOutline, IoCubeOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaBoltLightning } from "react-icons/fa6";

const Navbar = ({ openMessageBox }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [colorMode, setColorMode] = useState('light')

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const toggleColor = () =>{
        if(colorMode=='light'){
            setColorMode('dark')
        } else{
            setColorMode('light')
        }
        console.log(colorMode)
    }

    

    return (
        <div className='flex justify-around h-16 items-center w-full border-b-gray-200 border-b-[1px] shadow-md'>

            <div className='flex md:w-1/3 justify-center'>
                <a href='/'>
                    <img className='w-1/2' src={Logo} alt='err' />
                </a>

            </div>

            <div className='md:flex w-2/3 hidden'>
                <div className='flex gap-8 w-1/2 justify-center'>
                    <div className='flex items-center gap-1  min-w-fit'>
                        <IoHomeOutline />
                        <div>
                            Home
                        </div>
                    </div>
                    <div className='flex items-center gap-1 min-w-fit hover:cursor-pointer'>
                        <FaRegUser />
                        <div>
                            About
                        </div>
                    </div>
                    <div className='flex items-center gap-1 min-w-fit'>
                        <IoDocumentTextOutline />

                        <a href={'#my-blogs'}>
                            blogs
                        </a>
                    </div>
                    <div className='flex items-center gap-1 min-w-fit'>
                        <IoCubeOutline />
                        <a href={'#my-projects'}>
                            projects
                        </a>
                    </div>
                    <div className='flex items-center gap-1 min-w-fit'>
                        <IoCubeOutline />
                        <div onClick={toggleColor}>
                            Color
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 w-1/2 justify-center'>
                    <Link className='cursor-pointer' to={'https://twitter.com/_keshav_malik'} target='_blank'> <FaXTwitter size={23} /> </Link>
                    <Link className='cursor-pointer' to={'https://www.linkedin.com/in/keshavmalik/'} target='_blank'><FaLinkedin size={23} /> </Link>
                    <Link className='cursor-pointer' to={'https://github.com/keshav-0907'} target='_blank'> <FiGithub size={23} /> </Link>
                    <div className='cursor-pointer' onClick={openMessageBox}> <FaBoltLightning size={23} /> </div>
                </div>
            </div>

            <div className='flex md:hidden justify-center '>
                {
                    isOpen ?
                        (
                            <IoMdClose onClick={toggleOpen} size={30} />
                        ) : (
                            <IoMdMenu onClick={toggleOpen} size={30} />
                        )
                }
            </div>

            {
                isOpen ? (
                    <div className='shadow-md py-2 px-4 absolute top-16 w-full bg-slate-100 z-50'>
                        <div className='flex gap-8 justify-center flex-col'>
                            <div className='flex items-center justify-center gap-1 min-w-fit'>
                                <IoHomeOutline />
                                <div>
                                    Home
                                </div>
                            </div>
                            <div className='flex items-center  justify-center gap-1 min-w-fit'>
                                <FaRegUser />
                                <div>
                                    about me
                                </div>
                            </div>
                            <div className='flex items-center  justify-center gap-1 min-w-fit'>
                                <IoDocumentTextOutline />
                                <div>
                                    blogs
                                </div>
                            </div>
                            <div className='flex items-center  justify-center gap-1 min-w-fit'>
                                <IoCubeOutline />
                                <div>
                                    projects
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-9 justify-center py-5 mt-3 bg-gray-100 items-center rounded-2xl'>
                            <Link to={'https://twitter.com/_keshav_malik'} target='_blank'> <FaXTwitter size={23} /> </Link>
                            <Link to={'https://www.linkedin.com/in/keshavmalik/'} target='_blank'><FaLinkedin size={23} /> </Link>
                            <Link to={'https://github.com/keshav-0907'} target='_blank'> <FiGithub size={23} /> </Link>
                        </div>
                    </div>
                ) : (null)
            }


        </div>

    )
}

export default Navbar