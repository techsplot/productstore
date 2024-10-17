import express from "express";

import { createProduct, deleteProduct, getProducts, updatedProduct } from "../controllers/product.controller.js";

const router = express.Router();

//get all products
router.get("/",getProducts)

//create product 
router.post("/", createProduct);

//update a product
router.put("/:id", updatedProduct)

//delete product
router.delete("/:id", deleteProduct); 

export default router;