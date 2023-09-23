const express = require("express");
const multer = require("multer");
const router = express.Router();


const {
    getAllRawMaterials,

  } = require('../controllers/materiaPrima');

router.get('/all/', getAllRawMaterials);


module.exports = router;