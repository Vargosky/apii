const express = require("express");
const router = express.Router();


const {
    getAllRawMaterials,

  } = require('../controllers/ctrlMateriaPrima');

router.get('all/', getAllRawMaterials);


module.exports = router;