db.pizzaOrders.find({ quantity: { $lt: 5 }, credit_card_type: "mastercard" });

db.pizzaOrders.find({ quantity: { $gt: 1, $lt: 5 } });

db.pizzaOrders.find({
  $and: [{ quantity: { $gt: 10 } }, { paymentMethod: { $ne: "Credit Card" } }],
});
