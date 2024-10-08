import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    productImage: [
      {
        type: String,
        required: true,
      },
    ],
    productPrice: {
      type: Number,
      required: true,
    },
    productStocks: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
