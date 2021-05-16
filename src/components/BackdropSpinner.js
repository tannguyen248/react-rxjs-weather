import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Backdrop from "./Backdrop";

const BackdropSpinner = ({ display }) => {
  return (
    <Backdrop display={display}>
      <Spinner animation="border" role="status" />
    </Backdrop>
  );
};

export default BackdropSpinner;
