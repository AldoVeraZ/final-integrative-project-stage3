import express from "express";
import { createCheckoutPreference } from "../controller/checkoutController.js";

const route = express.Router();

route.post("/", createCheckoutPreference);

export default route;
