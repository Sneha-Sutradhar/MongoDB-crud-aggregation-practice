db.inventory.insertMany([
  { product_id: 1, product_name: "Item1", category: "Electronics", quantity_in_stock: 10, reorder_level: 20, supplier_name: "ABC Corp", last_restock_date: new Date("2024-01-01"), storage_location: "A1" },
  { product_id: 2, product_name: "Item2", category: "Food", quantity_in_stock: 50, reorder_level: 30, supplier_name: "XYZ Ltd", last_restock_date: new Date("2023-01-01"), storage_location: "B1" },
  { product_id: 3, product_name: "Item3", category: "Electronics", quantity_in_stock: 0, reorder_level: 10, supplier_name: "ABC Corp", last_restock_date: new Date("2021-01-01"), storage_location: "A2" },
  { product_id: 4, product_name: "Item4", category: "Clothing", quantity_in_stock: 5, reorder_level: 15, supplier_name: "LMN Inc", last_restock_date: new Date("2025-01-01"), storage_location: "C1" },
  { product_id: 5, product_name: "Item5", category: "Food", quantity_in_stock: 100, reorder_level: 50, supplier_name: "ABC Corp", last_restock_date: new Date("2024-06-01"), storage_location: "B2" }
]);

db.inventory.find({
  $expr: { $lt: ["$quantity_in_stock", "$reorder_level"] }
});

db.inventory.updateMany(
  { supplier_name: "ABC Corp" },
  { $inc: { quantity_in_stock: 100 } }
);

db.inventory.deleteMany({
  last_restock_date: { $lt: new Date("2022-01-01") },
  quantity_in_stock: 0
});

db.inventory.createIndex({ category: 1, quantity_in_stock: 1 });
