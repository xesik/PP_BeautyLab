export const AppointmentDetails = ({ datetime, service, master, price }) => {
  return (
    <section className="w-full">
      <div className="p-4 w-full bg-stone-400 rounded-[25px_25px_0_0]">
        <div className="text-3xl font-light leading-normal">
          <p>{datetime}</p>
          <p>{typeof service === "object" ? service.name : service}</p> {/* только название */}
          <p>{master}</p>
        </div>
      </div>
      <div className="flex items-center p-5 bg-orange-200">
        <h2 className="text-3xl font-light">Общая сумма</h2>
        <span className="ml-5 text-3xl font-light">{price} ₽</span>
      </div>
    </section>
  );
};
