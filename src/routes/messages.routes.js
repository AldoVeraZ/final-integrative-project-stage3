import express from "express";
import { createMessage } from "../controller/messagesController.js";

const route = express.Router();

route.post("/", [], createMessage);

export default route;
