import React from "react";

const PriceList = ({ prices }) => {
  return (
    <div className="flex flex-col grow items-start px-14 py-6 w-full bg-white rounded-xl text-stone-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl">Прайс</h2>
      <table className="w-full mt-7 text-base">
        <thead>
          <tr>
            <th className="text-left">Услуга</th>
            <th className="text-right">Цена</th>
          </tr>
        </thead>
        <tbody>
          {prices?.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td className="text-right">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
