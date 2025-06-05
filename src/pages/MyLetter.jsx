import React, {useEffect, useState}   from "react";
import LetterMenu from "../components/LetterMenu";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const getStatusClass = (status) => {
  switch (status) {
    case "REGISTERED":
      return "bg-yellow-200 text-yellow-900";
    case "DELIVERED":
      return "bg-blue-100 text-blue-800";
    case "REPLIED":
      return "bg-green-100 text-green-800";
    default:
      return "bg-orange-100 text-orange-800";
  }
};

const MyLetter = () => {
  const navigate = useNavigate();
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/api/letters/my")
      .then((response) => {
        const sorted = response.data.sort(
          (a, b) => new Date(b.issuedAt) - new Date(a.issuedAt)
        );
        setLetters(sorted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("편지 목록 가져오기 실패", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBF0] flex pt-10">
      {/* 왼쪽 메뉴 */}
      <div className="pl-8">
        <LetterMenu />
      </div>

      {/* 오른쪽 콘텐츠 */}
      <div className="flex-1 p-8">
        {/* 상단 타이틀 */}
        <div className="flex items-center mb-6">
          <img src="/logo.png" alt="편지 아이콘" className="w-12 h-6 mr-2" />
          <h1 className="text-2xl font-bold text-[#3A2A10]">지금 내 편지는?</h1>
        </div>

        <p className="text-[#3A2A10] mb-10">
          내 편지의 상태를 등록하고 확인할 수 있어요
        </p>

        {/* 테이블 영역 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-left table-fixed">
            <thead className="bg-gray-100">
              <tr className="text-sm text-gray-600">
                <th className="w-1/3 px-6 py-3">편지 코드</th>
                <th className="w-1/3 px-6 py-3">보낸 날짜</th>
                <th className="w-1/3 px-6 py-3">편지 상태</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={3} className="text-center py-8">
                    불러오는 중...
                  </td>
                </tr>
              ) : letters.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center py-8">
                    내 편지가 없습니다.
                  </td>
                </tr>
              ) : (
                letters.map((letter, idx) => (
                  <tr
                    key={idx}
                    onClick={() => navigate(`/my-letter/${letter.code}`)}
                    className="border-b cursor-pointer hover:bg-yellow-50"
                  >
                    <td className="px-6 py-4">{letter.code}</td>
                    <td className="px-6 py-4">{letter.registeredAt ? letter.registeredAt.slice(0, 10) : ""}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(
                          letter.status
                        )}`}
                      >
                        {letter.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination 부분은 추후 서버에서 페이지네이션 구현하면 수정 */}
        <div className="flex justify-center mt-6 space-x-2 text-sm">
          <button>{"<"}</button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <button
              key={n}
              className={`px-2 py-1 rounded ${
                n === 1
                  ? "bg-yellow-400 text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {n}
            </button>
          ))}
          <button>{">"}</button>
          <button>{">>"}</button>
        </div>
      </div>
    </div>
  );
};

export default MyLetter;
