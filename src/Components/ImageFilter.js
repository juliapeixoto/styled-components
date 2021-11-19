import React from "react";
import { IconTheme } from "./UI";
import food from "../assets/images/food.svg";
import health from "../assets/images/health.svg";
import others from "../assets/images/others.svg";
import transport from "../assets/images/transport.svg";
import utility from "../assets/images/utility.svg";

export default (type) => {
  const Images = {
    Restaurante: <IconTheme src={food} alt="Restaurante" />,
    Utilidades: <IconTheme src={utility} alt="Utilidades" />,
    Saúde: <IconTheme src={health} alt="Saúde" />,
    Transporte: <IconTheme src={transport} alt="Transporte" />,
    default: <IconTheme src={others} alt="Outros" />,
  };

  return Images[type] || Images.default;
};
