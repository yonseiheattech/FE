import LoginBox from "../components/home/LoginBox";
import MapBox from "../components/home/MapBox";
import LoggedInBox from "../components/LoggedInBox";
import { useAuth } from "../contexts/AuthContext";
import React, { useRef, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";



const Home = () => {
  const { isLoggedIn, loading } = useAuth();
  const [thanksMessages, setThanksMessages] = useState([]);

  useEffect(() => {
    axiosInstance.get("/api/thanks")
      .then((res) => { setThanksMessages(res.data); })
      .catch((err) => { console.log(err); });
  }, []);

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollDiv = scrollRef.current;
    if (scrollDiv) {
      scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }
  }, [thanksMessages.length]);

  return (
    <div className="flex min-h-screen justify-center items-start pt-24 px-6 bg-gradient-to-br from-[#FFFBE9] to-[#FFFDF6] gap-20">
      {/* 왼쪽 영역 */}
      <div className="flex-1 flex flex-col gap-10 max-w-md">
        {/* 로그인 영역 */}
        <section>
          {loading ? (
            <div className="text-gray-500">로딩 중...</div>
          ) : isLoggedIn ? (
            <LoggedInBox />
          ) : (
            <LoginBox />
          )}
        </section>

        {/* 실시간 온기 박스 */}
        <section>
          <div className="w-full bg-white rounded-3xl border border-[#DCDCDC] px-7 py-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#3A2A10] font-bold text-lg">
                실시간 온기
              </span>
              <button>{/* 아이콘 */}</button>
            </div>
            {/* 스크롤 가능한 영역 */}
            <div ref={scrollRef} className="flex flex-col gap-3 max-h-48 overflow-y-auto pr-2">
              {thanksMessages.map((item) => (
                <div
                  key={item.id}
                  className="max-w-xs bg-[#FEF3CC] text-[#3A2A10] rounded-xl px-4 py-3 shadow-sm relative ml-4"
                >
                  {item.content}
                  {/* 왼쪽 위 꼭짓점 꼬리 */}
                  <span
                    className="absolute left-0 top-0 w-4 h-4 bg-[#FEF3CC] rotate-45 rounded-sm"
                    style={{ transform: "translate(-40%, -40%)" }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-full max-w-[760px] flex flex-col items-center">
        {/* 지도 */}
        <div className="w-full mb-10">
          <MapBox />
        </div>

        {/* 4개 박스 */}
        <div className="w-full flex flex-row justify-between gap-x-8 mb-12">
          <HomeCard
            img="온기우편함 이용.png"
            alt="온기우편함 이용 안내"
            label={
              <>
                온기우편함
                <br />
                이용 안내
              </>
            }
            yellowCircle
          />
          <HomeCard
            img="온라인 온기우편함.png"
            alt="온라인 온기우편함 이용 안내"
            label={
              <>
                온라인 온기우편함
                <br />
                이용 안내
              </>
            }
          />
          <HomeCard
            img="온기우체부 지원.png"
            alt="온기우체부 지원하기"
            label={
              <>
                온기우체부
                <br />
                지원하기
              </>
            }
            yellowCircle
          />
          <HomeCard
            img="랜선 온기우체부.png"
            alt="랜선 온기우체부 지원하기"
            label={
              <>
                랜선 온기우체부
                <br />
                지원하기
              </>
            }
            yellowCircle
          />
        </div>

        {/* 맨 아래 버튼 3개 */}
        <div className="w-full flex flex-row justify-between gap-6">
          <HomeBottomButton  label="온기레터 구독하기" />
          <HomeBottomButton  label="파트너십 문의" />
          <HomeBottomButton  label="온기 후원하기" />
        </div>
      </div>
    </div>
  );
};

// 홈 박스 카드 컴포넌트
function HomeCard({ img, alt, label, yellowCircle }) {
  return (
    <div className="w-[185px] h-[247px] bg-white border border-[#DCDCDC] rounded-[28px] shadow-[0_4px_4px_rgba(0,0,0,0.04)] flex flex-col items-center justify-end relative overflow-hidden">
      {yellowCircle && (
        <div className="w-[145px] h-[145px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,215,4,0.44)_0%,#FFF_68.5%)] absolute top-[22px] left-1/2 -translate-x-1/2 -z-10"></div>
      )}
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <img
          src={img}
          alt={alt}
          className="max-w-[85%] max-h-[110px] object-contain mx-auto my-4 z-10"
        />
        <div className="text-center text-[#3A2A10] font-bold text-[18px] leading-[23px] tracking-[-0.36px] mb-6 z-10">
          {label}
        </div>
      </div>
    </div>
  );
}

// 홈 하단 버튼 컴포넌트
function HomeBottomButton({ label }) {
  return (
    <button className="w-[245px] h-[70px] flex justify-center items-center gap-2 border border-[#DCDCDC] rounded-[40px] bg-[#FFF3B3] shadow-[0_4px_4px_0px_rgba(0,0,0,0.04)] text-[#3A2A10] font-bold text-[18px]"  onClick={() => alert(" 준비중입니다.")}>
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="30px"
        viewBox="0 0 24 30"
        fill="none"
      >
        <path
          d="M9 22.5L15 15L9 7.5"
          stroke="#3A2A10"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default Home;
