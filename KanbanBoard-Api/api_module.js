const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const boardSchema = new mongoose.Schema(
  {
    _id: Number,
    title: {
      type: String,
      required: true,
    },

    stage: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { versionKey: false }
);
boardSchema.plugin(autoIncrement);

module.exports = mongoose.model("Board", boardSchema);
