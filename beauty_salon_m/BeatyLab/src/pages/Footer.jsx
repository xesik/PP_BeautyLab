import BeautyLabLogo from './BeautyLabLogo';

const Footer = () => {
  return (
    <footer className="w-full bg-stone-200 text-stone-800 py-8 mt-auto border-t border-stone-300">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-10 px-6 text-sm md:text-base">

        {/* Лого */}
        <div className="flex items-center gap-3">
          <BeautyLabLogo />
        </div>

        {/* Адрес */}
        <address className="not-italic text-center md:text-left leading-6">
          <p>ул. Подвойского, д. 39</p>
          <p>г. Ростов-на-Дону</p>
        </address>

        {/* Контакты */}
        <div className="text-center md:text-left leading-6">
          <p>
            📞 <a href="tel:+79286079813" className="hover:underline">+7 (928) 607-98-13</a>
          </p>
          <p>
            ✉️ <a href="mailto:rnd-beautylab@mail.ru" className="hover:underline">rnd-beautylab@mail.ru</a>
          </p>
        </div>

        {/* Сайт и копирайт */}
        <div className="text-center md:text-right leading-6">
          <a href="https://rnd-beautylab.ru" className="hover:underline block">rnd-beautylab.ru</a>
          <span className="text-sm text-stone-500">© 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
