import { useState } from "react";
import "./styles.css";

const QuestionCard = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="card">
      <h2 className="question">JVM nedir?</h2>

      <button className="button" onClick={handleToggleAnswer}>
        {showAnswer ? "Cevabı Gizle" : "Cevabı Göster"}
      </button>

      {showAnswer && (
        <p className="answer">
          JVM, bir bilgisayarın java kodunu çalıştırabilmesine olanak sağlayan
          sanal makineye verilen addır. bytecode uzantılı dosyaları makine
          koduna çeviren bu soyut makine, java kodunu makine ve cihaz bağımsız
          aynı şekilde işletmemize olanak sağlar.
        </p>
      )}
    </div>
  );
};

export default QuestionCard;
