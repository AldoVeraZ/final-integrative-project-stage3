import express from "express";
import { param } from "express-validator"; // Importamos param de express-validator
import { validationErrorResponse } from "../middlewares/validateResponse.js"; // Importamos el middleware de validación
import { getImage } from "../controller/imagesController.js";

const route = express.Router();

route.get(
  "/:idImage",
  [
    param("idImage").isMongoId().withMessage("El ID de la imagen es inválido."),
    validationErrorResponse,
  ],
  getImage
);

export default route;
