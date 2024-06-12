import mongoose from 'mongoose';


const childSchema = new mongoose.Schema({
    "id":{
        "type": "Number",
    },
    "name": {
        "type": "String",
        "required": true
    },
    "age": {
        "type": "Number",
        "required": true
    },
    "education": {
        "type": "String",
        "required": true
    },
    "fatherName": {
        "type": "String",
        "required": true
    },
    "fatherPhoneNumber": {
        "type": "String",
        "required": true
    },
    "fatherEmail": {
        "type": "String",
        "required": true
    },
    "motherName": {
        "type": "String",
        "required": true
    },
    "motherPhoneNumber": {
        "type": "String",
        "required": true
    },
    "motherEmail": {
        "type": "String",
    },
    "descriptionOfProblem": {
        "type": "String",
        "required": true
    }
});




const mediaSchema = new mongoose.Schema({
    child: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Child',
        required: true
    },
    uploadedVideos: [{
        type: String, // Assuming this is the URL or path to the video file
        required: true
    }],
    checkboxInput1: {
        type: Boolean,
        required: true
    },
    checkboxInput2: {
        type: Boolean,
        required: true
    },
    checkboxInput3: {
        type: Boolean,
        required: true
    }
});

const Mediamodel = mongoose.model('Media', mediaSchema);
const Childmodel = mongoose.model('child', childSchema);



export default { 
    Childmodel ,
    Mediamodel 
};
