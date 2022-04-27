const mongoose = require('mongoose')

const uri = `mongodb+srv://edirie:Ashao100@cluster0.75gqw.mongodb.net/gymBuddy?retryWrites=true&w=majority`

mongoose.connect(uri).then(() => {
    console.log('Connected')
}).catch(error => console.log(error))