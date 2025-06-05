import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

const CodeRegisterModal = ({ onSubmit, onClose }) => {
  const [inputCode, setInputCode] = useState("");
  const [myRegisterCodes, setMyRegisterCodes] = useState(null);
  const [issuedAt, setIssuedAt] = useState(null);
  

  useEffect(() => {
    const fetchLatestIssuedCode = async () => {
      try {
        const response = await axiosInstance.get("/api/letters/my");
  
        const issuedLetters = response.data
          .filter((letter) => letter.status === "ISSUED");
  
        if (issuedLetters.length > 0) {
          // 가장 최근 코드 찾기 (issuedAt 기준 내림차순 정렬 후 첫 번째)
          const latest = issuedLetters.sort(
            (a, b) => new Date(b.issuedAt) - new Date(a.issuedAt)
          )[0];

          setIssuedAt(latest.issuedAt);
          setMyRegisterCodes(latest.code); // 코드 1개만 배열로 저장
        } else {
          setMyRegisterCodes(null);
          setIssuedAt(null);
        }
      } catch (error) {
        console.error("발급한한된 코드 조회 실패:", error);
      }
    };


  
    fetchLatestIssuedCode();
  }, []);

  const formatDateTime = (iso) => {
    const date = new Date(iso);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()).padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    if (!inputCode.trim()) return;
    onSubmit(inputCode);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-96 text-center relative border-2 border-[#FFD233]">
        <h2 className="text-xl font-semibold text-[#3A2A10] mb-4">
          편지 코드 입력
        </h2>

        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="예: 12345678"
          className="w-full border border-[#FFD233] rounded-lg px-4 py-2 mb-4 text-[#3A2A10] focus:outline-none focus:ring-2 focus:ring-[#FFD233]"
        />

        <p className="text-sm text-[#3A2A10] mb-6">
          발급받은 코드를 정확히 입력해주세요
        </p>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-[#C0A060] hover:text-[#3A2A10] text-xl"
          aria-label="닫기"
        >
          ✕
        </button>
        {/* 아래에 코드 목록 보여주기 */}
        <div className="mt-6 text-left mb-4">
          <p className="text-sm font-semibold text-[#3A2A10] mb-2">
            내가 가장 최근 발급한 코드
          </p>
          {myRegisterCodes ? (
            <>
              <ul className="list-disc list-inside text-sm text-[#3A2A10]">
                <li>{myRegisterCodes}</li>
              </ul>
              {issuedAt && (
                <p className="text-xs text-gray-500 mt-1">
                  발급일: {formatDateTime(issuedAt)}
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-gray-400">최근에 발급한 코드가 없습니다.</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#FFD233] text-[#3A2A10] px-6 py-2 rounded-lg font-semibold hover:bg-[#e6bd00] transition"
        >
          등록
        </button>

        
      </div>
    </div>
  );
};

export default CodeRegisterModal;
