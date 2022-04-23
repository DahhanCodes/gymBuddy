const { Schema, model, Types } = require('mongoose');


const ScheduleScehma = new Schema({
  content: {
    type: String,
    required: true,
  },
  //we might need to change to a type that holds an array
  //we then take that array that relates to a user and populate their schedule on the UI
  dates: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
  },
},
  {
    timestamps: true,
  }
);

const Schedule = model('Schedule', ScheduleScehma);

module.exports = Schedule;