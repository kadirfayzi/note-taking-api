const controller = require('../controllers/todos');
const router = require('express').Router();

//CRUD
router
  .get('/', controller.getAll)
  .get('/:id', controller.get)
  .post('/', controller.create)
  .put('/:id', controller.update)
  .delete('/:id', controller.delete);

module.exports = router;
