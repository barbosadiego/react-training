import { useContext } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';

import './App.css';

const App = (props) => {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
    </>
  );
};

export default App;
