import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LangMenu";
import Logo from "../assets/Logo.svg";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-[#0E0E0E] py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <ul className="flex items-center gap-4 text-base text-white">
            <li><a href="#">Продукты</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">O нас</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button className="bg-white text-black text-[15px] py-2 px-5 rounded-lg">
            Стать клиентом
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
