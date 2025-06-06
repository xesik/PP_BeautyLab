import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
const BeautyLabLanding = () => {
  return (
    <main className="flex flex-col items-center bg-orange-50 text-black font-jost">
      <Layout>


      <section className="w-full rounded-xl py-24 bg-white text-center px-4">
        <h2 className="text-5xl font-mb tracking-wide animate-fade-in-up">
          Твои ритуалы красоты — в одном месте
        </h2>
        <p className="text-2xl font-light mt-6 animate-fade-in-up delay-100">
          Маникюр, косметология, массаж, укладки, уходы и не только.
        </p>
      </section>


      <section className="py-24 bg-orange-50 px-4 text-center" id="why-us">
        <h2 className="text-4xl font-mb mb-16 animate-fade-in-up">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Профессиональные мастера",
              desc: "У нас работают только квалифицированные специалисты с опытом и любовью к делу.",
              img: "mastera.jpg",
            },
            {
              title: "Уютная атмосфера",
              desc: "Салон, куда хочется возвращаться снова и снова. Мы создаём комфорт.",
              img: "./uyut.jpg",
            },
            {
              title: "Индивидуальный подход",
              desc: "Каждый клиент — уникален. Мы подбираем процедуры именно под вас.",
              img: "podhod.jpg",
            }
          ].map((card, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105">
              <img src={card.img} alt={card.title} className="rounded-xl mb-6 w-full h-48 object-cover" />
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-lg font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-28 bg-orange-200 rounded-2xl w-full text-center px-4">
        <h2 className="text-4xl font-mb mb-8">Готова к преображению?</h2>
        <p className="text-xl mb-12 font-light">Запишись онлайн всего за пару кликов</p>
        <button className="px-10 py-4 text-2xl font-medium bg-white rounded-full hover:bg-gray-100 transition duration-300">
          Записаться
        </button>
      </section>
      </Layout>
      <Footer/>
    </main>
  );
};

export default BeautyLabLanding;
