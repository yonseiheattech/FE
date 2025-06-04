import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const MapBox = () => {
  const [postBoxes, setPostBoxes] = useState([]);

  // 1. 우편함 데이터 API로 받아오기
  useEffect(() => {
    axiosInstance
      .get("/api/postboxes")
      .then((res) => setPostBoxes(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 2. 지도 띄우고 마커 그리기
  useEffect(() => {
    if (postBoxes.length === 0) return; // 데이터 없으면 실행X

    // 이미 Kakao Maps script 있으면 재로딩만
    if (document.querySelector('script[src*="kakao.com"]')) {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => initMap(postBoxes));
      }
      return;
    }

    // Kakao Maps script 동적 삽입
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=49077fac0d3c65f2ca54477167616583&autoload=false";
    script.async = true;
    script.onload = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("❌ window.kakao.maps 가 없습니다.");
        return;
      }
      window.kakao.maps.load(() => initMap(postBoxes));
    };
    script.onerror = () => {
      console.error("❌ Kakao script 로드 실패 으악");
    };

    document.head.appendChild(script);

    // 지도 생성 및 마커 표시 함수
    function initMap(boxes) {
      const container = document.getElementById("map");

      const createMap = (lat, lng) => {
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        let activeOverlay = null;
        boxes.forEach((box) => {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              box.latitude,
              box.longitude
            ),
            map,
          });

          const [mainAddress, detailAddress] = box.address.split(",");

          const content = `
            <div style="width: 250px; padding: 12px; background: white; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.15); font-size: 14px;">
              <div style="font-weight: bold; margin-bottom: 6px;">${box.name}</div>
              <img src="${box.imageUrl}"
                    onerror="this.src=''"
                    style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px;" />
              <div style="margin-top: 8px; color: #555; word-wrap: break-word; white-space: normal;">
                <div><strong>주소:</strong> ${mainAddress ?? box.address}</div>
                <div><strong>상세 위치:</strong> ${detailAddress ?? "-"}</div>
              </div>
            </div>
          `;

          const overlay = new window.kakao.maps.CustomOverlay({
            content,
            position: new window.kakao.maps.LatLng(
              box.latitude,
              box.longitude
            ),
            yAnchor: 1,
          });

          marker.addListener("click", () => {
            if (activeOverlay) {
              activeOverlay.setMap(null);
            }
            overlay.setMap(map);
            activeOverlay = overlay;
          });

          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="padding:6px 12px;font-size:13px;font-weight:bold;">${box.name}</div>`,
          });
          marker.addListener("mouseover", () => infowindow.open(map, marker));
          marker.addListener("mouseout", () => infowindow.close());
        });

        window.kakao.maps.event.addListener(map, "click", () => {
          if (activeOverlay) {
            activeOverlay.setMap(null);
            activeOverlay = null;
          }
        });
      };

      // 내 위치(Geo) → 실패하면 서울시청 기준
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          createMap(latitude, longitude);
        },
        (error) => {
          createMap(37.5665, 126.978); // 서울시청 좌표
        }
      );
    }
  }, [postBoxes]);

  return (
    <div className="w-[760px] h-[532px] bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
      {/* 상단 텍스트와 버튼 */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-auto h-6" />
          <h2 className="text-lg font-bold">온기우편함 찾기</h2>
        </div>
        <button
          className="border border-[#6B3E00] text-[#6B3E00] text-sm px-3 py-1 rounded-full"
          onClick={() => alert("조건 검색 기능은 아직 준비중입니다.")}
        >
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
