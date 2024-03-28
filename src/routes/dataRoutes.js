const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Routes
router.post('/', dataController.createData);
router.get('/', dataController.getAllData);
router.get('/:id', dataController.getDataById);
router.put('/:id', dataController.updateDataById);
router.delete('/:id', dataController.deleteDataById);

module.exports = router;