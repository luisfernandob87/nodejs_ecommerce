const { Product } = require('../models/product.model');

const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const protectProductOwner = catchAsync(async (req, res, next) => {
  const { sessionUser, userId } = req;

  if (sessionUser.id !== userId) {
    return next(new AppError('You do not own this account', 403));
  }
  next();
});

const productExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findOne({ where: { id, status: 'active' } });

  if (!product) {
    return next(new AppError('Could not find product by given id', 404));
  }

  req.product = product;
  next();
});

module.exports = { protectProductOwner, productExists };
