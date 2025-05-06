import LoginBox from '../components/LoginBox'
import MapBox from '../components/MapBox'

const Home = () => {
  return (
    <div className='flex min-h-screenc justify-center items-start flex-row gap-[112px] pt-24 bg-gradient-to-br from-[#FFFBE9] to-[#FFFDF6]'>


      {/*왼쪽 라인*/}
      <div>
        <div className='flex-1 flex justify-center flex-col'>
          {/*로그인*/}
          <div>

            <div className='flex-1 mb-[79px]'>
              <LoginBox />
            </div>

          </div>
          {/**/}

          {/*실시간 온기*/}
          <div className="w-[387px] h-[243px] flex-shrink-0 bg-[#FFF] stroke-[#DCDCDC] strocke-[1px] relative"></div>

          {/* */}

        </div>
      </div>

      {/* */}

      {/* 오른쪽 라인 */}

      <div>
        <div className='flex-1 flex justify-between flex-col'>

          {/*맵*/}
          <div className='flex-1 flex justify-center mb-[43px]'>
            <MapBox />
          </div>
          {/* */}


          {/*맵 아래 박스 4개*/}
          <div className='flex-1 flex justify-center flex-row gap-[22px] mb-[36px]'>

            <div className="w-[185px] h-[247px] flex-shrink-0 border-[1.897px] border-[#DCDCDC] rounded-[28.191px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.04)] relative">
              <div className='w-[145px] h-[145px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,215,4,0.44)_0%,#FFF_68.5%)] absolute top-[22px] left-1/2 -translate-x-1/2' ></div>
              <div className='w-[71.262px] h-[128px]  flex-shrink-0 flex justify-center  aspect-[71.26/128] absolute top-[34px] left-[54px] right-[59.74px] -translate-z-1'><img src="온기우편함 이용.png" alt="온기우편함 이용 안내" /></div>
              <div className='text-center text-[#3A2A10] font-[700] text-[18px] leading-[23px] tracking-[-0.36px] font-[Pretendard] absolute top-[167px] left-1/2 -translate-x-1/2'>온기우편함<br />이용 안내</div>
            </div>

            <div className="w-[185px] h-[247px] flex-shrink-0 border-[1.897px] border-[#DCDCDC] rounded-[28.191px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.04)] relative">
              <div className='w-[146.545px] h-[129px]  flex-shrink-0  aspect-[146.55/129.00] absolute top-[35px] left-[19px] right-[19.45px] -translate-x-0 -translate-y-0 -translate-z-1'><img src="온라인 온기우편함.png" alt="온라인 온기우편함 이용 안내" /></div>
              <div className='w-[200px] h-[46px] text-center text-[#3A2A10] font-[700] text-[18px] leading-[23px] tracking-[-0.36px] font-[Pretendard] absolute top-[167px] left-1/2 -translate-x-1/2'>온라인 온기우편함<br />이용 안내</div>
            </div>


            <div className="w-[185px] h-[247px] flex-shrink-0 border-[1.897px] border-[#DCDCDC] rounded-[28.191px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.04)] relative">
              <div className='w-[145px] h-[145px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,215,4,0.44)_0%,#FFF_68.5%)] absolute top-[22px] left-1/2 -translate-x-1/2' ></div>
              <div className="w-[145.645px] h-[86px]  flex-shrink-0 flex justify-center  aspect-[145.65/86] absolute top-[62px] left-[38px] -translate-z-1"><img src="온기우체부 지원.png" alt="온기우체부 지원하기" /></div>
              <div className="w-[200px] h-[46px] text-center text-[#3A2A10] font-[700] text-[18px] leading-[23px] tracking-[-0.36px] font-[Pretendard] absolute top-[167px] left-1/2 -translate-x-1/2">온기우체부<br />지원하기</div>
            </div>

            <div className="w-[185px] h-[247px] flex-shrink-0 border-[1.897px] border-[#DCDCDC] rounded-[28.191px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.04)] relative">
              <div className='w-[145px] h-[145px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,215,4,0.44)_0%,#FFF_68.5%)] absolute top-[22px] left-1/2 -translate-x-1/2' ></div>
              <div className="w-[211.458px] h-[125px]  flex-shrink-0 flex justify-center  aspect-[211.46/125] absolute top-[42px] left-[2px] -translate-z-1"><img src="랜선 온기우체부.png" alt="랜선 온기우체부 지원하기" /></div>
              <div className='w-[200px] h-[46px] text-center text-[#3A2A10] font-[700] text-[18px] leading-[23px] tracking-[-0.36px] font-[Pretendard] absolute top-[167px] left-1/2 -translate-x-1/2'>랜선 온기우체부<br />지원하기</div>
            </div>

          </div>
          {/* */}

          {/*맨 아래 요소 3개*/}
          <div className='flex-1 flex justify-center flex-row gap-[34px]'>


            <div className='w-[245px] h-[70px] flex-shrink-0 flex justify-center items-center gap-[9px] border-[1.879px] border-[#DCDCDC] rounded-[40px] bg-[#FFF3B3] shadow-[0_4px_4px_0px_rbga(0,0,0,0.04)]'>

              <div className='w-[135px] h-[23px] text-center text-[#3A2A10] font-[700] text-[18px] leading-[23px] tracking-[-0.36px] font-[Pretendard]'>온기레터 구독하기</div>
              <div className='w-[24px] h-[30px]'>
                <button className="text-center text-[#3A2A10]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30" fill="none">
                    <path d="M9 22.5L15 15L9 7.5" stroke="#3A2A10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>

            </div>



            <div className='w-[245px] h-[70px] flex-shrink-0 flex justify-center items-center gap-[9px] border-[1.879px] border-[#DCDCDC] rounded-[40px] bg-[#FFF3B3] shadow-[0_4px_4px_0px_rbga(0,0,0,0.04)]'>

              <div className='w-[135px] h-[23px] text-center text-[#3A2A10] font-[700] text-[18px] leading-[23px] tracking-[-0.36px] font-[Pretendard]'>파트너십 문의</div>
              <div className='w-[24px] h-[30px]'>
                <button className="text-center text-[#3A2A10]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30" fill="none">
                    <path d="M9 22.5L15 15L9 7.5" stroke="#3A2A10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>

            </div>

            <div className='w-[245px] h-[70px] flex-shrink-0 flex justify-center items-center gap-[9px] border-[1.879px] border-[#DCDCDC] rounded-[40px] bg-[#FFF3B3] shadow-[0_4px_4px_0px_rbga(0,0,0,0.04)]'>

              <div className='w-[135px] h-[23px] text-center text-[#3A2A10] font-[700] text-[18px] leading-[23px] tracking-[-0.36px] font-[Pretendard]'>온기 후원하기</div>
              <div className='w-[24px] h-[30px]'>
                <button className="text-center text-[#3A2A10]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30" fill="none">
                    <path d="M9 22.5L15 15L9 7.5" stroke="#3A2A10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
          {/* */}

        </div>
      </div>
      {/* */}
    </div>
  );
};

export default Home;