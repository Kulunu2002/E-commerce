const mongoose = require('mongoose')
const mongodbUrl = "mongodb+srv://kulunu:kulunu1234@cluster0.osor5ba.mongodb.net/fashionHub?retryWrites=true&w=majority"


mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB Connected!")
})