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
| `https://byob2.herokuapp.com/` | GET | not needed | Array of all existing cities: `` |
| `https://byob2.herokuapp.com/` | GET | not needed | Array of all existing restaurant: `` |
| `https://byob2.herokuapp.com/` | GET | not needed | Chosen city: `` |
| `https://byob2.herokuapp.com/` | GET | not needed | Chosen restaurant: `` |
| `https://byob2.herokuapp.com/` | POST | `` | New City: `` |
| `https://byob2.herokuapp.com/` | POST | `` | New Restaurant: `` |
| `https://byob2.herokuapp.com/` | DELETE | not needed | Response: `1` |
