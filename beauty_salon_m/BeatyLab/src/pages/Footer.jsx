import BeautyLabLogo from './BeautyLabLogo';

const Footer = () => {
  return (
    <footer className="w-full bg-orange-100 text-stone-700 py-10 mt-auto border-t border-orange-200 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-8 gap-x-10 px-6 text-sm md:text-base">

        {/* Лого */}
        <div className="flex items-center gap-3 min-w-[180px] justify-center md:justify-start">
          <BeautyLabLogo />
        </div>

        {/* Адрес */}
        <address className="not-italic text-center md:text-left leading-6 min-w-[180px]">
          <p>ул. Подвойского, д. 39</p>
          <p>г. Ростов-на-Дону</p>
        </address>

        {/* Контакты */}
        <div className="text-center md:text-left leading-6 min-w-[200px]">
          <p>
            📞 <a href="tel:+79286079813" className="hover:underline transition-colors">+7 (928) 607-98-13</a>
          </p>
          <p>
            ✉️ <a href="mailto:rnd-beautylab@mail.ru" className="hover:underline transition-colors">rnd-beautylab@mail.ru</a>
          </p>
        </div>

        {/* Сайт и копирайт */}
        <div className="text-center md:text-right leading-6 min-w-[200px]">
          <a href="https://rnd-beautylab.ru" className="hover:underline block transition-colors">rnd-beautylab.ru</a>
          <span className="text-sm text-stone-500 block mt-1">© 2025 Beauty Lab</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
