import { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionCard from '../QuestionCard/QuestionCard';
import './styles.css';

type Question = {
  id: number;
  questionText: string;
  answerText: string;
  subCategoryId: number;
};

const Practice = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    axios
      .get<Question[]>('http://localhost:8080/practiz/api/questions')
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error('Soru çekme hatası:', err));
  }, []);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentIndex(randomIndex);
    setShowAnswer(false);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion.questionText}
          answer={currentQuestion.answerText}
          showAnswer={showAnswer}
          onToggleAnswer={() => setShowAnswer((prev) => !prev)}
        />
      )}

      <button className="next-button" onClick={handleNext}>
        Sonraki Soru
      </button>
    </div>
  );
};

export default Practice;
