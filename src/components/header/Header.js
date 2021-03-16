import React from 'react'

import './Header.css'
import logo from '../../logo.svg';

const Header = () => (
    <header className="app-header">
        <img src={logo}  alt="logo" className="app-header__logo"/>
    </header>
)

export default Header
