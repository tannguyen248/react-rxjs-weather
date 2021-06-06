import { URL_LOCATION_SEARCH, URL_LOCATION_INFO } from "../constants/routes";

export const validateStatus = (status) => {
  return status === 200;
};

export const getSearchLocationsUrl = (query) => {
  console.log({ query });
  return `${URL_LOCATION_SEARCH}${query}`;
};

export const getLocationUrl = (woeid) => {
  return `${URL_LOCATION_INFO}${woeid}`;
};
