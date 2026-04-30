db.attendance.insertMany([
  { record_id: 1, emp_name: "Rahul", department: "IT", date: new Date("2024-02-01"), status: "Absent", check_in_time: null },
  { record_id: 2, emp_name: "Neha", department: "HR", date: new Date("2024-02-02"), status: "Present", check_in_time: "09:00" },
  { record_id: 3, emp_name: "Amit", department: "IT", date: new Date("2023-12-01"), status: "Leave", check_in_time: null },
  { record_id: 4, emp_name: "Pooja", department: "Finance", date: new Date("2024-03-01"), status: "Present", check_in_time: "09:15" },
  { record_id: 5, emp_name: "Kiran", department: "IT", date: new Date("2024-01-15"), status: "Absent", check_in_time: null }
]);

db.attendance.find({ status: "Absent", department: "IT" });

db.attendance.updateMany(
  { check_in_time: { $ne: null } },
  { $set: { status: "Present" } }
);

db.attendance.deleteMany({
  date: { $lt: new Date("2024-01-01") },
  status: "Leave"
});

db.attendance.find({ status: "Present" }).sort({ date: 1 });
