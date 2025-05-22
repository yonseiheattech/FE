import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KakaoCallback from "./pages/KakaoCallback";
import Navbar from "./components/common/Navbar";
import Code from "./pages/Code";
import { AuthProvider } from "./contexts/AuthContext";
import MyLetter from "./pages/MyLetter";
import LetterDetailPage from "./pages/LetterDetailPage";
import Footer from "./components/common/Footer";
import VolMyLetter from "./pages/VolMyLetter";
import LLMPractice from "./pages/LLMPractice";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/my-letter" element={<MyLetter />} />
          <Route path="/my-letter/:code" element={<LetterDetailPage />} />
          <Route path="/volunteer/my-letter" element={<VolMyLetter />} />
          <Route path="/volunteer/llm-practice" element={<LLMPractice />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
