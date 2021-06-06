import React from "react";
import Nav from "react-bootstrap/Nav";

const OtherLocations = ({ currentId = 0, locations, handleClick }) => {
  if (!locations) {
    return null;
  }

  return (
    <Nav variant="pills" defaultActiveKey={currentId}>
      {locations.map(({ title, woeid }) => (
        <Nav.Item key={woeid} onClick={() => handleClick(woeid)}>
          <Nav.Link eventKey={woeid}>{title}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default OtherLocations;
