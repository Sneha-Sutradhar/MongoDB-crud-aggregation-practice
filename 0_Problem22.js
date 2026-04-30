db.itineraries.insertMany([
  { itinerary_id: 1, customer_name: "Rahul", destination: "Goa", trip_start_date: new Date("2026-12-01"), trip_end_date: new Date("2026-12-05"), budget: 60000, activities: ["Beach", "Trekking"], hotel_name: "Hotel A", booking_status: "Confirmed" },
  { itinerary_id: 2, customer_name: "Neha", destination: "Manali", trip_start_date: new Date("2023-01-01"), trip_end_date: new Date("2023-01-10"), budget: 40000, activities: ["Skiing"], hotel_name: "Hotel B", booking_status: "Cancelled" },
  { itinerary_id: 3, customer_name: "Amit", destination: "Kerala", trip_start_date: new Date("2026-08-01"), trip_end_date: new Date("2026-08-07"), budget: 70000, activities: ["Boating"], hotel_name: "Hotel C", booking_status: "Confirmed" },
  { itinerary_id: 4, customer_name: "Pooja", destination: "Ladakh", trip_start_date: new Date("2025-05-01"), trip_end_date: new Date("2025-05-10"), budget: 80000, activities: ["Trekking"], hotel_name: "Hotel D", booking_status: "Pending" },
  { itinerary_id: 5, customer_name: "Kiran", destination: "Jaipur", trip_start_date: new Date("2022-01-01"), trip_end_date: new Date("2022-01-05"), budget: 30000, activities: ["Sightseeing"], hotel_name: "Hotel E", booking_status: "Cancelled" }
]);

db.itineraries.find({
  booking_status: "Confirmed",
  budget: { $gt: 50000 }
});

db.itineraries.updateMany(
  { trip_start_date: { $lt: new Date() } },
  { $set: { booking_status: "Cancelled" } }
);

db.itineraries.deleteMany({
  booking_status: "Cancelled",
  trip_end_date: { $lt: new Date("2024-01-01") }
});

db.itineraries.find({ activities: "Trekking" });
