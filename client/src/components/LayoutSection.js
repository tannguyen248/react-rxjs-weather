import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LayoutSection = ({ children }) => {
  return (
    <RowWrapper noGutters className="marginRow">
      <Col>{children}</Col>
    </RowWrapper>
  );
};

const RowWrapper = styled(Row)`
  &.marginRow {
    margin-top: 20px;
  }
`;

export default LayoutSection;
