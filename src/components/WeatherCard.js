import React from "react";
import Card from "react-bootstrap/Card";
import Temparature from "./Temparature";
import { URL_WEATHER_IMAGE } from "../constants/routes";
import DateOfMonth from "./DateOfMonth";

const WeatherCard = ({ stateAbbr, dayOfWeek, date, minTemp, maxTemp }) => {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src={`${URL_WEATHER_IMAGE}${stateAbbr}.svg`} />
      <Card.Body>
        <Card.Title>
          {dayOfWeek} (
          <DateOfMonth date={date.getDate()} month={date.getMonth() + 1} />)
        </Card.Title>
        <Card.Text>
          <Temparature number={maxTemp} symbol="o" /> -{" "}
          <Temparature number={minTemp} symbol="o" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
