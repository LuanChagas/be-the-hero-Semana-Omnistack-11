const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents',IncidentsController.index);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete)

routes.get('/profile',profileController.index)

routes.post('/sessions', SessionController.create)
module.exports = routes