"use client";
import React from 'react';
import AppointmentHeader from './AppointmentHeader';
import AppointmentDetail from './AppointmentDetail';
import ContinueButton from './ContinueButton';

const BeautyLabConfirmation = ({ master, service, datetime, onSelectStep, onNext, error, setError }) => {
  return (
    <article className="w-full max-w-[560px]">
      <div className="flex flex-col pt-20 pb-36 w-full bg-orange-50 max-md:pb-24 max-md:max-w-full">
        <AppointmentHeader />

        <div className="flex flex-col px-8 mt-40 mb-0 w-full max-md:px-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">

          {/* Мастер */}
          <section
            className="flex flex-wrap gap-5 justify-between w-full cursor-pointer max-md:max-w-full"
            onClick={() => onSelectStep(1)}
          >
            <AppointmentDetail
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2f0177349bc1abc96aeb20c7051e65d64b0376"
              title="Мастер"
              description={master || "Не выбран"}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aef58dbb384b15b091ea5f6369ced721e671c35d"
              alt=""
              className="object-contain shrink-0 my-auto w-4 aspect-[0.55]"
            />
          </section>

          {/* Услуга */}
          <section
            className="flex flex-wrap gap-5 justify-between mt-20 w-full cursor-pointer max-md:mt-10 max-md:max-w-full"
            onClick={() => onSelectStep(2)}
          >
            <AppointmentDetail
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bf6e4936c2158a3661b86e6faae471c64d3bd488"
              title="Услуга"
              description={service || "Не выбрана"}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aef58dbb384b15b091ea5f6369ced721e671c35d"
              alt=""
              className="object-contain shrink-0 my-auto w-4 aspect-[0.55]"
            />
          </section>

          {/* Дата и время */}
          <section
            className="flex flex-wrap gap-5 justify-between mt-20 w-full cursor-pointer max-md:mt-10 max-md:max-w-full"
            onClick={() => onSelectStep(3)}
          >
            <AppointmentDetail
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/672b36c4075aa029ee78a3c8f87f36dd811c0c23"
              title="Дата и время"
              description={datetime || "Не выбрана"}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aef58dbb384b15b091ea5f6369ced721e671c35d"
              alt=""
              className="object-contain shrink-0 my-auto w-4 aspect-[0.55]"
            />
          </section>

          {/* Кнопка продолжить */}
          <div className="flex flex-col" onClick={onNext}>
            <ContinueButton />
            {error && (
              <p className="mt-4 text-center text-red-600 text-lg">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BeautyLabConfirmation;
