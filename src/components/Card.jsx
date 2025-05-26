import React from "react";
import { useTranslation } from "react-i18next";
import deposit from "../assets/deposit.png";
import group from "../assets/group.png";
import payment from "../assets/payment.png";

const Card = () => {
  const { t } = useTranslation();

  const cards = [
    {
      image: deposit,
      title: "Deposit",
      description: t("cards.card1"),
    },
    {
      image: group,
      title: "Withdraw",
      description: t("cards.card2"),
    },
    {
      image: payment,
      title: "Exchange",
      description: t("cards.card3"),
    },
  ];

  return (
    <div className="bg-[#0E0E0E] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 border border-gray-700"
            style={{ width: 380, height: 320 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-[260px] h-[162px] object-contain mx-auto"
            />
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p
              className="text-gray-300 text-center font-semibold text-[18px] leading-[100%] font-manrope"
              style={{ letterSpacing: "0%" }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
