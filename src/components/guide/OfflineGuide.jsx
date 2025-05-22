import {Link} from "react-router-dom";

const btnLinkMap = {
    "내 주변 온기우편함 찾기": "/map",
    "편지코드 발급받기": "/code",
    "내 편지 확인하기": "/my-letter",
    "감사 편지 쓰기": "/thanks",
  };

const steps = [
    {
      title: "1. 내 주변 온기우편함을 찾아요",
      desc: "온기우편함 지도들 통해 내 주변 온기우편함을 찾고 이용할 우편함을 선택해요",
      btn: "내 주변 온기우편함 찾기",
    },
    {
      title: "2. 고민편지를 작성해요",
      desc: "취업준비, 인간관계, 학업문제, 삶의 고민 등 온기에게 상담을 요청하고 싶은 고민을 편지에 담아주세요. 자신의 이름과 연락처를 남기지 않아도 괜찮으니 자유롭게 작성해주세요\n\n(더 편하게 내용을 공유해도 좋아요. 힘드니 편하게 하고 싶은 말, 요청해주셔도 괜찮아요)",
    },
    {
      title: "3. 편지코드를 발급받아요",
      desc: "내 편지에 대한 코드를 발급받으면 편지의 답장이 언제 작성되었는지 확인할 수 있어요",
      btn: "편지코드 발급받기",
    },
    {
      title: "4. 온기우편함에 고민편지를 넣어요",
      desc: "편지지는 손쉽게 온기함과 온기레터에서 받을 수 있고 직접 우체통에 넣거나 온기우체부가 있다면 모든 편지지를 수거해 전달해줘요",
    },
    {
      title: "5. 내 편지의 상태를 확인해봐요",
      desc: "내가 보낸 고민편지의 답장이 언제 도착했는지 편지 코드로 확인해보세요. 답장이 등록된 경우 알림을 받을 수 있어요",
      btn: "내 편지 확인하기",
    },
    {
      title: "6. 답장편지를 받아보고 내 편지 상태를 바꿔주세요",
      desc: "답장을 잘 받아보았다면 온기 2차 답장도 가능해요. 답장을 받았다면 내 편지의 상태를 바꿔주세요. 답장 등록과 상태 변경은 편지 코드로 확인 가능해요",
      btn: "내 편지 확인하기",
    },
    {
      title: "7. 온기우체부에게 감사함을 전해보세요",
      desc: "마음의 온기를 받으셨다면 온기에서 안내해드린 감사 편지나 답신 이벤트를 통해 온기 우체부에게 감사의 마음을 전할 수 있어요",
      btn: "감사 편지 쓰기",
    },
  ];
  
  const OfflineGuide = () => (
    <div className="w-full">
      {/* 오프라인 온기우편함 소개 */}
      <section className="pt-10 pb-6 bg-[#FFFBF0]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-3 text-lg text-[#A38951] font-semibold">
            INTRODUCE
          </div>
          <div className="text-center text-2xl font-bold mb-4 text-[#433310]">
            오프라인 온기우편함
          </div>
          <div className="text-center text-base font-semibold mb-2 text-[#433310]">
            "익명으로 고민을 보내주시면, 손편지로 답장을 전해드려요."
          </div>
          <div className="flex gap-4 justify-center my-5">
            <img
              src="/offline1.png"
              alt="온기우편함"
              className="w-[170px] h-[230px] object-cover rounded-xl"
            />
            <img
              src="/offline2.png"
              alt="온기우편함"
              className="w-[170px] h-[230px] object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-[#433310] text-base leading-relaxed px-2 mb-1">
            2017년 2월, 온기우편함이란 이름의 청년층 심리상담 우편함을 연세대에 설치했어요.<br />
            우편함 이용은 완전 무료이고, 익명으로 작성해도 돼요.<br />
            <br />
            현재는 전국 48곳에 오프라인 온기우편함이 설치되어 있어요.<br />
            심할 때는 한 달에 500편씩 고민편지가 쏟아질 만큼 많은 분들, <br />
            따뜻한 답장 손편지가 도착하거든요.
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
                  to={btnLinkMap[step.btn]}
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
  
  export default OfflineGuide;
  