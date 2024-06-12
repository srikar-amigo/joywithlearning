import express from "express";
import multer from 'multer';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import allroutes from './routes/allroutes.js'
const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' }); 
dotenv.config();
app.use(express.json())

let corspolicy = {
    origin: "http://localhost:3000"
}
app.use(cors(corspolicy));

let db = async () => {
    try {
        await mongoose.connect(process.env.DBURI);
        console.log(" connected to database");
    }
    catch (err) {
        console.log(' error connecting');
        console.log(err.message);
    }
}
db();



app.use('/api', allroutes);


app.get('/', (req,res) => {
    console.log(process.env.DBURI);
    res.send('Welcome to backend services');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});