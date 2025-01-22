import Card from '@/components/Reproductions/Cards'
import first from 'img/Reproductions/England/1.jpg'
import two from 'img/Reproductions/England/2.jpg'
import three from 'img/Reproductions/England/3.jpg'
import four from 'img/Reproductions/England/4.jpg'
import five from 'img/Reproductions/England/5.jpg'
import six from 'img/Reproductions/England/6.jpg'
import { useEffect, useState } from 'react'

interface ArtItem {
	id: number
	image: string
	artist: string
	title: string
	medium: string
	price: string
}

const artItems: ArtItem[] = [
	{
		id: 1,
		image: first,
		artist: 'Пол Смит',
		title: 'Дикий зверь',
		medium: 'Акварель, бумага (50х80) ',
		price: '19 500 руб',
	},
	{
		id: 2,
		image: two,
		artist: 'Джон Уайт',
		title: 'Скалистый берег',
		medium: 'Цветная литография (40х60)',
		price: '17 500 руб',
	},
	{
		id: 3,
		image: three,
		artist: 'Джим Уотсон',
		title: 'Река и горы',
		medium: 'Акварель, бумага (50х80)',
		price: '20 500 руб',
	},
	{
		id: 4,
		image: four,
		artist: 'Юджин Зиллион',
		title: 'Белый попугай',
		medium: 'Цветная литография (40х60) ',
		price: '15 500 руб',
	},
	{
		id: 5,
		image: five,
		artist: 'Эрик Гиллман',
		title: 'Ночная рыба',
		medium: 'Бумага, акрил (50х80) ',
		price: '12 500 руб',
	},
	{
		id: 6,
		image: six,
		artist: 'Альфред Барр',
		title: 'Рыжий кот',
		medium: 'Цветная литография (40х60)',
		price: '20 000 руб',
	},
]

function App() {
	const [cart, setCart] = useState<ArtItem[]>([])

	useEffect(() => {
		const savedCart = localStorage.getItem('cart')
		if (savedCart) {
			setCart(JSON.parse(savedCart))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const addToCart = (item: ArtItem) => {
		setCart(prevCart => [...prevCart, item])
	}

	return (
		<div className='container mx-auto px-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
				{artItems.map(item => (
					<Card
						key={item.id}
						image={item.image}
						artist={item.artist}
						title={item.title}
						medium={item.medium}
						price={item.price}
						onAddToCart={() => addToCart(item)}
					/>
				))}
			</div>
		</div>
	)
}

export default App
