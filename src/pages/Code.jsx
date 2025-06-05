import LetterMenu from "../components/LetterMenu";
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import CodeModal from "../components/code/CodeModal";
import CodeRegisterModal from "../components/code/CodeRegisterModal";

const Code = () => {
  const [code, setCode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const handleGenerateCode = async () => {
    try {
      const response = await axiosInstance.get("api/letters/generate-code");
      setCode(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("코드 생성 실패:", error);
    }
  };

  const handleSubmitCode = async (enteredCode) => {
    try {
      const response = await axiosInstance.post("/api/letters/register", {
        code: enteredCode,
      });
      console.log("등록 성공", response.data);
    } catch (error) {
      console.error("등록 실패", error);
    } finally {
      setIsRegisterModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0] flex pt-10">
      {/* 왼쪽 메뉴 */}
      <div className="pl-8">
        <LetterMenu />
      </div>

      {/* 오른쪽 콘텐츠 영역 (필요하면 여기에 추가) */}
      <div className="flex-1 p-8">
        {/* 상단 타이틀 */}
        <div className="flex items-center mb-6">
          <img src="/logo.png" alt="편지 아이콘" className="w-12 h-6 mr-2" />
          <h1 className="text-2xl font-bold text-[#3A2A10]">코드 생성</h1>
        </div>
        <p className="text-[#3A2A10] mb-10">
          편지의 코드를 생성해서 내 편지를 조회해요
        </p>

        {/* 전체 카드 래퍼 */}
        <div className="space-y-10 bg-white p-8 rounded-3xl shadow-sm">
          {/* 1. 편지 코드 생성 */}
          <section>
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 rounded-full bg-[#FFD233] mr-2" />
              <h2 className="text-lg font-semibold text-[#3A2A10]">
                편지 코드 생성
              </h2>
            </div>
            <div className="border border-[#FFD233] rounded-xl p-6 text-[#3A2A10]">
              아래 버튼을 눌러 코드를 생성해주세요
              <div className="mt-4">
                <button
                  onClick={handleGenerateCode}
                  className="bg-[#5D3B00] text-white px-4 py-2 rounded-md"
                >
                  생성하기
                </button>
              </div>
            </div>
          </section>

          {/* 2. 편지 코드 작성 */}
          <section>
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 rounded-full bg-[#FFD233] mr-2" />
              <h2 className="text-lg font-semibold text-[#3A2A10]">
                편지 코드 작성
              </h2>
            </div>
            <div className="border border-[#FFD233] rounded-xl p-6 flex items-center gap-4 text-[#3A2A10]">
              <img
                src="/sample_letter.png"
                alt="편지 예시"
                className="w-[160px] rounded-lg"
              />
              <p>생성한 편지 코드를 편지지에 작성해주세요</p>
            </div>
          </section>

          {/* 3. 편지 등록 */}
          <section>
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 rounded-full bg-[#FFD233] mr-2" />
              <h2 className="text-lg font-semibold text-[#3A2A10]">
                편지 등록
              </h2>
            </div>
            <div className="border border-[#FFD233] rounded-xl p-6 text-[#3A2A10]">
              아래 버튼을 눌러 편지를 등록해주세요
              <br />
              등록된 편지의 정보를 조회할 수 있어요
              <div className="mt-4">
                <button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="bg-[#5D3B00] text-white px-4 py-2 rounded-md"
                >
                  등록하기
                </button>

              </div>
            </div>
          </section>
        </div>
      </div>
      {isModalOpen && (
        <CodeModal code={code} onClose={() => setIsModalOpen(false)} />
      )}
      {isRegisterModalOpen && (
        <CodeRegisterModal
          onSubmit={handleSubmitCode}
          onClose={() => setIsRegisterModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Code;
