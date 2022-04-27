const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.75gqw.mongodb.net/gymBuddy?retryWrites=true&w=majority`

mongoose.connect(uri).then(() => {
    console.log('Connected')
}).catch(error => console.log(error))