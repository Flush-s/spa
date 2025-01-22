import Collection from 'img/collection/Collection.png'
import Star from 'img/collection/Star.png'
function App() {
	return (
		<div className='my-20 h-[574px] relative text-left'>
			<img
				src={Collection}
				className='w-full h-[574px]  absolute -z-10'
				alt=''
			/>
			<div className='pt-[70px] pl-[345px]  '>
				<div className='flex items-center max-w-[521px]'>
					<img src={Star} alt='' />
					<h1 className='text-[#f4f6f5] text-[40px] font-medium leading-10'>
						Новая коллекция французских авторов
					</h1>
				</div>
				<p className='text-white text-lg font-medium leading-[27px] w-[540px] mt-5'>
					Сложно сказать, почему акционеры крупнейших компаний призывают нас к
					новым свершениям, которые, в свою очередь, должны быть заблокированы в
					рамках своих собственных рациональных ограничений. Принимая во
					внимание показатели успешности, граница обучения кадров предопределяет
					высокую востребованность направлений прогрессивного развития.
				</p>
				<button className='mt-14 h-[65px] px-[60px] w-[257px] py-5 bg-[#eedb6d] justify-center items-center gap-1.5 inline-flex text-[#2c2d35] text-xl font-medium'>
					Ознакомиться
				</button>
			</div>
		</div>
	)
}

export default App
