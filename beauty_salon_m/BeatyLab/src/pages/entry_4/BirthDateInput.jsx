"use client";
import { useEffect, useRef } from 'react';
import IMask from 'imask';

const BirthDateInput = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const mask = IMask(inputRef.current, {
        mask: '00.00.0000', // ДД.ММ.ГГГГ
        lazy: true,
        blocks: {
          // можно добавить валидацию по диапазонам
          DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            maxLength: 2,
          },
          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2,
          },
          YYYY: {
            mask: IMask.MaskedRange,
            from: 1900,
            to: 2100,
          },
        },
      });

      mask.on('accept', () => {
        onChange({
          target: {
            name: 'birthDate',
            value: mask.value,
          },
        });
      });

      return () => mask.destroy();
    }
  }, [onChange]);

  return (
    <input
      ref={inputRef}
      defaultValue={value}
      name="birthDate"
      placeholder="Дата рождения" // ✅ ← это будет показано до ввода
      className="px-8 w-full text-3xl bg-white rounded-2xl h-[53px] text-zinc-500"
      required
/>
  );
};

export default BirthDateInput;
