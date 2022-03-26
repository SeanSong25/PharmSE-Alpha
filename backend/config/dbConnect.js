const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://seansong:szqsxywj@cluster0.l1dsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }catch(err){
        console.log(err)
    }finally{
        console.log("connected successfully")
    }
}
module.exports = connectDB
