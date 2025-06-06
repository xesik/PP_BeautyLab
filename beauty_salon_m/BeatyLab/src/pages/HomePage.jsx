import React, { useState } from "react";
import ServiceCategories from "./ServiceCategories";
import servicesData from "./servicesData";
import NavigationHeader from "./NavigationHeader";
import ServiceCard from "./ServiceCard";
import PriceList from "./PriceList";
import BookingModal from "./BookingModal";
import Footer from "./Footer";
import Layout from "./Layout";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Макияж");
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-orange-50">
  <Layout>
    <ServiceCategories onSelect={setSelectedCategory} />
    <ServiceCard service={servicesData[selectedCategory]} />
    </Layout>
  

  <Footer />
  <BookingModal isOpen={openBooking} onClose={() => setOpenBooking(false)} />
</main>

  );
};

export default HomePage;
