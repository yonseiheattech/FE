import React, { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const ReplyCodeModal = ({ onClose, onSuccess }) => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    if (!code.trim()) {
      alert("코드를 입력해주세요.");
      return;
    }

    axiosInstance
      .post("/api/letters/reply", {
        code,
      })
      .then(() => {
        alert("답장 완료");
        onSuccess();
        onClose();
      })
      .catch((error) => {
        alert("답장 실패");
        console.error("답장 실패", error);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-80 text-center relative border-2 border-[#FFD233]">
        <h2 className="text-xl font-semibold text-[#3A2A10] mb-4">
          편지 코드 입력
        </h2>
        <input
          type="text"
          placeholder="편지 코드"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-6 text-center text-lg tracking-widest"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-[#C0A060] hover:text-[#3A2A10] text-xl"
          aria-label="닫기"
        >
          ✕
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#FFD233] text-[#3A2A10] px-4 py-2 rounded-lg font-semibold hover:bg-[#e6bd00] transition"
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default ReplyCodeModal;
