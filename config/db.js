const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

const atlat = "mongodb+srv://tuannlapd08365:RBnWZDtkn3Do6HhJ@cluster0.otkz5gc.mongodb.net/MyDatabase?retryWrites=true&w=majority&appName=Cluster0"
const connect = async() =>{
    try {
        await mongoose.connect(atlat,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connect success");
    } catch (error) {
        console.log("Connect fail");
        console.log(error);
    }
}

module.exports = {connect}