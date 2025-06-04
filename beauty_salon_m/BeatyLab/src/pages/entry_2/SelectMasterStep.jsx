import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { BackArrowIcon } from "./BackArrowIcon";

const SelectMasterStep = ({ onBack, onSelect }) => {
  const [masters, setMasters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("masters/") // Django должен отдавать GET /api/masters/
      .then((res) => {
        setMasters(res.data); // предполагаем, что это массив
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки мастеров:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen w-full bg-orange-50 p-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="mb-6">
          <BackArrowIcon />
        </button>
        <h1 className="text-4xl font-bold text-center mb-10">Выберите мастера</h1>

        {loading ? (
          <p className="text-center">Загрузка...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {masters.map((master) => (
              <div
                key={master.id}
                onClick={() => onSelect(master)} // ✅ при клике передаём объект мастера
                className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h2 className="text-2xl font-semibold">{master.name}</h2>
                <p className="mt-2 text-gray-500">Рейтинг: {master.rating}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectMasterStep;
