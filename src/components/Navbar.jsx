import { Globe } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import axiosInstance from "../api/axiosInstance";

export default function Navbar() {
  const { user, isLoggedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      {/*Left - 로고 */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-auto h-6" />
        <span className="font-bold text-yellow-500">온기</span>
        <span className="font-bold text-[#6B3E00]">우편함</span>
      </div>

      {/* Center - 메뉴 */}
      <ul className="flex gap-10 font-semibold text-sm text-black">
        <li className="hover:text-[#6B3E00] cursor-pointer">온기 소개</li>
        <li className="hover:text-[#6B3E00] cursor-pointer">이용 방법</li>
        <li className="hover:text-[#6B3E00] cursor-pointer">공지사항</li>
        <li className="text-[#6B3E00] cursor-pointer font-bold">내 편지</li>
      </ul>

      {/* Right - 언어 선택 & 로그인 */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-gray-600 cursor-pointer">
          <Globe className="w-4 h-4" />
          <span className="text-sm">KR</span>
        </div>
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-800">
              {user}님
            </span>
            <button 
              className="bg-[#6B3E00] text-white px-4 py-1.5 rounded-md text-sm font-semibold"
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
        ) : (
          <button className="bg-[#6B3E00] text-white px-4 py-1.5 rounded-md text-sm font-semibold">
            로그인
          </button>
        )}
      </div>
    </nav>
  );
}
