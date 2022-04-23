const { Schema, model, Types } = require('mongoose');



const WorkoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Types.ObjectId,
    ref: 'Schedule',
  },
  detail: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
  },
});

const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;