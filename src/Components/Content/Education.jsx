import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img9 from '../../assets/image9.png';
import img10 from '../../assets/img10.jpeg';
import img11 from '../../assets/img11.png';

function Education() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const educationData = [
        {
            school: 'S.M.Public Academy No.4',
            degree: 'Matriculation',
            year: '2020',
            img: img9,
            description: "Achieved 3rd position in Karachi's Matriculation Examination (CS department), demonstrating exceptional academic performance and a solid foundation in computer science."
        },
        {
            school: 'Adamjee GOVT Science College',
            degree: 'Intermediate',
            year: '2022',
            img: img10,
            description: 'Secured a top 20 position city-wide in Karachi for Pre-Engineering during intermediate studies.',
        },
        {
            school: 'FAST-NUCES',
            degree: 'Bachelors of Science in Computer Science',
            year: '2022 - Present',
            img: img11,
            description: 'Pursuing a Bachelor of Science in Computer Science at FAST-NUCES, expected to graduate in 2026.',
        },
    ];

    return (
        <div id='Education' className='bg-[#fafafa] text-black dark:bg-[#161616] dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center'>
            <h1 data-aos='fade-right' className='text-[52px] font-semibold leading-normal uppercase text-lime-500'>My Education</h1>
            
            <div className='flex flex-col gap-8 lg:w-2/3 mt-10'>
                {educationData.map((education, index) => (
                    <div key={index} data-aos='fade-up' className='flex flex-col lg:flex-row items-center lg:items-start bg-white dark:bg-slate-800 p-6  border-2 border-lime-8=500 border-lime-800 
                    shadow-[0_0_8px_rgba(255,_255,_0,_0.6)] rounded-lg transition-shadow duration-300 hover:border-lime-500 hover:shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]'>
                        <div className='flex-1'>
                            <h2 className='text-2xl font-semibold text-lime-400'>{education.degree}</h2>
                            <p className='text-lg text-black dark:text-white'>{education.school}</p>
                            <p className='text-md text-slate-500 dark:text-slate-400'>{education.year}</p>
                            <p className='mt-4 text-lg text-black dark:text-white'>{education.description}</p>
                        </div>
                        <div className='lg:ml-8 mt-4 lg:mt-0'>
                            <img
                                src={education.img}
                                alt={`${education.school} Image`}
                                className='w-32 h-32 rounded-full border-4 border-lime-500 transition-shadow duration-300 p-2 shadow-[0_0_8px_rgba(255,_255,_0,_0.6)]'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
