const mongoose = require("mongoose"); 

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);
userSchema.methods.matchPassword = async function (enteredPassword) {
  return (enteredPassword==this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
