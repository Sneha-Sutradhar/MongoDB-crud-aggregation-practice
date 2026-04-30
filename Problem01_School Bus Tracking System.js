db.buses.insertOne({
  bus_id: 1,
  bus_number: "KA01AB1234",
  driver_name: "Ravi Kumar",
  route_name: "Route A",
  capacity: 40,
  students_assigned: ["Amit", "Neha"],
  morning_pickup_time: "07:30",
  evening_drop_time: "16:00",
  is_active: true
});

db.buses.insertMany([
  { bus_id: 2, bus_number: "KA02CD2345", driver_name: "Suresh", route_name: "Route B", capacity: 35, students_assigned: ["Raj"], morning_pickup_time: "07:45", evening_drop_time: "16:15", is_active: true },
  { bus_id: 3, bus_number: "KA03EF3456", driver_name: "Mahesh", route_name: "Route C", capacity: 25, students_assigned: ["Priya"], morning_pickup_time: "08:00", evening_drop_time: "16:30", is_active: false },
  { bus_id: 4, bus_number: "KA04GH4567", driver_name: "Kiran", route_name: "Route D", capacity: 50, students_assigned: ["Anu"], morning_pickup_time: "07:20", evening_drop_time: "15:50", is_active: true },
  { bus_id: 5, bus_number: "KA05IJ5678", driver_name: "Ramesh", route_name: "Route E", capacity: 30, students_assigned: ["Vijay"], morning_pickup_time: "07:40", evening_drop_time: "16:10", is_active: true },
  { bus_id: 6, bus_number: "KA06KL6789", driver_name: "Deepak", route_name: "Route F", capacity: 45, students_assigned: ["Sneha"], morning_pickup_time: "07:35", evening_drop_time: "16:05", is_active: false }
]);

db.buses.find({ is_active: true, capacity: { $gt: 30 } });

db.buses.find({}, { _id: 0, bus_number: 1, driver_name: 1, route_name: 1 });

db.buses.deleteOne({ bus_id: 3, is_active: false });
