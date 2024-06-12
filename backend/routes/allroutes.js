import express from "express";
import Childmodel from "../models/allschemas.js";
import multer from 'multer';
const upload = multer();
let allroutes = express.Router();
const app = express();
allroutes.get('/',(req, res) => {
    console.log('reached root');
    res.send('Welcome to backend services');
});


allroutes.post('/children',upload.none(), async (req, res) => {
    try {
        console.log(req.body);
        const newChild = new Childmodel(req.body);
        await newChild.save();
        res.json({ message: 'Child created successfully!', child: newChild });
    } catch (err) {
        res.status(500).json({ message: 'Error creating child!', error: err.message });
    }
});

export default allroutes;