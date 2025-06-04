import React from "react";

const ServiceDetails = ({ service }) => {
  if (!service) return null;

  return (
    <div className="flex flex-col w-full gap-6">
      <img src={service.image} alt={service.title} className="w-full max-h-64 object-cover rounded-xl" />
      <h2 className="text-3xl font-bold">{service.title}</h2>
      <p className="text-lg text-gray-700">{service.description}</p>
      <div className="mt-4 bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-2xl mb-4">Прайс-лист</h3>
        <ul className="space-y-2">
          {service.prices.map((item, index) => (
            <li key={index} className="flex justify-between border-b pb-1">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
