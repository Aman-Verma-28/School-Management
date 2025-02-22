const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["Superadmin", "SchoolAdmin"], 
    required: true 
  },
  schoolId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "School", 
    default: null // Superadmin will have null, SchoolAdmin will have a school assigned
  }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
