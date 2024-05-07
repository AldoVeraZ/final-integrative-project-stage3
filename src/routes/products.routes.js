import express from "express";
import { createProduct } from "../controller/product.controller.js";

const route = express.Router();

route.post("/", createProduct);

export default route;
