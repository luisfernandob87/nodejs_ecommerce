// Models
const { User } = require('./user.model');
const { Order } = require('./order.model');
const { Product } = require('./product.model');
const { Cart } = require('./cart.model');
const { Category } = require('./category.model');
const { ProductInCart } = require('./productsInCart.model');
const { ProductImg } = require('./productImg.model');

const initModels = () => {
  User.hasMany(Order, { foreignKey: 'userId' });
  Order.belongsTo(User);

  User.hasMany(Product, { foreignKey: 'userId' });
  Product.belongsTo(User);

  Order.hasMany(Cart, { foreignKey: 'userId' });
  Cart.belongsTo(Order);

  Cart.hasMany(ProductInCart, { foreignKey: 'cartId' });
  ProductInCart.belongsTo(Cart);
};

module.exports = { initModels };
