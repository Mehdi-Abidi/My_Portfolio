import React, { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import img from '../../assets/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const social = [
    {
      link: 'https://www.linkedin.com/in/mehdiabidii/',
      icon: <FaLinkedinIn />,
    },
    {
      link: 'https://github.com/Mehdi-Abidi',
      icon: <AiFillGithub />,
    },
    {
      link: 'https://twitter.com/',
      icon: <FaXTwitter />,
    },
    {
      link: 'https://www.instagram.com/syed_mehdi_90',
      icon: <FaInstagram />,
    }
  ];

  return (
    <div id='Home' className='bg-[#fafafa] text-black dark:bg-[#161616] dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal uppercase'>
          <span className='text-lime-400'>My Portfolio</span>
        </h1>
        <p data-aos='fade-left'>
          I'm a Computer Science student passionate about AI, web development, and technologies like React, Next.js, and Tailwind CSS. I'm eager to contribute to innovative projects and collaborate with forward-thinking teams. Check out my work to see how I blend creativity with technology!
        </p>
        <div data-aos='fade-up' className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              {social.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={social.link}
                  className='text-lime-400 rounded-full p-2 transition-shadow 
                  duration-300 dark:hover:border-lime-500 dark:hover:shadow-[0_0_8px_rgba(255,_255,_0,_0.3)]
                  hover:border-lime-800 hover:shadow-[0_0_8px_rgba(255,_255,_0,_1)]'
                >
                  <div className='text-[28px]'>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos='fade-up'
        src={img}
        width={290}
        height={290}
        alt=""
        style={{
          borderRadius: '50%',
          border: '2px solid #a3e635',
          padding: '1px',
          boxShadow: '0 0 15px rgba(163, 230, 53, 0.6)',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className='hover:shadow-xl'
      />
    </div>
  );
}

export default Home;
