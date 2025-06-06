import { BackArrowIcon } from './BackArrowIcon';

export const Header = ({ onBack }) => {
  return (
    <header className="relative flex items-center justify-between px-6 py-2.5">
      {/* Кнопка назад */}
      <button onClick={onBack} className="z-10 border-none bg-transparent" aria-label="Go back">
        <BackArrowIcon />
      </button>

      {/* Абсолютно центрированный логотип */}
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-5xl text-center">
        <span className="text-orange-300">Beauty</span>
        <span className="text-fuchsia-700">Lab</span>
      </h1>

      {/* Просто заглушка справа (можно оставить пустой div) */}
      <div className="w-[60px] h-[60px]" aria-hidden="true" />
    </header>
  );
};
