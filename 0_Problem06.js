db.hostel.insertOne({
  student_id: 1,
  name: "Rahul",
  room_number: 101,
  block_name: "A",
  bed_number: 1,
  check_in_date: new Date("2026-04-01")
});

db.hostel.insertMany([
  { student_id: 2, name: "Neha", room_number: 102, block_name: "A", bed_number: 2, check_in_date: new Date("2026-04-02") },
  { student_id: 3, name: "Amit", room_number: 201, block_name: "B", bed_number: 1, check_in_date: new Date("2026-04-03") },
  { student_id: 4, name: "Pooja", room_number: 202, block_name: "A", bed_number: 2, check_in_date: new Date("2026-04-04") },
  { student_id: 5, name: "Kiran", room_number: 301, block_name: "C", bed_number: 1, check_in_date: new Date("2026-04-05") },
  { student_id: 6, name: "Anu", room_number: 302, block_name: "A", bed_number: 2, check_in_date: new Date("2026-04-06") }
]);

db.hostel.find({ block_name: "A" });

db.hostel.find({}, { _id: 0, name: 1, room_number: 1, block_name: 1 });

db.hostel.deleteOne({ student_id: 6 });
