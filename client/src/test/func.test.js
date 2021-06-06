import { getDayOfWeek, normalizeWeatherForecastData } from "../helpers/funcs";

describe("func", () => {
  describe("getDayOfWeek", () => {
    it("should return empty string when date wrong", () => {
      // arrage
      const date = "";

      // act
      const result = getDayOfWeek(date);

      // assert
      expect(result).toBe("");
    });

    it("should return the day of week correctly", () => {
      // arrage
      const date = new Date("2020-02-02");

      // act
      const result = getDayOfWeek(date);

      // assert
      expect(result).toBe("Mon");
    });
  });

  describe("normalizeWeatherForecastData", () => {
    it("should return empty array when data wrong", () => {
      // arrange
      const data = { a: "1" };

      // act
      const result = normalizeWeatherForecastData(data);

      // assert
      expect(result.length).toBe(0);
    });

    it("should return weather data correctly", () => {
      // arrange
      const data = {
        consolidated_weather: [
          {
            weather_state_name: "Clear",
            weather_state_abbr: "c",
            applicable_date: "2020-11-04",
            min_temp: 4.574999999999999,
            max_temp: 11.46,
          },
          {
            weather_state_name: "Light Cloud",
            weather_state_abbr: "lc",

            applicable_date: "2020-11-05",
            min_temp: 4.779999999999999,
            max_temp: 10.805,
          },
          {
            weather_state_name: "Light Cloud",
            weather_state_abbr: "lc",

            applicable_date: "2020-11-06",
            min_temp: 5.16,
            max_temp: 11.865,
          },
          {
            weather_state_name: "Heavy Cloud",
            weather_state_abbr: "hc",
            wind_direction_compass: "E",

            applicable_date: "2020-11-07",
            min_temp: 6.57,
            max_temp: 13.32,
          },
          {
            weather_state_name: "Light Rain",
            weather_state_abbr: "lr",

            applicable_date: "2020-11-08",
            min_temp: 9.785,
            max_temp: 14.98,
          },
          {
            weather_state_name: "Heavy Cloud",
            weather_state_abbr: "hc",

            applicable_date: "2020-11-09",
            min_temp: 10.705,
            max_temp: 15.559999999999999,
            the_temp: 15.26,
          },
        ],
        title: "London",
        woeid: 44418,
      };

      // act
      const result = normalizeWeatherForecastData(data);

      // assert
      expect(result.title).toBe("London");
      expect(result.weathers.length).toBe(5);
    });
  });
});
