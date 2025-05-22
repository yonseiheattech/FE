import { Link } from "react-router-dom";

const steps = [
  {
    title: "1. 온기레터 페이지에서 신청해요",
    desc: "아래 온기레터 페이지에 접속해 이메일 주소와 별명을 입력해서 신청해요",
    btn: "온기레터 페이지 바로가기",
    btnLink: "/letter",
  },
  {
    title: "2. 매주 목요일 밤 9시에 온기레터를 받아봐요",
    desc: "온기우편함이 나눈 온기를 통해 매주 위로 받을 수 있어요",
  },
];

const LetterGuide = () => (
  <div className="w-full">
    {/* 온기레터 소개 */}
    <section className="pt-10 pb-6 bg-[#FFFBF0]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-3 text-lg text-[#A38951] font-semibold">
          INTRODUCE
        </div>
        <div className="text-center text-2xl font-bold mb-4 text-[#433310]">
          온기레터
        </div>
        <div className="text-center text-base font-semibold mb-2 text-[#433310]">
          "매주 목요일 밤 9시, 메일로 익명의 고민과 손편지 답장을 전해드려요."
        </div>
        <div className="flex gap-4 justify-center my-5">
          <img
            src="/letter-guide.png"
            alt="온기레터 샘플"
            className="w-[600px] h-[300px] object-cover rounded-lg"
          />
        </div>
        <div className="text-center text-[#433310] text-base leading-relaxed px-2 mb-1">
          온기레터는 매주 익명의 고민과 손편지 답장을 메일로 받아볼 수 있는 손편지 뉴스레터예요.<br />
          온기우편함에 고민을 보내지 않아도 일상에서 따뜻한 위로를 받을 수 있도록,<br />
          온기우편함에 도착한 편지 중 공개동의된 편지의 개인정보 식별처리 후 뉴스레터를 발행하고 있어요.
        </div>
      </div>
    </section>
    {/* 이용방법 */}
    <section className="py-12 bg-[#FFF9EB]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 text-lg text-[#A38951] font-semibold">How?</div>
        <div className="text-center text-2xl font-bold mb-8 text-[#433310]">이용방법</div>
        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm px-7 py-6 text-[#433310] flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{step.title}</span>
              </div>
              <div className="whitespace-pre-line text-base mb-2">{step.desc}</div>
              {step.btn && (
                <Link
                  to={step.btnLink}
                  className="mt-1 w-fit bg-[#F6E3AF] hover:bg-[#f3d36b] text-[#A38951] font-semibold px-5 py-2 rounded transition text-sm shadow-sm"
                >
                  {step.btn}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default LetterGuide;
