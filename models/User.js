const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  image: String,
  emailVerified: Boolean,
}, {timestamps: true});

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);
