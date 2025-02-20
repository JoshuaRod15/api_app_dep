import express  from 'express';
import productRoutes from './routes/productRoutes';
/* import categoryRoutes from './routes/categoryRoutes' */
import { config as dotenvConfig} from 'dotenv';
import invoiceRoutes from './routes/invoiceRoutes'
import authRoutes from './routes/authRoutes'
import categoryRoutes from './routes/categoryRoutes'
import cors from 'cors'
dotenvConfig({path: '.env'})
const app = express();

const PORT = process.env.PORT;

app.use(cors())

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes)
app.use('/api/invoices', invoiceRoutes)
app.use('/api/auth', authRoutes)
const startServer = async () => {
    app.listen(PORT, ()=>{
        console.log('Server running on localhost 4000');
        
    })
}

startServer();

