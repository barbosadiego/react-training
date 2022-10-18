import Quiz from '../img/quiz.svg';

import './Welcome.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h2>Seja Bem-vindo!</h2>
      <p>Clique no botão abaixo para começar</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Inicio do quiz" />
    </div>
  );
};

export default Welcome;
