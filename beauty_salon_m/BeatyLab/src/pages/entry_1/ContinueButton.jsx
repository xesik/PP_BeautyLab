import React from 'react';

const ContinueButton = () => {
  return (
    <button
      className="self-center px-16 py-4 mt-56 max-w-full text-2xl text-center text-black whitespace-nowrap bg-white rounded-3xl border border-solid border-neutral-400 w-[252px] max-md:px-5 max-md:mt-10 hover:bg-gray-50 transition-colors flex items-center justify-center"
      aria-label="Продолжить"
    >
      Продолжить
    </button>
  );
};

export default ContinueButton;
