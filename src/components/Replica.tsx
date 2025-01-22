import bird from 'img/replica/bird.svg';

function App() {
    return (
        <div className='flex flex-col sm:flex-row items-center mb-[70px] max-w-[1280px] mx-auto px-4'>
            <img src={bird} alt='bird' className='w-full sm:w-[540px] mb-5 sm:mb-0 object-cover' />
            <div className='w-full sm:w-[540px] text-left'>
                <h1 className='text-[#2c2d35] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[66px] mb-5'>
                    Реплики картин от <span className='text-[#598d66]'>Ink. House</span>
                </h1>
                <p className='text-[#86918a] text-sm sm:text-base md:text-lg font-medium leading-[20px] sm:leading-[24px] md:leading-[27px] mb-14'>
                    Высокое качество отрисовки на плотной бумаге или льняном холсте.
                    Редкие произведения, доступные цены.
                </p>
                <button className='h-[40px] sm:h-[50px] md:h-[65px] px-3 sm:px-4 md:px-[60px] py-2 sm:py-5 border border-[#598d66] justify-center items-center gap-1.5 inline-flex text-[#598d66] text-sm sm:text-lg md:text-xl font-medium'>
                    Продукция
                </button>
            </div>
        </div>
    );
}

export default App;