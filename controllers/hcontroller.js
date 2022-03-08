const City = require('../models/City')

const api1 = async (req,res)=>{
    console.log("API Call City");
    const data = await City.find();
    res.send(data);
}
const api2 = async (req,res)=>{
    console.log("Find One City");
    const _1id = req.params.id;
    const newDb = await City.findOne({id:_1id});
    res.send(newDb);
}

const api4 = async (req,res)=>{
    console.log("Delete City");
    const _1id = req.params.id;
    const newDb = await City.deleteOne({id:_1id});
    res.send(newDb);
}

const api3 = async (req,res)=>{
    console.log("Update One City");
    const newDb =await City.updateOne({id:req.params.id},{Name:req.body.Name,History:req.body.History,id:req.body.id});
    const data = await City.find();
    res.send({...newDb})
}

const api5 = async (req,res)=>{
    console.log("Insert One City");
    const newDb = new City({Name:req.body.Name,History:req.body.History,id:req.body.id});
    newDb.save(); 
    const data = await City.find();
    res.send({data})
}

module.exports.api1 = api1;
module.exports.api2 = api2;
module.exports.api3 = api3;
module.exports.api4 = api4;
module.exports.api5 = api5;