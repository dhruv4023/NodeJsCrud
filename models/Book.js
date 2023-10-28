import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  ISBN: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }
  // Add more fields as needed to represent book information
}, { timestamps: true });

export default mongoose.model("Book", bookSchema);
