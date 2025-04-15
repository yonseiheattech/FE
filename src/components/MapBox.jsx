import { useEffect } from "react";

const MapBox = () => {
  useEffect(() => {
    if (document.querySelector('script[src*="kakao.com"]')) {
      console.log("⚠️ Kakao Maps SDK already loaded.");
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=49077fac0d3c65f2ca54477167616583&autoload=false";
    script.async = true;

    script.onload = () => {
      console.log("✅ Kakao Maps SDK 로드 완료");
      if (!window.kakao || !window.kakao.maps) {
        console.error("❌ window.kakao.maps 가 없습니다.");
        return;
      }

      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        

        



        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);

        console.log("성공");
      });
    };

    script.onerror = () => {
      console.error("❌ Kakao script 로드 실패 으악");
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-[804px] h-[532px] bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
      {/* 상단 텍스트와 버튼*/}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-auto h-6" />
          <h2 className="text-lg font-bold">온기우편함 찾기</h2>
        </div>

        <button className="border border-[#6B3E00] text-[#6B3E00] text-sm px-3 py-1 rounded-full">
          조건 검색
        </button>
      </div>

      <div className="w-[717px] h-[413px] mx-auto rounded-lg overflow-hidden">
        <div id="map" className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default MapBox;
