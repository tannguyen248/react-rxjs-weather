import React from "react";
import styled from "styled-components";

const Temparature = ({ number, symbol }) => {
  return (
    <span>
      {number}
      <TemparatureSymbol>{symbol}</TemparatureSymbol>
    </span>
  );
};

const TemparatureSymbol = styled.sup`
  font-size: 10px;
  margin-left: 3px;
`;

export default Temparature;
