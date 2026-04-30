db.beds.insertMany([
  { bed_id: 1, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: null, expected_discharge_date: null },
  { bed_id: 2, ward_name: "General", bed_type: "General", is_occupied: true, patient_name: "Rahul", admission_date: new Date(), expected_discharge_date: new Date("2026-05-10") },
  { bed_id: 3, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: null, expected_discharge_date: null },
  { bed_id: 4, ward_name: "Private", bed_type: "Private", is_occupied: true, patient_name: "Neha", admission_date: new Date("2024-01-01"), expected_discharge_date: new Date("2024-01-10") },
  { bed_id: 5, ward_name: "ICU", bed_type: "ICU", is_occupied: true, patient_name: "Amit", admission_date: new Date(), expected_discharge_date: new Date("2026-05-15") }
]);

db.beds.find({
  is_occupied: false,
  ward_name: "ICU"
});

db.beds.updateMany(
  { admission_date: { $eq: new Date(new Date().toDateString()) } },
  { $set: { is_occupied: true, patient_name: "New Patient" } }
);

db.beds.deleteMany({
  expected_discharge_date: { $lt: new Date() },
  is_occupied: true
});

db.beds.find(
  {},
  { _id: 0, ward_name: 1, bed_type: 1, is_occupied: 1 }
).sort({ bed_type: 1 });
