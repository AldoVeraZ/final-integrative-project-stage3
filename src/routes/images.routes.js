import express from "express";
import { getImage } from "../controller/imagesController.js";

const route = express.Router();

route.get("/:idImage", getImage);

export default route;
