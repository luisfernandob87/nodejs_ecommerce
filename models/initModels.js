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

  User.hasOne(Cart, { foreignKey: 'userId' });
  Cart.belongsTo(User);

  Cart.hasMany(ProductInCart, { foreignKey: 'cartId' });
  ProductInCart.belongsTo(Cart);

  Cart.hasOne(Order, { foreignKey: 'cartId' });
  Order.belongsTo(Cart);

  Product.hasMany(ProductImg, { foreignKey: 'productId' });
  ProductImg.belongsTo(Product);

  Category.hasOne(Product, { foreignKey: 'categoryId' });
  Product.belongsTo(Category);

  Product.hasOne(ProductInCart, { foreignKey: 'productId' });
  ProductInCart.belongsTo(Product);
};

module.exports = { initModels };
