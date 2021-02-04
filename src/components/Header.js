import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icons/logo.svg';

function Header(props) {
  console.log('Headerprops', props);
  const {
    location: { pathname },
  } = props;

  const variants = [
    {
      link: '/sign-in',
      path: '/sign-up',
      text: 'Регистрация',
    },
    {
      link: '/sign-up',
      path: '/sign-in',
      text: 'Войти',
    },
    {
      link: '/app',
      path: '/sign-in',
      text: 'Выйти',
    },
  ];

  const button = variants
    .filter((variant) => variant.link === pathname)
    .map((button, index) => {
      return (
        <Link className="header__link change-opacity" key={index} to={button.path}>
          {button.text}
        </Link>
      );
    });

  console.log(button);
  return (
    <header className="header narrow">
      <img className="logo logo_position_header" src={logo} alt="Логотип проекта" />
      <div className="header__link-container">
        <span className="header__text">nik@gmail.com</span>
        {button}
      </div>
    </header>
  );
}

export default Header;
