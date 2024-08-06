const path = require("path");

const express = require("express");

// const rootDir = require("../utils/path");

const router = express.Router();

// const adminData = require("./admin");

const productsController = require("../controllers/products");

router.get("/", productsController.getProducts);

module.exports = router;
