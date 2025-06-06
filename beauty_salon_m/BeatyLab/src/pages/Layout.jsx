import React, { useState } from "react";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";
import BookingModal from "./BookingModal";

const Layout = ({ children }) => {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <div className="px-4 py-7">
         <NavigationHeader setOpenBooking={setOpenBooking} />
       </div>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-10">
        {children}
      </main>


      <BookingModal isOpen={openBooking} onClose={() => setOpenBooking(false)} />
    </div>
  );
};

export default Layout;
