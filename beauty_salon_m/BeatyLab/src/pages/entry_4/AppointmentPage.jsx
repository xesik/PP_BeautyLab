"use client";
import { Header } from './Header';
import { AppointmentDetails } from './AppointmentDetails';
import { useState, useEffect } from 'react';
import api from '../../api/axios';
import PhoneInput from './PhoneInput';
import BirthDateInput from './BirthDateInput';

const AppointmentPage = ({ master, service, datetime, onBack, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    phone: '',
    comment: '',
    termsAccepted: false,
    savePersonalData: false
  });

  useEffect(() => {
    const saveData = localStorage.getItem('savePersonalData') === 'true';

    setFormData(prev => ({
      ...prev,
      savePersonalData: saveData,
      name: saveData ? localStorage.getItem('name') || '' : '',
      phone: saveData ? localStorage.getItem('phone') || '' : '',
      birthDate: saveData ? localStorage.getItem('birthDate') || '' : '',
      comment: saveData ? localStorage.getItem('comment') || '' : ''
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Вы должны согласиться с условиями");
      return;
    }

    const payload = {
      ...formData,
      master,
      service: typeof service === "object" && service !== null ? service.name : service,
      datetime,
      price: service.price
    };

    console.log("📤 Отправляем payload:", payload);

    try {
      const res = await api.post("appointments/", payload);
      console.log("Создано:", res.data);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Ошибка при отправке:", error.response?.data || error);
      alert("Ошибка при создании записи.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (name === 'savePersonalData') {
      localStorage.setItem('savePersonalData', newValue);
      if (!newValue) {
        localStorage.removeItem('name');
        localStorage.removeItem('phone');
        localStorage.removeItem('birthDate');
        localStorage.removeItem('comment');
      }
    }

    if (['name', 'phone', 'birthDate', 'comment'].includes(name)) {
      const saveFlag = localStorage.getItem('savePersonalData') === 'true';
      if (saveFlag) {
        localStorage.setItem(name, newValue);
      }
    }
  };

  return (
    <main className="flex flex-col pt-2 pb-10 w-full bg-orange-50 max-md:pb-24 max-md:max-w-full">
      <Header onBack={onBack} />
      <div className="flex flex-col items-center px-10">
        <h2 className="mt-10 mb-9 text-3xl font-light">Оформление записи</h2>

        <AppointmentDetails
          datetime={datetime}
          service={service.name}
          master={master}
          price={service.price}
        />

        <form onSubmit={handleSubmit} className="p-5 w-full bg-orange-200 rounded-[25px_25px_0_0] mt-10 max-w-2xl">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ваше имя"
              pattern="[А-Яа-яЁё\s\-]+"
              className="px-8 w-full text-3xl bg-white rounded-2xl h-[53px] text-zinc-500"
              required
            />

            <BirthDateInput value={formData.birthDate} onChange={handleInputChange} />
            <PhoneInput value={formData.phone} onChange={handleInputChange} />

            <input
              type="text"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Комментарий к визиту"
              className="px-8 w-full text-3xl bg-white rounded-2xl h-[53px] text-zinc-500"
            />

            {/* Новый чекбокс */}
            <div className="flex gap-3 items-start">
              <label className="flex gap-3 items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="savePersonalData"
                  checked={formData.savePersonalData}
                  onChange={handleInputChange}
                  className="hidden"
                />
                <div className="w-[41px] h-[41px] flex items-center justify-center border border-neutral-400 bg-white rounded">
                  {formData.savePersonalData && (
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-base text-stone-700">
                  Сохранять мои данные для следующих записей
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 items-start mt-6">
            <label className="flex gap-3 items-center cursor-pointer">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="hidden"
              />
              <div className="w-[41px] h-[41px] flex items-center justify-center border border-neutral-400 bg-white rounded">
                {formData.termsAccepted && (
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-base text-stone-700">
                Согласен и ознакомлен с согласием на обработку персональных данных
              </span>
            </label>
          </div>

          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="text-4xl font-medium bg-white pb-1 rounded-2xl border border-neutral-400 h-[65px] text-stone-700 w-[388px]"
            >
              Записаться
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AppointmentPage;
