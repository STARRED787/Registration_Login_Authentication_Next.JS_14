import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
});
const User = mogoose.models.users || mongoose.model("users", userSchema);

export default User;
