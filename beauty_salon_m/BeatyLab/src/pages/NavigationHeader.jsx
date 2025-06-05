import React from 'react';
import { Link } from "react-router-dom";

const NavigationHeader = ({ setOpenBooking }) => {
  return (
    <header className="px-6 pt-6">
      <nav className="flex flex-wrap gap-20 justify-center items-center text-2xl text-center text-stone-700">
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
        <a href="#about" className="hover:text-black transition">О нас</a>
        <Link to="/admin" className="hover:text-black transition">Админ</Link>
      </nav>
    </header>
  );
};

export default NavigationHeader;