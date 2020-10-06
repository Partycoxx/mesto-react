import React from 'react';
import logo from '../images/icons/logo.svg';

function Header() {
return (
<header className="header narrow">
    <img className="logo logo_position_header" src={logo} alt="Логотип проекта" />

</header>
)
}

export default Header;