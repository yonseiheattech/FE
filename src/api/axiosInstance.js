import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // ✅ 쿠키 포함 모든 요청에 자동 적용
});

export default axiosInstance;