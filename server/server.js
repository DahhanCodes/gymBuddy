const express = require('express');
const userRoutes = require('./userRoutes')
const app = express();
const cors = require('cors')

require('./db')
app.use(cors())

app.use(express.urlencoded({exteneded: true}));
app.use(express.json())
app.use(userRoutes);




app.listen(3001, () => {
    console.log('Server running at 3001');
})