export const getDate = (str) => {
  return new Date(str);
};

export const getDayOfWeek = (date) => {
  if (!date || !date.getDay) {
    return "";
  }

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return weekdays[date.getDay()];
};

export const normalizeWeatherForecastData = (data) => {
  const CONSOLIDATED_WEATHER = "consolidated_weather";

  if (!data[CONSOLIDATED_WEATHER]) {
    return [];
  }

  const weathers = data[CONSOLIDATED_WEATHER].slice(0, 5);
  const location = {
    title: data.title,
    woeid: data.woeid,
    weathers: weathers.map((weather) => ({
      title: data.title,
      state: weather["weather_state_name"],
      stateAbbr: weather["weather_state_abbr"],
      minTemp: parseInt(weather["min_temp"]),
      maxTemp: parseInt(weather["max_temp"]),
      date: getDate(weather["applicable_date"]),
      dayOfWeek: getDayOfWeek(getDate(weather["applicable_date"])),
    })),
  };

  return location;
};
