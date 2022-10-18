import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Question.css';

const Question = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>Pergunta atual</h2>
      <div className="options-container">
        <p>Opções</p>
      </div>
    </div>
  )
}

export default Question
