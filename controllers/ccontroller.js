const Cuisine = require('../models/Cuisine')

const api1 = async (req,res)=>{
    const data = await Cuisine.find();
    console.log("API Call");
    res.send(data);
}
const api2 = async (req,res)=>{
    const _1id = req.params.id;
    const newDb = await Cuisine.findOne({id:_1id});
    console.log("Find One");
    res.send(newDb);
}

const api4 = async (req,res)=>{
    console.log(req.params.id);
    const _1id = req.params.id;
    const newDb = await Cuisine.deleteOne({id:_1id});
    console.log("Delete One");
    res.send(newDb);
    console.log(2);
}

const api3 = async (req,res)=>{
    
    const newDb =await Cuisine.updateOne({id:req.params.id},{Name:req.body.Name,Info:req.body.Info,id:req.body.id});
    const data = await Cuisine.find();
    console.log("update One");
    res.send({...newDb})
}

const api5 = async (req,res)=>{
    const newDb = new Cuisine({C_ID:req.body.C_ID,Name:req.body.Name,Info:req.body.Info,id:req.body.id});
    newDb.save(); 
    const data = await Cuisine.find();
    console.log("Insert one")
    res.send({data})
}

module.exports.api1 = api1;
module.exports.api2 = api2;
module.exports.api3 = api3;
module.exports.api4 = api4;
module.exports.api5 = api5;