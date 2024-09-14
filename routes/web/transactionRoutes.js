const express = require("express");
const router = express.Router();
const Transaction = require("../../models/transactionModel");

router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.render("transactionViews/index.njk", {
      title: "Transaction list",
      transactions: transactions,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/create', (req, res) => {
  res.render('transactionViews/create.njk');
});

module.exports = router;
