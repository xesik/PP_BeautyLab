import PriceList from "./PriceList";

const ServiceCard = ({ service }) => {
  if (!service) return null;

  return (
    <section className="self-stretch px-5 py-5 mt-16 rounded-xl bg-stone-300 bg-opacity-10 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 items-stretch max-md:flex-col">
        {/* Левая колонка */}
        <article className="w-6/12 flex flex-col max-md:w-full">
          <div className="flex flex-col grow pt-5 pr-20 pb-9 pl-7 w-full bg-white rounded-xl text-stone-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-4xl max-md:max-w-full">{service.title}</h2>
            <p className="mt-8 text-base max-md:max-w-full">{service.description}</p>
            <img
              src={service.image}
              alt={service.title}
              className="object-contain self-center mt-8 max-w-full rounded-xl aspect-[1.5] w-[602px]"
            />
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
