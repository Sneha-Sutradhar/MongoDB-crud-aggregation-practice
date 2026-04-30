db.equipment.insertMany([
  { equip_id: 1, equip_name: "Treadmill", category: "Cardio", purchase_date: new Date("2018-01-01"), last_maintenance_date: new Date("2025-02-01"), next_maintenance_date: new Date("2026-02-01"), condition: "NeedsService" },
  { equip_id: 2, equip_name: "Bench Press", category: "Strength", purchase_date: new Date("2014-01-01"), last_maintenance_date: new Date("2024-01-01"), next_maintenance_date: new Date("2025-01-01"), condition: "OutOfOrder" },
  { equip_id: 3, equip_name: "Cycle", category: "Cardio", purchase_date: new Date("2020-01-01"), last_maintenance_date: new Date("2025-03-01"), next_maintenance_date: new Date("2026-03-01"), condition: "Good" },
  { equip_id: 4, equip_name: "Dumbbells", category: "Strength", purchase_date: new Date("2013-01-01"), last_maintenance_date: new Date("2023-01-01"), next_maintenance_date: new Date("2024-01-01"), condition: "OutOfOrder" },
  { equip_id: 5, equip_name: "Row Machine", category: "Cardio", purchase_date: new Date("2019-01-01"), last_maintenance_date: new Date("2025-04-01"), next_maintenance_date: new Date("2026-04-01"), condition: "NeedsService" }
]);

db.equipment.find({
  condition: { $in: ["NeedsService", "OutOfOrder"] }
});

db.equipment.updateMany(
  { last_maintenance_date: { $gt: new Date("2025-01-01") } },
  { $set: { condition: "Good" } }
);

db.equipment.deleteMany({
  purchase_date: { $lt: new Date("2015-01-01") },
  condition: "OutOfOrder"
});

db.equipment.find().sort({ next_maintenance_date: 1 });
