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
      // we try to catch the information we are fetching, if not successful we catch the error
      const cities = await database('cities').select();
      // we await to get the array of selected cities and avgVegans
      response.status(200).json(cities);
      //send the response with a status of 200 and json the information
    } catch(error) {
      response.status(500).json({ error });
      // if we catch an error set status to 500 and set error
    }
});

app.get('/api/v1/cities/:id', async (request, response) => {
  // End points to GET an specific city
    try {
      const city = await database('cities').where('id', request.params.id).select();
      // we look in the cities database for the id that matches the params id and set that to a variable
      city.length ? response.status(200).json(city) : response.status(404).json({error: `Could not find city with id ${request.params.id}`});
      // a conditional that checks if the city.length is true.. it sends the response with the city.. else it sends an error of not finding the city id
    } catch(error) {
      response.status(500).json({ error });
      // if we catch an error set status to 500 and set error
    }
});

app.post('/api/v1/cities', async (request, response) => {
  // End points to POST an specific city
  const city = request.body;
  // we save the request body in a variable
  for(let cityInfo of ['city', 'avgVegans']) {
    // we give a variable name the array and we loop through it
    !city[cityInfo] ? response.status(422).send({ error: `Expected format: { city: <String>, avgVegans: <String> }. You're missing a "${cityInfo}" property.` }) : '';
       // if the city request body does not contain any words from the array return error
  }

  try {
    const id = await database('cities').insert(city, 'id');
    // set the new database with the new city to the variable id
    response.status(201).json({ id });
    // send the response id of new object
  }catch(error){
    response.status(500).json({ error })
    // if we catch an error set status to 500 and set error
  }

});


app.get('/api/v1/restaurants', async (request, response) => {
  // End point to GET cities
    try {
      const restaurants = await database('restaurants').select();
      // Try and catch is another way, using async await, to get the data needed
      // we try to catch the information we are fetching, if not successful we catch the error
      response.status(200).json(restaurants);
      // we await to get the array of selected restaurants
    } catch(error) {
      response.status(500).json({ error });
       // if we catch an error set status to 500 and set error
    }
});

app.get('/api/v1/restaurants/:id', async (request, response) => {
    // End points to GET an specific restaurant
    try {
      const restaurant = await database('restaurants').where('id', request.params.id).select();
      // we look in the restaurant database for the id that matches the params id and set that to a variable
      restaurant.length ? response.status(200).json(restaurant) : response.status(404).json({error: `Could not find restaurant with id ${request.params.id}`});
      // a conditional that checks if the restaurant.length is true.. it sends the response with the restaurant.. else it sends an error of not finding the restaurant id
    } catch(error) {
       // if we catch an error set status to 500 and set error
      response.status(500).json({ error });
    }
});

app.post('/api/v1/restaurants', async (request, response) => {
    // End points to POST an specific restaurant
    const restaurant = request.body;
    // we save the request body in a variable
    for(let restaurantInfo of ['name', 'restaurantType', 'address']) {
      // we give a variable name the array and we loop through it
      !restaurant[restaurantInfo] ? response.status(422).send({ error: `Expected format: { name: <String>, restaurantType: <String>, address: <String> }. You're missing a "${restaurantInfo}" property.` }) : '';
     // if the restaurant request body does not contain any words from the array return error
    }
  
    try {
      const id = await database('restaurants').insert(restaurant, 'id');
      // set the new database with the new restaurant to the variable id
      response.status(201).json({ id });
      // send the response id of new object
    } catch(error){
      response.status(500).json({ error });
       // if we catch an error set status to 500 and set error
    }
  
});

app.delete('/api/v1/restaurants/:id', async (request, response) => {
    // End points to DELETE an specific restaurant
    try {
        const restaurant = await database('restaurants').where('id', request.params.id).del();
        // We find the restaurant in the DB then delete it..
        restaurant.length ? response.status(404).json({error: `Could not find restaurant with id ${request.params.id}`}) : response.status(200).json(restaurant);
        // and send the updated DB with the response.. else we tell the user we could not find the restaurant with that id
      } catch(error) {
         // if we catch an error set status to 500 and set error
        response.status(500).json({ error });
    }
});

app.get('/', (request, response) => {
  // End point for when first arriving to the page
    response.status(200).send("Epale its all working!!");
    // send a response to make sure we are sending the response right and it shows on the page
  });

app.get('*', (request, response) => {
  // End point where if the user goes to any end points that we don't have..
    response.status(404).send('404: Not found');
    // we send them an error message
});

app.listen(app.get('port'), () => {
  // gets our server up and running.. logs whats below to let us know that it is working
    console.log(`Server is running on http://localhost:${app.get('port')}`);
  });