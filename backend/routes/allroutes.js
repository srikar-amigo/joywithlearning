import express from "express";
import {Childmodel,Mediamodel} from "../models/allschemas.js";
import multer from 'multer';
const upload = multer();
let allroutes = express.Router();
const app = express();
allroutes.get('/',(req, res) => {
    console.log('reached root');
    res.send('Welcome to backend services');
});


allroutes.post('/assessment',upload.none(), async (req, res) => {
    try {
        console.log(req.body);
        const newChild = new Childmodel(req.body);
        await newChild.save();
        res.json({ message: 'assessment created successfully!', child: newChild });
    } catch (err) {
        res.status(500).json({ message: 'Error creating child!', error: err.message });
    }
});

allroutes.post('/mediaUpload', async (req,res) => {
    try {
        console.log(req.body);
        const newMedia = new Mediamodel(req.body);
        await newMedia.save();
        res.json({message: 'Media uploaded successfully!', Media: newMedia});
    } catch (error) {
        res.status(500).json({ message: 'Error creating child!', error: err.message });
    }
});

export default allroutes;