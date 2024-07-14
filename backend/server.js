import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import bookRoutes from './routes/bookRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config()
connectDB();
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('API is running...');
});  

app.use('/api/books', bookRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));