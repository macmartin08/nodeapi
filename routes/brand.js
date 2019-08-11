const router = require('express').Router();
const BrandsController = require('../controllers/BrandsController');

router.get(`/`, BrandsController.index);
router.get(`/new`, BrandsController.new);
router.get(`/:id/edit`, BrandsController.edit);
router.post(`/`, BrandsController.create);
router.post(`/update`, BrandsController.update);
router.post(`/destroy`, BrandsController.destroy);

module.exports = router; 