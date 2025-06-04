"use client";
import { useEffect, useRef } from 'react';
import IMask from 'imask';

const PhoneInput = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const mask = IMask(inputRef.current, {
        mask: '+{7} (000) 000-00-00',
      });

      mask.on('accept', () => {
        onChange({
          target: {
            name: 'phone',
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
      name="phone"
      placeholder="+7 (___) ___-__-__"
      className="px-8 w-full text-3xl bg-white rounded-2xl h-[53px] text-zinc-500"
      required
    />
  );
};

export default PhoneInput;
