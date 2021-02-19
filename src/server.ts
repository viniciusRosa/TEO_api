import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'Uploads')))


export default app;