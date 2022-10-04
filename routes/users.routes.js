const express = require('express');

// Middlewares
const {
  userExists,
  protectAccountOwner,
} = require('../middlewares/users.middlewares');
const { protectSession } = require('../middlewares/auth.middlewares');
const {
  createUserValidations,
} = require('../middlewares/validators.middlewares');

// Controller
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
  checkToken,
  getUserProducts,
  getUserOrders,
  getUserOrderById,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.post('/', createUserValidations, createUser);

usersRouter.post('/login', login);

usersRouter.use(protectSession);

usersRouter.get('/', getAllUsers);

usersRouter.get('/me', getUserProducts);

usersRouter.get('/orders', getUserOrders);

usersRouter.get('/orders/:id', getUserOrderById);

usersRouter.get('/check-token', checkToken);

usersRouter
  .route('/:id')
  .get(userExists, getUserById)
  .patch(userExists, protectAccountOwner, updateUser)
  .delete(userExists, protectAccountOwner, deleteUser);

module.exports = { usersRouter };
