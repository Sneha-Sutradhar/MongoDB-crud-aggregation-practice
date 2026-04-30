db.parking.insertOne({
  slot_id: 1,
  floor: 1,
  vehicle_type: "Car",
  is_occupied: true,
  vehicle_number: "KA01AB1234"
});

db.parking.insertMany([
  { slot_id: 2, floor: 1, vehicle_type: "Bike", is_occupied: false, vehicle_number: null },
  { slot_id: 3, floor: 2, vehicle_type: "Car", is_occupied: true, vehicle_number: "KA02CD2345" },
  { slot_id: 4, floor: 2, vehicle_type: "Bike", is_occupied: false, vehicle_number: null },
  { slot_id: 5, floor: 3, vehicle_type: "Car", is_occupied: true, vehicle_number: "KA03EF3456" },
  { slot_id: 6, floor: 3, vehicle_type: "Bike", is_occupied: false, vehicle_number: null }
]);

db.parking.find({ is_occupied: false });

db.parking.find({}, { _id: 0, slot_id: 1, floor: 1, vehicle_type: 1 });

db.parking.deleteOne({ slot_id: 6 });
