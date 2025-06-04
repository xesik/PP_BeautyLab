import React from 'react';

const AppointmentDetail = ({ imageSrc, title, description }) => {
  return (
    <div className="flex gap-7">
      <img
        src={imageSrc}
        alt=""
        className="object-contain shrink-0 rounded-full aspect-square w-[60px]"
      />
      <div className="flex flex-col self-start">
        <h2 className="self-start text-3xl text-center text-neutral-700">
          {title}
        </h2>
        <p className="mt-2 text-xl font-light text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppointmentDetail;
