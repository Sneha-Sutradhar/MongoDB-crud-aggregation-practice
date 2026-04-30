db.prescriptions.insertMany([
  { prescription_id: 1, patient_name: "Rahul", doctor_name: "Dr A", medicine_name: "Med1", dosage: "2/day", issue_date: new Date("2025-01-01"), expiry_date: new Date("2026-01-01"), status: "Active" },
  { prescription_id: 2, patient_name: "Neha", doctor_name: "Dr B", medicine_name: "Med2", dosage: "1/day", issue_date: new Date("2024-01-01"), expiry_date: new Date("2024-12-31"), status: "Expired" },
  { prescription_id: 3, patient_name: "Amit", doctor_name: "Dr C", medicine_name: "Med3", dosage: "3/day", issue_date: new Date("2023-05-01"), expiry_date: new Date("2024-05-01"), status: "Fulfilled" },
  { prescription_id: 4, patient_name: "Pooja", doctor_name: "Dr D", medicine_name: "Med4", dosage: "1/day", issue_date: new Date("2026-01-01"), expiry_date: new Date("2027-01-01"), status: "Active" },
  { prescription_id: 5, patient_name: "Kiran", doctor_name: "Dr E", medicine_name: "Med5", dosage: "2/day", issue_date: new Date("2022-01-01"), expiry_date: new Date("2023-01-01"), status: "Fulfilled" }
]);

db.prescriptions.find({
  status: "Active",
  expiry_date: { $gt: new Date() }
});

db.prescriptions.updateMany(
  { expiry_date: { $lt: new Date() } },
  { $set: { status: "Expired" } }
);

db.prescriptions.deleteMany({
  status: "Fulfilled",
  issue_date: { $lt: new Date("2024-01-01") }
});

db.prescriptions.find(
  {},
  { _id: 0, patient_name: 1, medicine_name: 1, status: 1 }
).sort({ issue_date: -1 });
