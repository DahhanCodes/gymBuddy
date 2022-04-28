const mongoose = require('mongoose')

const uri = "mongodb+srv://DingoCodes:DingoCodes21@cluster0.rrzxf.mongodb.net/gymBuddy?retryWrites=true&w=majority"
mongoose.connect(uri)
.then(() => 
{
    console.log('Connected')
})
.catch(error => console.log(error))