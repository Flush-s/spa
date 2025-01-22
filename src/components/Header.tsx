import logo from 'img/header/Logo.svg'
import bascket from 'img/header/bascket.svg'
function App() {
	return (
		<div className='flex justify-between w-[1280px] m-auto '>
			<div className='flex items-center'>
				<img src={logo} alt='logo' />
				<h1 className='text-[#598d66] text-xl font-bold ml-2'>Ink. House</h1>
			</div>
			<div className='flex items-center'>
				<a href='' className='mr-14 text-[#2c2d35] text-xl font-medium'>
					Репродукции
				</a>
				<a href='' className='mr-14 text-[#2c2d35] text-xl font-medium'>
					Новинки
				</a>
				<a href='' className='mr-14 text-[#2c2d35] text-xl font-medium'>
					О нас
				</a>
				<a href=''>
					<img src={bascket} alt='bascket' />
				</a>
			</div>
		</div>
	)
}

export default App
