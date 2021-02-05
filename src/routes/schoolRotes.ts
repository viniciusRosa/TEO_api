import express from 'express';
const schoolRoutes = express.Router();

schoolRoutes.get('/schools', async function(request, response) {
    response.send('cheguei aqui.')
});

schoolRoutes.get('/schools/:id', async function(request, response) {});

schoolRoutes.post('/schools', async function(request, response) {})

schoolRoutes.put('/schools/:id', async function(request, response) {});

schoolRoutes.delete('/schools/:id', async function(request, response) {});

export default schoolRoutes;