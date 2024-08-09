import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Footer() {

    const social = [
        {
            link: 'https://www.linkedin.com/in/mehdiabidii/',
            icon: <FaLinkedinIn/>,
        },
        {
            link: 'https://github.com/Mehdi-Abidi',
            icon: <AiFillGithub/>,
        },
        {
            link: 'https://twitter.com/',
            icon: <FaXTwitter/>,
        },
        {
            link: 'https://www.instagram.com/syed_mehdi_90',
            icon: <FaInstagram/>,
        }
    ]
    return (
        <footer className='md:flex md:px-10 lg:flex bg-[#fafafa] dark:bg-[#161616] text-black dark:text-white lg:px-48 px-4 py-5 justify-between border-t border-slate-800'>
                <div>
                    <h2 className='text-[22px] md:text-[22px] font-semibold text-lime-400 py-2'>Copyright © 2024. All rights are reserved</h2>
                </div>
                <div className='md:flex lg:flex gap-10 '>
                    <div>
                        <h2 className='text-[22px] font-semibold text-lime-400 py-2  uppercase'>Contact</h2>
                        <a href="mailto:chiragjain.jain7@gmail.com" className='text-[16px]  hover:text-lime-400 transition-all duration-150 ease-in-out cursor-pointer'>Email: mehdiali78666@gmail.com</a>
                        <p className='text-[16px] pb-5 hover:text-lime-400 transition-all duration-150 ease-in-out'>Phone: +92-3323488793</p>
                    </div>
                    <div>
                        <h2 className='text-[22px] font-semibold text-lime-400 py-2 uppercase'>Follow Me</h2>
                        <div className='flex space-x-4 '>
                            {social.map((social, index) => (
                                <a key={index} target="_blank" href={social.link} className=' hover:text-lime-400 transition-all duration-150 ease-in-out'>
                                <div  className='text-[28px] rounded-full p-2 transition-shadow 
                                duration-300 hover:shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]'>
                                    {social.icon}
                                </div>                    
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer