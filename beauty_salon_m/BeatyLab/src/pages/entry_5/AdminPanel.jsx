"use client";

import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import LogoSection from "./LogoSection";
import api from "../../api/axios";

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    date: "",
    time: "",
    name: "",
    phone: "",
    master: "",
    service: "",
  });

  const [editingId, setEditingId] = useState(null);

  const fetchAppointments = () => {
    api.get("appointments/slots/")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error("Ошибка загрузки:", err));
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "put" : "post";

    try {
      await api[method]("appointments/slots/", formData);
      fetchAppointments();
      resetForm();
    } catch (error) {
      console.error("Ошибка сохранения:", error);
    }
  };

  const handleEdit = (appt) => {
    setFormData(appt);
    setEditingId(appt.id);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`appointments/slots/${id}/`);
      fetchAppointments();
    } catch (error) {
      console.error("Ошибка удаления:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      id: null,
      date: "",
      time: "",
      name: "",
      phone: "",
      master: "",
      service: "",
    });
    setEditingId(null);
  };

  return (
    <main className="bg-orange-50 min-h-screen p-8">

      <h2 className="text-3xl font-semibold my-6">Управление записями</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-10 grid gap-4 md:grid-cols-2">
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-3 border rounded" required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} className="p-3 border rounded" required />
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Имя клиента" className="p-3 border rounded" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" className="p-3 border rounded" required />
        <input type="text" name="master" value={formData.master} onChange={handleChange} placeholder="Мастер" className="p-3 border rounded" required />
        <input type="text" name="service" value={formData.service} onChange={handleChange} placeholder="Услуга" className="p-3 border rounded" required />

        <div className="col-span-full flex gap-4">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            {editingId ? "Обновить" : "Добавить"}
          </button>
          <button type="button" onClick={resetForm} className="bg-gray-300 px-4 py-2 rounded">Очистить</button>
        </div>
      </form>

      <table className="w-full bg-white rounded-xl shadow-md text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Дата</th>
            <th className="p-3">Время</th>
            <th className="p-3">Имя</th>
            <th className="p-3">Телефон</th>
            <th className="p-3">Мастер</th>
            <th className="p-3">Услуга</th>
            <th className="p-3">Действия</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id} className="border-t">
              <td className="p-3">{appt.date}</td>
              <td className="p-3">{appt.time}</td>
              <td className="p-3">{appt.name}</td>
              <td className="p-3">{appt.phone}</td>
              <td className="p-3">{appt.master}</td>
              <td className="p-3">{appt.service}</td>
              <td className="p-3 flex gap-2">
                <button onClick={() => handleEdit(appt)} className="px-3 py-1 bg-blue-500 text-white rounded">Изм.</button>
                <button onClick={() => handleDelete(appt.id)} className="px-3 py-1 bg-red-500 text-white rounded">Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminPanel;
