import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTrainer } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';
import './styles/homePages.css';

const HomePage = () => {

const dispatch = useDispatch();

const navigate  = useNavigate();

const textInput = useRef();

const handleSubmit = (event) => {
event.preventDefault();
dispatch(setTrainer(textInput.current.value.trim()));
textInput.current.value='';
navigate('/pokedex');
}

  return (
    <section className='home'>
      <img className='home__logo' src="../assets/logo3.png" alt="" />
    <div className='home__decoration'>
      <div className='home__container'>
      <h1 className='home__title'>Hi Trainer!</h1>
      <h2>to start give me your name</h2>
      </div>
      <form className='home__form' onSubmit={handleSubmit}>
        <input className='home__input' ref={textInput} type="text"/>
        <button className='home__btn'>Start</button>
      </form>
    </div>
    </section>
  )
}
export default HomePage;