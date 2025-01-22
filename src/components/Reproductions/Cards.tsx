import type React from 'react'

interface ArtCardProps {
	image: string
	artist: string
	title: string
	medium: string
	price: string
	onAddToCart: () => void
}

const ArtCard: React.FC<ArtCardProps> = ({
	image,
	artist,
	title,
	medium,
	price,
	onAddToCart,
}) => {
	return (
		<div className='xl:w-[350px] xl:h-[730px] relative bg-[#e1ece5] flex flex-col text-left mt-7 lg:w-[300px]'>
			<img
				src={image || '/placeholder.svg'}
				alt={title}
				className='w-[310px] h-[422px] mt-5 ml-5'
			/>
			<p className='ml-5 mt-5 text-[#86918a] text-lg font-medium'>{artist}</p>
			<h1 className='ml-5 mt-2 text-[#2c2d35] text-3xl font-medium'>{title}</h1>
			<p className='ml-5 mt-2 text-[#2c2d35] text-lg font-medium'>{medium}</p>
			<p className='ml-5 mt-7 text-[#598d66] text-2xl font-medium'>{price}</p>
			<button
				className='ml-5 mt-5 xl:w-[310px] xl:h-[65px]  xl:px-[60px] xl:py-5
				 border border-[#598d66] text-[#598d66] text-xl font-medium'
				onClick={onAddToCart}
			>
				В корзину
			</button>
		</div>
	)
}

export default ArtCard
