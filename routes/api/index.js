const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');


router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;
