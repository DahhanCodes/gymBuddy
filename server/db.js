const mongoose = require("mongoose");

const uri =
  "mongodb+srv://hazshk:Simrah123@cluster0.qar1j.mongodb.net/gymbuddy?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => console.log(error));
