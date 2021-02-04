import React from 'react';

const Login = (props) => {
  return (
    <div className="auth">
      <div className="auth__container">
        <h1 className="auth__heading">Вход</h1>
        <form className="auth__form">
          <input className="auth__input auth__input_type_email" type="email" placeholder="Email" />
          <br />
          <input
            className="auth__input auth__input_type_password"
            type="password"
            placeholder="Пароль"
          />
          <br />
          <button className="auth__button change-opacity">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
