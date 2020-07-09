const mongoose = require("mongoose");
const Scema = mongoose.Schema;
// require("mongoose-currency").loadType(mongoose);
// const Currency = mongoose.Types.Currency;
const leaderScema = new Scema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

var Leaders = mongoose.model("Leader", leaderScema);
module.exports = Leaders;
