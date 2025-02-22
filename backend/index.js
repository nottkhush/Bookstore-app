import express, { response } from "express";
import { PORT, mongoDbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: Allow all origins with default of CORS(*)
app.use(cors());
// Option 2: Allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Hello World");
})

app.use('/books', booksRoute);

mongoose
    .connect(mongoDbURL)
    .then(()=>{
        console.log("Connected to the Database");
        app.listen(PORT, () => {
            console.log(`App is listein on the PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    })

mongoose.model