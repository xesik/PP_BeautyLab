const AvailableSlot = ({ time, onAdd }) => {
  return (
    <article className="flex flex-col flex-1 items-center whitespace-nowrap">
      <time className="text-2xl">{time}</time>
      <div className="self-stretch px-14 py-14 mt-5 bg-white border border-solid border-neutral-300 max-md:px-5 text-2xl text-center">
        Свободно
      </div>
      <button
      onClick={() => onAdd(time)}
       className="px-7 py-1.5 mt-5 max-w-full bg-green-300 rounded-md w-[158px] max-md:px-5 text-2xl">
        записать
      </button>
    </article>
  );
};

export default AvailableSlot;
