import ChevronIcon from "./ChevronIcon";
const ServiceItem = ({ title, price, duration }) => {
  return (
    <div className="px-8 py-4 border-b border-stone-500 last:border-b-0">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-3xl font-light text-stone-500">{title}</h3>
          <p className="text-3xl text-stone-500">{price}</p>
        </div>
        <div className="flex gap-72 items-center">
          <span className="text-2xl text-stone-500">{duration}</span>
          <div>
            <ChevronIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
