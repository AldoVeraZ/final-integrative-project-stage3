import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productsRoutes from "./src/routes/products.routes.js";

import { dbConnection } from "./src/database/dbConnection.js";

const api = async () => {
  dotenv.config();

  await dbConnection();

  const server = express();

  server.use(express.json());

  server.use(cors());

  server.use("/api/products", productsRoutes);

  server.listen(process.env.PORT, () =>
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
  );
};

api();
