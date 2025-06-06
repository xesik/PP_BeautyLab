export const AppointmentDetails = ({ datetime, service, master, price }) => {
  // Преобразование даты в формат "2 февраля 12:12"
  const formatDatetime = (datetimeStr) => {
    try {
      const [datePart, timePart] = datetimeStr.split(" ");
      const [year, month, day] = datePart.split("-");
      const monthsRu = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
      ];
      const formatted = `${parseInt(day)} ${monthsRu[parseInt(month) - 1]} ${timePart}`;
      return formatted;
    } catch (e) {
      return datetimeStr; // если формат неожиданный, просто вернуть как есть
    }
  };

  return (
    <section className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-lg">
      <div className="p-6 bg-stone-300 bg-opacity-30">
        <h2 className="text-3xl font-mb text-stone-800 mb-3">Детали записи</h2>
        <ul className="text-2xl text-stone-700 space-y-2">
          <li>
            <span className="font-medium">Когда:</span> {formatDatetime(datetime)}
          </li>
          <li>
            <span className="font-medium">Услуга:</span> {typeof service === "object" ? service.name : service}
          </li>
          <li>
            <span className="font-medium">Мастер:</span> {master}
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between px-6 py-5 bg-orange-200 text-2xl">
        <h3 className="font-medium text-stone-800">Общая сумма</h3>
        <span className="font-mb text-stone-800">{price} ₽</span>
      </div>
    </section>
  );
};
