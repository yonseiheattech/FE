import { useNavigate } from "react-router-dom";
import { useState } from "react";

const VolLetterMenu = () => {
  const navigate = useNavigate();
  const [openEducation, setOpenEducation] = useState(false);

  return (
    <div className="w-[180px] bg-[#FFFBF0] p-4 rounded">
      <h2 className="text-[#3A2A10] text-lg font-bold mb-6">온기우체부 공간</h2>

      <button
        onClick={() => navigate("/volunteer/my-letter")}
        className="w-full text-left border-b border-[#D6BA83] text-[#3A2A10] text-base py-3 hover:font-semibold"
      >
        내가 답장한 편지들
      </button>
      <button
        onClick={() => navigate("/volunteer/write-together")}
        className="w-full text-left border-b border-[#D6BA83] text-[#3A2A10] text-base py-3 hover:font-semibold"
      >
        편지 함께 쓰기
      </button>
      <button
        onClick={() => setOpenEducation(!openEducation)}
        className="w-full text-left border-b border-[#D6BA83] text-[#3A2A10] text-base py-3 hover:font-semibold"
      >
        편지 작성 교육
      </button>

      {/* 하위 메뉴 */}
      {openEducation && (
        <div className="ml-2 mt-1 flex flex-col gap-1">
          <button
            onClick={() => alert("준비중입니다.")}
            className="text-left text-sm text-[#8B6E3A] hover:text-[#3A2A10] px-2 py-1"
          >
            편지 작성 가이드라인
          </button>
          <button
            onClick={() => navigate("/volunteer/llm-practice")}
            className="text-left text-sm text-[#8B6E3A] hover:text-[#3A2A10] px-2 py-1"
          >
            LLM 편지 작성 연습
          </button>
        </div>
      )}
      
    </div>
  );
};

export default VolLetterMenu;
