import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#867354] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* 왼쪽 텍스트 정보 */}
        <div className="space-y-2 text-sm">
          <h2 className="font-bold text-base">사단법인 온기</h2>
          <p>주소: 서울시 서초구 동광로 82-1 4층 (우) 06585</p>
          <p>전화: 02-3443-0225</p>
          <p>이메일: ongi@ongibox.co.kr</p>
          <p>후원계좌: 국민은행 445701-01-302851</p>
          <p>고유번호: 113-82-09512</p>
        </div>

        {/* 오른쪽 소셜 아이콘 */}
        <div className="flex space-x-6 mt-6 md:mt-0 text-2xl">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-gray-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            className="hover:text-gray-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
