import React, { useEffect, useState } from 'react';
import light from '../../assets/light.png';
import dark from '../../assets/dark.png';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function Navbar() {
    const [click, setClick] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const toggleTheme = (event) => {
        setDarkMode(event.target.checked);
        if (event.target.checked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        document.documentElement.classList.add('dark'); 
    }, []);

    const handleClick = () => setClick(!click);

    const navItems = ['Home', 'About', 'Education', 'Techstack', 'Projects', 'Contact'];

    const mobileMenuContent = (
        <div className={`lg:hidden fixed top-0 left-0 right-0 bg-[#fafafa] dark:bg-[#161616] transition duration-300 ease-in-out ${click ? 'block' : 'hidden'} z-50`}>
            <ul className='text-center text-xl p-6'>
                {navItems.map((item, index) => (
                    <Link key={index} to={item} spy={true} smooth={true} onClick={handleClick}>
                        <li className='my-4 py-4 border-b border-slate-800 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded'>
                            {item}
                        </li>
                    </Link>
                ))}
                <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            onChange={toggleTheme}
                            checked={darkMode}
                        />
                        <div className="w-[49px] h-6 bg-slate-500 dark:bg-slate-400 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 dark:after:bg-gray-700 after:rounded-full after:h-5 after:w-5 after:transition-all">
                            <img src={light} alt="light" className="absolute w-4 z-10 top-[2px] left-[2px]" />
                            <img src={dark} alt="dark" className="absolute w-4 z-10 top-[2px] right-[2px]" />
                        </div>
                    </label>
                </div>
            </ul>
        </div>
    );

    return (
        <nav className='sticky top-0 bg-[#fafafa] text-black dark:bg-[#161616] dark:text-white shadow-md z-40'>
            <div className='h-16 flex justify-between z-50 lg:py-5 pl-6 pr-4 py-3 border-b border-slate-800 dark:border-slate-600'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold text-lime-400 dark:text-lime-400'>
                        <Link to='Home' spy={true} smooth={true}>Mehdi Abidi</Link>
                    </span>
                </div>
                <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
                    <ul className='flex gap-8 text-[18px]'>
                        {navItems.map((item, index) => (
                            <Link key={index} to={item} spy={true} smooth={true}>
                                <li className='transition hover:text-lime-400 dark:hover:text-lime-400 border-b-2 border-transparent dark:border-transparent hover:border-lime-400 dark:hover:border-lime-400 cursor-pointer'>
                                    {item}
                                </li>
                            </Link>
                        ))}
                        <div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    onChange={toggleTheme}
                                    checked={darkMode}
                                />
                                <div className="w-[49px] h-6 bg-slate-500 dark:bg-slate-400 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 dark:after:bg-gray-700 after:rounded-full after:h-5 after:w-5 after:transition-all">
                                    <img src={light} alt="light" className="absolute w-4 z-10 top-[2px] left-[2px]" />
                                    <img src={dark} alt="dark" className="absolute w-4 z-10 top-[2px] right-[2px]" />
                                </div>
                            </label>
                        </div>
                    </ul>
                </div>
                <button
                    className='block md:hidden transition text-2xl'
                    onClick={handleClick}
                >
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
                {mobileMenuContent}
            </div>
        </nav>
    );
}

export default Navbar;
