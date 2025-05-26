import { useTranslation } from "react-i18next";

const LangMenu = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={i18n.language}
      className="border border-blue-500 bg-blue-500 text-white text-sm rounded px-3 py-1 focus:outline-none"
    >
      <option value="en">EN</option>
      <option value="uz">UZ</option>
      <option value="ru">RU</option>
    </select>
  );
};

export default LangMenu;
