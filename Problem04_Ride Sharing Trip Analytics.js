db.trips.insertMany([
  { trip_id: 1, rider_name: "A", driver_name: "D1", pickup_location: "A", drop_location: "B", trip_date: new Date("2025-01-01"), distance_km: 10, trip_duration_minutes: 20, fare_amount: 200, rating: 5, payment_method: "Cash", trip_status: "Completed" },
  { trip_id: 2, rider_name: "B", driver_name: "D2", pickup_location: "C", drop_location: "D", trip_date: new Date("2024-01-01"), distance_km: 5, trip_duration_minutes: 15, fare_amount: 100, rating: 1, payment_method: "UPI", trip_status: "Completed" },
  { trip_id: 3, rider_name: "C", driver_name: "D1", pickup_location: "E", drop_location: "F", trip_date: new Date("2025-03-01"), distance_km: 8, trip_duration_minutes: 18, fare_amount: 160, rating: 4, payment_method: "Card", trip_status: "Completed" },
  { trip_id: 4, rider_name: "D", driver_name: "D3", pickup_location: "G", drop_location: "H", trip_date: new Date("2023-02-01"), distance_km: 12, trip_duration_minutes: 25, fare_amount: 240, rating: 1, payment_method: "Cash", trip_status: "Completed" },
  { trip_id: 5, rider_name: "E", driver_name: "D2", pickup_location: "I", drop_location: "J", trip_date: new Date("2025-04-01"), distance_km: 15, trip_duration_minutes: 30, fare_amount: 300, rating: 5, payment_method: "UPI", trip_status: "Completed" }
]);

db.trips.aggregate([
  { $group: { _id: "$driver_name", total_fare: { $sum: "$fare_amount" } } },
  { $sort: { total_fare: -1 } }
]);

db.trips.updateMany(
  { trip_date: { $lt: new Date("2025-02-01") }, rating: 1 },
  { $set: { trip_status: "Cancelled" } }
);

db.trips.deleteMany({
  trip_status: "Cancelled",
  trip_date: { $lt: new Date("2024-03-01") }
});

db.trips.aggregate([
  {
    $group: {
      _id: "$payment_method",
      avg_fare_per_km: { $avg: { $divide: ["$fare_amount", "$distance_km"] } }
    }
  }
]);
