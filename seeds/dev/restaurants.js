const locations = require('../../locationsData');

const createCity = async (knex, location) => {

  const cityId = await knex('cities').insert({
    city: location.city,
    avgVegans: location.avgVegans
  }, 'id');

  console.log(cityId)

  let restaurantPromises = location.restaurants.map((restaurant) => {
    console.log(restaurant)
    return createRestaurant(knex, {
      restaurant,
      restaurant_id: cityId[0]
    })
  });

  

  return Promise.all(restaurantPromises);
};

const createRestaurant = (knex, restaurant) => {
  return knex('restaurants').insert(restaurant);
};

exports.seed = async (knex) => {
  try {
    await knex('restaurants').del()
    await knex('cities').del()

    let citiesPromises = locations.map((location)=> {
      return createCity(knex, location);
    });

    return Promise.all(citiesPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
