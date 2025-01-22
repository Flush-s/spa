import { useState } from 'react';
import logo from 'img/header/Logo.svg';
import bascket from 'img/header/bascket.svg';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-[1280px] mx-auto px-4 py-4'>
            <div className='flex items-center mb-4 md:mb-0'>
                <img src={logo} alt='logo' className='h-10' />
                <h1 className='text-[#598d66] text-2xl font-bold ml-2'>Ink. House</h1>
            </div>
            <div className='flex items-center md:hidden'>
                <button onClick={toggleMenu} className='text-[#2c2d35] focus:outline-none'>
                    <svg
                        className='w-8 h-8'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                    </svg>
                </button>
            </div>
            <div className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} absolute md:static bg-white md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 md:relative`}>
                <button onClick={closeMenu} className='absolute top-4 right-4 md:hidden'>
                    <svg
                        className='w-8 h-8'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </button>
                <a href='' className='text-[#2c2d35] text-lg md:text-xl font-medium mb-2 md:mb-0'>
                    Репродукции
                </a>
                <a href='' className='text-[#2c2d35] text-lg md:text-xl font-medium mb-2 md:mb-0'>
                    Новинки
                </a>
                <a href='' className='text-[#2c2d35] text-lg md:text-xl font-medium mb-2 md:mb-0'>
                    О нас
                </a>
                <a href=''>
                    <img src={bascket} alt='bascket' className='h-8 md:h-10' />
                </a>
            </div>
        </div>
    );
}

export default App;