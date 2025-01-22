import bird from 'img/replica/bird.svg'
function App() {
	return (
		<div className='flex items-center mb-[70px] w-[1280px] m-auto'>
			<img src={bird} alt='bird' />
			<div className='w-[540px] text-left'>
				<h1 className='text-[#2c2d35] text-6xl font-medium  leading-[66px] mb-5'>
					Реплики картин от <span className='text-[#598d66]'>Ink. House</span>
				</h1>
				<p className='text-[#86918a] text-lg font-medium leading-[27px] mb-14'>
					Высокое качество отрисовки на плотной бумаге или льняном холсте.
					Редкие произведения, доступные цены.
				</p>
				<button className='h-[65px] px-[60px] py-5 border border-[#598d66] justify-center items-center gap-1.5 inline-fle text-[#598d66] text-xl font-medium'>
					Продукция
				</button>
			</div>
		</div>
	)
}

export default App
