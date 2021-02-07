import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/icons/logo.svg';

function Header({ userEmail, setIsLoggedIn, onLogOut, ...props }) {
  console.log('userEmail', userEmail);
  const {
    location: { pathname },
  } = props;

  const history = useHistory();

  const variants = [
    {
      route: '/sign-in',
      action: () => {
        history.push('/sign-up');
      },
      text: 'Регистрация',
    },
    {
      route: '/sign-up',
      action: () => {
        history.push('/sign-in');
      },
      text: 'Войти',
    },
    {
      route: '/app',
      action: onLogOut,
      text: 'Выйти',
    },
  ];

  const button = variants
    .filter((variant) => variant.route === pathname)
    .map((button, index) => {
      return (
        <button className="header__button change-opacity" key={index} onClick={button.action}>
          {button.text}
        </button>
      );
    });

  return (
    <header className="header narrow">
      <img className="logo logo_position_header" src={logo} alt="Логотип проекта" />
      <div className="header__container">
        {!(pathname === '/sign-in' || pathname === '/sign-up') && (
          <span className="header__text">{userEmail}</span>
        )}
        {button}
      </div>
    </header>
  );
}

export default Header;
