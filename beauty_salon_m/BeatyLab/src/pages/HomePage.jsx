import React, { useState } from "react";
import ServiceCategories from "./ServiceCategories";
import servicesData from "./servicesData";
import NavigationHeader from "./NavigationHeader";
import ServiceCard from "./ServiceCard";
import PriceList from "./PriceList";
import BookingModal from "./BookingModal";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Макияж");
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-6 pb-28 mb-48 bg-orange-50 max-md:px-5 max-md:pb-24">
      <div className="flex flex-col items-center w-full max-w-[1675px] max-md:max-w-full">
        <NavigationHeader setOpenBooking={setOpenBooking} />
        <ServiceCategories onSelect={setSelectedCategory} />
        <ServiceCard service={servicesData[selectedCategory]} />
      </div>
      <BookingModal isOpen={openBooking} onClose={() => setOpenBooking(false)} />
    </main>
  );
};

export default HomePage;
