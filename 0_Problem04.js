db.expenses.insertOne({
  expense_id: 1,
  category: "Food",
  amount: 300,
  date: new Date("2026-04-01"),
  payment_method: "UPI",
  note: "Lunch"
});

db.expenses.insertMany([
  { expense_id: 2, category: "Transport", amount: 600, date: new Date("2026-04-02"), payment_method: "Cash", note: "Cab" },
  { expense_id: 3, category: "Entertainment", amount: 800, date: new Date("2026-04-03"), payment_method: "Card", note: "Movie" },
  { expense_id: 4, category: "Bills", amount: 1200, date: new Date("2026-04-04"), payment_method: "UPI", note: "Electricity" },
  { expense_id: 5, category: "Food", amount: 700, date: new Date("2026-04-05"), payment_method: "Cash", note: "Dinner" },
  { expense_id: 6, category: "Transport", amount: 200, date: new Date("2026-04-06"), payment_method: "UPI", note: "Bus" }
]);

db.expenses.find({ amount: { $gt: 500 } });

db.expenses.find({}, { _id: 0, category: 1, amount: 1, date: 1 });

db.expenses.deleteOne({ expense_id: 6 });
