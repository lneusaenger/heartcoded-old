import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    age: {
      type: Number,
      min: 18,
      max: 120,
    },
    interests: {
      type: [String],
    },
    publicBio: {
      type: String,
    },
    currMatches: {
      type: [String],
      max: 10,
    },
    seen: {
      type: [String],
    },
    deepSecrets: {
      type: String,
    },
    image: {
      public_id: String,
      url: String,
      required: true,
    },
    resetCode: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);