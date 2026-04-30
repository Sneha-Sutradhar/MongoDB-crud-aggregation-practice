db.loans.insertMany([
  { loan_id: 1, applicant_name: "Rahul", loan_type: "Home", loan_amount: 500000, interest_rate: 7, tenure_months: 120, application_date: new Date("2024-01-01"), approval_status: "Pending", credit_score: 720 },
  { loan_id: 2, applicant_name: "Neha", loan_type: "Car", loan_amount: 300000, interest_rate: 8, tenure_months: 60, application_date: new Date("2023-01-01"), approval_status: "Rejected", credit_score: 650 },
  { loan_id: 3, applicant_name: "Amit", loan_type: "Personal", loan_amount: 100000, interest_rate: 10, tenure_months: 24, application_date: new Date("2025-01-01"), approval_status: "Pending", credit_score: 760 },
  { loan_id: 4, applicant_name: "Pooja", loan_type: "Home", loan_amount: 700000, interest_rate: 7, tenure_months: 180, application_date: new Date("2024-05-01"), approval_status: "Approved", credit_score: 800 },
  { loan_id: 5, applicant_name: "Kiran", loan_type: "Car", loan_amount: 250000, interest_rate: 9, tenure_months: 48, application_date: new Date("2022-01-01"), approval_status: "Rejected", credit_score: 600 }
]);

db.loans.find({
  approval_status: "Pending",
  credit_score: { $gt: 700 }
});

db.loans.updateMany(
  { credit_score: { $gt: 750 } },
  { $set: { approval_status: "Approved" } }
);

db.loans.deleteMany({
  application_date: { $lt: new Date("2023-01-01") },
  approval_status: "Rejected"
});

db.loans.aggregate([
  { $match: { approval_status: "Approved" } },
  { $group: { _id: "$loan_type", avg_amount: { $avg: "$loan_amount" } } }
]);
