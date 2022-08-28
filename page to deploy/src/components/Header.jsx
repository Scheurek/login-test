import React from "react";
import "./style.scss";
import logo from "../img/logo_vk.png";

export const Header = () => {
  return (
    <header className="header">
      <a href="https://vk.com/">
        <img className="header__logo" src={logo} />
      </a>
      <a className="header__link" href="https://id.vk.com/">
        Регистрация
      </a>
    </header>
  );
};
