import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    phone: {
      required: true,
      type: String,
      unique: true,
    },
    address: {
      required: true,
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
