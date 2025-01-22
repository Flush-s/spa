import Collection from 'img/collection/Collection.png';
import Star from 'img/collection/Star.png';

function App() {
    return (
        <div className='relative text-center h-[600px] sm:h-[574px] mt-10'>
            <img
                src={Collection}
                className='w-full h-[600px] sm:h-[574px] absolute -z-10 object-cover'
                alt='Collection Background'
            />
            <div className='flex flex-col justify-center items-center h-full pt-[70px] px-4 sm:px-[20px] lg:px-[345px]'>
                <div className='flex items-center max-w-[521px]'>
                    <img src={Star} alt='Star Icon' className='h-8 sm:h-auto' />
                    <h1 className='text-[#f4f6f5] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-8 sm:leading-10 ml-2'>
                        Новая коллекция французских авторов
                    </h1>
                </div>
                <p className='text-white text-sm sm:text-base md:text-lg font-medium leading-[24px] sm:leading-[27px] w-full md:w-[540px] mt-5'>
                    Сложно сказать, почему акционеры крупнейших компаний призывают нас к
                    новым свершениям, которые, в свою очередь, должны быть заблокированы в
                    рамках своих собственных рациональных ограничений. Принимая во
                    внимание показатели успешности, граница обучения кадров предопределяет
                    высокую востребованность направлений прогрессивного развития.
                </p>
                <button className='mt-14 h-[45px] sm:h-[50px] md:h-[65px] px-4 md:px-[60px] w-full md:w-[257px] py-5 bg-[#eedb6d] justify-center items-center gap-1.5 inline-flex text-[#2c2d35] text-sm sm:text-lg md:text-xl font-medium'>
                    Ознакомиться
                </button>
            </div>
        </div>
    );
}

export default App;