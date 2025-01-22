import React, { useState, useEffect } from "react";
import Card from '@/components/Reproductions/Cards';
import first from "img/Reproductions/France/1.jpg";
import two from "img/Reproductions/France/2.jpg";
import three from "img/Reproductions/France/3.jpg";
import four from "img/Reproductions/France/4.jpg";
import five from "img/Reproductions/France/5.jpg";
import six from "img/Reproductions/France/6.jpg";

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
    artist: "Марсель Руссо",
    title: "Охота Амура",
    medium: "Холст, масло (50х80)",
    price: "14 500 руб",
  },
  {
    id: 2,
    image: two,
    artist: "Анри Селин",
    title: "Дама с собачкой",
    medium: "Акрил, бумага (50х80)",
    price: "16 500 руб",
  },
  {
    id: 3,
    image: three,
    artist: "Франсуа Дюпон",
    title: "Процедура",
    medium: "Цветная литография (40х60)",
    price: "20 000 руб",
  },
  {
    id: 4,
    image: four,
    artist: "Луи Детуш",
    title: "Роза",
    medium: "Бумага, акрил (50х80)",
    price: "12 000 руб",
  },
  {
    id: 5,
    image: five,
    artist: "Франсуа Дюпон",
    title: "Птичья трапеза",
    medium: "Цветная литография (40х60)",
    price: "22 500 руб",
  },
  {
    id: 6,
    image: six,
    artist: "Пьер Моранж",
    title: "Пейзаж с рыбой",
    medium: "Цветная литография (40х60)",
    price: "20 000 руб",
  },
];

function App() {
  const [cart, setCart] = useState<ArtItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: ArtItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center my-5">
        Наша коллекция
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {artItems.map((item) => (
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