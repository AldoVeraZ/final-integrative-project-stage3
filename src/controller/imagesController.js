import { Images } from "../models/Images.js";

export const getImage = async (req, res) => {
  const { idImage } = req.params;
  /* console.log(idImage); */
  try {
    const image = await Images.findById(idImage);
    console.log(image);
    /* reconstruir l imagen */
    const imgBuffer = Buffer.from(image.img.data);

    /* escribiendo el encabezado de la response */
    res.writeHead(200, {
      "Content-Type": image.img.contentType,
      "Content-Length": imgBuffer.length,
    });

    res.end(imgBuffer);
  } catch (error) {
    res.status(500).send("No se pudo acceder a la imagen");
  }
};
