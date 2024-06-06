import express from "express";
import { createCart, editCart, getById } from "../controller/cartController.js";

const route = express.Router();

route.post("/", createCart).get("/get/:id", getById).put("/edit/:id", editCart);

export default route;
