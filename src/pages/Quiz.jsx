import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import Background from '../assets/images/background/ondel.jpeg';
import { useTranslation } from 'react-i18next';
import ImageTest from '../assets/images/test.jpg';
import Ondel from '../assets/images/ondel.jpeg';
import Silat from '../assets/images/silat.jpg';
import Baju from '../assets/images/baju-adat.jpeg';
import Rumah from '../assets/images/rumah.jpg';
import Kue from '../assets/images/akar-kelapa.jpeg';
import Monas from '../assets/images/monas-atas.jpeg';
import Kotu from '../assets/images/fatahillah.jpg';
import Istiqlal from '../assets/images/istiqlal-katedral.jpeg';
import Babakan from '../assets/images/babakan.jpg';
import Batavia from '../assets/images/batavia.jpg';

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const { width, height } = useWindowSize();
  const { t } = useTranslation();
  const rawQuestions = t('quiz.questions', { returnObjects: true });
  const correctAnswers = t('quiz.correctAnswers', { returnObjects: true });

  const questions = rawQuestions.map((q, i) => ({
    ...q,
    image: [
      Ondel,
      Silat,
      Baju,
      Rumah,
      Kue,
      Monas,
      Kotu,
      Istiqlal,
      Babakan,
      Batavia,
    ][i],
    correctAnswer: correctAnswers[i],
  }));

  const handleAnswer = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return answers.filter((ans, i) => ans === questions[i].correctAnswer)
      .length;
  };

  const current = questions[currentQuestion];

  return (
    <main>
      {showResult && (
        <div className="fixed inset-0 overflow-hidden z-50 pointer-events-none">
          <Confetti
            width={width}
            height={height}
            gravity={0.3}
            numberOfPieces={500}
            recycle={false}
          />
        </div>
      )}
      <section
        className="min-h-screen flex flex-col items-center p-6 text-white bg-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      >
        <div className="max-w-lg w-full bg-black/30 backdrop-blur-md p-8 md:py-4 shadow-lg mt-14 md:mt-0 min-h-[400px]">
          <AnimatePresence mode="wait">
            {showResult ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6 md:py-16 py-5"
              >
                <img
                  src={ImageTest}
                  alt="Hasil Quiz"
                  className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-yellow-400 shadow-lg animate-pulse"
                />

                <h1 className="md:text-4xl text-3xl font-bold text-yellow-300 drop-shadow-sm animate-bounce">
                  {t('quiz.result.title')}
                </h1>

                <p className="text-2xl font-semibold">
                  {t('quiz.score')}:{' '}
                  <span className="text-yellow-400">
                    {calculateScore()} / {questions.length}
                  </span>
                </p>

                <p className="text-lg text-white/90">
                  {calculateScore() === questions.length
                    ? t('quiz.result.perfect')
                    : calculateScore() >= questions.length * 0.7
                    ? t('quiz.result.good')
                    : t('quiz.result.bad')}
                </p>

                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers([]);
                      setShowResult(false);
                    }}
                    className="px-6 py-3 bg-yellow-400 text-red-800 font-bold hover:bg-yellow-300 transition shadow-md hover:scale-105 duration-200"
                  >
                    {t('quiz.result.retry')}
                  </button>

                  <Link
                    to={'/quiz-rules'}
                    className="px-6 py-3 bg-white text-red-700 font-bold hover:bg-white/80 transition shadow-md hover:scale-105 duration-200"
                  >
                    {t('quiz.result.done')}
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={currentQuestion}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between mb-4 text-sm font-medium">
                  <div className="mb-4 w-3/4">
                    <div className="text-sm font-medium mb-1">
                      <div className="text-sm font-medium mb-1">
                        {t('quiz.question')} {currentQuestion + 1}{' '}
                        {t('quiz.of')} {questions.length}
                      </div>
                    </div>
                    <div className="w-full bg-white/30 h-3 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 transition-all"
                        style={{
                          width: `${
                            ((currentQuestion + 1) / questions.length) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <span>
                    {t('quiz.score')}:{' '}
                    {
                      answers.filter(
                        (ans, i) => ans === questions[i].correctAnswer
                      ).length
                    }
                  </span>
                </div>

                {current.image && (
                  <img
                    src={current.image}
                    alt="Ilustrasi soal"
                    className="mb-3 w-full h-48 object-cover shadow-md"
                  />
                )}

                <h2 className="text-[20px] font-bold mb-4">
                  {current.question}
                </h2>

                <div className="space-y-4">
                  {current.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt)}
                      className="w-full bg-yellow-400 text-red-700 font-semibold py-3 px-4 hover:bg-yellow-300 transition"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
