import React, { useState } from "react";
import VolLetterMenu from "../components/volunteer/VolLetterMenu";

const LLMPractice = () => {
  const [reply, setReply] = useState("");
  const [language, setLanguage] = useState("한국어");

  const maxChars = 2500;

  const handleCorrect = () => {
    alert("통신은 준비중입니다.");
  };

  return (
    <div className="flex w-full bg-[#FFFBF0] px-8 py-12 gap-8">
      <div className="mr-8">
        <VolLetterMenu />
      </div>
      {/* 왼쪽: 예시 손편지 */}
      <div className="bg-[#FEF9EC] shadow rounded-xl p-6 w-[400px] text-[#3A2A10]">
        <h2 className="text-xl font-bold text-[#B88C00] mb-4">
          학습한 가이드라인을 떠올리며
          <br />
          아래의 편지에 대한 답장을 작성해볼까요?
        </h2>
        <img
          src="/sample_letter.png"
          alt="예시 손편지"
          className="w-full rounded-md border border-[#EBD9A6]"
        />
      </div>

      {/* 오른쪽: 답장 작성 폼 */}
      <div className="flex-1 bg-white shadow rounded-xl p-6 flex flex-col justify-between">
        {/* 언어 선택 */}
        <div className="mb-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border px-3 py-2 rounded text-sm"
          >
            <option value="한국어">한국어</option>
            <option value="English">English</option>
            <option value="日本語">日本語</option>
          </select>
        </div>

        {/* 텍스트 입력 */}
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="답장을 작성해보세요."
          rows={15}
          className="w-full border rounded p-4 text-sm resize-none focus:outline-none"
        />

        {/* 하단 버튼 + 글자 수 */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleCorrect}
            className="bg-[#FFD233] hover:bg-[#e6bd00] text-[#3A2A10] font-semibold px-4 py-2 rounded-lg"
          >
            교정하기
          </button>
          <span className="text-sm text-gray-500">
            {reply.length} / {maxChars}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LLMPractice;
