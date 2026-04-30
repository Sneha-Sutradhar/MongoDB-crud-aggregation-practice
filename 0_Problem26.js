db.riders.insertMany([
  { rider_id: 1, rider_name: "Rahul", city: "Bangalore", vehicle_type: "Bike", total_deliveries: 25, average_rating: 4.7, current_status: "Available", earnings_today: 500, delivery_history: [101,102] },
  { rider_id: 2, rider_name: "Neha", city: "Mumbai", vehicle_type: "Scooter", total_deliveries: 10, average_rating: 4.2, current_status: "Busy", earnings_today: 300, delivery_history: [103] },
  { rider_id: 3, rider_name: "Amit", city: "Delhi", vehicle_type: "Bike", total_deliveries: 0, average_rating: 3.5, current_status: "Offline", earnings_today: 0, delivery_history: [] },
  { rider_id: 4, rider_name: "Pooja", city: "Chennai", vehicle_type: "Bike", total_deliveries: 30, average_rating: 4.8, current_status: "Available", earnings_today: 700, delivery_history: [104,105] },
  { rider_id: 5, rider_name: "Kiran", city: "Hyderabad", vehicle_type: "Scooter", total_deliveries: 50, average_rating: 4.9, current_status: "Busy", earnings_today: 900, delivery_history: [106] }
]);

db.riders.find({
  current_status: "Available",
  average_rating: { $gt: 4.5 }
});

db.riders.updateMany(
  { total_deliveries: { $gt: 20 } },
  { $inc: { earnings_today: 100 } }
);

db.riders.deleteMany({
  current_status: "Offline",
  total_deliveries: 0
});

db.riders.createIndex({ delivery_history: 1 });
