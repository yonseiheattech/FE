import React, { useState } from "react";

const CodeRegisterModal = ({ onSubmit, onClose }) => {
  const [inputCode, setInputCode] = useState("");

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
