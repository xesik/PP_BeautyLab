import { BackArrowIcon } from './BackArrowIcon';

export const Header = ({onBack}) => {
  return (
    <header className="flex justify-between items-center px-6 py-2.5">
      <button onClick={onBack} className="border-none bg-transparent" aria-label="Go back">
        <BackArrowIcon />
      </button>
      <h1 className="text-5xl text-center">
        <span className="text-orange-300">Beauty</span>
        <span className="text-fuchsia-700">Lab</span>
      </h1>
      <div className="h-0 bg-black rotate-45 w-[41px]" aria-hidden="true" />
    </header>
  );
};
