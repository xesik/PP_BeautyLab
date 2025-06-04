import React from "react";

const PriceList = () => {
  return (
    <div className="flex flex-col grow h-full items-start px-14 py-6 w-full bg-white rounded-xl text-stone-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl">Прайс</h2>
      <div className="mt-7 text-base w-full max-md:max-w-full overflow-auto">
        <h3 className="font-bold">БРОВИ</h3>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th className="text-left">Услуга</th>
              <th className="text-right">ЦЕНА</th>
              <th className="text-right">VIP ЦЕНА</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["КОРРЕКЦИЯ БРОВЕЙ", "2 700 ₽", "3 500 ₽"],
              ["ОКРАШИВАНИЕ БРОВЕЙ", "2 700 ₽", "3 300 ₽"],
              ["КОРРЕКЦИЯ И ОКРАШИВАНИЕ БРОВЕЙ", "5 000 ₽", "6 000 ₽"],
              ["ОСВЕТЛЕНИЕ БРОВЕЙ", "2 200 ₽", "2 500 ₽"],
              ["ОКРАШИВАНИЕ РЕСНИЦ", "2 700 ₽", "3 150 ₽"],
              ["ДОЛГОВРЕМЕННАЯ УКЛАДКА БРОВЕЙ", "6 000 ₽", "7 700 ₽"],
              ["СЧАСТЬЕ ДЛЯ БРОВЕЙ*", "2 700 ₽", "3 000 ₽"],
              ["СЧАСТЬЕ ДЛЯ РЕСНИЦ*", "2 200 ₽", "2 700 ₽"],
              ["ДЕПИЛЯЦИЯ 1 ЗОНА", "1 200 ₽", "1 300 ₽"],
              ['ОРГАНИЧЕСКАЯ УКЛАДКА ДЛЯ БРОВЕЙ "ORGANIC BROW"', "5 000 ₽", "5 250 ₽"],
            ].map(([name, price, vip]) => (
              <tr key={name}>
                <td>{name}</td>
                <td className="text-right">{price}</td>
                <td className="text-right">{vip}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm italic">
          *Дополнительный уход к услугам оформления, окрашивания бровей и ресниц
        </p>
      </div>
    </div>
  );
};

export default PriceList;
