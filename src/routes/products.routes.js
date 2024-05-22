import express from "express";

import {
  createProduct,
  editProduct,
  getProducts,
} from "../controller/product.controller.js";

import upload from "../libs/storage.js";

const route = express.Router();

route
  .post("/", upload.single("image"), createProduct)
  .get("/", getProducts)
  .put("/edit/:id", upload.single("image"), editProduct);
/*  .delete("/delete/:id"); */

export default route;
