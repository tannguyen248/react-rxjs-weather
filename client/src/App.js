import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { normalizeWeatherForecastData } from "./helpers/funcs";
import { getSearchLocationsUrl, getLocationUrl } from "./helpers/api";
import LayoutSection from "./components/LayoutSection";
import SearchInput from "./components/SearchInput";
import BackdropSpinner from "./components/BackdropSpinner";
import WeatherBoard from "./components/WeatherBoard";
import { ajax } from "rxjs/ajax";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  retry,
  switchMap,
  tap,
} from "rxjs/operators";
import { useObservable } from "./hooks/useObservable";

const searchLocations = (action$) => {
  return action$.pipe(
    filter((query) => query && query.length > 1),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((query) => ajax.getJSON(getSearchLocationsUrl(query))),
    retry(3),
    tap((body) => console.log(body)),
    map((locations) => locations)
  );
};

const searchLocation = (action$) => {
  return action$.pipe(
    filter((woeid) => !!woeid),
    switchMap((woeid) => ajax.getJSON(getLocationUrl(woeid))),
    retry(3),
    tap((body) => console.log(body)),
    map((locationInfo) => normalizeWeatherForecastData(locationInfo))
  );
};

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [locations, dispatchQuery] = useObservable(searchLocations, "London");
  const [location, dispatchWoeid] = useObservable(searchLocation, "44418");

  const handleSearch = (value) => {
    setQuery(value);
    dispatchQuery(value);
  };

  const handleClickChangeLocation = (woeid) => {
    dispatchWoeid(woeid);
  };

  return (
    <Container className="App" fluid="sm">
      <BackdropSpinner display={isLoading} />
      <LayoutSection>
        <SearchInput handleSearch={handleSearch} value={query} />
      </LayoutSection>
      <LayoutSection>
        <WeatherBoard
          {...{
            locations,
            location,
            handleClickChangeLocation,
          }}
        />
      </LayoutSection>
    </Container>
  );
};

export default App;
