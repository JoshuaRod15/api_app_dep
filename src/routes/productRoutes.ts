import { Router } from "express";
import { buyProductsStrapi, createProductInStrapi, getAllProductsStrapi, getProductFromStrapi, updateProductInStrapi, validateCartStock } from "../controllers/productController";
import { getUserIdFromToken } from "../middlewares/userFromToken";
const router = Router()

router.get('/', getUserIdFromToken, getAllProductsStrapi)

router.get('/:productId', getUserIdFromToken, getProductFromStrapi)

router.post('/validate', getUserIdFromToken, validateCartStock)

router.post('/', getUserIdFromToken, createProductInStrapi);

router.put('/buyProducts', buyProductsStrapi)

router.put('/:id', updateProductInStrapi);


export default router;