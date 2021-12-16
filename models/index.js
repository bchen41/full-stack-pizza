const Orders = require("./orders");
const Pizzas = require("./pizzas");
const Users = require("./users");
const Reviews = require("./reviews")
const Addons = require('./addons')

//create review and addons model and then import/export to here

Users.hasMany(Orders, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Orders.belongsTo(Users, {
    foreignKey: 'user_id',
}); 

Pizzas.belongsTo(Orders, {
    foreignKey: 'order_id'
});

Users.hasMany(Reviews, {

});

Reviews.belongsTo(Users, {

});

Pizzas.hasMany(Addons, {

});

Addons.belongsTo(Pizzas, {

});


//ADD REVIEWS MODEL ONCE CREATED TO EXPORT
module.exports = {Orders, Pizzas, Users}
