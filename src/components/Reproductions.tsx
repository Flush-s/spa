import England from '@/components/Reproductions/England'
import France from '@/components/Reproductions/France'
import Germany from '@/components/Reproductions/Germany'
import type React from 'react'
import { useState } from 'react'

const Reproductions: React.FC = () => {
	const [selectedCountry, setSelectedCountry] = useState<
		'France' | 'Germany' | 'England'
	>('France')

	const renderSelectedCountry = () => {
		switch (selectedCountry) {
			case 'France':
				return <France />
			case 'Germany':
				return <Germany />
			case 'England':
				return <England />
			default:
				return null
		}
	}

	return (
		<div className='w-[1280px] m-auto'>
			<div className='flex justify-between items-center'>
				<h1 className='text-[#2c2d35] text-[40px] font-medium leading-[44px]'>
					Репродукции
				</h1>
				<div className='flex gap-2.5'>
					<button
						className={`text-[#2c2d35] text-xl font-medium h-[43px] px-5 py-2.5 rounded-[20px] inline-flex items-center justify-center ${
							selectedCountry === 'France'
								? 'bg-[#376b44] text-[#f4f6f5]'
								: 'bg-[#d4e8d9]'
						}`}
						onClick={() => setSelectedCountry('France')}
					>
						Франция
					</button>
					<button
						className={`text-[#2c2d35] text-xl font-medium h-[43px] px-5 py-2.5 rounded-[20px] inline-flex items-center justify-center ${
							selectedCountry === 'Germany'
								? 'bg-[#376b44] text-[#f4f6f5]'
								: 'bg-[#d4e8d9]'
						}`}
						onClick={() => setSelectedCountry('Germany')}
					>
						Германия
					</button>
					<button
						className={`text-[#2c2d35] text-xl font-medium h-[43px] px-5 py-2.5 rounded-[20px] inline-flex items-center justify-center ${
							selectedCountry === 'England'
								? 'bg-[#376b44] text-[#f4f6f5]'
								: 'bg-[#d4e8d9]'
						}`}
						onClick={() => setSelectedCountry('England')}
					>
						Англия
					</button>
				</div>
			</div>
			{renderSelectedCountry()}
		</div>
	)
}

export default Reproductions
