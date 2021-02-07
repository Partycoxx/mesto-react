import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import authRequest from '../utils/Auth';

const Register = ({ setUserEmail, setInfoTooltipState, ...props }) => {
  const [authData, setAuthData] = useState({ email: '', password: '' });
  const history = useHistory();

  console.log('register', props);

  const handleInputChange = (e) => {
    const { id: field, value } = e.target;
    setAuthData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    console.log('triggered');
    console.log('e', e);
    e.preventDefault();

    authRequest
      .registerUser(authData)
      .then((res) => {
        console.log('success', res);
        const {
          data: { /*_id: id,*/ email },
        } = res;
        setUserEmail((prev) => email);
        setInfoTooltipState((prev) => true);
        history.push('/sign-in');
      })
      .catch(() => {
        setInfoTooltipState((prev) => true);
      });
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h1 className="auth__heading">Регистрация</h1>
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
            type="password"
            id="password"
            placeholder="Пароль"
            value={authData.password}
            onChange={handleInputChange}
          />
          <br />
          <button className="auth__button change-opacity" type="submit">
            Зарегистрироваться
          </button>
          <Link to="./sign-in" className="auth__button auth__button_type_borderless change-opacity">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
