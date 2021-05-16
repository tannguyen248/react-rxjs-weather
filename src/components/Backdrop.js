import React from "react";
import styled from "styled-components";
import { ZINDEX_HIGHEST, COLOR_GREY_3 } from "../constants/styles";

const Backdrop = ({ children, display }) => {
  if (!display) {
    return null;
  }

  return <Container>{children}</Container>;
};

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${COLOR_GREY_3};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${ZINDEX_HIGHEST};
  transform: translateZ(${ZINDEX_HIGHEST}px);
`;

export default Backdrop;
