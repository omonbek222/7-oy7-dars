import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  uz: {
    translation: {
      hero: {
        title: "Paytion",
        subtitle: "Hayot va biznes uchun moliyaviy xizmatlar va mahsulotlar",
        button: "Batafsil →",
        stat1: "15 ta ofis va vakolatxona (AQSh, Yevropa, BAA, Osiyo)",
        stat2: "Kriptovalyuta va fiat bilan operatsiyalar",
        stat3: "700+ mamnun mijozlar",
      },
      cards: {
        card1: "Покупка/продажа/обмен фиатных и криптовалют",
        card2: "Отправка/получение денег в любой точке мира",
        card3: "Оплата счетов за отели, перелеты, товары или услуги",
      },
    },
  },
  en: {
    translation: {
      hero: {
        title: "Paytion",
        subtitle: "Financial services and products for life and business",
        button: "Learn more →",
        stat1: "15 offices and branches (USA, Europe, UAE, Asia)",
        stat2: "Operations with crypto and fiat",
        stat3: "700+ satisfied clients",
      },
      cards: {
        card1: "Buying/selling/exchange of fiat and cryptocurrencies",
        card2: "Sending/receiving money anywhere in the world",
        card3: "Payment of bills for hotels, flights, goods or services",
      },
    },
  },
  ru: {
    translation: {
      hero: {
        title: "Paytion",
        subtitle: "Финансовые услуги и продукты для жизни и бизнеса",
        button: "Узнать больше →",
        stat1: "15 офисов и представительств (США, Европа, ОАЭ, Азия)",
        stat2: "Операции c криптовалютами и фиатом",
        stat3: "700+ довольных клиентов",
      },
      cards: {
        card1: "Покупка/продажа/обмен фиатных и криптовалют",
        card2: "Отправка/получение денег в любой точке мира",
        card3: "Оплата счетов за отели, перелеты, товары или услуги",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // brauzer tilini aniqlash uchun
  .use(initReactI18next) // react-i18next bilan integratsiya
  .init({
    resources,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
