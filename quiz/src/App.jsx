import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';

import './App.css';

const App = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS'})
  }, [])

  return (
    <>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
    </>
  );
};

export default App;
