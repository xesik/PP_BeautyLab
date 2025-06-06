import React, { useState, useEffect } from "react";
import { BackArrowIcon } from "../entry_2/BackArrowIcon";
import api from "../../api/axios";

const generateTimeSlots = (start = 9, end = 20) => {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`);
    slots.push(`${hour.toString().padStart(2, "0")}:30`);
  }
  return slots;
};

const SelectDateTimeStep = ({ onBack, onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);

  const times = generateTimeSlots();

  const today = new Date();
  const allDates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return d.toISOString().split("T")[0]; // YYYY-MM-DD
  });

  // Получаем доступные даты на основе свободных слотов
  useEffect(() => {
    api.get("/appointments/slots/")
      .then((res) => {
        const allAppointments = res.data;

        const validDates = allDates.filter((dateStr) => {
          const now = new Date();
          const threeHoursLater = new Date(now.getTime() + 3 * 60 * 60 * 1000);
          const todayStr = now.toISOString().split("T")[0];

          const dateSlots = times.filter((time) => {
            const isBooked = allAppointments.some(
              (a) => a.date === dateStr && a.time === time
            );
            if (isBooked) return false;

            if (dateStr === todayStr) {
              const slotTime = new Date(`${dateStr}T${time}`);
              return slotTime > threeHoursLater;
            }

            return true;
          });

          return dateSlots.length > 0;
        });

        setAvailableDates(validDates);

        // ✅ Автоматически выбрать первую доступную дату
        if (validDates.length > 0) {
          setSelectedDate(validDates[0]);
          setSelectedTime(null);
        }
      })
      .catch((err) => {
        console.error("Ошибка загрузки дат:", err);
        setAvailableDates([]);
      });
  }, []);

  useEffect(() => {
    if (selectedDate) {
      api.get("/appointments/slots/")
        .then((res) => {
          const booked = res.data
            .filter((a) => a.date === selectedDate)
            .map((a) => a.time);
          setBookedSlots(booked);
        })
        .catch((err) => {
          console.error("Ошибка загрузки слотов:", err);
          setBookedSlots([]);
        });
    }
  }, [selectedDate]);

  const handleSelect = () => {
    if (selectedDate && selectedTime) {
      const combined = `${selectedDate} ${selectedTime}`;
      onSelect(combined);
    }
  };

  return (
    <div className="min-h-screen w-full bg-orange-50 p-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="mb-6">
          <BackArrowIcon />
        </button>

        <h1 className="text-4xl font-mb text-center mb-10">Выберите дату и время</h1>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Дата</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {availableDates.map((date) => (
              <button
                key={date}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(null);
                }}
                className={`px-4 py-2 rounded-xl border transition ${
                  selectedDate === date
                    ? "bg-purple-600 text-white"
                    : "bg-white text-black hover:bg-purple-100"
                }`}
              >
                {new Date(date).toLocaleDateString("ru-RU", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Время</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {times
                .filter((time) => {
                  const now = new Date();
                  const threeHoursLater = new Date(now.getTime() + 3 * 60 * 60 * 1000);
                  const selected = new Date(`${selectedDate}T${time}`);

                  const todayStr = now.toISOString().split("T")[0];
                  if (selectedDate === todayStr) {
                    return selected > threeHoursLater;
                  }

                  return true;
                })
                .map((time) => {
                  const isBooked = bookedSlots.includes(time);
                  return (
                    <button
                      key={time}
                      onClick={() => !isBooked && setSelectedTime(time)}
                      disabled={isBooked}
                      className={`px-4 py-2 rounded-xl border transition ${
                        isBooked
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : selectedTime === time
                          ? "bg-purple-600 text-white"
                          : "bg-white text-black hover:bg-purple-100"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={handleSelect}
            disabled={!selectedDate || !selectedTime}
            className={`px-10 py-4 rounded-2xl text-xl transition ${
              selectedDate && selectedTime
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Подтвердить выбор
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectDateTimeStep;
