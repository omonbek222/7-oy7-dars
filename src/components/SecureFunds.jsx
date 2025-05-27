import React from "react";
import seyf from "../assets/seyf.png";

const SecureFunds = () => {
  return (
    <div className="w-full bg-[#0E0E0E] pt-20 ">
<div
      className="w-full bg-[#0E0E0E] mx-auto text-white flex items-center justify-center px-6"
      style={{ width: 1179, height: 600 }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-manrope font-extrabold text-[36px] leading-[110%] text-white">
            Ваши средства надежно защищены
          </h2>
          <p className="font-manrope font-normal text-[18px] leading-[140%] text-white">
            Безопасность средств клиентов — наш ключевой приоритет. Мы даем гарантию прозрачности каждой сделки и транзакции.
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <img
            src={seyf}
            alt="Security Safe"
            style={{
              width: 450,
              height: "auto",
              borderRadius: "0.75rem",
            }}
          />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default SecureFunds;
