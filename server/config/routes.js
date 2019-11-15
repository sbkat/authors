const authorsController = require('../controllers/authors');

module.exports = function (app) {
    app.get('/api/authors', authorsController.all);
    app.get('/api/authors/:id', authorsController.one);
    app.post('/api/author', authorsController.create); 
    app.put('/api/authors/:id', authorsController.update);
    app.delete('/api/authors/:id', authorsController.delete);
}