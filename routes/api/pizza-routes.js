const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');

// // Set up GET all and POST at /api/pizzas
// router
//   .route('/')
//   .get()
//   .post();

// // Set up GET one, PUT, and DELETE at /api/pizzas/:id
// router
//   .route('/:id')
//   .get()
//   .put()
//   .delete();

// this code
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

// is this same as this
// router.get('/', getCallbackFunction);
// router.post('/' postCallbackFunction);

module.exports = router;