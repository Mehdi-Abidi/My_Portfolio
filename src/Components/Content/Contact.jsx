import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  
  return (
    <div id='Contact' className='bg-[#fafafa] text-black dark:bg-[#161616] dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold leading-normal uppercase text-lime-400'>Contact Me</h1>
      <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-2 lg:w-1/2'>
        <div className=' dark:text-slate-500 lg:flex gap-6'>
          <input type="hidden" name="access_key" value="f895a66e-2fa9-4076-9de3-71794814eff9" />
          <input type="text" name="name" className='w-full my-3 rounded-lg p-4 border-2 border-lime-800 border-glow text-xl bg-white dark:bg-slate-800 shadow-[0_0_8px_rgba(255,_255,_0,_0.6)] active:border-lime-500 active:shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]' placeholder='Enter Your Full Name' required />
          <input type="email" name="email" className='w-full my-3 rounded-lg p-4 border-2 border-lime-800 border-glow text-xl bg-white dark:bg-slate-800 shadow-[0_0_8px_rgba(255,_255,_0,_0.6)] active:border-lime-500 active:shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]' placeholder='Enter Your Email' required />
        </div>
        <textarea name="message" className='w-full my-3 rounded-lg bg-white dark:bg-slate-800 p-4 border-2 border-lime-800
        shadow-[0_0_8px_rgba(255,_255,_0,_0.6)] border-glow text-xl active:border-lime-500 active:shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]' placeholder='Enter Your Message...' cols="20" rows="10" required ></textarea>
        <button
          className='nano-button my-3 hover:shadow-[0_0_8px_rgba(255,_255,_0,_0.6)] text-black dark:text-white  border-2 hover:bg-lime-500 shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]  border-lime-800 
          hover:border-lime-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden border-glow'
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact