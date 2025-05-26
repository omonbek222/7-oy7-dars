import { useTranslation } from "react-i18next";
import iphone from "../assets/iphone.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";

const Showcase = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0E0E0E] text-white pt-[160px] pb-[120px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            {t("hero.subtitle")}
          </p>
          <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded hover:bg-gray-200 transition">
            {t("hero.button")}
          </button>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#1A1A1A] rounded-md p-3 text-xs text-gray-300">
              {t("hero.stat1")}
            </div>
            <div className="bg-[#1A1A1A] rounded-md p-3 text-xs text-gray-300">
              {t("hero.stat2")}
            </div>
            <div className="bg-[#1A1A1A] rounded-md p-3 text-xs text-gray-300">
              {t("hero.stat3")}
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center gap-4 max-w-[320px] mx-auto mt-8 lg:mt-0">
          <div className="flex flex-col space-y-3">
            <img
              src={card1}
              alt="Card 1"
              className="w-40 h-auto rotate-[-10deg] z-20"
            />
            <img
              src={card2}
              alt="Card 2"
              className="w-40 h-auto z-10 animate-pulse shadow-[0_0_40px_rgba(0,170,255,0.4)]"
            />
          </div>

          <img
            src={iphone}
            alt="iPhone"
            className="w-48 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
