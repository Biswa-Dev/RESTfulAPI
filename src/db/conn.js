const mongoose = require("mongoose");

//creating a new database 'pcDB' and getting a connection to local mongo server at 27017
mongoose.connect("mongodb://localhost:27017/pcDB",{
    useNewUrlParser: true,//to handle deprecation warning
    useUnifiedTopology: true,//to handle deprecation warning
    useCreateIndex: true
}).then(() => {
    console.log("Connection with db is successful.")
}).catch((err) => {
    console.log("Connection with db failed!");
})