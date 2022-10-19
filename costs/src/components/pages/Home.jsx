import React from 'react';

// css
import './Home.css';

// components
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

const Home = () => {
  return (
    <section className='home-container'>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to='/new-project' text='criar projeto'/>
      <img src={savings} alt="Costs" />
    </section>
  );
};

export default Home;
