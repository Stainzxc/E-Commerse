import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controller/ProductController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.post("/", upload.single("image"), createProduct);
export default router;
