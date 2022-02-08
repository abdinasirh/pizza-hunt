const router = require('express').Router();
const pizzaroutes = require('./pizza-routes');
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)

// add prefix of `/api` to all of the api routes imported from the `api` directory

router.use('/pizzas', pizzaroutes);



module.exports = router;