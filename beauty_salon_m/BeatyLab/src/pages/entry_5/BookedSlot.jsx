const BookedSlot = ({ time, name, phone, onDelete, onEdit }) => {
  return (
    <article className="flex flex-col flex-1">
      <time className="self-center text-2xl">{time}</time>
      <div className="px-3.5 pt-2 pb-3.5 mt-5 bg-white border border-solid border-neutral-300">
        <p className="text-2xl">имя: {name}</p>
        <p className="mt-1.5 text-2xl">номер телефона: {phone}</p>
      </div>
      <div className="flex gap-5 justify-between mt-5 whitespace-nowrap">
        <button onClick={onEdit} className="px-6 py-1.5 bg-amber-300 rounded-md max-md:px-5 text-2xl">
          изменить
        </button>
        <button onClick={onDelete} className="flex shrink-0 bg-red-600 rounded-md h-[38px] w-[38px]" />
      </div>
    </article>
  );
};

export default BookedSlot;
