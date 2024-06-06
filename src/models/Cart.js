import { Schema, model } from "mongoose";

const CartShema = new Schema(
  {
    items: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        product: {
          type: Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = model("Cart", CartShema);
