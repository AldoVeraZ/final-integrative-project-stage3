import { Messages } from "../models/Messages";

export const createMessage = async (req, res) => {
  try {
    const message = await Messages.createMessage(req.body);

    if (!message) {
      return res.status(400).json({
        ok: false,
        msg: "El mensaje no ha podido ser enviado",
      });
    }

    res;
  } catch (error) {
    console.log("Ha habido un error al editar el producto");
    res.status(500).json({
      ok: false,
      msg: "Ha habido un error con el servidor",
    });
  }
};
