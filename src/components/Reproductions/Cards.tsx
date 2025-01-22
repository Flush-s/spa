import type React from 'react';

interface ArtCardProps {
    image: string;
    artist: string;
    title: string;
    medium: string;
    price: string;
    onAddToCart: () => void;
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
        <div className='w-full max-w-[350px] h-auto relative bg-[#e1ece5] flex flex-col text-left mt-7 p-4'>
            <img
                src={image || '/placeholder.svg'}
                alt={title}
                className='w-full h-[250px] object-cover'
            />
            <p className='mt-2 text-[#86918a] text-base font-medium'>{artist}</p>
            <h1 className='mt-1 text-[#2c2d35] text-xl font-medium'>{title}</h1>
            <p className='mt-1 text-[#2c2d35] text-base font-medium'>{medium}</p>
            <p className='mt-3 text-[#598d66] text-xl font-medium'>{price}</p>
            <button
                className='mt-3 w-full h-[50px] border border-[#598d66] text-[#598d66] text-lg font-medium rounded-md'
                onClick={onAddToCart}
            >
                В корзину
            </button>
        </div>
    );
}

export default ArtCard;