import { Router } from "express";
import { getAllCategories } from "../controllers/categoryController";
//import { createProduct, updateProduct } from "../controllers/productController";
const router = Router()

router.get('/', getAllCategories)

/* router.post('/', createCategory);

router.put('/:id', updateCategory); */

export default router;
