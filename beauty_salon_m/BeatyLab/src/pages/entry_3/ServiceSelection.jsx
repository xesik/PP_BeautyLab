"use client";

import ChevronIcon from './ChevronIcon';
import ServiceCategory from './ServiceCategory';
import ServiceItem from './ServiceItem';

const ServiceSelection = () => {
  return (
    <main className="w-full bg-orange-50 min-h-[screen]">
      <header className="flex justify-end p-7">
        <div className="h-0.5 bg-black w-[41px]" />
      </header>

      <section className="flex flex-col items-center">
        <h1 className="mb-20 text-3xl font-light text-center">
          Выберите услугу
        </h1>

        <div className="w-full">
          <ServiceCategory title="Макияж" />

          <ServiceCategory title="Стрижка" isExpanded={true}>
            <div className="w-full bg-white">
              <ServiceItem
                title="Стрижка короткая"
                price="700-1000 Р"
                duration="1 ч."
              />
              <ServiceItem
                title="Стрижка длинная"
                price="700-1000 Р"
                duration="1 ч."
              />
            </div>
          </ServiceCategory>

          <ServiceCategory title="Волосы" />
          <ServiceCategory title="Косметология" />
          <ServiceCategory title="Маникюр и педикюр" />
        </div>
      </section>
    </main>
  );
};

export default ServiceSelection;
