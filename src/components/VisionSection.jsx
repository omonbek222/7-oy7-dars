import React from "react";
import photo from "../assets/photo.png";

const VisionSection = () => {
  return (
    <div className="w-full bg-[#0E0E0E] mx-auto">
 <div
      className="bg-[#1A1A1A] border border-[#333] rounded-[20px] mx-auto text-white px-8 py-6 flex items-center justify-between"
      style={{ width: 1180, height: 600 }}
    >
      <div className="flex-shrink-0">
        <img
          src={photo}
          alt="Founder"
          style={{ width: 400, height: "auto", borderRadius: "12px" }}
        />
      </div>

      <div className="max-w-[540px] flex flex-col gap-6">
        <p className="text-[18px] font-medium leading-[140%] text-white">
          «Наша цель — создать простой, прозрачный и удобный способ использования
          цифровых валют в реальном мире. Дать возможность людям свободно владеть
          и использовать их активы.»
        </p>
        <span className="text-[18px] font-semibold text-white">Олег Курченко</span>
        <p className="text-[16px] font-normal text-gray-400">CEO & Founder Paytion</p>
        <button className="bg-white text-black text-sm py-2 px-5 rounded-lg w-fit">
          Стать клиентом
        </button>
      </div>
    </div>
    </div>
   
  );
};

export default VisionSection;
