const express = require('express');
const cors = require('cors');
require('./config');
const colleges = require('./College');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/colleges',async(req,res, next)=>{
    try {
        const page = parseInt(req.query.page);
        const size = parseInt(req.query.size);

        const skip = (page -1) * size;

        const total = await colleges.countDocuments();
        const collegeData = await colleges.find().skip(skip).limit(size);

        res.json({
            records: collegeData,
            total,
            page, 
            size
        });
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
});

app.get('/college/:id',async(req,res, next)=>{
    const id = req.params.id;
    try {
       
        const collegeData = await colleges.findOne({"_id": id});

        res.json({
            records: collegeData
        });
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
});
app.listen(7000,()=>{
    console.log("server is connected to PORT : "+7000);
});