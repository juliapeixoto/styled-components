import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
`;

export default Title;

//Antes

// import React from "react";
// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };
