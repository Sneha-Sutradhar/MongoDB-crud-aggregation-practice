db.menu.insertOne({
  item_id: 1,
  name: "Cappuccino",
  category: "Coffee",
  price: 120,
  availability: true
});

db.menu.insertMany([
  { item_id: 2, name: "Latte", category: "Coffee", price: 150, availability: true },
  { item_id: 3, name: "Green Tea", category: "Tea", price: 80, availability: true },
  { item_id: 4, name: "Sandwich", category: "Snack", price: 100, availability: false },
  { item_id: 5, name: "Espresso", category: "Coffee", price: 90, availability: true },
  { item_id: 6, name: "Muffin", category: "Snack", price: 70, availability: true }
]);

db.menu.find({ availability: true });

db.menu.find({}, { _id: 0, name: 1, price: 1 });

db.menu.deleteOne({ item_id: 4 });
