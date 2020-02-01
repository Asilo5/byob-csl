const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);

app.get('/api/v1/cities', async (request, response) => {
    const city = request.body;
    console.log('request param', city)

    try {
      const cities = await database('cities').select();
      console.log(cities)
      response.status(200).json(cities);
    } catch(error) {
      response.status(500).json({ error });
    }
  });


app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}.`);
  });