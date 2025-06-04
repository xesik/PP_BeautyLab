import React, { useState } from "react";
import ServiceCategories from "./ServiceCategories";
import servicesData from "./servicesData";
import NavigationHeader from "./NavigationHeader";
import ServiceCard from "./ServiceCard";
import PriceList from "./PriceList";
import BookingModal from "./BookingModal";
import Footer from "./Footer";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Макияж");
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-orange-50">
  <div className="flex flex-col items-center px-20 pt-6 pb-28 max-w-[1675px] mx-auto w-full">
    <NavigationHeader setOpenBooking={setOpenBooking} />
    <ServiceCategories onSelect={setSelectedCategory} />
    <ServiceCard service={servicesData[selectedCategory]} />
  </div>

  <Footer />
  <BookingModal isOpen={openBooking} onClose={() => setOpenBooking(false)} />
</main>

  );
};

export default HomePage;
