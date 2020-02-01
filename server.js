const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(cors());

app.get('/api/v1/cities', async (request, response) => {
    try {
      const cities = await database('cities').select();
      response.status(200).json(cities);
    } catch(error) {
      response.status(500).json({ error });
    }
});

app.get('/api/v1/cities/:id', async (request, response) => {
    try {
      const city = await database('cities').where('id', request.params.id).select();
      city.length ? response.status(200).json(city) : response.status(404).json({error: `Could not find city with id ${request.params.id}`});
    } catch(error) {
      response.status(500).json({ error });
    }
});

app.post('/api/v1/cities', async (request, response) => {
  const city = request.body;
  for(let cityInfo of ['city', 'avgVegans']) {
    !city[cityInfo] ? response.status(422).send({ error: `Expected format: { city: <String>, avgVegans: <String> }. You're missing a "${cityInfo}" property.` }) : '';
  }

  try {
    const id = await database('cities').insert(city, 'id');
    response.status(201).json({ id });
  }catch(error){
    response.status(500).json({ error })
  }

});


app.get('/api/v1/restaurants', async (request, response) => {
    try {
      const restaurants = await database('restaurants').select();
      response.status(200).json(restaurants);
    } catch(error) {
      response.status(500).json({ error });
    }
});

app.get('/api/v1/restaurants/:id', async (request, response) => {
    try {
      const restaurant = await database('restaurants').where('id', request.params.id).select();
      restaurant.length ? response.status(200).json(restaurant) : response.status(404).json({error: `Could not find restaurant with id ${request.params.id}`});
    } catch(error) {
      response.status(500).json({ error });
    }
});

app.post('/api/v1/restaurants', async (request, response) => {
    const restaurant = request.body;
    for(let restaurantInfo of ['name', 'restaurantType', 'address']) {
      !restaurant[restaurantInfo] ? response.status(422).send({ error: `Expected format: { name: <String>, restaurantType: <String>, address: <String> }. You're missing a "${restaurantInfo}" property.` }) : '';
    }
  
    try {
      const id = await database('restaurants').insert(restaurant, 'id');
      response.status(201).json({ id });
    }catch(error){
      response.status(500).json({ error })
    }
  
  });

app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`);
  });