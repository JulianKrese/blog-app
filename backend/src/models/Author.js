const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "This is my bio...",
    },
    image: {
      type: String,
      default: "https://storage.googleapis.com/ix-blog-app/default.jpeg",
    },
    password: {
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

authorSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  
  module.exports = mongoose.model("Author", authorSchema);