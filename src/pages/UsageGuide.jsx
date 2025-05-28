import { useState } from "react";
import OfflineGuide from "../components/guide/OfflineGuide";
import OnlineGuide from "../components/guide/OnlineGuide";
import LetterGuide from "../components/guide/LetterGuide";
import { Link } from "react-router-dom";
const btns = [
  { label: "오프라인 온기우편함", value: "offline" },
  { label: "온라인 온기우편함", value: "online" },
  { label: "온기레터", value: "letter" },
];

const UsageGuideMethodTab = ({ selected, onSelect }) => (
  <div className="flex gap-12 justify-center my-8">
    {btns.map((btn) => (
      <button
        key={btn.value}
        className={
          "flex flex-col items-center cursor-pointer pb-1 px-3 text-lg font-medium transition " +
          (selected === btn.value
            ? "text-[#A38951] border-b-4 border-[#A38951]"
            : "text-gray-400 border-b-4 border-transparent hover:text-[#A38951]")
        }
        onClick={() => onSelect(btn.value)}
      >
        {/* 아이콘 넣고 싶으면 여기에 <img ... /> */}
        {btn.label}
      </button>
    ))}
  </div>
);

const UsageGuide = () => {
  const [selected, setSelected] = useState("offline"); // 기본값

  return (
    <div className="w-full bg-[#FFFBF0] min-h-screen">
      {/* 상단 배너 */}
      <div className="relative w-full h-[200px] md:h-[260px] bg-[#D9C7A2] overflow-hidden flex items-center">
        {/* 배경 이미지 */}
        <img
          src="/guide-banner.png" // public 폴더에 맞는 파일명으로 변경!
          alt="온기우편함 배너"
          className="absolute w-full h-full object-cover z-0"
          draggable={false}
        />
        {/* 오버레이 */}
        <div className="absolute w-full h-full bg-black/30 z-10" />
        
      </div>
      {/* 탭버튼 */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mt-10 mb-2 text-lg text-[#A38951] font-semibold">
          INTRODUCE
        </div>
        <div className="text-center text-2xl font-bold mb-4">
          온기우편함은 세 가지 방법으로 온기를 전해요
        </div>
        {/* 탭 버튼 */}
        <UsageGuideMethodTab selected={selected} onSelect={setSelected} />
      </div>
      {/* 아래에 각 방법별 안내 컴포넌트 */}
      {selected === "offline" && <OfflineGuide />}
      {selected === "online" && <OnlineGuide />}
      {selected === "letter" && <LetterGuide />}

      {/* 온기우체부 지원 안내 섹션 */}
      <div className="w-full bg-white flex justify-center py-16">
        <div className="flex flex-col items-center w-full">
          {/* INTRODUCE & 메인 문구 */}
          <div className="mb-7 text-center">
            <div className="mb-2 text-lg text-[#A38951] font-semibold">
              INTRODUCE
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#433310] leading-tight">
              나도 온기를 나누고 싶다면?
              <br />
              온기우체부에 지원하세요!
            </div>
          </div>
          {/* 3등분 컨텐츠 */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl">
            {/* 왼쪽: 목록 */}
            <ul className="text-[#433310] text-base md:text-lg text-left min-w-[160px] font-medium flex-1">
              <li className="list-disc ml-6 mb-1">정기 온기우체부</li>
              <li className="list-disc ml-6 mb-1">일일 온기우체부</li>
              <li className="list-disc ml-6">랜선 온기우체부</li>
            </ul>
            {/* 세로 구분선 */}
            <div className="h-24 w-px bg-[#A38951] mx-8 hidden md:block" />
            {/* 중앙: 설명 */}
            <div className="text-center text-[#433310] text-base md:text-lg flex-1 min-w-[220px] font-medium leading-7">
              각 온기우체부는 각자의 방법으로
              <br />
              답장 편지를 작성해서 온기를 나눠요
            </div>
            {/* 세로 구분선 */}
            <div className="h-24 w-px bg-[#A38951] mx-8 hidden md:block" />
            {/* 오른쪽: 통계 */}
            <div className="text-[#433310] text-base md:text-lg text-left flex-1 min-w-[180px] font-medium leading-7">
              현재 <span className="font-bold">700명의 온기우체부</span> 분들이
              <br />한 달 약{" "}
              <span className="font-bold">3,000통의 답장 편지</span>를<br />
              작성하고 있어요
            </div>
          </div>
          {/* 버튼 */}
          <Link
            to="/volunteer"
            className="mt-8 bg-[#A38951] hover:bg-[#866e35] text-white font-semibold px-7 py-2 rounded transition text-base shadow-sm"
          >
            온기우체부 지원하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsageGuide;
