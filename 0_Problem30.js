db.defects.insertMany([
  { defect_id: 1, product_name: "ProdA", batch_number: "B1", defect_type: "Cosmetic", detection_date: new Date("2025-01-01"), severity: "High", quantity_affected: 10, root_cause: "Material", status: "Open", resolution_date: null },
  { defect_id: 2, product_name: "ProdB", batch_number: "B2", defect_type: "Functional", detection_date: new Date("2021-01-01"), severity: "Low", quantity_affected: 5, root_cause: "Process", status: "Resolved", resolution_date: new Date("2022-01-01") },
  { defect_id: 3, product_name: "ProdC", batch_number: "B3", defect_type: "Safety", detection_date: new Date("2024-01-01"), severity: "High", quantity_affected: 20, root_cause: "Design", status: "Open", resolution_date: null },
  { defect_id: 4, product_name: "ProdD", batch_number: "B4", defect_type: "Cosmetic", detection_date: new Date("2023-01-01"), severity: "Medium", quantity_affected: 15, root_cause: "Material", status: "Investigating", resolution_date: null },
  { defect_id: 5, product_name: "ProdE", batch_number: "B5", defect_type: "Functional", detection_date: new Date("2020-01-01"), severity: "High", quantity_affected: 25, root_cause: "Process", status: "Resolved", resolution_date: new Date("2021-01-01") }
]);

db.defects.find({
  severity: "High",
  status: "Open"
});

db.defects.updateMany(
  { root_cause: { $ne: null } },
  {
    $set: {
      status: "Resolved",
      resolution_date: new Date()
    }
  }
);

db.defects.deleteMany({
  detection_date: { $lt: new Date("2022-01-01") },
  status: "Resolved"
});

db.defects.aggregate([
  {
    $group: {
      _id: "$defect_type",
      total_quantity: { $sum: "$quantity_affected" }
    }
  },
  { $sort: { total_quantity: -1 } }
]);
