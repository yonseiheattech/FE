import { Link } from "react-router-dom";

// 버튼 텍스트별 이동 경로
const btnLinkMap = {
  "편지코드 발급받기": "/code",
  "온라인 온기우편함 업로드하기": "/upload",
  "내 편지 확인하기": "/my-letter",
  "감사 편지 쓰기": "/thanks",
};

const steps = [
  {
    title: "1. 종이에 소중한 고민을 익명으로 적어주세요",
    desc: "진짜이야기(이메일)로 작성하지 않아도 온라인 온기편지로 작성해주세요\n그리고 종이 위에 담긴 당신의 진짜 사연을 솔직히 써주세요",
  },
  {
    title: "2. 편지코드를 발급받아요",
    desc: "내 편지에서 편지코드를 발급받아서 편지의 답장 여부를 확인해주세요",
    btn: "편지코드 발급받기",
  },
  {
    title: "3. 소중한 고민의 촬영본을 업로드해주세요",
    desc: "소중한 고민의 촬영본과 온라인 온기우편함에 업로드해주시면 답장을 편지로 전달해드려요",
    btn: "온라인 온기우편함 업로드하기",
  },
  {
    title: "4. 내 편지의 상태를 확인해봐요",
    desc: "내가 보낸 고민편지의 상태를 언제든지 편지 코드로 확인해보세요\n답장이 등록된 경우 알림을 받을 수 있어요",
    btn: "내 편지 확인하기",
  },
  {
    title: "5. 답장편지를 받아보고 내 편지 상태를 바꿔주세요",
    desc: "답장을 잘 받아보았다면 온기 2차 답장도 가능해요\n답장을 받았다면 내 편지의 상태를 변경해 주세요\n답장 등록과 상태 변경은 편지 코드로 확인 가능해요",
    btn: "내 편지 확인하기",
  },
  {
    title: "6. 답장편지를 받아보고 내 편지 상태를 바꿔주세요",
    desc: "답장을 잘 받아보았다면 온기 2차 답장도 가능해요\n답장을 받았다면 내 편지의 상태를 변경해 주세요\n답장 등록과 상태 변경은 편지 코드로 확인 가능해요",
    btn: "내 편지 확인하기",
  },
  {
    title: "7. 온기우체부에게 감사함을 전해보세요",
    desc: "마음의 온정을 모두 나누시면 온기우체부에게 감사의 편지나 답신 이벤트에 남길 수 있어요\n새로운 온기의 이야기도요",
    btn: "감사 편지 쓰기",
  },
];

const OnlineGuide = () => (
  <div className="w-full">
    {/* 온라인 온기우편함 소개 */}
    <section className="pt-10 pb-6 bg-[#FFFBF0]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-3 text-lg text-[#A38951] font-semibold">
          INTRODUCE
        </div>
        <div className="text-center text-2xl font-bold mb-4 text-[#433310]">
          온라인 온기우편함
        </div>
        <div className="text-center text-base font-semibold mb-2 text-[#433310]">
          "온라인으로도 온기를 나눠요"
        </div>
        <div className="flex flex-col items-center my-4">
          <img
            src="/online1.png"
            alt="온라인 온기우편함"
            className="w-[500px] h-[300px] object-contain mb-2"
          />
          <div className="bg-[#FFF9EB] rounded px-4 py-2 text-[#A38951] font-medium text-base mt-1 shadow-sm">
            "소중한 고민을 익명으로 보내주시면, 손편지로 답장을 전해드려요."
          </div>
        </div>
        <div className="text-center text-[#433310] text-base leading-relaxed px-2 mb-1">
          2017년 2월, 연세대학교에만 한정된 상담형 동아리 활동을 온라인화 해보자는<br />
          움직임으로 온라인 온기우편함이 시작됐어요.<br />
          <br />
          전국 48개 대학, 단체, 지자체에 온라인 우편함이 설치되어 있으며<br />
          상담 신청은 완전 무료, 언제든 익명으로 참여할 수 있습니다.
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

export default OnlineGuide;
