const environment = process.env.NODE_ENV || 'development';
// Tells the environment of the server what to to run on. It defaults to 'development' when it is not defined.
const configuration = require('./knexfile')[environment];
// Imports the knex configuration file based on the environment.
const database = require('knex')(configuration);
// Connects to the DB.
const express = require('express');
// Imports the express library
const app = express();
// Sets up the server as 'app' using a built-in functin in Express
const cors = require('cors');
// Import to use CORS protocols

app.set('port', process.env.PORT || 3001);
// Sets port where the server can run on
app.use(express.json());
// Allows express to use json
// parses information along the way
app.use(cors());
// Tells our app to use CORS protocols for security reasons

app.get('/api/v1/cities', async (request, response) => {
  // End point to GET cities
    try {
      // Try and catch is another way, using async await, to get the data needed
      // we try
      const cities = await database('cities').select();
      // Returns a 
      response.status(200).json(cities);
      //
    } catch(error) {
      response.status(500).json({ error });
      //
    }
});

app.get('/api/v1/cities/:id', async (request, response) => {
  //
    try {
      const city = await database('cities').where('id', request.params.id).select();
      //
      city.length ? response.status(200).json(city) : response.status(404).json({error: `Could not find city with id ${request.params.id}`});
      //
    } catch(error) {
      response.status(500).json({ error });
      //
    }
});

app.post('/api/v1/cities', async (request, response) => {
  //
  const city = request.body;
  //
  for(let cityInfo of ['city', 'avgVegans']) {
    //
    !city[cityInfo] ? response.status(422).send({ error: `Expected format: { city: <String>, avgVegans: <String> }. You're missing a "${cityInfo}" property.` }) : '';
  //
  }

  try {
    const id = await database('cities').insert(city, 'id');
    //
    response.status(201).json({ id });
    //
  }catch(error){
    response.status(500).json({ error })
    //
  }

});


app.get('/api/v1/restaurants', async (request, response) => {
  //
    try {
      const restaurants = await database('restaurants').select();
      //
      response.status(200).json(restaurants);
      //
    } catch(error) {
      response.status(500).json({ error });
      //
    }
});

app.get('/api/v1/restaurants/:id', async (request, response) => {
  //
    try {
      const restaurant = await database('restaurants').where('id', request.params.id).select();
      //
      restaurant.length ? response.status(200).json(restaurant) : response.status(404).json({error: `Could not find restaurant with id ${request.params.id}`});
    //
    } catch(error) {
      //
      response.status(500).json({ error });
    }
});

app.post('/api/v1/restaurants', async (request, response) => {
  //
    const restaurant = request.body;
    //
    for(let restaurantInfo of ['name', 'restaurantType', 'address']) {
      //
      !restaurant[restaurantInfo] ? response.status(422).send({ error: `Expected format: { name: <String>, restaurantType: <String>, address: <String> }. You're missing a "${restaurantInfo}" property.` }) : '';
     //
    }
  
    try {
      const id = await database('restaurants').insert(restaurant, 'id');
      //
      response.status(201).json({ id });
      //
    } catch(error){
      response.status(500).json({ error });
      //
    }
  
});

app.delete('/api/v1/restaurants/:id', async (request, response) => {
  //
    try {
        const restaurant = await database('restaurants').where('id', request.params.id).del();
        //
        restaurant.length ? response.status(404).json({error: `Could not find restaurant with id ${request.params.id}`}) : response.status(200).json(restaurant);
        //
      } catch(error) {
        //
        response.status(500).json({ error });
    }
});

app.get('/', (request, response) => {
  //
    response.status(200).send("Epale its all working!!");
  });

app.get('*', (request, response) => {
  //
    response.status(404).send('404: Not found');
});

app.listen(app.get('port'), () => {
  // gets our server up and running.. logs whats below to let us know that it is working
    console.log(`Server is running on http://localhost:${app.get('port')}`);
  });