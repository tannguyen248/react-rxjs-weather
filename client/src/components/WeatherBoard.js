import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import WeatherCard from "./WeatherCard";
import OtherLocations from "./OtherLocations";

const WeatherBoard = ({ location, locations, handleClickChangeLocation }) => {
  if (!locations || locations.length < 1) {
    return null;
  }

  console.log({ locations, location });
  return (
    <Card data-testid="card-weather-board">
      <Card.Header>
        {locations && (
          <OtherLocations
            currentId={null}
            locations={locations}
            handleClick={handleClickChangeLocation}
          />
        )}
      </Card.Header>
      <Card.Body>
        {location && (
          <Row>
            {location.weathers.map((state, index) => (
              <Col key={index} xs={6} md={4} lg="auto">
                <Content>
                  <WeatherCard {...state} />
                </Content>
              </Col>
            ))}
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

const Content = styled.div`
  margin-top: 5px;
`;

export default WeatherBoard;
