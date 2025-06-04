"use client";
import { useEffect, useState } from "react";
import BeautyLabConfirmation from "./entry_1/BeautyLabConfirmation";
import SelectMasterStep from "./entry_2/SelectMasterStep";
import SelectServiceStep from "./entry_3/SelectServiceStep";
import SelectDateTimeStep from "./entry_6/SelectDateTimeStep";
import AppointmentPage from "./entry_4/AppointmentPage";

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [master, setMaster] = useState(null);
  const [service, setService] = useState(null);
  const [datetime, setDatetime] = useState(null);
  const [error, setError] = useState("");

  // Блокировка скролла заднего фона
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

    useEffect(() => {
    if (isOpen) {
      setStep(0);
      setMaster(null);
      setService(null);
      setDatetime(null);
    }
  }, [isOpen]);


  // Закрытие по Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="relative w-full max-w-[750px] max-h-[95vh] overflow-hidden rounded-xl bg-orange-50 shadow-xl">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-4xl text-gray-600 z-50 hover:text-black"
        >
          &times;
        </button>

        <div className="flex items-center justify-center h-full w-full">
          {step === 0 && (
            <BeautyLabConfirmation
              master={master?.name}
              service={service?.name}
              datetime={datetime}
              onSelectStep={(stepIndex) => setStep(stepIndex)}
              onNext={() => {
  if (!master || !service || !datetime) {
    setError("Пожалуйста, выберите мастера, услугу и дату.");
    return;
  }
  setError(""); // сброс ошибки
  setStep(4);
}}
error = {error}
            />
          )}

          {step === 1 && (
            <SelectMasterStep
              onBack={() => setStep(0)}
              categoryId={service?.service_cat} // 👈 передаём id категории
              onSelect={(selectedMaster) => {
                setMaster(selectedMaster);
                setStep(0);
              }}
            />
          )}

          {step === 2 && (
            <SelectServiceStep
            onBack={() => setStep(0)}
            categoryId={master?.category} // 👈 передаём сюда
            onSelect={(selectedService) => {
              setService(selectedService);
              setStep(0);
              }}
            />
          )}

          {step === 3 && (
            <SelectDateTimeStep
              onBack={() => setStep(0)}
              onSelect={(selectedDateTime) => {
                setDatetime(selectedDateTime);
                setStep(0);
              }}
            />
          )}

          {step === 4 && (
            <AppointmentPage
              master={master?.name}
              service={service}
              datetime={datetime}
              onBack={() => setStep(0)}
              onSuccess={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
