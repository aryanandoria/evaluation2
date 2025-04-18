const mongoose = require("mongoose");

const resultShema = new mongoose.Schema(
  {
    studentname: {
        type: String,
        required: true,
    },
    subject: {
        type:String,
    },
    marks:{
        type: Number,
        required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("result", resultShema);
