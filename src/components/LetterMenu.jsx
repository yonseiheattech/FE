import { useNavigate, useLocation } from "react-router-dom";

const LetterMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <div className="w-[180px] bg-[#FFFBF0] p-4 rounded">
      <h2 className="text-[#3A2A10] text-lg font-bold mb-6">내 편지</h2>

      <button
        onClick={() => navigate("/code")}
        className={`w-full text-left border-b border-[#D6BA83] text-[#3A2A10] text-base py-3 hover:font-semibold ${
          currentPath === "/code" ? "font-bold" : ""
        }`}
      >
        코드 생성
      </button>
      <button
        onClick={() => navigate("/my-letter")}
        className={`w-full text-left border-b border-[#D6BA83] text-[#3A2A10] text-base py-3 hover:font-semibold ${
          currentPath === "/my-letter" ? "font-bold" : ""
        }`}
      >
        지금 내 편지는?
      </button>
    </div>
  );
};

export default LetterMenu;
