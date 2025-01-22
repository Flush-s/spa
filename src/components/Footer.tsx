import facebook from 'img/footer/facebook.svg';
import inst from 'img/footer/inst.svg';
import youtube from 'img/footer/youtube.svg';
import logo from 'img/header/Logo.svg';

function App() {
    return (
        <div className='flex flex-col sm:flex-row justify-between bg-[#e1ece5] text-left mt-20'>
            <div className='w-full sm:w-[1280px] m-auto flex flex-col sm:flex-row justify-between mt-[23px]'>
                <div className='flex flex-col items-start mb-5 sm:mb-0'>
                    <div className='flex items-center'>
                        <img src={logo} alt='logo' className='h-10' />
                        <h1 className='text-[#598d66] text-xl font-bold ml-2'>Ink. House</h1>
                    </div>
                    <div className='mt-[35px]'>
                        <p className='text-[#2c2d35] text-lg sm:text-xl font-medium'>+7 (999) 543-54-54</p>
                        <p className='text-[#86918a] text-base sm:text-lg font-medium mt-2 mb-[23px]'>Мастерская</p>
                    </div>
                </div>
                <div className='flex flex-col mb-5 sm:mb-0'>
                    <h1 className='text-[#2c2d35] text-lg sm:text-xl font-medium'>Репродукции</h1>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>Франция</p>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>Германия</p>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>Англия</p>
                </div>
                <div className='flex flex-col mb-5 sm:mb-0'>
                    <h1 className='text-[#2c2d35] text-lg sm:text-xl font-medium'>Новинки</h1>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>2021</p>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>2020</p>
                </div>
                <div className='flex flex-col mb-5 sm:mb-0'>
                    <h1 className='text-[#2c2d35] text-lg sm:text-xl font-medium'>О нас</h1>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>Художники</p>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>Менеджеры</p>
                </div>
                <div className='flex flex-col items-start'>
                    <div className='flex mb-2'>
                        <img src={facebook} className='mr-[15px] h-6 w-6' alt='Facebook' />
                        <img src={inst} className='mr-[15px] h-6 w-6' alt='Instagram' />
                        <img src={youtube} className='h-6 w-6' alt='YouTube' />
                    </div>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>Ink. House ®</p>
                    <p className='text-[#86918a] text-base sm:text-lg font-medium'>All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default App;