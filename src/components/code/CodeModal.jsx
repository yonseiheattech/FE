import React from "react";

const CodeModal = ({code, onClose}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-80 text-center relative border-2 border-[#FFD233]">
        <h2 className="text-xl font-semibold text-[#3A2A10] mb-4">
          생성된 코드
        </h2>
        <div className="text-3xl font-bold text-[#5D3B00] mb-6 tracking-widest">
          {code}
        </div>
        <p className="text-sm text-[#3A2A10] mb-6">
          <span className="font-semibold text-[#C29200]">편지지에 꼭 작성해주세요!</span>
        </p>
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-[#C0A060] hover:text-[#3A2A10] text-xl"
          aria-label="닫기"
        >
          ✕
        </button>
        <button
          onClick={onClose}
          className="bg-[#FFD233] text-[#3A2A10] px-4 py-2 rounded-lg font-semibold hover:bg-[#e6bd00] transition"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default CodeModal;
