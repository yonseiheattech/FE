


const KakaoLoginButton = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    const handleLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
    };

    return (
        <button
            onClick = {handleLogin}
            className="w-full py-2 border border-yellow-400 bg-yellow-300 hover:bg-yellow-400 rounded-md flex items-center justify-center gap-2 text-sm font-medium"
        >
             <img src="/kakao.png" alt="카카오 아이콘" className="w-5 h-5" />
            카카오로 로그인
        </button>
    );
};


export default KakaoLoginButton;