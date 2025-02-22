const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  adminId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true // A school must have an administrator
  }
}, { timestamps: true });

module.exports = mongoose.model("School", SchoolSchema);
