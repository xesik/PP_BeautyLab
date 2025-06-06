import React, { useEffect, useState } from "react";
import ChevronIcon from "./ChevronIcon";
import ServiceItem from "./ServiceItem";
import { BackArrowIcon } from "../entry_2/BackArrowIcon";
import api from "../../api/axios";

const SelectServiceStep = ({ onBack, onSelect, categoryId }) => {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const url = categoryId
      ? `services/by-category/${categoryId}/`
      : `services/with-categories/`; // 👈 все категории и услуги

    api.get(url)
      .then((res) => {
        const data = categoryId
          ? [{ id: categoryId, name: "Категория", services: res.data }]
          : res.data;

        setCategories(data);
      })
      .catch((err) => console.error("Ошибка загрузки услуг:", err));
  }, [categoryId]);

  return (
    <div className="min-h-screen w-full bg-orange-50 p-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="mb-6">
          <BackArrowIcon />
        </button>
        <h1 className="text-4xl font-mb text-center mb-10">Выберите услугу</h1>

        <div className="flex flex-col gap-4">
          {categories.map((cat, index) => (
            <div key={cat.id}>
              <button
                className="flex justify-between items-center px-8 w-full bg-orange-200 cursor-pointer h-[75px]"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <h2 className="text-3xl font-light text-white">{cat.name}</h2>
                <ChevronIcon rotate={expanded === index} />
              </button>

              {expanded === index && (
                <div className="w-full bg-white">
                  {cat.services.map((srv) => (
                    <div key={srv.id} onClick={() => onSelect(srv)}>
                      <ServiceItem
                        title={srv.name}
                        price={`${srv.price} ₽`}
                        duration="~1 ч."
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectServiceStep;
