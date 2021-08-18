// easier-to-read code  // 

const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');

// /api/pizzas /  ALL PIZZAS  
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

// /api/pizzas/:id   /   PER ID
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;