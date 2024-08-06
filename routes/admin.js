const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const productsController = require("../controllers/products");

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

exports.routes = router;
