const Result = require('../models/result');

const postResult = async (req, res) => {
  try {
    const { studentname, subject, marks } = req.body;

    if (!studentname || !subject || !marks) {
      return res.status(400).json({
        message: "Please provide studentname, subject, and marks",
      });
    }
    const newResult = new Result({
      studentname,
      subject,
      marks,
    });
    await newResult.save(); 
    return res.status(200).json({message: "Result upload success",result: newResult,});

  } catch (e) {
    console.log("Error posting result:", e.message);
    return res.status(500).json({message: "There was an error uploading the result",error: e.message,});
  }
};


const getresult = async (req, res) => {
  try {
    const results = await Result.find();
    return res.status(200).json(results); s
  } catch (e) {
    console.log("Error getting results:", e.message);
    return res.status(500).json({message: "error gettting results",error: e.message,});
  }
};

module.exports = { postResult, getresult };
