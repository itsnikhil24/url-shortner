const mongoose =require("mongoose");

async function connecty(url){
    return  mongoose.connect(url);

}

module.exports={
    connecty,
}