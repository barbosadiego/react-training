import { useContext } from 'react';;
import { QuizContext } from '../context/quiz';

import WellDone from '../img/welldone.svg';

import './GameOver.css';

const GameOver = () => {
  return (
    <div className='gameover'>
      <h2>Fim do jogo!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y de z perguntas</p>
      <img src={WellDone} alt="Fim do quiz" />
      <button>Reiniciar</button>
    </div>
  )
};

export default GameOver;
