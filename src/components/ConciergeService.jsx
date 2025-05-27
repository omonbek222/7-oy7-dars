import Pics from "../assets/pics.png";

export default function ConciergeService() {
  return (
    <div className="w-full bg-[#0E0E0E]">
      <div className="backdrop-blur-3xl w-full text-white py-12 px-6 rounded-xl max-w-6xl mx-auto">
       

        <div className="p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h2 className="font-manrope font-extrabold text-[48px] leading-[110%] text-white px-4 py-2 rounded">
              Консьерж сервис
            </h2>

            <p className="font-manrope font-normal text-[18px] leading-[140%] text-white px-4 py-2 rounded">
              Это ваш личный ассистент, который поможет решить финансовые задачи: от оплаты счетов до пополнения кредитки
            </p>

            <button
              className="bg-white text-black border border-black rounded-[10px] ml-4"
              style={{
                width: 200,
                height: 60,
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 50,
                paddingRight: 50,
                gap: 10,
              }}
            >
              Связаться →
            </button>
          </div>

          <div className="flex-1 flex justify-end">
            <img
              src={Pics}
              alt="Concierge Illustration"
              style={{
                width: 500,
                height: 280.834,
                borderRadius: "0.75rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
