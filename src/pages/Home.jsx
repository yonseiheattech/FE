import LoginBox from '../components/LoginBox'
import MapBox from '../components/MapBox'

const Home = () => {
    return (
      <div className='flex min-h-screen items-start justify-center pt-24 bg-gradient-to-br from-[#FFFBE9] to-[#FFFDF6]'>
        {/* 왼쪽 로그인 */}
        <div className='flex-1 flex justify-start pl-24'>
          <LoginBox />
        </div>
        <div className="flex-1 flex justify-center pr-8">
          <MapBox />
        </div>
      </div>
  
    ) ;
  };
  
  export default Home;