db.wishlist.insertMany([
  { wishlist_id: 1, customer_name: "Rahul", product_name: "Headphones", product_category: "Electronics", price: 1500, added_date: new Date("2025-01-01"), notify_when_available: true },
  { wishlist_id: 2, customer_name: "Neha", product_name: "Shoes", product_category: "Fashion", price: 2500, added_date: new Date("2023-12-01"), notify_when_available: false },
  { wishlist_id: 3, customer_name: "Amit", product_name: "Laptop", product_category: "Electronics", price: 60000, added_date: new Date("2024-02-01"), notify_when_available: true },
  { wishlist_id: 4, customer_name: "Pooja", product_name: "Watch", product_category: "Accessories", price: 1800, added_date: new Date("2024-05-01"), notify_when_available: true },
  { wishlist_id: 5, customer_name: "Rahul", product_name: "Mobile", product_category: "Electronics", price: 20000, added_date: new Date("2022-01-01"), notify_when_available: false }
]);

db.wishlist.find({
  price: { $lt: 2000 },
  notify_when_available: true
});

db.wishlist.updateMany(
  { product_category: "Electronics" },
  { $mul: { price: 0.8 } }
);

db.wishlist.deleteMany({
  added_date: { $lt: new Date("2024-01-01") }
});

db.wishlist.aggregate([
  { $group: { _id: "$customer_name", item_count: { $sum: 1 } } }
]);
