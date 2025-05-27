import React from "react";
import plastik from "../assets/plastik.png";
import kartichka from "../assets/kartichka.png";
import Atto from "../assets/Atto.png";

const InDevelopment = () => {
  const cards = [
    {
      image: plastik,
      title: "Банковская карта",
      description: "Дебетовые карты, которые вы можете использовать для покупок и переводов",
    },
    {
      image: kartichka,
      title: "Персональный счет",
      description: "Личный IBAN и банковские переводы SEPA и SWIFT",
    },
    {
      image: Atto,
      title: "Web3 кошелек",
      description:
        "Децентрализованный кошелек с доступом в централизованную финансовую систему",
    },
  ];

  return (
    <div className="w-full bg-[#0E0E0E] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Продукты в разработке</h2>

        <div className="flex flex-nowrap gap-6 overflow-x-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-gray-700 rounded-[20px] flex-shrink-0 flex flex-col gap-4 p-6"
              style={{ width: 380, height: 360 }}
            >
              <div>
                <button
                  className="bg-[#25262D] text-white text-sm rounded-[6.11px] px-2 py-1"
                  style={{ width: 60, height: 24 }}
                >
                  Скоро
                </button>
              </div>

              <div className="w-full flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-contain"
                  style={
                    index === 1
                      ? { width: 285, height: 129 }
                      : index === 2
                      ? { width: 240, height: "auto" }
                      : { width: 240, height: "auto" }
                  }
                />
              </div>

              <h3 className="font-manrope font-bold text-[18px] leading-[100%] text-white">
                {card.title}
              </h3>

              <p className="font-manrope font-normal text-[16px] leading-[130%] text-white">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InDevelopment;
