# BYOB

BYOB allows developers interested in getting information of vegan restaurants from different cities around the world.

## Created by:
[Amanda Consuelo Sierra](https://github.com/Asilo5)

## Start Server in your computer

Clone the repo to your terminal :``` $ git clone https://github.com/Asilo5/byob-csl.git```

Run ``` $ npm install ``` in your terminal

To start your server run ``` $ npm start ```

Make sure that server is running on ``` http://localhost:3001 ```

## What was used to build BYOB

  - Node.js
  - Express
  - Knex
  - PostgreSQL
  
### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `https://byob2.herokuapp.com/api/v1/cities` | GET | not needed | Array of all existing cities: `[{"id": 21,"city": "Berlin","avgVegans": "80,000"},...]` |
| `https://byob2.herokuapp.com/api/v1/restaurants` | GET | not needed | Array of all existing restaurant: `[{"id": 59,"restaurant_id": 21,"name": "Cat Tuong","restaurantType": "Vietnamese vegan cuisine ","address": "Kastanienallee 89, Berlin, Germany, 10435"}, ...]` |
| `https://byob2.herokuapp.com/api/v1/cities/:id` | GET | not needed | Chosen city: `{"id": 21,"city": "Berlin","avgVegans": "80,000"}` |
| `https://byob2.herokuapp.com/api/v1/restaurants/:id` | GET | not needed | Chosen restaurant: ` {"id": 59,"restaurant_id": 21,"name": "Cat Tuong","restaurantType": "Vietnamese vegan cuisine ","address": "Kastanienallee 89, Berlin, Germany, 10435"}` |
| `https://byob2.herokuapp.com/api/v1/cities` | POST | `{ city: <String>, avgVegans: <String> }` | New City: `{ city: "Berlin", avgVegans: "80,000" }` |
| `https://byob2.herokuapp.com/api/v1/restaurants` | POST | `{ name: <String>, restaurantType: <String>, address: <String> }` | New Restaurant: `{ name: "Cat Tuong", restaurantType: "Vietnamese vegan cuisine ", address: "Kastanienallee 89, Berlin, Germany, 10435" }` |
| `https://byob2.herokuapp.com/api/v1/restaurants/:id` | DELETE | not needed | Response: `1` |
