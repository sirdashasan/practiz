import { useState } from 'react';
import questions from '../../data/questions.json';
import QuestionCard from '../QuestionCard/QuestionCard';
import './styles.css';

const Practice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentIndex(randomIndex);
    setShowAnswer(false);
  };

  return (
    <div>
      <QuestionCard
        question={currentQuestion.question}
        answer={currentQuestion.answer}
        showAnswer={showAnswer}
        onToggleAnswer={() => setShowAnswer(prev => !prev)}
      />
      <button className="next-button" onClick={handleNext}>
        Sonraki Soru
      </button>
    </div>
  );
};

export default Practice;
