import facebook from 'img/footer/facebook.svg'
import inst from 'img/footer/inst.svg'
import youtube from 'img/footer/youtube.svg'
import logo from 'img/header/Logo.svg'

function App() {
	return (
		<div className='flex justify-between bg-[#e1ece5] text-left mt-20'>
			<div className='w-[1280px] m-auto flex justify-between mt-[23px]'>
				<div className='flex flex-col items-start'>
					<div className='flex items-center'>
						<img src={logo} alt='logo' />
						<h1 className='text-[#598d66] text-xl font-bold ml-2'>
							Ink. House
						</h1>
					</div>
					<div className='mt-[35px]'>
						<p className='text-[#2c2d35] text-xl font-medium '>
							+7 (999) 543-54-54
						</p>
						<p className='text-[#86918a] text-lg font-medium mt-2 mb-[23px]'>
							Мастерская
						</p>
					</div>
				</div>
				<div>
					<h1 className='text-[#2c2d35] text-xl font-medium'>Репродукции</h1>
					<p className='text-[#86918a] text-lg font-medium'>Франция</p>
					<p className='text-[#86918a] text-lg font-medium'>Германия</p>
					<p className='text-[#86918a] text-lg font-medium'>Англия</p>
				</div>
				<div>
					<h1 className='text-[#2c2d35] text-xl font-medium'>Новинки</h1>
					<p className='text-[#86918a] text-lg font-medium'>2021</p>
					<p className='text-[#86918a] text-lg font-medium'>2020</p>
				</div>
				<div>
					<h1 className='text-[#2c2d35] text-xl font-medium'>О нас</h1>
					<p className='text-[#86918a] text-lg font-medium'>Художники</p>
					<p className='text-[#86918a] text-lg font-medium'>Менеджеры</p>
				</div>
				<div className=''>
					<div className='flex'>
						<img src={facebook} className='mr-[30px]' alt='' />
						<img src={inst} className='mr-[30px]' alt='' />
						<img src={youtube} alt='' />
					</div>
					<p className='text-[#86918a] text-lg font-medium'>Ink. House ®</p>
					<p className='text-[#86918a] text-lg font-medium'>
						All rights reserved
					</p>
				</div>
			</div>
		</div>
	)
}

export default App
