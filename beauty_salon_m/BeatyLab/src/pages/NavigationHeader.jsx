import React from 'react';
import { Link } from "react-router-dom";

const NavigationHeader = ({ setOpenBooking }) => {
  return (
    <header className="relative z-10">
  {/* Левый верхний угол — немного выходит за границу */}
  <img
    src="/left.png"
    alt="left-decoration"
    className="fixed left-[-60px] top-[-10px] h-[160px] w-auto object-contain z-0 pointer-events-none"
  />

  {/* Правый верхний угол — чуть ниже и правее */}
  <img
    src="/right.png"
    alt="right-decoration"
    className="fixed right-[-50px] top-[-10px] h-[160px] w-auto object-contain z-0 pointer-events-none"
  />

  {/* Навигация поверх */}
  <nav className="relative z-10 flex flex-wrap gap-20 justify-center items-center text-2xl text-center text-stone-700">
    <Link to="/" className="hover:text-black transition">Услуги</Link>
    <button
      type="button"
      onClick={() => setOpenBooking(true)}
      className="hover:text-black transition bg-transparent border-none p-0 cursor-pointer"
    >
      Запись
    </button>
    <h1 className="text-4xl font-serif">
      <span className="text-orange-300">Beauty</span>{' '}
      <span className="text-fuchsia-700">Lab</span>
    </h1>
    <Link to="/blog" className="hover:text-black transition">Блог</Link>
    <a href="#about" className="hover:text-black transition">Контакты</a>
  </nav>
</header>

  );
};

export default NavigationHeader;