require('dotenv/config');
const express = require('express');
const fetch = require('node-fetch');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const app = express();

app.use(staticMiddleware);

app.use(express.json());

app.post('/api/search?', (req, res, next) => {
  if (!req.body) {
    throw new ClientError(400, 'term and location are required fields');
  }
  const { term, location, geolocation } = req.body;
  let query = `term=${term}`;
  query += geolocation
    ? `&latitude=${geolocation.latitude}&longitude=${geolocation.longitude}`
    : `&location=${location}`;
  const headers = {
    headers: { Authorization: `Bearer ${process.env.API_KEY}` }
  };
  fetch(`https://api.yelp.com/v3/businesses/search?${query}`, headers)
    .then(yelpRes => yelpRes.json())
    .then(yelpData => res.status(200).json(yelpData))
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
