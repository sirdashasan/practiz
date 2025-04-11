import "./styles.css";

type Props = {
  question: string;
  answer: string;
  showAnswer: boolean;
  onToggleAnswer: () => void;
};

const QuestionCard = ({
  question,
  answer,
  showAnswer,
  onToggleAnswer,
}: Props) => {
  return (
    <div className="card">
      <h2 className="question">{question}</h2>
      <button className="button" onClick={onToggleAnswer}>
        {showAnswer ? "Cevabı Gizle" : "Cevabı Göster"}
      </button>
      {showAnswer && <p className="answer">{answer}</p>}
    </div>
  );
};

export default QuestionCard;
