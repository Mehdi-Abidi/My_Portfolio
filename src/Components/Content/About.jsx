import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/profile.jpg'
import Resume from '../../assets/Resume.pdf'


function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-[#fafafa] text-black dark:bg-[#161616] dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} 
      alt="" className='rounded border-2 p-1 
      border-lime-400 transition-shadow duration-300 shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-lime-400 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left'>
  Hi, I'm Mehdi, a front-end developer currently pursuing a Bachelor's in Computer Science. I specialize in building innovative web applications and have hands-on experience with HTML, CSS, JavaScript, React, SQL, and Git. I’m also skilled in Next.js, Vite, Bootstrap, Tailwind CSS, React Router, Context API, and use tools like VS Code and Linux.
  <br />
  Passionate about AI and web development, I’m eager to apply my skills to exciting projects and collaborate with forward-thinking teams.
</p>

        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank">
            <div className='nano-button shadow-xl hover:shadow-lime-400 border-2 hover:bg-lime-600 border-lime-600 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About