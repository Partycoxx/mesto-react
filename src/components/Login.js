import React, { useState } from 'react';

import authRequest from '../utils/Auth';

const Login = ({ onLogIn, ...props }) => {
  const [authData, setAuthData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { id: field, value } = e.target;
    setAuthData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    authRequest
      .loginUser(authData)
      .then((res) => {
        const { token } = res;
        onLogIn(token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth">
      <div className="auth__container">
        <h1 className="auth__heading">Вход</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            className="auth__input auth__input_type_email"
            id="email"
            type="email"
            placeholder="Email"
            value={authData.email}
            onChange={handleInputChange}
          />
          <br />
          <input
            className="auth__input auth__input_type_password"
            id="password"
            type="password"
            placeholder="Пароль"
            value={authData.password}
            onChange={handleInputChange}
          />
          <br />
          <button className="auth__button change-opacity">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
