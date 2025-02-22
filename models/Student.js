const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  enrolledIn: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Classroom", 
    required: true 
  },
  schoolId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "School", 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);
