db.applications.insertMany([
  { application_id: 1, job_seeker_name: "Amit", job_title: "Developer", company_name: "TCS", location: "Bangalore", experience_years: 4, skills: ["Java", "MongoDB"], applied_date: new Date("2023-12-01"), application_status: "Interviewed", expected_salary: 600000 },
  { application_id: 2, job_seeker_name: "Neha", job_title: "Analyst", company_name: "Infosys", location: "Hyderabad", experience_years: 2, skills: ["Python"], applied_date: new Date("2024-02-01"), application_status: "Applied", expected_salary: 500000 },
  { application_id: 3, job_seeker_name: "Raj", job_title: "Manager", company_name: "Wipro", location: "Chennai", experience_years: 5, skills: ["Management"], applied_date: new Date("2022-05-01"), application_status: "Interviewed", expected_salary: 900000 },
  { application_id: 4, job_seeker_name: "Priya", job_title: "Tester", company_name: "Accenture", location: "Pune", experience_years: 3, skills: ["Selenium"], applied_date: new Date("2023-01-01"), application_status: "Rejected", expected_salary: 400000 },
  { application_id: 5, job_seeker_name: "Vijay", job_title: "Engineer", company_name: "Capgemini", location: "Delhi", experience_years: 6, skills: ["C++"], applied_date: new Date("2021-06-01"), application_status: "Offered", expected_salary: 800000 }
]);

db.applications.find({
  application_status: "Interviewed",
  experience_years: { $gt: 3 }
});

db.applications.updateMany(
  { applied_date: { $lt: new Date("2024-01-01") } },
  { $set: { application_status: "Rejected" } }
);

db.applications.deleteMany({
  application_status: "Rejected",
  applied_date: { $lt: new Date("2023-06-01") }
});

db.applications.find(
  {},
  { _id: 0, job_seeker_name: 1, job_title: 1, expected_salary: 1 }
).sort({ expected_salary: -1 });
