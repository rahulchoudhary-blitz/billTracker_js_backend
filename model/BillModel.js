const mongoose = require("mongoose");
const { compareAsc, format } = require("date-fns");

const BillSchema = mongoose.Schema({
  lable: {
    type: String,
    require: true,
    maxLength: 20,
  },
  amount: {
    type: Number,
  },
  createdAt: {
    type: String,
    default: format(Date.now(), "yyyy-MM-dd"),
  },
  history: [
    {
      type: Object,
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Bill", BillSchema);
