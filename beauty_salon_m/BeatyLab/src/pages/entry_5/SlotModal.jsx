"use client";

import { useState, useEffect } from "react";

const SlotModal = ({ slot, onClose, onSave }) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  useEffect(() => {
    if (slot?.name || slot?.phone) {
      setFormData({ name: slot.name, phone: slot.phone });
    }
  }, [slot]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }
    onSave({ time: slot.time, ...formData });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Запись на {slot.time}</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя клиента"
            className="border p-3 rounded-xl text-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            className="border p-3 rounded-xl text-lg"
            required
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 rounded-lg text-lg hover:bg-gray-400"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default SlotModal;
