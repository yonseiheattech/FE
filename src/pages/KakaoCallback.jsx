import {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const KakaoCallback = () => {
    const navigate = useNavigate();
    const alreadyCalled = useRef(false);

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        console.log(code)

        if(!alreadyCalled.current && code) {
            alreadyCalled.current = true;

            axiosInstance.post("http://localhost:8080/api/kakao/login", {code})
            .then(() => {
                window.location.replace("/home");
            })
            .catch((err) => {
                console.error("카카오 로그인 실팽", err.response.data.error);
            });
        }  

    }, [navigate]);
        


    return <div>로그인 중...</div>;
};

export default KakaoCallback;

//로그인 성공 후 code 받으면 받아서 백에 보내고 accessToken 받음