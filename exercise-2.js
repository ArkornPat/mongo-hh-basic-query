db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { _id: 0, total_price: 1, customer_name: 1 }
);
