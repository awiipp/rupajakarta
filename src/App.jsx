import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import QuizApp from './pages/Quiz';
import BudayaDetailPage from './pages/Betawi';
import JakartaDetailPage from './pages/Jakarta';
import ScrollToTop from './functions/ScrollToTop';
import QuizRulesPage from './pages/QuizRules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 300, once: true, delay: 200 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-rules" element={<QuizRulesPage />} />
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/betawi" element={<BudayaDetailPage />} />
        <Route path="/jakarta" element={<JakartaDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
