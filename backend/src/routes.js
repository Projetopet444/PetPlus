const express = require('express');

const UserController = require('./controllers/UserController');
const PetsController = require('./controllers/PetsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/profile',ProfileController.index);

routes.get('/pets',PetsController.index);
routes.post('/pets',PetsController.create);
routes.delete('/pets/:id',PetsController.delete);

module.exports = routes;