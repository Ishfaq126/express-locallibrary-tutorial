const Destination = require('../models/Destination')

const api1 = async (req,res)=>{
    const data = await Destination.find();
    console.log("API Call");
    res.send(data);
}
const api2 = async (req,res)=>{
    const _1id = req.params.id;
    const newDb = await Destination.findOne({id:_1id});
    console.log("Find One");
    res.send(newDb);
}

const api4 = async (req,res)=>{
    console.log(req.params.id);
    const _1id = req.params.id;
    const newDb = await Destination.deleteOne({id:_1id});
    console.log("Delete One");
    res.send(newDb);
    console.log(2);
}

const api3 = async (req,res)=>{
    
    const newDb =await Destination.updateOne({id:req.params.id},{Des_Name:req.body.Des_Name,History:req.body.History,id:req.body.id});
    const data = await Destination.find();
    console.log("update One");
    res.send({...newDb})
}

const api5 = async (req,res)=>{
    const newDb = new Destination({C_ID:req.body.C_ID,Des_Name:req.body.Des_Name,History:req.body.History,id:req.body.id});
    newDb.save(); 
    const data = await Destination.find();
    console.log("Insert one")
    res.send({data})
}

module.exports.api1 = api1;
module.exports.api2 = api2;
module.exports.api3 = api3;
module.exports.api4 = api4;
module.exports.api5 = api5;