import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LetterMenu from "../components/LetterMenu";
import axiosInstance from "../api/axiosInstance";

function getStatusMessage(status) {
  switch (status) {
    case "REGISTERED":
      return "편지는 등록되었고 배송중입니다.";
    case "DELIVERED":
      return "도착하였습니다";
    case "REPLIED":
      return "답장이 작성되었고 온기님께 전달 중중입니다.";
    case "ISSUED":
      return "편지 세부 상황을 확인하려면 등록";
    default:
      return "편지 상태를 확인할 수 없습니다.";
  }
}

const LetterDetailPage = () => {
  const { code } = useParams();
  const [replyDate, setReplyDate] = useState("");
  const [letter, setLetter] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLetter = () => {
    axiosInstance
      .get(`/api/letters/my/${code}`)
      .then((response) => {
        setLetter(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("편지 상세 정보 가져오기 실패", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLetter();
  }, [code]);

  const handleSubmit = () => {
    axiosInstance
      .post(`/api/letters/deliver`, {
        code: code,
      })
      .then((response) => {
        alert("답장 수령 완료");
        fetchLetter();
      })
      .catch((error) => {
        alert("답장 수령 실패", error);
      });
  };

  // 감사 인사 관련 state
  const [thankYouMessage, setThankYouMessage] = useState("");
  const [thankYouSent, setThankYouSent] = useState(false);

  const handleThankYouSubmit = () => {
    if (!thankYouMessage.trim()) {
      alert("감사 인사를 입력해주세요!");
      return;
    }

    axiosInstance
      .post(`/api/thanks/${code}`, {
        code: code,
        content: thankYouMessage
      })
      .then((response) => {
        alert("감사 인사 전달 완료");
        setThankYouSent(true);
      })
      .catch((error) => {
        alert("감사 인사 전달 실패", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#fefbf5]">
      <LetterMenu />
      <div className="flex-1 px-6 py-10 flex flex-col items-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-[#3A2A10] mb-1">
            📧 지금 내 편지는?
          </h1>
          <p className="text-[#8A734F] text-sm mb-6">
            내 편지의 상태를 등록하고 확인할 수 있어요
          </p>

          <div className="text-lg font-bold text-[#3A2A10] mb-2">
            편지 코드 <span className="ml-2 font-normal">{code}</span>
          </div>
          <p className="mb-8">{getStatusMessage(letter?.status)}</p>

          {letter?.status === "REPLIED" && (
            <>
              <div>
                <label className="block text-[#3A2A10] font-bold mb-2 text-base">
                  답장을 받았어요
                </label>
                <input
                  type="date"
                  value={replyDate}
                  onChange={(e) => setReplyDate(e.target.value)}
                  className="border border-[#D6BA83] rounded px-4 py-2 w-full text-sm text-[#8A734F] placeholder:text-[#D6BA83]"
                  placeholder="답장 받은 날짜를 선택해주세요"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="mt-6 px-6 py-2 rounded bg-[#8A734F] text-white text-sm font-semibold hover:bg-[#705e3e]"
              >
                답장 수령 완료
              </button>
            </>
          )}
          {/* DELIVERED 상태에서 감사 인사 입력 박스 노출 */}
          {letter?.status === "DELIVERED" && (
            <div className="mt-10">
              <label className="block text-[#3A2A10] font-bold mb-2 text-base">
                답장 써준 봉사자에게 감사의 인사를 남겨보세요
              </label>
              {/* 입력 박스 항상 노출 */}
              <textarea
                value={thankYouMessage}
                onChange={(e) => setThankYouMessage(e.target.value)}
                rows={3}
                maxLength={300}
                className="border border-[#D6BA83] rounded px-4 py-2 w-full text-sm text-[#8A734F] placeholder:text-[#D6BA83] resize-none"
                placeholder="감사 인사를 입력해주세요"
              />
              <div className="text-xs text-[#D6BA83] text-right mt-1">
                {thankYouMessage.length} / 300
              </div>
              <button
                onClick={handleThankYouSubmit}
                className="mt-4 px-6 py-2 rounded bg-[#A38951] text-white text-sm font-semibold hover:bg-[#8A734F]"
              >
                감사 인사 보내기
              </button>

              {/* 감사 인사 성공 시 박스 추가 */}
              {thankYouSent && (
                <div className="border border-[#A38951] rounded bg-[#f7f2e6] p-4 mt-6">
                  <div className="font-bold text-[#3A2A10] mb-2">
                    내가 남긴 감사 인사
                  </div>
                  <div className="text-[#8A734F]">{thankYouMessage}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LetterDetailPage;
