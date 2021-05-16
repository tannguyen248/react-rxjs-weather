import renderer from "react-test-renderer";
import WeatherBoard from "../components/WeatherBoard";

describe("WeatherBoard", () => {
  it("should not display weather board when data wrong", () => {
    const { location, locations } = { location: null, locations: null };
    const tree = renderer
      .create(<WeatherBoard {...{ location, locations }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should display weather board correctly", () => {
    const locations = [
      {
        title: "San Francisco",
        location_type: "City",
        woeid: 2487956,
        latt_long: "37.777119, -122.41964",
      },
      {
        title: "San Diego",
        location_type: "City",
        woeid: 2487889,
        latt_long: "32.715691,-117.161720",
      },
    ];

    const location = {
      title: "Title",
      woeid: "44418",
      weathers: [
        {
          title: 'Title',
          state: 'Snow',
          stateAbbr: 's',
          minTemp: 5,
          maxTemp: 10,
          date: new Date("2020-01-01"),
          dayOfWeek: 2,
        },
      ],
    };
    const tree = renderer
      .create(<WeatherBoard {...{ location, locations }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
