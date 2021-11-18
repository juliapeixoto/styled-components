import React from "react";

import Conta from "../Account";
import Title from "../Title";

const Container = () => {
  return (
    <div className="container">
      <Title>Olá Fulano!</Title>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};

export default Container;
