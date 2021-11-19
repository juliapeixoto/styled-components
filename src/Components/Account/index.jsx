import React, { useState } from "react";

import private_ic from "../../assets/images/private.svg";
import eye from "../../assets/images/eye.svg";
import money from "../../assets/images/money.svg";
import { Balance, Box, Button, Detail, Icon, IconTheme } from "../UI";
import styled from "styled-components";

const IconMargin = styled(Icon)`
  margin-top: 2px;
`;

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconTheme src={money} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? private_ic : eye}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
