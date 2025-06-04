import React from 'react';
import { Link } from "react-router-dom";

const NavigationHeader = ({ setOpenBooking }) => {
  return (
    <nav className="flex flex-wrap gap-10 items-center self-center max-w-full text-3xl text-center text-stone-700 w-[868px]">
      <a href="#services" className="self-stretch my-auto hover:text-stone-900">
        Услуги
      </a>
      <button
        type="button"
        onClick={() => setOpenBooking(true)}
        className="self-stretch my-auto hover:text-stone-900 bg-transparent border-none p-0 cursor-pointer"
      >
        Запись
      </button>
      <h1 className="grow shrink self-stretch text-5xl text-black w-[181px] max-md:text-4xl">
        <span style={{color: 'rgba(232,184,89,1)'}}>Beauty</span>{' '}
        <span style={{color: 'rgba(145,81,163,1)'}}>Lab</span>
      </h1>
      <a href="#contacts" className="grow shrink self-stretch my-auto w-[91px] hover:text-stone-900">
        Контакты
      </a>
      <a href="#blog" className="self-stretch my-auto hover:text-stone-900">
        Блог
      </a>
      <Link to="/admin" className="self-stretch my-auto">Админ</Link>
    </nav>
  );
};

export default NavigationHeader;
