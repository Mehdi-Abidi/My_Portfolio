import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TechStackList from '../../All_Lists/TechStackList'

function Techstack() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='Techstack' className='bg-[#fafafa] text-black dark:bg-[#161616] dark:text-white p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[35px] md:text-[44px] font-semibold mb-20 leading-normal uppercase text-lime-400'>Tech Stack</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>

        {TechStackList.map((tech, index) => (
          <h2 key={index} data-aos={tech.id % 2 === 0 ? 'fade-down' : 'fade-up'} className='text-[26px] flex items-center justify-center font-semibold text-lime-400 bg-slate-800 rounded-3xl h-36 w-44 border-2 border-lime-800 border-glow
          shadow-[0_0_8px_rgba(255,_255,_0,_0.6)] hover:border-lime-500 hover:shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]'>
            <img className='h-28' src={tech.image} alt="" />
          </h2>
        ))}

      </div>
    </div>
  )
}

export default Techstack