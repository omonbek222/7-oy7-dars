import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#0E0E0E]  text-gray-300 py-10 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white font-bold text-2xl mb-2 select-none">Paytion</h2>
          <p className="max-w-xs text-center md:text-left text-gray-400">
            Прозрачные и надежные решения для работы с цифровыми валютами и банковскими услугами.
          </p>
        </div>

        <nav className="flex gap-10">
          <ul className="flex flex-col space-y-2 text-sm cursor-pointer">
            <li className="hover:text-white transition">Продукты</li>
            <li className="hover:text-white transition">Отзывы</li>
            <li className="hover:text-white transition">О нас</li>
            <li className="hover:text-white transition">Контакты</li>
          </ul>
        </nav>

        <div className="flex gap-6 text-gray-400">
          <a href="#" aria-label="Facebook" className="hover:text-white transition">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.98-2.48 9.17 9.17 0 0 1-2.9 1.11 4.52 4.52 0 0 0-7.7 4.12 12.84 12.84 0 0 1-9.3-4.7 4.44 4.44 0 0 0-.61 2.28 4.52 4.52 0 0 0 2 3.77 4.43 4.43 0 0 1-2.06-.56v.06a4.52 4.52 0 0 0 3.63 4.43 4.48 4.48 0 0 1-2.05.08 4.53 4.53 0 0 0 4.22 3.13A9 9 0 0 1 1 18.59 12.7 12.7 0 0 0 7 20c8.25 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.02-.58A9.14 9.14 0 0 0 23 3z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM4 8.5h3.96v11H4zM9.5 8.5H13v1.55h.05a4.17 4.17 0 0 1 3.76-2.06c4.03 0 4.78 2.65 4.78 6.1v7.41h-4v-6.57c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5v6.67h-4z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500 select-none">
        © 2025 Paytion. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
