const shortid=require("shortid");
const URLModel=require("../models/url");


async function generateNewShortURL(req,res){
const shortID=shortid();
const body=req.body;

await URLModel.create({
    shortId:shortID,
    redirectURL:body.url,
    visitHistory:[],

})

 return res.json({id:shortID});
}

module.exports={
    generateNewShortURL,
}