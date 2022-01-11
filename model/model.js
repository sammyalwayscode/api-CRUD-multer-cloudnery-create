const mongoose = require("mongoose");
const students = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  stark: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },

  picture: {
    type: String,
    required: true,
  },
});

const studentModel = mongoose.model("student", students);
module.exports = studentModel;
