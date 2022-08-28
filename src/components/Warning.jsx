import React from "react";
import "./style.scss";

export const Warning = () => {
  return (
    <div className="warning">
      <p className="warning__text">
        Для продолжения вам необходимо войти <strong>ВКонтакте</strong>.
      </p>
    </div>
  );
};
