import React, { useState } from 'react';
import './App.css';
import mail from './img/mail.png'
import close from './img/close.png'
import person from './img/person.png'
import lock from './img/lock.png'

function App() {
  const [wrapper, setWrapper] = useState(false)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  return (
    <>
      <header>
        <h2 className='logo'>Империя курток</h2>
        <nav className='navigation'>
          <a href='/home'>Главная</a>
          <a href='/about'>Разное</a>
          <a href='/service'>Сервисы</a>
          <a href='/contscts'>Контакты</a>
          <button className='btnLogin-popup' onClick={() => {
            setWrapper(true)
            setLogin(true)
          }}>Вход</button>
        </nav>
      </header>
      { wrapper && <div className='wrapper'>
        {login && <>
          <span className='icon-close' onClick={() => {
            setWrapper(false)
            setLogin(false)
            setRegister(false)
          }}>
          <img src={close} alt="noicon" />
          </span>
          <div className='form-box login'>
            <h2>Вход</h2>
            <form action="#">
              <div className='input-box'>
                <span className='icon'><img src={mail} alt="noicon" /></span>
                <input type="email" required/>
                <label>Email</label>
              </div>
              <div className='input-box'>
                <span className='icon'><img src={lock} alt="noicon" /></span>
                <input type="password" required />
                <label>Пароль</label>
              </div>
              <div className='remember-forgot'>
                <label>
                  <input type="checkbox"/>
                  Запомнить меня</label>
                <a href="/">Забыли пароль</a>
              </div>
              <button type="submit" className='btn'>Вход</button>
              <div className='login-register'>
                <p>Нет аккаунта? <a className='register-link' onClick={() => {
                  setLogin(false)
                  setRegister(true)
                  }
                } >Регистрация</a></p>
              </div>
            </form>
          </div>
        </>}
        { register && <>
        <span className='icon-close'>
        <img src={close} alt="noicon" />
        </span>
        <div className='form-box register'>
          <h2>Регистрация</h2>
          <form action="#">
          <div className='input-box'>
              <span className='icon'><img src={person} alt="noicon" /></span>
              <input type="text" required />
              <label>Имя</label>
            </div>
            <div className='input-box'>
              <span className='icon'><img src={mail} alt="noicon" /></span>
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className='input-box'>
              <span className='icon'><img src={lock} alt="noicon" /></span>
              <input type="password" required />
              <label>Пароль</label>
            </div>
            <div className='remember-forgot'>
              <label>
                <input type="checkbox"/>
                Cогласен с условиями</label>
            </div>
            <button type="submit" className='btn'>Зарегистрироваться</button>
            <div className='login-register'>
              <p>Есть аккаунта? <a className='login-link' onClick={() => {
                  setLogin(true)
                  setRegister(false)
                }
              }>Войти</a></p>
            </div>
          </form>
        </div>
        </>}
      </div>}
    </>
  );
}

export default App;
