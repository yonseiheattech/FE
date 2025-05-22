import { useEffect } from "react";

const mockPostBoxes = [
  {
    name: "건국대",
    latitude: 37.54191,
    longitude: 127.0782,
    address: "서울 광진구 능동로 120, 건국대학교 학생회관 앞 우체통 옆",
    imageUrl:
      "https://postfiles.pstatic.net/MjAyNTA1MDlfOTUg/MDAxNzQ2NzczMDYxMjc4.8NYTSoJounHDUQfe3SvdDlPxlaugNkjRbz-Qc1jGFhcg.bRXE6wi-EiQ4jf7ta6uhEVU2Q2DXYI1VH1zLHwlO5l0g.JPEG/%EC%84%9C%EC%9A%B8_%EA%B1%B4%EA%B5%AD%EB%8C%80.jpg?type=w773",
  },
  {
    name: "경희대",
    latitude: 37.59523,
    longitude: 127.0519,
    address: "서울 동대문구 경희대로 26, 경희대학교 우편취급국 입구 옆",
    imageUrl:
      "https://postfiles.pstatic.net/MjAyNTA1MDlfNDYg/MDAxNzQ2NzczMDYwNzky.6MkrkphMe42EoGJcxRE8kyM3D1Aka-gOXn8--xhXG04g.s9JNdYhAdx7RC4S_ZRXJwH93qkFRI1-tTkip6DDDwIog.JPEG/%EC%84%9C%EC%9A%B8_%EA%B2%BD%ED%9D%AC%EB%8C%80.jpg?type=w773",
  },
  {
    name: "고려대",
    latitude: 37.58873,
    longitude: 127.0311,
    address:
      "서울 성북구 안암동5가 1-2, 고려대학교 서울캠퍼스우체국 앞 우체통 옆",
    imageUrl:
      "https://postfiles.pstatic.net/MjAyNTA1MDlfMjQ2/MDAxNzQ2NzczMDYxNTky._K0g60p1DNJZy90AXwJIGMfrwY-rbqVhJJAvhdh-pIog.vPvN1SDU_zdwYAeRHbGx5s-jeGOFkklS4KdujBjgTuMg.JPEG/%EC%84%9C%EC%9A%B8_%EA%B3%A0%EB%A0%A4%EB%8C%80.jpg?type=w773",
  },
  {
    name: "신촌 청년푸드스토어",
    latitude: 37.55897,
    longitude: 126.9430,
    address: "서울 서대문구 신촌역로 22-5, 신촌박스퀘어 2층 47호",
    imageUrl:
      "https://postfiles.pstatic.net/MjAyNTA1MDlfMjk5/MDAxNzQ2NzczMDU3NTEw.ANwqcLL0SZMtpuGBf9r_0rhBp37Kk1aL-tyAumJKi_Ug.XSEM02vGvRjFcGEGD4JfQNzABUgY4DrWGwkEyYSB-Gsg.JPEG/%EC%84%9C%EC%9A%B8_%EC%8B%A0%EC%B4%8C_%EC%B2%AD%EB%85%84%ED%91%B8%EB%93%9C%EC%8A%A4%ED%86%A0%EC%96%B4.jpg?type=w773",
  }
];

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

        const createMap = (lat, lng) => {
          const options = {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          let activeOverlay = null;
          // 🔥 여기서 마커 표시
          mockPostBoxes.forEach((box) => {
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

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            createMap(latitude, longitude); // 🔥 내 위치 기준 지도 + 마커 표시
          },
          (error) => {
            console.warn("위치가져오기 실패 그냥 서울시청으로 할게", error);
            createMap(37.5665, 126.978); // 🔥 서울시청 기준 지도 + 마커 표시
          }
        );
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
