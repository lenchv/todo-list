const router = require('express').Router();
const todoController = require('../app/controllers/todoController');

router.get('/', todoController.getAll);
router.post('/:id?', todoController.add);
router.delete('/:id?', todoController.deleteById);

module.exports = router;
