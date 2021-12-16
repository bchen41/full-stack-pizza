const router = require('express').Router();
const pizzaRoutes = require('./pizzaRoutes');
const userRoutes = require('./userRoutes');


router.use('/pizza', pizzaRoutes);
router.use('/user', userRoutes)




module.exports = router;