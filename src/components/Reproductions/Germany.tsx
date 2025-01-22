import Card from '@/components/Reproductions/Cards';
import first from 'img/Reproductions/Germany/1.jpg';
import two from 'img/Reproductions/Germany/2.jpg';
import three from 'img/Reproductions/Germany/3.jpg';
import four from 'img/Reproductions/Germany/4.jpg';
import five from 'img/Reproductions/Germany/5.jpg';
import six from 'img/Reproductions/Germany/6.jpg';
import { useEffect, useState } from 'react';

interface ArtItem {
	id: number;
	image: string;
	artist: string;
	title: string;
	medium: string;
	price: string;
}

const artItems: ArtItem[] = [
	{
		id: 1,
		image: first,
		artist: 'Курт Вернер',
		title: 'Над городом',
		medium: 'Цветная литография (40х60)',
		price: '16 000 руб',
	},
	{
		id: 2,
		image: two,
		artist: 'Макс Рихтер',
		title: 'Птенцы',
		medium: 'Холст, масло (50х80)',
		price: '14 500 руб',
	},
	{
		id: 3,
		image: three,
		artist: 'Мартин Майер',
		title: 'Среди листьев',
		medium: 'Цветная литография (40х60)',
		price: '20 000 руб',
	},
	{
		id: 4,
		image: four,
		artist: 'Герман Беккер',
		title: 'Яркая птица',
		medium: 'Цветная литография (40х60)',
		price: '13 000 руб',
	},
	{
		id: 5,
		image: five,
		artist: 'Вульф Бауэр',
		title: 'Дятлы',
		medium: 'Бумага, акрил (50х80)',
		price: '20 000 руб',
	},
	{
		id: 6,
		image: six,
		artist: 'Вальтер Хартманн',
		title: 'Большие воды',
		medium: 'Бумага, акрил (50х80)',
		price: '23 000 руб',
	},
];

function App() {
	const [cart, setCart] = useState<ArtItem[]>([]);

	useEffect(() => {
		const savedCart = localStorage.getItem('cart');
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = (item: ArtItem) => {
		setCart(prevCart => [...prevCart, item]);
	};

	return (
		<div className='container mx-auto px-2 sm:px-4'>
			<h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center my-5'>
				Наша коллекция
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
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
	);
}

export default App;