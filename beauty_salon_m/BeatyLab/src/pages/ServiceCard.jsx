import PriceList from "./PriceList";

const ServiceCard = ({ service }) => {
  if (!service) return null;

  return (
    <section className="self-stretch px-5 py-5 mt-16 rounded-xl bg-stone-300 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 items-stretch max-md:flex-col">
        {/* Левая колонка */}
        <article className="w-6/12 flex flex-col justify-between max-md:w-full">
          <div className="flex flex-col grow px-7 pt-5 pb-9 w-full bg-white rounded-xl text-stone-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl">{service.title}</h2>
            <p className="mt-8 text-base">{service.description}</p>

            <div className="flex justify-center mt-8">
              <img
  src={service.image}
  alt={service.title}
  className="w-[550px] h-[350px] object-cover self-center rounded-xl"
/>
            </div>
          </div>
        </article>

        {/* Правая колонка */}
        <aside className="w-6/12 flex flex-col max-md:w-full">
          <PriceList prices={service.prices} />
        </aside>
      </div>
    </section>
  );
};

export default ServiceCard;
