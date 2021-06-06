import renderer from "react-test-renderer";
import WeatherCard from "../components/WeatherCard";

describe("WeatherCard", () => {
  it("should display weather card with data", () => {
    const stateAbbr = "c";
    const dayOfWeek = "1";
    const date = new Date("2020-01-01");
    const minTemp = 5;
    const maxTemp = 10;
    const tree = renderer
      .create(
        <WeatherCard {...{ stateAbbr, dayOfWeek, date, minTemp, maxTemp }} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
