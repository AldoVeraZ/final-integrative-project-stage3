import fs from "fs";

import { Products } from "../models/Products.js";
import { Images } from "../models/Images.js";

export const createProduct = async (req, res) => {
  const { body, file } = req;
  try {
    if (!file) {
      return res.status(400).json({
        ok: false,
        msg: "La foto es obligatoria.",
      });
    }
    const imageBuffer = fs.readFileSync(`./temp/imgs/${file.filename}`);
    /*  console.log(imageBuffer); */

    const image = await Images.create({
      fileName: file.filename,
      img: {
        data: imageBuffer,
        contentType: "image/png",
      },
    });

    if (!image) {
      return res.status(400).json({
        ok: false,
        msg: "No se pudo guardar correctamente la imagen.",
      });
    }

    /*  console.log(body);
    console.log(file.filename); */
    const product = await Products.create({
      ...body,
      /* Para el caso que las imagenes queden alojadas permanentemente en nuestro servidor */
      /*  imgUrl: `${process.env.BASE_URL}/public/${file.filename}`, */

      /* otra forma haciendo referencia a mongo */
      imgUrl: `${process.env.BASE_URL}/images/${image._id}`,
    });

    fs.rm(`./temp/imgs/${file.filename}`, (error) => {
      if (error) {
        console.log("lo sentimos no hemos podido eliminar el archivo");
      } else {
        console.log("el archivo se ha eliminado correctamente");
      }
    });

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
    console.log("Ha habido un error al crear el producto", error);
    res.status(500).json({
      ok: false,
      msg: "Ha habido un error con el servidor",
    });
  }
};

export const getProducts = async (req, res) => {
  const { search } = req.query; // Obtenemos el término de búsqueda de los parámetros de consulta

  try {
    const searchBy = search ? { name: new RegExp(search, "i") } : {}; // Si hay un término de búsqueda, creamos una expresión regular

    const products = await Products.find({
      ...searchBy,
      deletedAt: { $in: [null, undefined] },
    }); // Buscamos productos que coincidan con el término de búsqueda

    res.json({
      ok: true,
      products, // Devolvemos los productos encontrados
    });
  } catch (error) {
    console.log("Ha habido un error al obtener el productos");
    res.status(500).json({
      ok: false,
      msg: "Ha habido un error con el servidor",
    });
  }
};

export const editProduct = async (req, res) => {
  const { id } = req.params;
  const { body, file } = req;
  try {
    const product = await Products.findById(id);
    if (!product || product.deletedAt) {
      return res.status(404).json({
        ok: false,
        msg: "Producto o id inválido!",
      });
    }

    let imageUrl = product.imgUrl;

    if (file) {
      const imageBuffer = fs.readFileSync(`./temp/imgs/${file.filename}`);
      /*  console.log(imageBuffer); */

      const image = await Images.create({
        fileName: file.filename,
        img: {
          data: imageBuffer,
          contentType: "image/png",
        },
      });

      if (!image) {
        return res.status(400).json({
          ok: false,
          msg: "No se pudo guardar correctamente la imagen.",
        });
      }

      fs.rm(`./temp/imgs/${file.filename}`, (error) => {
        if (error) {
          console.log("lo sentimos no hemos podido eliminar el archivo");
        } else {
          console.log("el archivo se ha eliminado correctamente");
        }
      });

      imageUrl = `${process.env.BASE_URL}/images/${image._id}`;
    }

    const productUpdated = await Products.findByIdAndUpdate(
      id,
      {
        ...body,
        imgUrl: imageUrl,
      },
      { new: true }
    );

    res.json({
      ok: true,
      product: productUpdated,
      msg: "El producto se actualizo correctamente!.",
    });
  } catch (error) {
    console.log("Ha habido un error al editar el producto");
    res.status(500).json({
      ok: false,
      msg: "Ha habido un error con el servidor",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Products.findById(id);

    if (!product || product.deletedAt) {
      return res.status(404).json({
        ok: false,
        msg: "El producto no fue encontrado.",
      });
    }

    await Products.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );

    res.json({
      ok: true,
      msg: "Producto eliminado correctamente!",
    });
  } catch (error) {
    console.log("Ha habido un error al editar el producto");
    res.status(500).json({
      ok: false,
      msg: "Ha habido un error con el servidor",
    });
  }
};
