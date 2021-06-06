const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const API_ROOT = "https://www.metaweather.com/api";
const API_LOCATION = `${API_ROOT}/location`;
const API_LOCATION_QUERY = `${API_LOCATION}/search/?query=`;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/location/search", async (req, res) => {
  const query = req.query.query;

  if (!query) {
    res.status(400).send("query is required");
  }

  fetch(`${API_LOCATION_QUERY}${query}`)
    .then((response) => response.json())
    .then((json) => res.json(json))
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

app.get("/location/:woeid", async (req, res, next) => {
  const woeid = req.params.woeid;

  if (!woeid) {
    res.status(400).send("woeid is required");
  }

  fetch(`${API_LOCATION}/${woeid}`)
    .then((response) => response.json())
    .then((json) => {
      return res.json(json);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});
