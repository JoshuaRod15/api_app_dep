import { Request, Response, query } from "express";
import axios from 'axios';
import { config as dotenvConfig } from "dotenv";


dotenvConfig({path: '.env'})
const STRAPI_URL = process.env.STRAPI_URL;

export const login = async (req: Request, res: Response): Promise<void> => {
    const { identifier, password } = req.body; 
    
    try {
        // Enviar la solicitud de autenticación a Strapi
        const response:any = await axios.post(`${STRAPI_URL}/auth/local`, {
            identifier,
            password,
        });
        //console.log(response.data);
        
        const { jwt } = response.data; // Obtiene el JWT (token)
        //const {id}
        // Enviar el token como respuesta
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token: jwt,
        });
    } catch (error:any) {
        console.error('Error al iniciar sesión:', error);
        res.status(400).json({
            message: 'Credenciales incorrectas',
        });
    }
};
