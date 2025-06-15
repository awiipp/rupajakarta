import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageTest from '../assets/images/test.jpg';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import Background from '../assets/images/background/ondel.jpeg';

const questions = [
  {
    question: 'Berapa jumlah soal dalam quiz budaya Betawi dan ikon Jakarta?',
    options: ['5', '10', '15', '20'],
    image: ImageTest,
    correctAnswer: '10',
  },
  {
    question: 'Apa makanan khas Betawi yang terkenal?',
    options: ['Rendang', 'Soto Betawi', 'Nasi Padang', 'Gudeg'],
    image: ImageTest,
    correctAnswer: 'Soto Betawi',
  },
  {
    question:
      'Ikon terkenal Jakarta yang berupa monumen setinggi 132 meter adalah?',
    options: ['Monas', 'Tugu Tani', 'Bundaran HI', 'Museum Nasional'],
    image: ImageTest,
    correctAnswer: 'Monas',
  },
  {
    question: 'Alat musik tradisional Betawi yang terbuat dari bambu adalah?',
    options: ['Gamelan', 'Tanjidor', 'Angklung', 'Kroncong'],
    image: ImageTest,
    correctAnswer: 'Tanjidor',
  },
  {
    question:
      'Pakaian adat Betawi yang biasa dipakai pada acara resmi disebut?',
    options: ['Batik', 'Kebaya', 'Baju Sadariah', 'Ulos'],
    image: ImageTest,
    correctAnswer: 'Baju Sadariah',
  },
  {
    question: 'Betawi dikenal dengan tarian khasnya yang disebut?',
    options: ['Jaipong', 'Ondel-ondel', 'Reog', 'Lenong'],
    image: ImageTest,
    correctAnswer: 'Ondel-ondel',
  },
  {
    question:
      'Tempat wisata di Jakarta yang terkenal dengan taman miniatur budaya Indonesia adalah?',
    options: ['Ancol', 'Kota Tua', 'Taman Mini Indonesia Indah', 'Ragunan'],
    image: ImageTest,
    correctAnswer: 'Taman Mini Indonesia Indah',
  },
  {
    question:
      'Minuman khas Betawi yang terbuat dari campuran tape dan kelapa muda adalah?',
    options: ['Bir Pletok', 'Es Doger', 'Es Cendol', 'Wedang Jahe'],
    image: ImageTest,
    correctAnswer: 'Bir Pletok',
  },
  {
    question: 'Jakarta dulu dikenal dengan nama?',
    options: ['Batavia', 'Jakarta Raya', 'Jayakarta', 'Sunda Kelapa'],
    image: ImageTest,
    correctAnswer: 'Batavia',
  },
  {
    question:
      'Alat musik Betawi yang biasanya dimainkan pada acara pernikahan?',
    options: ['Gambang', 'Tanjidor', 'Kendang', 'Gendang'],
    image: ImageTest,
    correctAnswer: 'Tanjidor',
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const { width, height } = useWindowSize();

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
            numberOfPieces={300}
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
                  🎉 Hasil Kamu 🎉
                </h1>

                <p className="text-2xl font-semibold">
                  Skor:{' '}
                  <span className="text-yellow-400">
                    {calculateScore()} / {questions.length}
                  </span>
                </p>

                <p className="text-lg text-white/90">
                  {calculateScore() === questions.length
                    ? '🌟 Sempurna! Hebat banget!'
                    : calculateScore() >= questions.length * 0.7
                    ? '👍 Bagus! Kamu paham budaya Betawi~'
                    : '📚 Yuk belajar lagi tentang Jakarta dan Betawi!'}
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
                    Ulangi Quiz
                  </button>

                  <Link
                    to={'/'}
                    className="px-6 py-3 bg-white text-red-700 font-bold hover:bg-white/80 transition shadow-md hover:scale-105 duration-200"
                  >
                    Selesai
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
                      Soal {currentQuestion + 1} dari {questions.length}
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
                    Skor:{' '}
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
