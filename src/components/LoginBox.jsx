import { useState } from "react";
import axios from "../api/axiosInstance";
import KakaoLoginButton from "./KakaoLoginButton";

const LoginBox = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/members/login",
        {
          username,
          password,
        }
      );
      console.log("✅ 로그인 성공:", response.data);
      window.location.replace("/home");
    } catch (err) {
      console.error("❌ 로그인 실패 from LoginBox.jsx", err);
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold">
        안녕하세요
        <br />
        따뜻함을 나누는 온기입니다.
      </h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="w-full px-4 py-2 rounded-md border border-gray-300"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="w-full px-4 py-2 rounded-md border border-gray-300"
      />

      <div className="flex justify-between text-sm text-gray-500">
        <button type="button">아이디/비밀번호 찾기</button>
        <button type="button">회원가입</button>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-[#6B3E00] text-white font-semibold rounded-md"
      >
        로그인
      </button>

      <KakaoLoginButton />
    </form>
  );
};

export default LoginBox;
