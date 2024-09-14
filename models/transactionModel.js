const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  transactionDate: { type: Date, required: true },
  transactionValue: { type: Number, required: true },
  bank: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);