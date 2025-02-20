import { Request, Response, query } from "express";
import axios from "axios";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({path: '.env'})
const STRAPI_URL = process.env.STRAPI_URL;

export const getAllCategories = async(req: Request, res:Response) => {
    const token = req.headers['authorization'];

    try {
        const response:any = await axios.get(`${STRAPI_URL}/categories`,{
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            }
        })
        
        const categoriesOptimized = await response.data.data.map((res:any)=>({id:res.id, name:res.name, documentId:res.documentId})) 
        
        res.status(200).json(categoriesOptimized)
    } catch (error:any) {
        const errorMessage = error.response.data.error.details.errors
        .map((err:any) => err.message)
        .join(', ');
        res.status(500).json({ message: 'Error fetching categories', errorMessage });
    }
}