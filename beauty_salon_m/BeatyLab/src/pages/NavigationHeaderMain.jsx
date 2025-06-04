import React from 'react';
import { Link } from "react-router-dom";

const NavigationHeader = () => {
  return (
    <nav className="flex flex-wrap gap-10 items-center max-w-full text-3xl text-center text-stone-700 w-[868px]">
      <a href="#services" className="self-stretch my-auto">
        Услуги
      </a>
      <a href="#booking" className="self-stretch my-auto">
        Запись
      </a>
      <h1 className="grow shrink self-stretch text-5xl text-black w-[181px] max-md:text-4xl">
        <span style={{ color: 'rgba(232,184,89,1)' }}>Beauty</span>{' '}
        <span style={{ color: 'rgba(145,81,163,1)' }}>Lab</span>
      </h1>
      <a href="#contacts" className="grow shrink self-stretch my-auto w-[91px]">
        Контакты
      </a>
      <Link to="/blog" className="self-stretch my-auto">Блог</Link>
    </nav>
  );
};

export default NavigationHeader;
