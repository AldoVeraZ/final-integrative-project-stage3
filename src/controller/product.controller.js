import { Products } from "../models/Products.js";

export const createProduct = async (req, res) => {
  const { body } = req;
  try {
    const product = await Products.create(body);

    if (!product) {
      return res.status(400).json({
        ok: false,
        msg: "No se pudo crear el producto.",
      });
    }

    res.json({
      ok: true,
      product,
      msg: "Se ha cerado el producto correctamente.",
    });
  } catch (error) {
    console.log("Ha habido un error al crear el producto");
    res.status(500).json({
      ok: false,
      msg: "Ha habido un error con el servidor",
    });
  }
};
