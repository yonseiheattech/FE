import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoggedInBox = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-[387px] bg-gradient-to-b from-[#FFFBE9] to-[#FFFDF6] rounded-[40px] shadow-md p-6 flex flex-col items-center text-[#3A2A10] font-[Pretendard]">
      {/* 프로필 영역 */}
      <div className="flex flex-col items-center mb-4">
        <img
          src="/랜선 온기우체부.png"
          alt="편지 아이콘"
          className="w-30 h-20 mb-1"
        />
        <div className="text-sm text-[#3A2A10] font-semibold">온기</div>
        <div className="text-xl font-bold">{user} 님</div>
        <button className="mt-2 px-3 py-1 text-sm border border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-100" onClick={() => alert("준비중입니다.")}>
          내 정보 수정
        </button>
      </div>

      {/* 온도 바 */}
      <div className="w-full flex items-center justify-between mt-2">
        <div className="flex-1 h-3 bg-[#FDECB3] rounded-full relative">
          <div
            className="absolute left-0 top-0 h-3 bg-[#FFD233] rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>
        <span className="ml-2 text-[18px] font-semibold">20℃</span>
      </div>

      {/* 배송 조회 */}
      <div className="mt-6 w-full bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[16px] font-semibold">답장 배송 조회</div>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 6l6 6-6 6"
              stroke="#3A2A10"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center text-sm">
            <img src="/랜선 온기우체부.png" alt="발송" className="w-14 h-10 mb-1" />
            <span>발송</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <img
              src="/랜선 온기우체부.png"
              alt="배송"
              className="w-14 h-10 mb-1"
            />
            <span className="font-bold text-[#FFD233]">배송</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <img src="/랜선 온기우체부.png" alt="도착" className="w-14 h-10 mb-1" />
            <span>도착</span>
          </div>
        </div>
        <p className="text-sm text-center mt-4 text-[#3A2A10]">
          답장은{" "}
          <span className="text-[#FFD233] font-semibold">배송 준비 중</span>에
          있습니다.
        </p>
        <button
          onClick={() => navigate("/my-letter")}
          className="mt-4 w-full py-2 rounded-full bg-[#FFF3B3] text-[#3A2A10] font-bold hover:bg-yellow-200"
        >
          답장 수령 후 상태 변경하기
        </button>
      </div>

      {/* 로그아웃 */}
      <button
        className="text-xs text-gray-400 underline hover:text-gray-600 mt-4"
        onClick={() => {
          axiosInstance
            .post("/api/members/logout")
            .then(() => {
              window.location.reload();
            })
            .catch((err) => {
              console.error("로그아웃 실패 from nav", err);
            });
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default LoggedInBox;
