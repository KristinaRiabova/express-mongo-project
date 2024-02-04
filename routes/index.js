const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.get('/', itemController.getAllItems);
router.get('/new', (req, res) => res.render('new'));
router.post('/', itemController.createItem);
router.get('/:id', itemController.getItemById);

module.exports = router