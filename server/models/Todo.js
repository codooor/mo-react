import mongoose, { Schema } from "mongoose";

const places = ["store", "home", "car", "work", "activities", "gym"];

const todoSchema = new Schema({
  item: String,
  place: {
    type: String,
    enum: places,
    required: true,
  },
  description: String,
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;

// create arrays for place:[array] this will allow a dropdown of known places where Items go. This will keep the output clean (if place === place then todo is entered in [place])
