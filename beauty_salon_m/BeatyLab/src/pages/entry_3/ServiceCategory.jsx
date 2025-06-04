const ServiceCategory = ({ title, isExpanded = false, children }) => {
  return (
    <>
      <button className="flex justify-between items-center px-8 w-full bg-orange-200 cursor-pointer h-[75px]">
        <h2 className="text-3xl font-light text-white">{title}</h2>
        <ChevronIcon rotate={isExpanded} />
      </button>
      {isExpanded && children}
    </>
  );
};

export default ServiceCategory;
