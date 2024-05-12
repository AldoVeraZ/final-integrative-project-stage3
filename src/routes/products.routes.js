import express from "express";

import {
  createProduct,
  getProducts,
} from "../controller/product.controller.js";

import upload from "../libs/storage.js";

const route = express.Router();

route.post("/", upload.single("image"), createProduct).get("/", getProducts);

export default route;
