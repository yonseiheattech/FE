import VolLetterMenu from "../components/volunteer/VolLetterMenu";

const liveNow = {
  title: "불금엔 편지쓰기",
  time: "5월 5일 19:00-21:00",
  participants: 34,
};

const upcomingLives = [
    {
      id: 1,
      title: "아침 힐링 편지쓰기 라이브",
      time: "5월 6일 오전 8:00 - 10:00",
    },
    {
      id: 2,
      title: "심야 편지쓰기 라이브",
      time: "5월 7일 오후 8:00 - 10:00",
    },
    {
      id: 3,
      title: "아침 힐링 편지쓰기 라이브",
      time: "5월 9일 오전 8:00 - 10:00",
    },
    {
      id: 4,
      title: "아침 힐링 편지쓰기 라이브",
      time: "5월 12일 오전 8:00 - 10:00",
    },
];



const VolWriteTogether = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF0] flex pt-10">
      {/* 왼쪽 메뉴 */}
      <div className="pl-8">
        <VolLetterMenu />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 px-8">
        {/* 상단 배너 */}
        <div className="rounded-xl overflow-hidden w-full h-52 bg-cover bg-center flex items-center mb-10" style={{
          backgroundImage: "url('/write-together1.png')"
        }}>
          <div className="bg-black/30 w-full h-full flex flex-col justify-center pl-12 text-white">
            <h2 className="text-3xl font-bold mb-2">함께 나누는 온기</h2>
            <p className="text-lg">
              ZOOM 라이브로 전국 온기우체부들과 함께<br />
              편지를 작성하며 온기를 나누어보세요!
            </p>
          </div>
        </div>

        {/* 진행 중인 LIVE */}
        <div className="mb-10">
          <div className="text-xl font-semibold mb-3">진행 중인 LIVE</div>
          <div className="flex items-center bg-[#E3D6BE] rounded-xl p-6 max-w-xl">
            <img
              src="/write-together2.png"
              alt="진행중인 LIVE"
              className="w-40 h-28 object-cover rounded-lg mr-6"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">라이브 진행 중</span>
                <span className="text-sm font-semibold">{liveNow.title}</span>
              </div>
              <div className="text-sm mb-2">{liveNow.time}</div>
              <div className="flex items-center mb-4">
                <span className="text-xs text-gray-700 mr-2">
                  {liveNow.participants}명의 온기우체부가 함께하고 있어요.
                </span>
                {/* 예시: 참가자 프로필 (원형) */}
                <div className="flex -space-x-2">
                  <img src="/img/user1.jpg" className="w-6 h-6 rounded-full border-2 border-white" alt="user"/>
                  <img src="/img/user2.jpg" className="w-6 h-6 rounded-full border-2 border-white" alt="user"/>
                  <img src="/img/user3.jpg" className="w-6 h-6 rounded-full border-2 border-white" alt="user"/>
                  <span className="w-6 h-6 bg-gray-400 rounded-full text-white text-xs flex items-center justify-center border-2 border-white">+31</span>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm">
                ZOOM으로 참여하기
              </button>
            </div>
          </div>
        </div>

        {/* 예정된 LIVE */}
        <div>
          <div className="text-xl font-semibold mb-3">예정된 LIVE</div>
          <div className="bg-white rounded-xl shadow p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-[#A38951] border-b">
                  <th className="py-2">#</th>
                  <th className="py-2">제목</th>
                  <th className="py-2">시간</th>
                  <th className="py-2"></th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {upcomingLives.map((live, idx) => (
                  <tr key={live.id} className="border-b last:border-b-0">
                    <td className="py-3">{idx + 1}</td>
                    <td className="py-3 font-medium">{live.title}</td>
                    <td className="py-3">{live.time}</td>
                    <td className="py-3">
                      <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-semibold hover:bg-blue-200">
                        ZOOM 링크 복사
                      </button>
                    </td>
                    <td className="py-3">
                      <button className="bg-[#F6E3AF] text-[#A38951] px-3 py-1 rounded text-xs font-semibold hover:bg-[#f3d36b]">
                        알림 받기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>


    </div>
  );
};

export default VolWriteTogether;
