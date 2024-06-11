import express from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../controller/product.Controller.js";
import { validationErrorResponse } from "../middlewares/validateResponse.js";
import upload from "../libs/storage.js";

const route = express.Router();

route.post(
  "/",
  upload.single("image"),
  [
    body("name")
      .isString()
      .isLength({ min: 1 })
      .withMessage("El nombre es requerido."),
    body("price").isNumeric().withMessage("El precio debe ser un número."),
    body("stock").isNumeric().withMessage("El stock debe ser un número."),
    body("category")
      .isString()
      .isLength({ min: 1 })
      .withMessage("La categoría es requerida."),
    body("shortDesc")
      .isString()
      .isLength({ min: 1 })
      .withMessage("La descripción corta es requerida."),
    body("longDesc")
      .optional()
      .isString()
      .withMessage("La descripción larga debe ser texto."),
    body("ageFrom")
      .optional()
      .isNumeric()
      .withMessage("La edad desde debe ser un número."),
    body("ageTo")
      .optional()
      .isNumeric()
      .withMessage("La edad hasta debe ser un número."),
    body("delivery")
      .optional()
      .isBoolean()
      .withMessage("El campo de envío debe ser booleano."),
    (req, res, next) => {
      if (!req.file) {
        return res
          .status(400)
          .json({ ok: false, msg: "La imagen es requerida." });
      }
      next();
    },
    validationErrorResponse,
  ],
  createProduct
);

route.put(
  "/edit/:id",
  upload.single("image"),
  [
    param("id").isMongoId().withMessage("El ID del producto es inválido."),
    body("name")
      .optional()
      .isString()
      .isLength({ min: 1 })
      .withMessage("El nombre es requerido."),
    body("price")
      .optional()
      .isNumeric()
      .withMessage("El precio debe ser un número."),
    body("stock")
      .optional()
      .isNumeric()
      .withMessage("El stock debe ser un número."),
    body("category")
      .optional()
      .isString()
      .isLength({ min: 1 })
      .withMessage("La categoría es requerida."),
    body("shortDesc")
      .optional()
      .isString()
      .isLength({ min: 1 })
      .withMessage("La descripción corta es requerida."),
    body("longDesc")
      .optional()
      .isString()
      .withMessage("La descripción larga debe ser texto."),
    body("ageFrom")
      .optional()
      .isNumeric()
      .withMessage("La edad desde debe ser un número."),
    body("ageTo")
      .optional()
      .isNumeric()
      .withMessage("La edad hasta debe ser un número."),
    body("delivery")
      .optional()
      .isBoolean()
      .withMessage("El campo de envío debe ser booleano."),
    validationErrorResponse,
  ],
  editProduct
);

route.get("/", getProducts);

route.delete(
  "/delete/:id",
  [
    param("id").isMongoId().withMessage("El ID del producto es inválido."),
    validationErrorResponse,
  ],
  deleteProduct
);

export default route;
