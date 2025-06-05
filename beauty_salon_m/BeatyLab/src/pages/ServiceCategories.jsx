import React from 'react';

const ServiceCategories = ({ categories, onSelect, selected }) => {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-wrap gap-10 px-4 py-3 mt-44 max-w-full text-3xl font-light text-center whitespace-nowrap bg-stone-300 bg-opacity-10 rounded-[30px] text-stone-700 w-[757px] max-md:mt-10">
        <button onClick={() => onSelect("Макияж")} className="grow shrink-0 px-16 py-1.5 bg-white rounded-2xl basis-0 w-fit max-md:px-5">
          Макияж
        </button>
        <button onClick={() => onSelect("Волосы")} className="grow shrink-0 px-16 py-1.5 bg-white rounded-2xl basis-0 w-fit max-md:px-5">
          Волосы
        </button>
      </div>
      <div className="flex flex-wrap gap-5 justify-between px-4 py-3.5 max-w-full text-3xl font-light text-center bg-stone-300 bg-opacity-10 rounded-[30px] text-stone-700 w-[1050px]">
        <button onClick={() => onSelect("Брови")} className="px-16 py-1.5 whitespace-nowrap bg-white rounded-2xl max-md:px-5">
          Косметология
        </button>
        <button onClick={() => onSelect("Маникюр и педикюр")} className="px-8 py-1.5 bg-white rounded-2xl max-md:px-5">
  Маникюр и педикюр
</button>
        <button onClick={() => onSelect("Стрижка")} className="px-16 py-1.5 whitespace-nowrap bg-white rounded-2xl w-[300px] max-md:px-5">
  Стрижка
</button>
      </div>
    </section>
  );
};

export default ServiceCategories;
